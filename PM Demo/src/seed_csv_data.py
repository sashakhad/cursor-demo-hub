"""
CSV Data Migration Script
Migrates real vendor waterfall quality data from CSV into the database.
Copyright Anysphere Inc.
"""

import csv
from datetime import datetime
from pathlib import Path

from database import init_db, get_db_session
from models.vendor import Vendor
from models.candidate import Candidate
from models.data_quality_issue import DataQualityIssue, IssueType, IssueSeverity
from models.waterfall_config import WaterfallConfig
from services.vendor_scorer import VendorScorer


CSV_PATH = Path(__file__).parent.parent / "data" / "stale_data_report_april25-sept25" / "jewel_vendor_waterfall_reports_q2q3_2024.csv"


def clear_all_data(session):
    """Clear all existing data from the database."""
    print("Clearing existing data...")
    
    # Delete in reverse order of dependencies
    session.query(DataQualityIssue).delete()
    session.query(WaterfallConfig).delete()
    session.query(Candidate).delete()
    session.query(Vendor).delete()
    
    session.commit()
    print("✓ Cleared all existing data")


def create_vendors(session):
    """Create the 6 vendors from the CSV data."""
    vendors_data = [
        {'name': 'Cognism', 'contract_value': 75000.0, 'api_endpoint': 'https://api.cognism.com/v1'},
        {'name': 'Vendor_A', 'contract_value': 120000.0, 'api_endpoint': 'https://api.vendor-a.com/v2'},
        {'name': 'Vendor_B', 'contract_value': 95000.0, 'api_endpoint': 'https://api.vendor-b.io/search'},
        {'name': 'Vendor_C', 'contract_value': 85000.0, 'api_endpoint': 'https://api.vendor-c.net/v1'},
        {'name': 'Vendor_D', 'contract_value': 110000.0, 'api_endpoint': 'https://api.vendor-d.com/api'},
        {'name': 'Vendor_E', 'contract_value': 80000.0, 'api_endpoint': 'https://api.vendor-e.io/v3'}
    ]
    
    vendor_map = {}
    for data in vendors_data:
        vendor = Vendor(**data, is_active=True)
        session.add(vendor)
        vendor_map[data['name']] = vendor
    
    session.flush()  # Get IDs without committing
    print(f"✓ Created {len(vendors_data)} vendors")
    return vendor_map


def create_waterfall_configs(session, vendor_map):
    """Create waterfall configurations."""
    configs = [
        # STANDARD Configuration (current/problematic)
        ('standard', 1, 'Vendor_A'),
        ('standard', 2, 'Vendor_B'),
        ('standard', 3, 'Vendor_C'),
        ('standard', 4, 'Vendor_E'),
        ('standard', 5, 'Cognism'),
        ('standard', 6, 'Vendor_D'),
        
        # OPTIMIZED Configuration (recommended)
        ('optimized', 1, 'Cognism'),
        ('optimized', 2, 'Vendor_E'),
        ('optimized', 3, 'Vendor_C'),
        ('optimized', 4, 'Vendor_A'),
        ('optimized', 5, 'Vendor_B'),
        ('optimized', 6, 'Vendor_D'),
        
        # EXECUTIVE Configuration
        ('executive', 1, 'Cognism'),
        ('executive', 2, 'Vendor_E'),
        ('executive', 3, 'Vendor_C'),
    ]
    
    for config_name, position, vendor_name in configs:
        config = WaterfallConfig(
            config_name=config_name,
            position=position,
            vendor_id=vendor_map[vendor_name].id,
            is_active=True
        )
        session.add(config)
    
    session.flush()
    print(f"✓ Created {len(configs)} waterfall configuration entries")


def get_or_create_candidate(session, candidate_cache, candidate_id, region, country, title, seniority, vendor_id, waterfall_position):
    """Get existing candidate from cache or create a new one."""
    if candidate_id in candidate_cache:
        return candidate_cache[candidate_id]
    
    candidate = Candidate(
        candidate_id=candidate_id,
        full_name=f"Candidate {candidate_id}",  # Placeholder - real names not in CSV
        region=region,
        country=country,
        current_title=title,
        seniority_level=seniority or "Mid",
        source_vendor_id=vendor_id,
        discovered_at_position=waterfall_position
    )
    session.add(candidate)
    session.flush()  # Get ID
    candidate_cache[candidate_id] = candidate
    
    return candidate


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


def migrate_csv_data(session, vendor_map):
    """Read CSV and create data quality issues."""
    
    if not CSV_PATH.exists():
        print(f"❌ CSV file not found at: {CSV_PATH}")
        return
    
    print(f"📂 Reading CSV from: {CSV_PATH}")
    
    with open(CSV_PATH, 'r', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        
        issue_count = 0
        candidate_cache = {}
        batch_size = 500
        
        for row in reader:
            # Parse issue type
            issue_type = parse_issue_type(row['issue_type'])
            if not issue_type:
                print(f"⚠️  Unknown issue type: {row['issue_type']}, skipping")
                continue
            
            # Get vendor
            vendor_name = row['vendor_hit']
            vendor = vendor_map.get(vendor_name)
            if not vendor:
                print(f"⚠️  Unknown vendor: {vendor_name}, skipping")
                continue
            
            # Get or create candidate (using vendor from this issue)
            candidate = get_or_create_candidate(
                session,
                candidate_cache,
                candidate_id=row['candidate_id'],
                region=row['candidate_region'],
                country=row['candidate_country'],
                title=row['candidate_current_title'],
                seniority=row.get('candidate_seniority_level'),
                vendor_id=vendor.id,
                waterfall_position=int(row['waterfall_position'])
            )
            
            # Parse timestamp
            try:
                timestamp = datetime.strptime(row['timestamp'], '%Y-%m-%d %H:%M:%S')
            except (ValueError, KeyError):
                timestamp = datetime.utcnow()
            
            # Create the issue
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
            
            # Commit in batches for performance
            if issue_count % batch_size == 0:
                session.commit()
                print(f"  ✓ Processed {issue_count} issues...")
        
        # Final commit
        session.commit()
        print(f"✓ Migrated {issue_count} data quality issues from CSV")
        print(f"✓ Created {len(candidate_cache)} candidate records")


def calculate_vendor_scores(session):
    """Calculate quality scores for all vendors."""
    scorer = VendorScorer(session)
    scorer.update_all_vendor_scores()
    print("✓ Calculated vendor quality scores")


def main():
    """Main migration function."""
    print("=" * 60)
    print("CSV DATA MIGRATION")
    print("=" * 60)
    print()
    
    # Initialize database
    print("Initializing database...")
    init_db()
    print()
    
    with get_db_session() as session:
        # Clear existing data
        clear_all_data(session)
        print()
        
        print("Migrating CSV data...")
        print()
        
        # Create vendors
        vendor_map = create_vendors(session)
        
        # Create waterfall configs
        create_waterfall_configs(session, vendor_map)
        
        # Migrate CSV data
        migrate_csv_data(session, vendor_map)
        
        # Calculate scores
        calculate_vendor_scores(session)
    
    print()
    print("=" * 60)
    print("✓ MIGRATION COMPLETE")
    print("=" * 60)
    print()
    print("Real historical data from Q2-Q3 2024 is now in the database!")
    print("Run the API server to access quality reports:")
    print("  cd src && python -m uvicorn api.main:app --reload")
    print()


if __name__ == "__main__":
    main()

