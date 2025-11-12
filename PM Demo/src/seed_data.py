"""
Seed Data Script
Populates the database with sample vendors, candidates, issues, and waterfall configurations.
"""

import random
from datetime import datetime, timedelta, date
from faker import Faker

from database import init_db, get_db_session
from models.vendor import Vendor
from models.candidate import Candidate
from models.data_quality_issue import DataQualityIssue, IssueType, IssueSeverity
from models.waterfall_config import WaterfallConfig
from services.vendor_scorer import VendorScorer

# Initialize Faker for generating realistic data
fake = Faker()
Faker.seed(42)  # For reproducible data
random.seed(42)


def create_vendors(session):
    """
    Create the 6 vendors matching the analysis data.
    
    Quality scores will be calculated later by VendorScorer after issues are created.
    """
    vendors_data = [
        {
            'name': 'Cognism',
            'contract_start_date': date(2024, 1, 1),
            'contract_value': 75000.0,
            'api_endpoint': 'https://api.cognism.com/v1',
            'is_active': True
        },
        {
            'name': 'Vendor_A',
            'contract_start_date': date(2023, 6, 1),
            'contract_value': 120000.0,
            'api_endpoint': 'https://api.vendor-a.com/v2',
            'is_active': True
        },
        {
            'name': 'Vendor_B',
            'contract_start_date': date(2023, 3, 1),
            'contract_value': 95000.0,
            'api_endpoint': 'https://api.vendor-b.io/search',
            'is_active': True
        },
        {
            'name': 'Vendor_C',
            'contract_start_date': date(2023, 9, 1),
            'contract_value': 85000.0,
            'api_endpoint': 'https://api.vendor-c.net/v1',
            'is_active': True
        },
        {
            'name': 'Vendor_D',
            'contract_start_date': date(2022, 12, 1),
            'contract_value': 110000.0,
            'api_endpoint': 'https://api.vendor-d.com/api',
            'is_active': True
        },
        {
            'name': 'Vendor_E',
            'contract_start_date': date(2024, 2, 1),
            'contract_value': 80000.0,
            'api_endpoint': 'https://api.vendor-e.io/v3',
            'is_active': True
        }
    ]
    
    vendors = []
    for data in vendors_data:
        vendor = Vendor(**data)
        session.add(vendor)
        vendors.append(vendor)
    
    session.commit()
    print(f"✓ Created {len(vendors)} vendors")
    return vendors


def create_waterfall_configs(session, vendors):
    """
    Create three waterfall configurations based on the analysis:
    1. "standard" - Current suboptimal configuration
    2. "optimized" - Recommended data-driven configuration
    3. "executive" - High-stakes configuration for critical searches
    """
    # Create vendor lookup by name
    vendor_map = {v.name: v for v in vendors}
    
    configs = [
        # STANDARD (Current/Suboptimal) Configuration
        # This represents the problematic current state with poor vendors at Position 1
        ('standard', 1, 'Vendor_A'),
        ('standard', 2, 'Vendor_B'),
        ('standard', 3, 'Vendor_C'),
        ('standard', 4, 'Vendor_E'),
        ('standard', 5, 'Cognism'),
        ('standard', 6, 'Vendor_D'),
        
        # OPTIMIZED Configuration
        # Data-driven reorganization prioritizing quality
        ('optimized', 1, 'Cognism'),      # Best quality score: 13.2
        ('optimized', 2, 'Vendor_E'),     # Quality score: 37.8
        ('optimized', 3, 'Vendor_C'),     # Quality score: 43.1
        ('optimized', 4, 'Vendor_A'),     # Quality score: 46.0
        ('optimized', 5, 'Vendor_B'),     # Quality score: 53.7
        ('optimized', 6, 'Vendor_D'),     # Worst quality score: 56.3
        
        # EXECUTIVE Configuration
        # For high-stakes searches - only the best vendors
        ('executive', 1, 'Cognism'),      # Best overall
        ('executive', 2, 'Vendor_E'),     # Best contact accuracy
        ('executive', 3, 'Vendor_C'),     # Fallback option
    ]
    
    for config_name, position, vendor_name in configs:
        config = WaterfallConfig(
            config_name=config_name,
            position=position,
            vendor_id=vendor_map[vendor_name].id,
            is_active=True
        )
        session.add(config)
    
    session.commit()
    print(f"✓ Created {len(configs)} waterfall configuration entries")
    print("  - standard: Current suboptimal configuration (6 positions)")
    print("  - optimized: Recommended quality-driven configuration (6 positions)")
    print("  - executive: High-stakes configuration (3 positions)")


