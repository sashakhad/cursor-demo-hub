"""
Vendor Model
Represents data vendors in the recruiting waterfall system.
"""

from sqlalchemy import Column, Integer, String, Float, Boolean, Date, Text
from sqlalchemy.orm import relationship
from datetime import date

from database import Base


class Vendor(Base):
    """
    Vendor model represents a data provider in the recruiting waterfall.
    
    Vendors supply candidate contact information and profile data. Each vendor
    has associated quality metrics calculated from historical performance data.
    
    Key relationships:
    - candidates: All candidates sourced from this vendor
    - data_quality_issues: All issues reported for this vendor's data
    - waterfall_positions: Configuration entries showing where vendor appears in waterfalls
    
    Quality Score:
    - Lower scores indicate better quality
    - Calculated from: data staleness (40%), contact accuracy (40%), issue volume (20%)
    - Updated periodically by VendorScorer service
    """
    
    __tablename__ = "vendors"
    
    # Primary key
    id = Column(Integer, primary_key=True, autoincrement=True)
    
    # Vendor identification
    name = Column(String(100), unique=True, nullable=False, index=True)
    
    # Contract details
    contract_start_date = Column(Date, nullable=True)
    contract_value = Column(Float, nullable=True, comment="Annual contract value in USD")
    
    # API configuration
    api_endpoint = Column(String(255), nullable=True, comment="Base URL for vendor API")
    
    # Quality metrics
    quality_score = Column(
        Float, 
        nullable=True,
        comment="Composite quality score (0-100, lower is better)"
    )
    
    # Status
    is_active = Column(
        Boolean, 
        default=True, 
        nullable=False,
        comment="Whether vendor is currently in use"
    )
    
    # Relationships
    candidates = relationship(
        "Candidate", 
        back_populates="source_vendor",
        cascade="all, delete-orphan"
    )
    
    data_quality_issues = relationship(
        "DataQualityIssue",
        back_populates="vendor",
        cascade="all, delete-orphan"
    )
    
    waterfall_positions = relationship(
        "WaterfallConfig",
        back_populates="vendor",
        cascade="all, delete-orphan"
    )
    
    def __repr__(self):
        return f"<Vendor(id={self.id}, name='{self.name}', quality_score={self.quality_score})>"
    
    def to_dict(self):
        """Convert vendor to dictionary representation."""
        return {
            'id': self.id,
            'name': self.name,
            'contract_start_date': self.contract_start_date.isoformat() if self.contract_start_date else None,
            'contract_value': self.contract_value,
            'api_endpoint': self.api_endpoint,
            'quality_score': self.quality_score,
            'is_active': self.is_active
        }

