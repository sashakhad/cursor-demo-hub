"""
Waterfall Configuration Model
Defines vendor priority ordering for different recruiting scenarios.
"""

from sqlalchemy import Column, Integer, String, ForeignKey, Boolean, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime

from database import Base


class WaterfallConfig(Base):
    """
    WaterfallConfig defines the priority order for querying vendors.
    
    The "waterfall" is the sequential order in which vendors are queried when
    searching for candidate data. If Position 1 vendor returns no results,
    the system "falls through" to Position 2, then 3, etc.
    
    Multiple waterfall configurations exist for different use cases:
    - "standard": Default configuration for most searches
    - "optimized": Reorganized to prioritize high-quality vendors
    - "executive": For high-stakes executive searches (best vendors only)
    - "volume": For bulk searches where cost matters more than quality
    
    Key Concept - Waterfall Execution:
    1. Query Position 1 vendor's API
    2. If results found → return to user
    3. If no results → query Position 2 vendor
    4. Continue until results found or all positions exhausted
    
    Why Position Matters:
    - Earlier positions get queried more frequently
    - Issues at Position 1 affect more searches than Position 5
    - Best vendors should be at Position 1 to minimize fallthrough
    - Poor vendors at Position 1 waste time and API calls
    
    Relationships:
    - vendor: The vendor assigned to this position
    """
    
    __tablename__ = "waterfall_configs"
    
    # Primary key
    id = Column(Integer, primary_key=True, autoincrement=True)
    
    # Configuration name (e.g., "standard", "optimized", "executive")
    config_name = Column(
        String(100),
        nullable=False,
        index=True,
        comment="Name of the waterfall configuration"
    )
    
    # Position in the waterfall (1 = first priority, 6 = last)
    position = Column(
        Integer,
        nullable=False,
        comment="Priority order (1-6, lower is higher priority)"
    )
    
    # Vendor at this position
    vendor_id = Column(
        Integer,
        ForeignKey("vendors.id"),
        nullable=False
    )
    
    # Status
    is_active = Column(
        Boolean,
        default=True,
        nullable=False,
        comment="Whether this configuration is currently in use"
    )
    
    # Timestamps
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False
    )
    
    # Relationships
    vendor = relationship("Vendor", back_populates="waterfall_positions")
    
    def __repr__(self):
        return f"<WaterfallConfig(config='{self.config_name}', position={self.position}, vendor_id={self.vendor_id})>"
    
    def to_dict(self):
        """Convert waterfall config to dictionary representation."""
        return {
            'id': self.id,
            'config_name': self.config_name,
            'position': self.position,
            'vendor_id': self.vendor_id,
            'is_active': self.is_active,
            'created_at': self.created_at.isoformat(),
            'updated_at': self.updated_at.isoformat()
        }

