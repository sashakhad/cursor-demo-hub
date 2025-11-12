"""
Waterfall Manager Service
Orchestrates vendor selection and query execution through the waterfall system.
"""

from typing import List, Optional, Dict
from sqlalchemy.orm import Session

from models.vendor import Vendor
from models.waterfall_config import WaterfallConfig
from config import DEFAULT_WATERFALL_CONFIG


class WaterfallManager:
    """
    WaterfallManager orchestrates the vendor waterfall search logic.
    
    The Waterfall Concept:
    ----------------------
    When searching for candidate data, we don't query all vendors simultaneously.
    Instead, we query vendors in priority order (the "waterfall"):
    
    1. Query Position 1 vendor (highest priority)
    2. If results found → return to user (success!)
    3. If no results → "fall through" to Position 2 vendor
    4. Query Position 2 vendor
    5. If results found → return to user
    6. If no results → continue to Position 3...
    7. Repeat until results found or waterfall exhausted
    
    Why Use a Waterfall:
    -------------------
    - Cost optimization: Only pay for API calls actually needed
    - Quality optimization: Query best vendors first
    - Latency optimization: Return quickly when top vendors have data
    - Redundancy: Fallback options if primary vendors fail
    
    Waterfall Configuration:
    -----------------------
    Multiple configurations exist for different scenarios:
    
    "standard" - Default configuration (current production):
        Position 1: Vendor_A
        Position 2: Vendor_B
        Position 3: Vendor_C
        Position 4: Vendor_E
        Position 5: Cognism
        Position 6: Vendor_D
    
    "optimized" - Data-driven reorganization (recommended):
        Position 1: Cognism (best quality score: 13.2)
        Position 2: Vendor_E (quality score: 37.8)
        Position 3: Vendor_C (quality score: 43.1)
        Position 4: Vendor_A (quality score: 46.0)
        Position 5: Vendor_B (quality score: 53.7)
        Position 6: Vendor_D (worst quality score: 56.3)
    
    "executive" - High-stakes searches (C-level, critical roles):
        Position 1: Cognism (freshest data)
        Position 2: Vendor_E (best contact accuracy)
        Position 3: Manual sourcing fallback
    
    Key Methods:
    -----------
    - get_waterfall_for_config(): Returns ordered vendor list for a configuration
    - execute_waterfall_search(): Simulates full waterfall query execution
    - query_next_vendor(): Gets next vendor to try after a miss
    
    Usage Example:
    -------------
        manager = WaterfallManager(db_session)
        
        # Get vendor priority order
        vendors = manager.get_waterfall_for_config("optimized")
        
        # Simulate a search
        result = manager.execute_waterfall_search(
            config_name="optimized",
            search_criteria={"title": "Senior Engineer", "company": "Google"}
        )
    """
    
    def __init__(self, session: Session):
        """
        Initialize the waterfall manager with a database session.
        
        Args:
            session: SQLAlchemy database session
        """
        self.session = session
    
    def get_waterfall_for_config(self, config_name: str = DEFAULT_WATERFALL_CONFIG) -> List[Vendor]:
        """
        Get the ordered list of vendors for a waterfall configuration.
        
        Returns vendors in priority order (Position 1 first, Position 6 last).
        This is the core of the waterfall system - defining vendor priority.
        
        Args:
            config_name: Name of the configuration ("standard", "optimized", "executive")
            
        Returns:
            List of Vendor objects in priority order
            
        Raises:
            ValueError: If configuration not found or invalid
        """
        # Query waterfall config entries for this configuration
        config_entries = self.session.query(WaterfallConfig).filter(
            WaterfallConfig.config_name == config_name,
            WaterfallConfig.is_active == True
        ).order_by(
            WaterfallConfig.position.asc()  # Order by position (1, 2, 3...)
        ).all()
        
        if not config_entries:
            raise ValueError(f"No active waterfall configuration found for: {config_name}")
        
        # Get vendor objects in order
        vendors = []
        for entry in config_entries:
            vendor = self.session.query(Vendor).filter(
                Vendor.id == entry.vendor_id,
                Vendor.is_active == True
            ).first()
            
            if vendor:
                vendors.append(vendor)
        
        return vendors
    
    def get_vendor_at_position(
        self, 
        position: int, 
        config_name: str = DEFAULT_WATERFALL_CONFIG
    ) -> Optional[Vendor]:
        """
        Get the vendor assigned to a specific waterfall position.
        
        Useful when you need to know "which vendor is at Position 1?"
        
        Args:
            position: Waterfall position (1-6)
            config_name: Name of the configuration
            
        Returns:
            Vendor object or None if position not configured
        """
        config_entry = self.session.query(WaterfallConfig).filter(
            WaterfallConfig.config_name == config_name,
            WaterfallConfig.position == position,
            WaterfallConfig.is_active == True
        ).first()
        
        if not config_entry:
            return None
        
        vendor = self.session.query(Vendor).filter(
            Vendor.id == config_entry.vendor_id,
            Vendor.is_active == True
        ).first()
        
        return vendor
    
    def query_next_vendor(
        self, 
        current_position: int,
        config_name: str = DEFAULT_WATERFALL_CONFIG
    ) -> Optional[Vendor]:
        """
        Get the next vendor to query after a miss at current position.
        
        This is called during waterfall execution when a vendor returns
        no results and we need to "fall through" to the next position.
        
        Args:
            current_position: The position that just failed to return results
            config_name: Name of the configuration
            
        Returns:
            Next vendor to query, or None if waterfall exhausted
            
        Example:
            # Position 1 vendor returned no results
            next_vendor = manager.query_next_vendor(current_position=1)
            # Returns Position 2 vendor
        """
        next_position = current_position + 1
        return self.get_vendor_at_position(next_position, config_name)
    
    def execute_waterfall_search(
        self, 
        search_criteria: Dict,
        config_name: str = DEFAULT_WATERFALL_CONFIG,
        max_positions: Optional[int] = None
    ) -> Dict:
        """
        Simulate executing a full waterfall search.
        
        This demonstrates the waterfall logic in action:
        1. Try Position 1 vendor
        2. If miss, try Position 2
        3. Continue until hit or exhausted
        
        Note: This is a simulation - actual implementation would make
        real API calls to vendor endpoints.
        
        Args:
            search_criteria: Search parameters (title, company, location, etc.)
            config_name: Name of waterfall configuration to use
            max_positions: Optional limit on positions to try (for testing)
            
        Returns:
            Dictionary with search result details:
            {
                'success': bool,
                'vendor_hit': Vendor object or None,
                'position_hit': int or None,
                'positions_tried': int,
                'search_criteria': dict
            }
        """
        vendors = self.get_waterfall_for_config(config_name)
        
        if max_positions:
            vendors = vendors[:max_positions]
        
        result = {
            'success': False,
            'vendor_hit': None,
            'position_hit': None,
            'positions_tried': 0,
            'search_criteria': search_criteria,
            'execution_log': []
        }
        
        # Simulate querying each vendor in order
        for position, vendor in enumerate(vendors, start=1):
            result['positions_tried'] = position
            result['execution_log'].append(
                f"Position {position}: Querying {vendor.name}..."
            )
            
            # In real implementation, this would be an API call:
            # response = vendor_api_client.search(vendor.api_endpoint, search_criteria)
            
            # For simulation, we'll use a simple heuristic:
            # Better vendors (lower quality score) have higher hit probability
            hit_probability = 1.0 - (vendor.quality_score / 100.0) if vendor.quality_score else 0.5
            
            # Simulate result (in real system, this comes from API response)
            import random
            has_results = random.random() < hit_probability
            
            if has_results:
                result['success'] = True
                result['vendor_hit'] = vendor
                result['position_hit'] = position
                result['execution_log'].append(
                    f"✓ Results found at {vendor.name} (Position {position})"
                )
                break
            else:
                result['execution_log'].append(
                    f"✗ No results from {vendor.name}, falling through..."
                )
        
        if not result['success']:
            result['execution_log'].append(
                "⚠ Waterfall exhausted - no results found from any vendor"
            )
        
        return result
    
    def compare_waterfall_configs(
        self, 
        config_names: List[str]
    ) -> Dict[str, List[Dict]]:
        """
        Compare multiple waterfall configurations side-by-side.
        
        Useful for analyzing the impact of reorganization:
        - Which vendors move positions?
        - How do quality scores compare across configurations?
        
        Args:
            config_names: List of configuration names to compare
            
        Returns:
            Dictionary mapping config names to vendor lists with details
        """
        comparison = {}
        
        for config_name in config_names:
            try:
                vendors = self.get_waterfall_for_config(config_name)
                comparison[config_name] = [
                    {
                        'position': i + 1,
                        'vendor_name': v.name,
                        'vendor_id': v.id,
                        'quality_score': v.quality_score
                    }
                    for i, v in enumerate(vendors)
                ]
            except ValueError as e:
                comparison[config_name] = {'error': str(e)}
        
        return comparison
    
    def get_available_configs(self) -> List[str]:
        """
        Get list of all available waterfall configuration names.
        
        Returns:
            List of unique configuration names
        """
        configs = self.session.query(
            WaterfallConfig.config_name
        ).filter(
            WaterfallConfig.is_active == True
        ).distinct().all()
        
        return [c[0] for c in configs]

