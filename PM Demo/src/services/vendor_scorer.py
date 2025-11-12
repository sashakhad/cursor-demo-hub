"""
Vendor Scorer Service
Calculates quality scores and performance metrics for data vendors.
"""

from typing import Dict, Optional
from sqlalchemy import func, Integer
from sqlalchemy.orm import Session

from models.vendor import Vendor
from models.data_quality_issue import DataQualityIssue, IssueSeverity


class VendorScorer:
    """
    VendorScorer calculates composite quality scores for vendors.
    
    Quality Score Formula (0-100, lower is better):
    -----------------------------------------------
    quality_score = (staleness_score * 0.4) + 
                    (contact_accuracy_score * 0.4) + 
                    (volume_score * 0.2)
    
    Component Scores:
    
    1. Staleness Score (40% weight):
       - Measures data freshness (days since profile update)
       - Normalized to 0-100 scale based on worst vendor
       - Lower is better (fresher data)
    
    2. Contact Accuracy Score (40% weight):
       - Average of email bounce rate and phone invalid rate
       - Critical because bad contact info blocks candidate outreach
       - Lower is better (fewer bounces/invalid numbers)
    
    3. Volume Score (20% weight):
       - Total number of issues generated
       - Normalized to 0-100 scale based on worst vendor
       - Lower is better (fewer total issues)
    
    Why This Formula:
    - Staleness and contact accuracy weighted equally (most critical)
    - Volume weighted less (high volume vendor may have more issues but still be valuable)
    - All scores normalized to same scale for fair comparison
    
    Usage Example:
        scorer = VendorScorer(db_session)
        score = scorer.calculate_quality_score(vendor_id=1)
        print(f"Vendor quality score: {score:.2f}")
    """
    
    def __init__(self, session: Session):
        """
        Initialize the scorer with a database session.
        
        Args:
            session: SQLAlchemy database session
        """
        self.session = session
    
    def calculate_quality_score(self, vendor_id: int) -> Optional[float]:
        """
        Calculate the composite quality score for a vendor.
        
        Args:
            vendor_id: ID of the vendor to score
            
        Returns:
            Float quality score (0-100, lower is better), or None if insufficient data
        """
        staleness_score = self.get_staleness_score(vendor_id)
        contact_score = self.get_contact_accuracy_score(vendor_id)
        volume_score = self.get_issue_volume_score(vendor_id)
        
        # Return None if we can't calculate all components
        if None in [staleness_score, contact_score, volume_score]:
            return None
        
        # Weighted average: 40% staleness, 40% contact accuracy, 20% volume
        quality_score = (
            staleness_score * 0.4 +
            contact_score * 0.4 +
            volume_score * 0.2
        )
        
        return round(quality_score, 2)
    
    def get_staleness_score(self, vendor_id: int) -> Optional[float]:
        """
        Calculate data staleness score for a vendor.
        
        Measures average days since profile update for issues from this vendor.
        Normalized to 0-100 scale where 100 = worst vendor's staleness.
        
        Args:
            vendor_id: ID of the vendor
            
        Returns:
            Staleness score (0-100), or None if no data
        """
        # Get average staleness for this vendor
        avg_staleness = self.session.query(
            func.avg(DataQualityIssue.days_since_profile_update)
        ).filter(
            DataQualityIssue.vendor_id == vendor_id,
            DataQualityIssue.days_since_profile_update.isnot(None)
        ).scalar()
        
        if avg_staleness is None:
            return None
        
        # Get max staleness across all vendors for normalization
        # We need to get average per vendor, then find the max of those averages
        from sqlalchemy import select
        
        # Subquery to get average staleness per vendor
        avg_per_vendor = self.session.query(
            DataQualityIssue.vendor_id,
            func.avg(DataQualityIssue.days_since_profile_update).label('avg_staleness')
        ).filter(
            DataQualityIssue.days_since_profile_update.isnot(None)
        ).group_by(
            DataQualityIssue.vendor_id
        ).subquery()
        
        # Get the maximum average staleness
        max_staleness = self.session.query(
            func.max(avg_per_vendor.c.avg_staleness)
        ).scalar()
        
        if max_staleness is None or max_staleness == 0:
            return 0.0
        
        # Normalize to 0-100 scale
        normalized_score = (avg_staleness / max_staleness) * 100
        return round(normalized_score, 2)
    
    def get_contact_accuracy_score(self, vendor_id: int) -> Optional[float]:
        """
        Calculate contact accuracy score for a vendor.
        
        Measures the rate of contact information errors (email bounces + phone invalid).
        This is critical because invalid contact info blocks recruiter outreach.
        
        Formula: (email_bounce_rate + phone_invalid_rate) / 2
        
        Args:
            vendor_id: ID of the vendor
            
        Returns:
            Contact accuracy score (0-100), or None if no data
        """
        # Count total issues and contact errors for this vendor
        results = self.session.query(
            func.count(DataQualityIssue.id).label('total'),
            func.sum(DataQualityIssue.email_bounced.cast(Integer)).label('email_bounced'),
            func.sum(DataQualityIssue.phone_invalid.cast(Integer)).label('phone_invalid')
        ).filter(
            DataQualityIssue.vendor_id == vendor_id
        ).first()
        
        if results.total == 0:
            return None
        
        # Calculate bounce/invalid rates as percentages
        email_bounce_rate = (results.email_bounced or 0) / results.total * 100
        phone_invalid_rate = (results.phone_invalid or 0) / results.total * 100
        
        # Average the two rates
        contact_accuracy_score = (email_bounce_rate + phone_invalid_rate) / 2
        
        return round(contact_accuracy_score, 2)
    
    def get_issue_volume_score(self, vendor_id: int) -> Optional[float]:
        """
        Calculate issue volume score for a vendor.
        
        Measures total number of issues generated by this vendor.
        Normalized to 0-100 scale where 100 = vendor with most issues.
        
        Note: This score has lower weight (20%) because high-volume vendors
        naturally generate more issues, but may still be valuable.
        
        Args:
            vendor_id: ID of the vendor
            
        Returns:
            Issue volume score (0-100), or None if no data
        """
        # Count issues for this vendor
        issue_count = self.session.query(
            func.count(DataQualityIssue.id)
        ).filter(
            DataQualityIssue.vendor_id == vendor_id
        ).scalar()
        
        if issue_count == 0:
            return 0.0
        
        # Get max issue count across all vendors for normalization
        # Subquery to get count per vendor
        count_per_vendor = self.session.query(
            DataQualityIssue.vendor_id,
            func.count(DataQualityIssue.id).label('issue_count')
        ).group_by(
            DataQualityIssue.vendor_id
        ).subquery()
        
        # Get the maximum count
        max_issues = self.session.query(
            func.max(count_per_vendor.c.issue_count)
        ).scalar()
        
        if max_issues is None or max_issues == 0:
            return 0.0
        
        # Normalize to 0-100 scale
        normalized_score = (issue_count / max_issues) * 100
        return round(normalized_score, 2)
    
    def get_all_vendor_scores(self) -> Dict[int, float]:
        """
        Calculate quality scores for all active vendors.
        
        Returns:
            Dictionary mapping vendor_id to quality_score
        """
        vendors = self.session.query(Vendor).filter(Vendor.is_active == True).all()
        
        scores = {}
        for vendor in vendors:
            score = self.calculate_quality_score(vendor.id)
            if score is not None:
                scores[vendor.id] = score
        
        return scores
    
    def update_all_vendor_scores(self) -> None:
        """
        Recalculate and update quality scores for all vendors in database.
        
        This should be run periodically (e.g., nightly) to keep scores current
        as new data quality issues are reported.
        """
        scores = self.get_all_vendor_scores()
        
        for vendor_id, score in scores.items():
            vendor = self.session.query(Vendor).get(vendor_id)
            if vendor:
                vendor.quality_score = score
        
        self.session.commit()
        print(f"Updated quality scores for {len(scores)} vendors.")

