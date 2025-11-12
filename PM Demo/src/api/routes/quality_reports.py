"""
Quality Reports API Routes
Endpoints for vendor quality metrics and waterfall analysis.
Copyright Anysphere Inc.
"""

from fastapi import APIRouter, HTTPException
from typing import List, Dict, Optional, Any
from pydantic import BaseModel
from datetime import datetime
import sys
import os

# Add parent directory to path for imports
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))

from database import get_db_session
from models.vendor import Vendor
from models.waterfall_config import WaterfallConfig as WaterfallConfigModel
from services.data_quality_analyzer import DataQualityAnalyzer
from services.vendor_scorer import VendorScorer

router = APIRouter()


class VendorMetrics(BaseModel):
    """Response model for vendor quality metrics"""
    vendor_id: int
    vendor_name: str
    total_issues: int
    quality_score: Optional[float]
    email_bounce_rate: float
    phone_invalid_rate: float
    avg_staleness_days: float
    severity_breakdown: Dict[str, Dict[str, float]]
    issue_type_breakdown: Dict[str, Dict[str, float]]
    
    class Config:
        from_attributes = True


class WaterfallPosition(BaseModel):
    """Response model for waterfall position data"""
    position: int
    vendor_name: Optional[str]
    vendor_id: Optional[int]
    issue_count: int
    percentage: float


class WaterfallConfig(BaseModel):
    """Response model for waterfall configuration"""
    config_name: str
    positions: List[WaterfallPosition]


class QualitySummary(BaseModel):
    """Response model for overall quality statistics"""
    total_issues: int
    total_vendors: int
    avg_quality_score: float
    best_vendor: Dict[str, Any]
    worst_vendor: Dict[str, Any]
    critical_issues_count: int
    critical_issues_percentage: float
    avg_staleness_days: float


class TrendDataPoint(BaseModel):
    """Response model for time-series trend data"""
    date: str
    issue_count: int
    vendor_breakdown: Dict[str, int]


@router.get("/quality/vendors", response_model=List[VendorMetrics])
async def get_vendor_metrics():
    """
    Get quality metrics for all vendors.
    Returns comprehensive statistics including bounce rates, staleness, and issue breakdowns.
    """
    with get_db_session() as session:
        analyzer = DataQualityAnalyzer(session)
        summaries = analyzer.get_all_vendors_summary()
        
        return summaries


@router.get("/quality/vendors/{vendor_id}", response_model=VendorMetrics)
async def get_vendor_metrics_by_id(vendor_id: int):
    """
    Get detailed quality metrics for a specific vendor.
    """
    with get_db_session() as session:
        analyzer = DataQualityAnalyzer(session)
        
        try:
            metrics = analyzer.get_vendor_metrics(vendor_id)
            return metrics
        except ValueError as e:
            raise HTTPException(status_code=404, detail=str(e))


@router.get("/quality/summary", response_model=QualitySummary)
async def get_quality_summary():
    """
    Get overall quality statistics across all vendors.
    """
    with get_db_session() as session:
        analyzer = DataQualityAnalyzer(session)
        summaries = analyzer.get_all_vendors_summary()
        
        if not summaries:
            raise HTTPException(status_code=404, detail="No quality data found")
        
        total_issues = sum(s['total_issues'] for s in summaries)
        
        # Calculate average quality score (only for vendors with scores)
        vendors_with_scores = [s for s in summaries if s.get('vendor_id')]
        
        # Get actual quality scores from vendors table
        vendors = session.query(Vendor).filter(Vendor.is_active == True).all()
        quality_scores = [v.quality_score for v in vendors if v.quality_score is not None]
        avg_quality_score = sum(quality_scores) / len(quality_scores) if quality_scores else 0.0
        
        # Find best and worst vendors
        vendors_by_score = sorted(vendors, key=lambda v: v.quality_score if v.quality_score else 999)
        best_vendor = vendors_by_score[0] if vendors_by_score else None
        worst_vendor = vendors_by_score[-1] if len(vendors_by_score) > 1 else None
        
        # Count critical issues
        critical_issues_count = sum(
            s.get('severity_breakdown', {}).get('Critical', {}).get('count', 0)
            for s in summaries
        )
        
        critical_issues_percentage = (critical_issues_count / total_issues * 100) if total_issues > 0 else 0.0
        
        # Calculate average staleness
        total_staleness = sum(s['avg_staleness_days'] * s['total_issues'] for s in summaries if s['total_issues'] > 0)
        avg_staleness = total_staleness / total_issues if total_issues > 0 else 0.0
        
        return QualitySummary(
            total_issues=total_issues,
            total_vendors=len(vendors),
            avg_quality_score=round(avg_quality_score, 2),
            best_vendor={
                'id': best_vendor.id,
                'name': best_vendor.name,
                'quality_score': best_vendor.quality_score
            } if best_vendor else {},
            worst_vendor={
                'id': worst_vendor.id,
                'name': worst_vendor.name,
                'quality_score': worst_vendor.quality_score
            } if worst_vendor else {},
            critical_issues_count=critical_issues_count,
            critical_issues_percentage=round(critical_issues_percentage, 2),
            avg_staleness_days=round(avg_staleness, 1)
        )


