"""
Candidate Model
Represents candidate profiles sourced through the vendor waterfall.
"""

from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Date, Text, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime
import json

from database import Base


class Candidate(Base):
    """
    Candidate model represents a recruiting prospect sourced from a vendor.
    
    Candidates are discovered through the waterfall system, which queries vendors
    in priority order until a match is found. The discovered_at_position field
    indicates which waterfall position successfully returned this candidate.
    
    Key relationships:
    - source_vendor: The vendor that provided this candidate's data
    - data_quality_issues: Any quality issues reported for this candidate
    
    Waterfall Discovery:
    When a search is executed:
    1. Query Position 1 vendor first
    2. If no match, query Position 2 vendor
    3. Continue until match found or waterfall exhausted
    4. Record which position yielded the result
    """
    
    __tablename__ = "candidates"
    
    # Primary key
    id = Column(Integer, primary_key=True, autoincrement=True)
    
    # Business identifier (external candidate ID)
    candidate_id = Column(String(50), unique=True, nullable=False, index=True)
    
    # Personal information
    full_name = Column(String(200), nullable=False)
    email = Column(String(255), nullable=True)
    phone = Column(String(50), nullable=True)
    
    # Professional information
    current_title = Column(String(200), nullable=True)
    current_company = Column(String(200), nullable=True)
    seniority_level = Column(
        String(50), 
        nullable=True,
        comment="Entry, Mid, Senior, Staff, Principal, Director, VP, C-Suite"
    )
    
    # Location
    city = Column(String(100), nullable=True)
    state = Column(String(100), nullable=True)
    region = Column(
        String(50), 
        nullable=True,
        comment="NAMER, EMEA, APAC, LATAM"
    )
    country = Column(String(100), nullable=True)
    
    # Sourcing information
    source_vendor_id = Column(
        Integer, 
        ForeignKey("vendors.id"),
        nullable=False,
        comment="Vendor that provided this candidate"
    )
    
    discovered_at_position = Column(
        Integer,
        nullable=False,
        comment="Waterfall position (1-6) where candidate was found"
    )
    
    # Data freshness
    profile_last_updated = Column(
        Date,
        nullable=True,
        comment="Last time vendor updated this profile"
    )
    
    # TAM-specific fields
    work_history = Column(
        Text,
        nullable=True,
        comment="JSON array of work history entries"
    )
    
    skills = Column(
        Text,
        nullable=True,
        comment="JSON array of skills and competencies"
    )
    
    education = Column(
        String(500),
        nullable=True,
        comment="Educational background"
    )
    
    years_in_role = Column(
        Integer,
        nullable=True,
        comment="Years of experience in current/similar role"
    )
    
    is_former_founder = Column(
        Boolean,
        default=False,
        comment="Whether candidate was previously a founder"
    )
    
    linkedin_url = Column(
        String(255),
        nullable=True,
        comment="LinkedIn profile URL"
    )
    
    persona_scores = Column(
        Text,
        nullable=True,
        comment="JSON object containing AI fit scores per persona"
    )
    
    last_contacted_at = Column(
        DateTime,
        nullable=True,
        comment="Last time candidate was contacted"
    )
    
    # Timestamps
    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False
    )
    
    # Relationships
    source_vendor = relationship("Vendor", back_populates="candidates")
    
    data_quality_issues = relationship(
        "DataQualityIssue",
        back_populates="candidate",
        cascade="all, delete-orphan"
    )
    
    def __repr__(self):
        return f"<Candidate(id={self.id}, candidate_id='{self.candidate_id}', name='{self.full_name}')>"
    
    @property
    def days_since_update(self):
        """Calculate days since profile was last updated."""
        if self.profile_last_updated:
            delta = datetime.utcnow().date() - self.profile_last_updated
            return delta.days
        return None
    
    def get_work_history(self):
        """Parse and return work history as list."""
        if self.work_history:
            return json.loads(self.work_history)
        return []
    
    def get_skills(self):
        """Parse and return skills as list."""
        if self.skills:
            return json.loads(self.skills)
        return []
    
    def get_persona_scores(self):
        """Parse and return persona scores as dict."""
        if self.persona_scores:
            return json.loads(self.persona_scores)
        return {}
    
    def to_dict(self):
        """Convert candidate to dictionary representation."""
        return {
            'id': self.id,
            'candidate_id': self.candidate_id,
            'full_name': self.full_name,
            'email': self.email,
            'phone': self.phone,
            'current_title': self.current_title,
            'current_company': self.current_company,
            'seniority_level': self.seniority_level,
            'city': self.city,
            'state': self.state,
            'region': self.region,
            'country': self.country,
            'source_vendor_id': self.source_vendor_id,
            'discovered_at_position': self.discovered_at_position,
            'profile_last_updated': self.profile_last_updated.isoformat() if self.profile_last_updated else None,
            'days_since_update': self.days_since_update,
            'created_at': self.created_at.isoformat(),
            'work_history': self.get_work_history(),
            'skills': self.get_skills(),
            'education': self.education,
            'years_in_role': self.years_in_role,
            'is_former_founder': self.is_former_founder,
            'linkedin_url': self.linkedin_url,
            'persona_scores': self.get_persona_scores(),
            'last_contacted_at': self.last_contacted_at.isoformat() if self.last_contacted_at else None
        }