def create_candidates(session, vendors):
    """
    Create sample candidate profiles sourced from various vendors.
    """
    job_titles = [
        'Senior Software Engineer', 'Staff Engineer', 'Principal Engineer',
        'Engineering Manager', 'Senior Engineering Manager', 'Director of Engineering',
        'Data Scientist', 'Senior Data Scientist', 'ML Engineer',
        'DevOps Engineer', 'Senior DevOps Engineer', 'SRE',
        'Product Manager', 'Senior Product Manager', 'Principal Product Manager',
        'Backend Engineer', 'Frontend Engineer', 'Full Stack Engineer',
        'Security Engineer', 'QA Engineer', 'Solutions Architect'
    ]
    
    companies = [
        'Google', 'Meta', 'Amazon', 'Microsoft', 'Apple',
        'Netflix', 'Uber', 'Airbnb', 'Stripe', 'Snowflake',
        'Databricks', 'Confluent', 'GitLab', 'Figma', 'Notion'
    ]
    
    seniority_levels = ['Entry', 'Mid', 'Senior', 'Staff', 'Principal', 'Director']
    regions = ['NAMER', 'EMEA', 'APAC', 'LATAM']
    countries = {
        'NAMER': ['United States', 'Canada'],
        'EMEA': ['United Kingdom', 'Germany', 'France', 'Netherlands', 'Spain'],
        'APAC': ['Singapore', 'Australia', 'Japan', 'India'],
        'LATAM': ['Brazil', 'Mexico', 'Argentina']
    }
    
    candidates = []
    for i in range(100):
        region = random.choice(regions)
        country = random.choice(countries[region])
        vendor = random.choice(vendors)
        
        # Simulate waterfall position discovery (weighted toward earlier positions)
        position_weights = [0.35, 0.30, 0.20, 0.10, 0.04, 0.01]
        discovered_at_position = random.choices(range(1, 7), weights=position_weights)[0]
        
        # Profile last updated (varies by vendor quality)
        days_ago = random.randint(10, 200)
        profile_last_updated = datetime.utcnow().date() - timedelta(days=days_ago)
        
        candidate = Candidate(
            candidate_id=f'cand_{100000 + i}',
            full_name=fake.name(),
            email=fake.email(),
            phone=fake.phone_number()[:20],  # Limit length
            current_title=random.choice(job_titles),
            current_company=random.choice(companies),
            seniority_level=random.choice(seniority_levels),
            region=region,
            country=country,
            source_vendor_id=vendor.id,
            discovered_at_position=discovered_at_position,
            profile_last_updated=profile_last_updated
        )
        session.add(candidate)
        candidates.append(candidate)
    
    session.commit()
    print(f"✓ Created {len(candidates)} candidate profiles")
    return candidates