@router.get("/quality/waterfall-analysis")
async def get_waterfall_analysis():
    """
    Analyze issues by waterfall position and compare configurations.
    """
    with get_db_session() as session:
        from sqlalchemy import func
        from models.data_quality_issue import DataQualityIssue
        
        analyzer = DataQualityAnalyzer(session)
        
        # Get issues by position
        position_breakdown = analyzer.get_issues_by_waterfall_position()
        
        # Get waterfall configurations
        configs = {}
        for config_name in ['standard', 'optimized', 'executive']:
            config_entries = session.query(WaterfallConfigModel).filter_by(
                config_name=config_name,
                is_active=True
            ).order_by(WaterfallConfigModel.position).all()
            
            positions = []
            for entry in config_entries:
                vendor = session.query(Vendor).get(entry.vendor_id)
                position_data = position_breakdown.get(entry.position, {'count': 0, 'percentage': 0.0})
                
                positions.append({
                    'position': entry.position,
                    'vendor_name': vendor.name if vendor else None,
                    'vendor_id': vendor.id if vendor else None,
                    'quality_score': vendor.quality_score if vendor else None,
                    'issue_count': position_data.get('count', 0),
                    'percentage': position_data.get('percentage', 0.0)
                })
            
            configs[config_name] = {
                'config_name': config_name,
                'positions': positions
            }
        
        return {
            'configurations': configs,
            'position_breakdown': position_breakdown
        }


@router.get("/quality/trends")
async def get_quality_trends(days: int = 90):
    """
    Get time-series data for quality issues over time.
    """
    with get_db_session() as session:
        from models.data_quality_issue import DataQualityIssue
        from sqlalchemy import func, cast, Date
        
        # Group issues by date and vendor
        results = session.query(
            cast(DataQualityIssue.timestamp, Date).label('date'),
            Vendor.name.label('vendor_name'),
            func.count(DataQualityIssue.id).label('count')
        ).join(
            Vendor, DataQualityIssue.vendor_id == Vendor.id
        ).group_by(
            cast(DataQualityIssue.timestamp, Date),
            Vendor.name
        ).order_by(
            cast(DataQualityIssue.timestamp, Date)
        ).all()
        
        # Organize by date
        trends_by_date = {}
        for result in results:
            date_str = result.date.strftime('%Y-%m-%d')
            if date_str not in trends_by_date:
                trends_by_date[date_str] = {
                    'date': date_str,
                    'issue_count': 0,
                    'vendor_breakdown': {}
                }
            
            trends_by_date[date_str]['issue_count'] += result.count
            trends_by_date[date_str]['vendor_breakdown'][result.vendor_name] = result.count
        
        # Convert to list and sort
        trends = sorted(trends_by_date.values(), key=lambda x: x['date'])
        
        # Limit to requested days
        if days and len(trends) > days:
            trends = trends[-days:]
        
        return {
            'trends': trends,
            'total_days': len(trends)
        }

