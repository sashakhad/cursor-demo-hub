"""
Data Quality Issue Model
Tracks quality problems with vendor-provided candidate data.
"""

from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean, Enum as SQLEnum
from sqlalchemy.orm import relationship
from datetime import datetime
import enum

from database import Base


class IssueType(enum.Enum):
    """
    Types of data quality issues that can be reported.
    
    Critical Issues (Invalid Contact):
    - INVALID_EMAIL: Email bounced or syntax error
    - WRONG_PHONE: Phone number invalid or disconnected
    
    High Priority Issues (Stale Data):
    - STALE_EMPLOYMENT: Candidate no longer at listed company
    - OUTDATED_TITLE: Candidate's title has changed
    
    Medium Priority Issues:
    - STALE_LOCATION: Candidate's location outdated
    """
    INVALID_EMAIL = "invalid_email"
    WRONG_PHONE = "wrong_phone"
    STALE_EMPLOYMENT = "stale_employment"
    OUTDATED_TITLE = "outdated_title"
    STALE_LOCATION = "stale_location"


class IssueSeverity(enum.Enum):
    """
    Severity classification for data quality issues.
    
    - CRITICAL: Contact information is invalid (cannot reach candidate)
    - HIGH: Profile data is outdated (candidate info changed)
    - MEDIUM: Minor discrepancies (low impact on outreach)
    """
    CRITICAL = "Critical"
    HIGH = "High"
    MEDIUM = "Medium"


class DataQualityIssue(Base):
    """
    DataQualityIssue tracks problems with vendor-supplied candidate data.
    
    When recruiters discover inaccurate data (bounced email, wrong company, etc.),
    they file a report. These issues are aggregated to calculate vendor quality
    scores and inform waterfall optimization decisions.
    
    Key relationships:
    - candidate: The candidate profile with the issue
    - vendor: The vendor that provided the problematic data
    
    Issue Severity Classification:
    - Critical: invalid_email, wrong_phone (can't contact candidate)
    - High: stale_employment, outdated_title (wrong company/role info)
    - Medium: stale_location (minor discrepancy)
    
    Waterfall Impact:
    Issues at earlier positions (1-2) are more costly because they waste
    recruiter time before falling back to better vendors. The system optimizes
    by moving high-quality vendors to earlier positions.
    """
    
    __tablename__ = "data_quality_issues"
    
    # Primary key
    id = Column(Integer, primary_key=True, autoincrement=True)
    
    # Business identifier
    report_id = Column(String(50), unique=True, nullable=False, index=True)
    
    # Timestamp
    timestamp = Column(DateTime, nullable=False, default=datetime.utcnow)
    
    # Reporter information
    user_email = Column(String(255), nullable=False, comment="Recruiter who reported issue")
    user_role = Column(String(100), nullable=True)
    company_name = Column(String(200), nullable=True, comment="Company requesting the search")
    company_tier = Column(String(50), nullable=True, comment="Enterprise, Standard, etc.")
    
    # Foreign keys
    candidate_id = Column(
        Integer,
        ForeignKey("candidates.id"),
        nullable=False
    )
    
    vendor_id = Column(
        Integer,
        ForeignKey("vendors.id"),
        nullable=False
    )
    
    # Issue details
    waterfall_position = Column(
        Integer,
        nullable=False,
        comment="Position (1-6) where this vendor appeared in waterfall"
    )
    
    issue_type = Column(
        SQLEnum(IssueType),
        nullable=False
    )
    
    severity = Column(
        SQLEnum(IssueSeverity),
        nullable=False
    )
    
    # Data staleness
    days_since_profile_update = Column(
        Integer,
        nullable=True,
        comment="Days between vendor's last update and issue report"
    )
    
    # Specific flags
    email_bounced = Column(Boolean, default=False, nullable=False)
    phone_invalid = Column(Boolean, default=False, nullable=False)
    
    # Relationships
    candidate = relationship("Candidate", back_populates="data_quality_issues")
    vendor = relationship("Vendor", back_populates="data_quality_issues")
    
    def __repr__(self):
        return f"<DataQualityIssue(id={self.id}, type={self.issue_type.value}, severity={self.severity.value})>"
    
    @classmethod
    def classify_severity(cls, issue_type: IssueType) -> IssueSeverity:
        """
        Classify the severity of an issue based on its type.
        
        Args:
            issue_type: The type of issue
            
        Returns:
            IssueSeverity enum value
        """
        critical_types = {IssueType.INVALID_EMAIL, IssueType.WRONG_PHONE}
        high_types = {IssueType.STALE_EMPLOYMENT, IssueType.OUTDATED_TITLE}
        
        if issue_type in critical_types:
            return IssueSeverity.CRITICAL
        elif issue_type in high_types:
            return IssueSeverity.HIGH
        else:
            return IssueSeverity.MEDIUM
    
    def to_dict(self):
        """Convert issue to dictionary representation."""
        return {
            'id': self.id,
            'report_id': self.report_id,
            'timestamp': self.timestamp.isoformat(),
            'user_email': self.user_email,
            'user_role': self.user_role,
            'company_name': self.company_name,
            'company_tier': self.company_tier,
            'candidate_id': self.candidate_id,
            'vendor_id': self.vendor_id,
            'waterfall_position': self.waterfall_position,
            'issue_type': self.issue_type.value,
            'severity': self.severity.value,
            'days_since_profile_update': self.days_since_profile_update,
            'email_bounced': self.email_bounced,
            'phone_invalid': self.phone_invalid
        }