def create_data_quality_issues(session, vendors, candidates):
    """
    Create data quality issues with realistic distributions matching the analysis.
    
    Issue distributions (based on vendor quality):
    - Cognism: ~5% of total issues (best performer)
    - Vendor_E: ~15% of issues
    - Vendor_C: ~20% of issues
    - Vendor_A: ~25% of issues
    - Vendor_B: ~20% of issues
    - Vendor_D: ~15% of issues (highest severity rate)
    """
    vendor_map = {v.name: v for v in vendors}
    
    # Define issue distribution by vendor (matches analysis findings)
    vendor_issue_counts = {
        'Cognism': 25,      # Best performer - fewest issues
        'Vendor_E': 45,
        'Vendor_C': 60,
        'Vendor_A': 75,     # High volume
        'Vendor_B': 60,
        'Vendor_D': 35      # Worst quality per issue
    }
    
    # Issue type probabilities by vendor quality
    issue_type_distributions = {
        'Cognism': {  # Best quality - mostly minor issues
            IssueType.INVALID_EMAIL: 0.15,
            IssueType.WRONG_PHONE: 0.05,
            IssueType.STALE_EMPLOYMENT: 0.40,
            IssueType.OUTDATED_TITLE: 0.35,
            IssueType.STALE_LOCATION: 0.05
        },
        'Vendor_E': {  # Good contact accuracy
            IssueType.INVALID_EMAIL: 0.15,
            IssueType.WRONG_PHONE: 0.08,
            IssueType.STALE_EMPLOYMENT: 0.50,
            IssueType.OUTDATED_TITLE: 0.20,
            IssueType.STALE_LOCATION: 0.07
        },
        'Vendor_C': {  # Balanced
            IssueType.INVALID_EMAIL: 0.20,
            IssueType.WRONG_PHONE: 0.08,
            IssueType.STALE_EMPLOYMENT: 0.45,
            IssueType.OUTDATED_TITLE: 0.20,
            IssueType.STALE_LOCATION: 0.07
        },
        'Vendor_A': {  # Aging data
            IssueType.INVALID_EMAIL: 0.22,
            IssueType.WRONG_PHONE: 0.08,
            IssueType.STALE_EMPLOYMENT: 0.48,
            IssueType.OUTDATED_TITLE: 0.17,
            IssueType.STALE_LOCATION: 0.05
        },
        'Vendor_B': {  # High staleness
            IssueType.INVALID_EMAIL: 0.25,
            IssueType.WRONG_PHONE: 0.06,
            IssueType.STALE_EMPLOYMENT: 0.52,
            IssueType.OUTDATED_TITLE: 0.12,
            IssueType.STALE_LOCATION: 0.05
        },
        'Vendor_D': {  # Worst performer - high bounce rate
            IssueType.INVALID_EMAIL: 0.35,
            IssueType.WRONG_PHONE: 0.12,
            IssueType.STALE_EMPLOYMENT: 0.42,
            IssueType.OUTDATED_TITLE: 0.08,
            IssueType.STALE_LOCATION: 0.03
        }
    }
    
    # Staleness ranges by vendor (days)
    staleness_ranges = {
        'Cognism': (10, 60),    # Freshest data
        'Vendor_E': (60, 140),
        'Vendor_C': (70, 130),
        'Vendor_A': (60, 120),
        'Vendor_B': (100, 170), # Very stale
        'Vendor_D': (130, 220)  # Stalest data
    }
    
    companies = ['Stripe', 'Uber', 'Airbnb', 'Netflix', 'Snowflake', 'Databricks', 
                 'Confluent', 'GitLab', 'Figma', 'Notion', 'Block', 'Tesla', 
                 'DoorDash', 'Cloudflare', 'Plaid', 'Okta', 'Capital One']
    
    user_roles = ['Recruiter', 'Senior Recruiter', 'Lead Recruiter', 'Recruiting Manager', 
                  'Head of Recruiting', 'Technical Sourcer']
    
    company_tiers = ['Standard', 'Enterprise']
    
    issue_count = 0
    for vendor_name, target_count in vendor_issue_counts.items():
        vendor = vendor_map[vendor_name]
        issue_dist = issue_type_distributions[vendor_name]
        staleness_range = staleness_ranges[vendor_name]
        
        # Determine typical waterfall position for this vendor (based on "standard" config)
        position_map = {
            'Vendor_A': 1, 'Vendor_B': 2, 'Vendor_C': 3,
            'Vendor_E': 4, 'Cognism': 5, 'Vendor_D': 6
        }
        typical_position = position_map.get(vendor_name, 3)
        
        for _ in range(target_count):
            # Select issue type based on vendor's distribution
            issue_type = random.choices(
                list(issue_dist.keys()),
                weights=list(issue_dist.values())
            )[0]
            
            # Classify severity
            severity = DataQualityIssue.classify_severity(issue_type)
            
            # Set flags based on issue type
            email_bounced = (issue_type == IssueType.INVALID_EMAIL)
            phone_invalid = (issue_type == IssueType.WRONG_PHONE)
            
            # Random candidate
            candidate = random.choice(candidates)
            
            # Staleness varies by vendor
            days_stale = random.randint(*staleness_range)
            
            # Timestamp in last 6 months
            days_ago = random.randint(0, 180)
            timestamp = datetime.utcnow() - timedelta(days=days_ago)
            
            issue = DataQualityIssue(
                report_id=f'rpt_{issue_count:06d}',
                timestamp=timestamp,
                user_email=fake.email(),
                user_role=random.choice(user_roles),
                company_name=random.choice(companies),
                company_tier=random.choice(company_tiers),
                candidate_id=candidate.id,
                vendor_id=vendor.id,
                waterfall_position=typical_position,
                issue_type=issue_type,
                severity=severity,
                days_since_profile_update=days_stale,
                email_bounced=email_bounced,
                phone_invalid=phone_invalid
            )
            session.add(issue)
            issue_count += 1
    
    session.commit()
    print(f"✓ Created {issue_count} data quality issues")


def calculate_and_update_vendor_scores(session):
    """
    Calculate quality scores for all vendors using VendorScorer.
    """
    scorer = VendorScorer(session)
    scorer.update_all_vendor_scores()
    print("✓ Calculated and updated vendor quality scores")


def main():
    """
    Main seeding function - orchestrates database population.
    """
    print("=" * 60)
    print("SEEDING DATABASE")
    print("=" * 60)
    print()
    
    # Initialize database (create tables)
    print("Initializing database...")
    init_db()
    print()
    
    # Seed data
    with get_db_session() as session:
        print("Creating sample data...")
        print()
        
        # Create vendors
        vendors = create_vendors(session)
        
        # Create waterfall configurations
        create_waterfall_configs(session, vendors)
        
        # Create candidates
        candidates = create_candidates(session, vendors)
        
        # Create data quality issues
        create_data_quality_issues(session, vendors, candidates)
        
        # Calculate vendor scores
        calculate_and_update_vendor_scores(session)
    
    print()
    print("=" * 60)
    print("✓ DATABASE SEEDING COMPLETE")
    print("=" * 60)
    print()
    print("Database location: data/recruiting_data.db")
    print()
    print("Summary:")
    print("  - 6 vendors (Cognism, Vendor_A-E)")
    print("  - 3 waterfall configurations (standard, optimized, executive)")
    print("  - 100 candidate profiles")
    print("  - 300 data quality issues")
    print("  - Vendor quality scores calculated")
    print()
    print("Next steps:")
    print("  1. Import models and services in Python")
    print("  2. Query database to explore the schema")
    print("  3. Ask Cursor questions about the codebase!")
    print()


if __name__ == "__main__":
    main()

