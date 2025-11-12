"""
Data Quality Analyzer Service
Analyzes and reports on data quality issues across vendors.
"""

from typing import Dict, List, Optional
from sqlalchemy import func, Integer
from sqlalchemy.orm import Session

from models.vendor import Vendor
from models.data_quality_issue import DataQualityIssue, IssueSeverity, IssueType


class DataQualityAnalyzer:
    """
    DataQualityAnalyzer provides metrics and insights on data quality issues.
    
    This service aggregates data quality issues to help understand:
    - Which vendors have the most/worst issues
    - What types of issues are most common
    - How issues distribute across severity levels
    - Trends in data quality over time
    
    Key Metrics:
    - Bounce rates (email/phone)
    - Issue breakdown by severity
    - Average staleness
    - Issue volume by type
    
    Usage Example:
        analyzer = DataQualityAnalyzer(db_session)
        metrics = analyzer.get_vendor_metrics(vendor_id=1)
        print(f"Email bounce rate: {metrics['email_bounce_rate']}%")
    """
    
    def __init__(self, session: Session):
        """
        Initialize the analyzer with a database session.
        
        Args:
            session: SQLAlchemy database session
        """
        self.session = session
    
    def get_vendor_metrics(self, vendor_id: int) -> Dict:
        """
        Get comprehensive quality metrics for a vendor.
        
        Returns aggregate statistics including:
        - Total issues
        - Average staleness
        - Bounce rates
        - Issue breakdown by severity and type
        
        Args:
            vendor_id: ID of the vendor
            
        Returns:
            Dictionary with all metrics
        """
        vendor = self.session.query(Vendor).get(vendor_id)
        if not vendor:
            raise ValueError(f"Vendor {vendor_id} not found")
        
        # Get basic counts
        total_issues = self.session.query(
            func.count(DataQualityIssue.id)
        ).filter(
            DataQualityIssue.vendor_id == vendor_id
        ).scalar() or 0
        
        if total_issues == 0:
            return {
                'vendor_id': vendor_id,
                'vendor_name': vendor.name,
                'total_issues': 0,
                'email_bounce_rate': 0.0,
                'phone_invalid_rate': 0.0,
                'avg_staleness_days': 0.0,
                'severity_breakdown': {},
                'issue_type_breakdown': {}
            }
        
        # Get bounce rates
        email_bounce_rate, phone_invalid_rate = self.calculate_bounce_rates(vendor_id)
        
        # Get average staleness
        avg_staleness = self.session.query(
            func.avg(DataQualityIssue.days_since_profile_update)
        ).filter(
            DataQualityIssue.vendor_id == vendor_id,
            DataQualityIssue.days_since_profile_update.isnot(None)
        ).scalar() or 0.0
        
        # Get severity breakdown
        severity_breakdown = self.get_issue_breakdown_by_severity(vendor_id)
        
        # Get issue type breakdown
        issue_type_breakdown = self.get_issue_breakdown_by_type(vendor_id)
        
        return {
            'vendor_id': vendor_id,
            'vendor_name': vendor.name,
            'total_issues': total_issues,
            'email_bounce_rate': round(email_bounce_rate, 2),
            'phone_invalid_rate': round(phone_invalid_rate, 2),
            'avg_staleness_days': round(avg_staleness, 1),
            'severity_breakdown': severity_breakdown,
            'issue_type_breakdown': issue_type_breakdown
        }
    
    def calculate_bounce_rates(self, vendor_id: int) -> tuple[float, float]:
        """
        Calculate email bounce and phone invalid rates for a vendor.
        
        These are critical metrics because invalid contact information
        prevents recruiters from reaching candidates.
        
        Args:
            vendor_id: ID of the vendor
            
        Returns:
            Tuple of (email_bounce_rate, phone_invalid_rate) as percentages
        """
        results = self.session.query(
            func.count(DataQualityIssue.id).label('total'),
            func.sum(DataQualityIssue.email_bounced.cast(Integer)).label('email_bounced'),
            func.sum(DataQualityIssue.phone_invalid.cast(Integer)).label('phone_invalid')
        ).filter(
            DataQualityIssue.vendor_id == vendor_id
        ).first()
        
        if results.total == 0:
            return (0.0, 0.0)
        
        email_bounce_rate = (results.email_bounced or 0) / results.total * 100
        phone_invalid_rate = (results.phone_invalid or 0) / results.total * 100
        
        return (email_bounce_rate, phone_invalid_rate)
    
    def get_issue_breakdown_by_severity(self, vendor_id: int) -> Dict[str, Dict]:
        """
        Get issue counts grouped by severity level.
        
        Shows distribution of Critical/High/Medium issues for a vendor.
        Helps prioritize which vendors need immediate attention.
        
        Args:
            vendor_id: ID of the vendor
            
        Returns:
            Dictionary mapping severity to count and percentage
        """
        results = self.session.query(
            DataQualityIssue.severity,
            func.count(DataQualityIssue.id).label('count')
        ).filter(
            DataQualityIssue.vendor_id == vendor_id
        ).group_by(
            DataQualityIssue.severity
        ).all()
        
        total = sum(r.count for r in results)
        
        if total == 0:
            return {}
        
        breakdown = {}
        for result in results:
            severity_name = result.severity.value
            breakdown[severity_name] = {
                'count': result.count,
                'percentage': round((result.count / total) * 100, 1)
            }
        
        return breakdown
    
    def get_issue_breakdown_by_type(self, vendor_id: int) -> Dict[str, Dict]:
        """
        Get issue counts grouped by issue type.
        
        Shows which specific problems are most common for a vendor.
        Examples: invalid_email, stale_employment, outdated_title, etc.
        
        Args:
            vendor_id: ID of the vendor
            
        Returns:
            Dictionary mapping issue type to count and percentage
        """
        results = self.session.query(
            DataQualityIssue.issue_type,
            func.count(DataQualityIssue.id).label('count')
        ).filter(
            DataQualityIssue.vendor_id == vendor_id
        ).group_by(
            DataQualityIssue.issue_type
        ).all()
        
        total = sum(r.count for r in results)
        
        if total == 0:
            return {}
        
        breakdown = {}
        for result in results:
            issue_type_name = result.issue_type.value
            breakdown[issue_type_name] = {
                'count': result.count,
                'percentage': round((result.count / total) * 100, 1)
            }
        
        return breakdown
    
    def get_all_vendors_summary(self) -> List[Dict]:
        """
        Get summary metrics for all vendors.
        
        Useful for comparing vendors side-by-side to identify
        best and worst performers.
        
        Returns:
            List of dictionaries with key metrics for each vendor
        """
        vendors = self.session.query(Vendor).filter(Vendor.is_active == True).all()
        
        summaries = []
        for vendor in vendors:
            metrics = self.get_vendor_metrics(vendor.id)
            # Add quality_score from vendor model
            metrics['quality_score'] = vendor.quality_score
            summaries.append(metrics)
        
        # Sort by total issues descending
        summaries.sort(key=lambda x: x['total_issues'], reverse=True)
        
        return summaries
    
    def get_issues_by_waterfall_position(self) -> Dict[int, Dict]:
        """
        Analyze how issues distribute across waterfall positions.
        
        This reveals whether earlier positions (1-2) are generating
        disproportionate issues, indicating poor vendor placement.
        
        Ideal scenario: Fewer issues at Position 1 (best vendor)
        Problem scenario: Most issues at Position 1 (poor vendor placement)
        
        Returns:
            Dictionary mapping position to issue count and percentage
        """
        results = self.session.query(
            DataQualityIssue.waterfall_position,
            func.count(DataQualityIssue.id).label('count')
        ).group_by(
            DataQualityIssue.waterfall_position
        ).all()
        
        total = sum(r.count for r in results)
        
        if total == 0:
            return {}
        
        breakdown = {}
        for result in results:
            position = result.waterfall_position
            breakdown[position] = {
                'count': result.count,
                'percentage': round((result.count / total) * 100, 1)
            }
        
        return breakdown

