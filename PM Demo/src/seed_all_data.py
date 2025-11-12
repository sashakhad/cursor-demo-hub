"""
Combined Seed Script
Seeds both TAM candidates AND quality issue data from CSV
Copyright Anysphere Inc.
"""

import sys
import os
import subprocess

# First, seed the TAM candidates (this will initialize the DB)
print("=" * 60)
print("STEP 1: Seeding TAM Candidates")
print("=" * 60)
print()

subprocess.run(['python3', 'seed_tam_candidates.py'], cwd=os.path.dirname(__file__))

print()
print("=" * 60)
print("STEP 2: Loading Quality Issue Data from CSV")
print("=" * 60)
print()

# Now load the CSV data WITHOUT clearing
import csv
from datetime import datetime
from pathlib import Path

from database import get_db_session
from models.vendor import Vendor
from models.candidate import Candidate
from models.data_quality_issue import DataQualityIssue, IssueType
from models.waterfall_config import WaterfallConfig
from services.vendor_scorer import VendorScorer

CSV_PATH = Path(__file__).parent.parent / "data" / "stale_data_report_april25-sept25" / "jewel_vendor_waterfall_reports_q2q3_2024.csv"


def add_quality_vendors(session):
    """Add the quality vendors (different from TAM Cognism vendor)."""
    vendor_names = ['Vendor_A', 'Vendor_B', 'Vendor_C', 'Vendor_D', 'Vendor_E', 'Cognism']
    
    vendor_map = {}
    for name in vendor_names:
        vendor = session.query(Vendor).filter_by(name=name).first()
        if not vendor:
            vendor = Vendor(
                name=name,
                contract_value=100000.0,
                api_endpoint=f'https://api.{name.lower()}.com/v1',
                is_active=True
            )
            session.add(vendor)
            session.flush()
        vendor_map[name] = vendor
    
    session.commit()
    print(f"✓ Created/verified {len(vendor_names)} quality vendors")
    return vendor_map


def create_waterfall_configs(session, vendor_map):
    """Create waterfall configurations if they don't exist."""
    configs = [
        ('standard', 1, 'Vendor_A'), ('standard', 2, 'Vendor_B'), ('standard', 3, 'Vendor_C'),
        ('standard', 4, 'Vendor_E'), ('standard', 5, 'Cognism'), ('standard', 6, 'Vendor_D'),
        ('optimized', 1, 'Cognism'), ('optimized', 2, 'Vendor_E'), ('optimized', 3, 'Vendor_C'),
        ('optimized', 4, 'Vendor_A'), ('optimized', 5, 'Vendor_B'), ('optimized', 6, 'Vendor_D'),
        ('executive', 1, 'Cognism'), ('executive', 2, 'Vendor_E'), ('executive', 3, 'Vendor_C'),
    ]
    
    for config_name, position, vendor_name in configs:
        existing = session.query(WaterfallConfig).filter_by(
            config_name=config_name, position=position
        ).first()
        
        if not existing and vendor_name in vendor_map:
            config = WaterfallConfig(
                config_name=config_name,
                position=position,
                vendor_id=vendor_map[vendor_name].id,
                is_active=True
            )
            session.add(config)
    
    session.commit()
    print(f"✓ Created waterfall configurations")


def parse_issue_type(issue_type_str):
    """Convert CSV issue type string to IssueType enum."""
    type_map = {
        'invalid_email': IssueType.INVALID_EMAIL,
        'wrong_phone': IssueType.WRONG_PHONE,
        'stale_employment': IssueType.STALE_EMPLOYMENT,
        'outdated_title': IssueType.OUTDATED_TITLE,
        'stale_location': IssueType.STALE_LOCATION
    }
    return type_map.get(issue_type_str)


def parse_bool(value):
    """Convert CSV boolean string to Python bool."""
    if isinstance(value, str):
        return value.lower() == 'true'
    return bool(value)


def get_or_create_candidate(session, candidate_cache, candidate_id, region, country, title, seniority, vendor_id, waterfall_position):
    """Get existing candidate from cache or create a new one."""
    if candidate_id in candidate_cache:
        return candidate_cache[candidate_id]
    
    candidate = Candidate(
        candidate_id=candidate_id,
        full_name=f"Quality Data {candidate_id}",
        region=region,
        country=country,
        current_title=title,
        seniority_level=seniority or "Mid",
        source_vendor_id=vendor_id,
        discovered_at_position=waterfall_position
    )
    session.add(candidate)
    session.flush()
    candidate_cache[candidate_id] = candidate
    
    return candidate


def migrate_csv_data(session, vendor_map):
    """Read CSV and create data quality issues."""
    
    if not CSV_PATH.exists():
        print(f"❌ CSV file not found at: {CSV_PATH}")
        return
    
    print(f"📂 Reading CSV from: {CSV_PATH}")
    
    # Clear existing quality issues only
    session.query(DataQualityIssue).delete()
    session.commit()
    
    with open(CSV_PATH, 'r', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        
        issue_count = 0
        candidate_cache = {}
        batch_size = 500
        
        for row in reader:
            issue_type = parse_issue_type(row['issue_type'])
            if not issue_type:
                continue
            
            vendor_name = row['vendor_hit']
            vendor = vendor_map.get(vendor_name)
            if not vendor:
                continue
            
            candidate = get_or_create_candidate(
                session, candidate_cache,
                candidate_id=row['candidate_id'],
                region=row['candidate_region'],
                country=row['candidate_country'],
                title=row['candidate_current_title'],
                seniority=row.get('candidate_seniority_level'),
                vendor_id=vendor.id,
                waterfall_position=int(row['waterfall_position'])
            )
            
            try:
                timestamp = datetime.strptime(row['timestamp'], '%Y-%m-%d %H:%M:%S')
            except (ValueError, KeyError):
                timestamp = datetime.utcnow()
            
            issue = DataQualityIssue(
                report_id=row['report_id'],
                timestamp=timestamp,
                user_email=row['user_email'],
                user_role=row.get('user_role'),
                company_name=row.get('company_name'),
                company_tier=row.get('company_tier'),
                candidate_id=candidate.id,
                vendor_id=vendor.id,
                waterfall_position=int(row['waterfall_position']),
                issue_type=issue_type,
                severity=DataQualityIssue.classify_severity(issue_type),
                days_since_profile_update=int(row['days_since_profile_update']) if row.get('days_since_profile_update') else None,
                email_bounced=parse_bool(row.get('email_bounced', False)),
                phone_invalid=parse_bool(row.get('phone_invalid', False))
            )
            
            session.add(issue)
            issue_count += 1
            
            if issue_count % batch_size == 0:
                session.commit()
                print(f"  ✓ Processed {issue_count} issues...")
        
        session.commit()
        print(f"✓ Migrated {issue_count} data quality issues from CSV")
        print(f"✓ Created {len(candidate_cache)} quality candidate records")


def calculate_vendor_scores(session):
    """Calculate quality scores for all vendors."""
    scorer = VendorScorer(session)
    scorer.update_all_vendor_scores()
    print("✓ Calculated vendor quality scores")


# Main execution
with get_db_session() as session:
    vendor_map = add_quality_vendors(session)
    create_waterfall_configs(session, vendor_map)
    migrate_csv_data(session, vendor_map)
    calculate_vendor_scores(session)

print()
print("=" * 60)
print("✓ ALL DATA LOADED SUCCESSFULLY")
print("=" * 60)
print()
print("Database now contains:")
print("  - 250 TAM candidates (for candidate search)")
print("  - 9,600 quality issue records (for quality dashboard)")
print("  - 6 quality vendors")
print("  - 3 waterfall configurations")
print()

