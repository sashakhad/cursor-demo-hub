"""
Seed TAM Candidates
Generates 200-300 realistic Technical Account Manager candidates across three personas.
Copyright Anysphere Inc.
"""

import random
import json
from datetime import datetime, timedelta, date
from faker import Faker

from database import init_db, get_db_session, drop_all_tables
from models.candidate import Candidate
from models.vendor import Vendor
from services.scoring_engine import ScoringEngine

# Initialize Faker
fake = Faker()
Faker.seed(12345)
random.seed(12345)


# Define persona-specific data
# Persona 1: B2B tech companies, cloud platforms, enterprise SaaS
PERSONA_1_COMPANIES = [
    'Stripe', 'Databricks', 'Snowflake', 'Figma', 'Notion',
    'GitLab', 'Confluent', 'Plaid', 'Scale AI', 'Retool',
    'Salesforce', 'Workday', 'ServiceNow', 'AWS', 'Google Cloud',
    'Twilio', 'Segment', 'Auth0', 'MongoDB', 'Elastic'
]

# Persona 2: Developer tools, infrastructure, B2B SaaS companies
PERSONA_2_COMPANIES = [
    'Brex', 'Ramp', 'Gong', 'Rippling', 'Stripe', 'Plaid',
    'Retool', 'Databricks', 'Snowflake', 'Confluent',
    'GitHub', 'GitLab', 'Atlassian', 'MongoDB', 'HashiCorp',
    'Datadog', 'New Relic', 'Splunk', 'Elastic', 'Redis'
]

# Persona 3: Series B+/public companies for post-founding roles
PERSONA_3_COMPANIES = [
    'Stripe', 'Databricks', 'Snowflake', 'Figma', 'Notion',
    'Uber', 'Airbnb', 'Square', 'Coinbase', 'DoorDash',
    'Instacart', 'Robinhood', 'Chime', 'Plaid', 'Affirm',
    'Toast', 'GitLab', 'Confluent', 'HashiCorp', 'Cloudflare'
]

TIER_1_COMPANIES = [
    'Google', 'Meta', 'Amazon', 'Microsoft', 'Apple',
    'Netflix', 'Uber', 'Airbnb', 'Twitter', 'LinkedIn'
]

# Enterprise/Fortune 500 companies for Persona 1
ENTERPRISE_COMPANIES = [
    'Salesforce', 'Workday', 'ServiceNow', 'Oracle', 'SAP',
    'Adobe', 'Cisco', 'VMware', 'Dell', 'IBM'
]

ENGINEERING_TITLES = [
    'Software Engineer', 'Senior Software Engineer', 'Staff Engineer',
    'Backend Engineer', 'Frontend Engineer', 'Full Stack Engineer',
    'Tech Lead'
]

PM_SOLUTIONS_TITLES = [
    'Product Manager', 'Senior Product Manager', 'Technical Product Manager',
    'Solutions Engineer', 'Solutions Architect', 'Technical Solutions Engineer',
    'Sales Engineer', 'Enterprise Solutions Engineer', 'Principal Solutions Architect'
]

CS_TAM_TITLES = [
    'Customer Success Manager', 'Senior Customer Success Manager',
    'Enterprise Customer Success Manager', 'Technical Account Manager',
    'Senior Technical Account Manager', 'Solutions Consultant',
    'Customer Solutions Manager', 'Strategic Account Manager'
]

CS_LEADERSHIP_TITLES = [
    'Director of Customer Success', 'VP of Customer Success',
    'Head of Customer Success', 'Director of Solutions Engineering',
    'VP of Solutions', 'Head of Technical Account Management'
]

SCHOOLS = [
    'Stanford University', 'MIT', 'UC Berkeley', 'Carnegie Mellon',
    'University of Michigan', 'Georgia Tech', 'UT Austin', 'Cornell',
    'UCLA', 'University of Washington', 'UIUC', 'Columbia',
    'NYU', 'Boston University', 'Northeastern'
]

LOCATIONS = [
    ('San Francisco', 'California', 'United States', 'NAMER'),
    ('New York', 'New York', 'United States', 'NAMER'),
    ('Seattle', 'Washington', 'United States', 'NAMER'),
    ('Austin', 'Texas', 'United States', 'NAMER'),
    ('Boston', 'Massachusetts', 'United States', 'NAMER'),
    ('Los Angeles', 'California', 'United States', 'NAMER'),
    ('Denver', 'Colorado', 'United States', 'NAMER'),
    ('Chicago', 'Illinois', 'United States', 'NAMER'),
]

TECHNICAL_SKILLS = [
    'Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'PostgreSQL',
    'AWS', 'GCP', 'Docker', 'Kubernetes', 'REST APIs', 'GraphQL',
    'Microservices', 'System Design', 'API Integration', 'SaaS',
    'Cloud Architecture', 'CI/CD', 'Git', 'Agile'
]

CUSTOMER_SKILLS = [
    'Customer Success', 'Account Management', 'Technical Support',
    'Solutions Engineering', 'Pre-Sales', 'Customer Onboarding',
    'Relationship Management', 'Stakeholder Management', 'Communication',
    'Problem Solving', 'Project Management', 'Training & Education'
]


def generate_persona_1_candidate(candidate_id: int, vendor: Vendor) -> Candidate:
    """
    Generate Persona 1: Former software engineer who transitioned to customer-facing position
    Criteria: 3-5 years in GTM roles at B2B tech, experience with enterprise customers, 
    background at high-growth tech or public cloud/SaaS platforms
    """
    location = random.choice(LOCATIONS)
    school = random.choice(SCHOOLS)
    
    # Work history: Started as engineer, transitioned to PM/Solutions with enterprise focus
    work_history = []
    
    # Current role: Solutions/Technical role at B2B tech company (3-5 years)
    current_company = random.choice(PERSONA_1_COMPANIES)
    # Mix of standard and enterprise-focused titles
    title_pool = PM_SOLUTIONS_TITLES + CS_TAM_TITLES
    current_title = random.choice(title_pool)
    current_years = random.randint(3, 5)  # 3-5 years per criteria
    
    work_history.append({
        'company': current_company,
        'title': current_title,
        'years': current_years,
        'start_year': 2024 - current_years,
        'end_year': 2024
    })
    
    # Previous role: Engineering at tech company (showing transition)
    prev_company = random.choice(PERSONA_1_COMPANIES + TIER_1_COMPANIES + ENTERPRISE_COMPANIES)
    prev_title = random.choice(ENGINEERING_TITLES)
    prev_years = random.randint(2, 4)
    work_history.append({
        'company': prev_company,
        'title': prev_title,
        'years': prev_years,
        'start_year': 2024 - current_years - prev_years,
        'end_year': 2024 - current_years
    })
    
    # Maybe add earlier role at enterprise/Fortune 500 company
    if random.random() > 0.6:
        early_company = random.choice(ENTERPRISE_COMPANIES + TIER_1_COMPANIES)
        early_title = random.choice(ENGINEERING_TITLES[:3])  # Junior titles
        early_years = random.randint(1, 2)
        work_history.append({
            'company': early_company,
            'title': early_title,
            'years': early_years,
            'start_year': 2024 - current_years - prev_years - early_years,
            'end_year': 2024 - current_years - prev_years
        })
    
    # Skills: Strong technical + customer-facing
    skills = random.sample(TECHNICAL_SKILLS, k=random.randint(6, 10)) + \
             random.sample(CUSTOMER_SKILLS, k=random.randint(4, 7))
    
    # Calculate persona scores
    persona_scores = ScoringEngine.calculate_persona_scores(
        work_history=work_history,
        skills=skills,
        is_former_founder=False,
        current_title=current_title,
        years_in_role=current_years
    )
    
    # Create candidate
    candidate = Candidate(
        candidate_id=f'tam_{candidate_id:05d}',
        full_name=fake.name(),
        email=fake.email(),
        phone=fake.phone_number()[:20],
        current_title=current_title,
        current_company=current_company,
        seniority_level='Senior' if 'Senior' in current_title else 'Mid',
        city=location[0],
        state=location[1],
        region=location[3],
        country=location[2],
        source_vendor_id=vendor.id,
        discovered_at_position=random.randint(1, 3),
        profile_last_updated=date.today() - timedelta(days=random.randint(5, 45)),
        work_history=json.dumps(work_history),
        skills=json.dumps(skills),
        education=f"BS Computer Science, {school}",
        years_in_role=current_years,
        is_former_founder=False,
        linkedin_url=f"https://linkedin.com/in/{fake.user_name()}",
        persona_scores=json.dumps(persona_scores),
        last_contacted_at=datetime.now() - timedelta(days=random.randint(0, 180)) if random.random() > 0.3 else None
    )
    
    return candidate


def generate_persona_2_candidate(candidate_id: int, vendor: Vendor) -> Candidate:
    """
    Generate Persona 2: Senior CSM (5+ years) or CS leadership at developer tools/infrastructure companies
    Criteria: Experience at dev tools/infra/B2B SaaS, strategic/enterprise accounts, 
    track record with expansion revenue and executive relationships
    """
    location = random.choice(LOCATIONS)
    school = random.choice(SCHOOLS)
    
    # Work history: 5+ years in CS/Solutions with some leadership
    work_history = []
    
    # Current role: Senior CS/Leadership at developer tools or infrastructure company
    current_company = random.choice(PERSONA_2_COMPANIES)
    # Mix senior IC and leadership roles
    if random.random() > 0.6:
        current_title = random.choice(CS_LEADERSHIP_TITLES)  # Leadership
    else:
        current_title = random.choice([t for t in CS_TAM_TITLES if 'Senior' in t or 'Enterprise' in t or 'Strategic' in t])
    current_years = random.randint(3, 6)
    
    work_history.append({
        'company': current_company,
        'title': current_title,
        'years': current_years,
        'start_year': 2024 - current_years,
        'end_year': 2024
    })
    
    # Previous role: Mid-level CS at another tech company (building to 5+ years total)
    prev_company = random.choice(PERSONA_2_COMPANIES + TIER_1_COMPANIES)
    prev_title = random.choice(['Customer Success Manager', 'Senior Customer Success Manager', 'Solutions Engineer', 'Technical Account Manager'])
    prev_years = random.randint(2, 4)
    work_history.append({
        'company': prev_company,
        'title': prev_title,
        'years': prev_years,
        'start_year': 2024 - current_years - prev_years,
        'end_year': 2024 - current_years
    })
    
    # Maybe add earlier CS role to get to 5+ years
    if random.random() > 0.5:
        early_company = random.choice(PERSONA_2_COMPANIES + TIER_1_COMPANIES)
        early_title = 'Customer Success Manager'
        early_years = random.randint(1, 2)
        work_history.append({
            'company': early_company,
            'title': early_title,
            'years': early_years,
            'start_year': 2024 - current_years - prev_years - early_years,
            'end_year': 2024 - current_years - prev_years
        })
    
    # Skills: Heavy on customer success, account management, and technical
    skills = random.sample(CUSTOMER_SKILLS, k=random.randint(7, 10)) + \
             random.sample(TECHNICAL_SKILLS, k=random.randint(4, 6)) + \
             ['Enterprise Sales', 'Executive Relationships', 'Expansion Revenue']
    
    # Calculate persona scores
    persona_scores = ScoringEngine.calculate_persona_scores(
        work_history=work_history,
        skills=skills,
        is_former_founder=False,
        current_title=current_title,
        years_in_role=current_years
    )
    
    # Create candidate
    candidate = Candidate(
        candidate_id=f'tam_{candidate_id:05d}',
        full_name=fake.name(),
        email=fake.email(),
        phone=fake.phone_number()[:20],
        current_title=current_title,
        current_company=current_company,
        seniority_level='Senior' if 'Senior' in current_title else 'Mid',
        city=location[0],
        state=location[1],
        region=location[3],
        country=location[2],
        source_vendor_id=vendor.id,
        discovered_at_position=random.randint(1, 3),
        profile_last_updated=date.today() - timedelta(days=random.randint(5, 45)),
        work_history=json.dumps(work_history),
        skills=json.dumps(skills),
        education=f"BA Business/Economics, {school}",
        years_in_role=current_years,
        is_former_founder=False,
        linkedin_url=f"https://linkedin.com/in/{fake.user_name()}",
        persona_scores=json.dumps(persona_scores),
        last_contacted_at=datetime.now() - timedelta(days=random.randint(0, 180)) if random.random() > 0.3 else None
    )
    
    return candidate


def generate_persona_3_candidate(candidate_id: int, vendor: Vendor) -> Candidate:
    """
    Generate Persona 3: Former founder who transitioned to operational roles at established tech companies
    Criteria: Founder of venture-backed startup, post-founding PM/GTM/BD roles at established tech,
    strong technical/product background with customer empathy, Series B+/public company experience
    """
    location = random.choice(LOCATIONS)
    school = random.choice(SCHOOLS)
    
    # Work history: Founded startup, then joined established tech company
    work_history = []
    
    # Current role: PM/GTM/BD role at Series B+/public tech company
    current_company = random.choice(PERSONA_3_COMPANIES)
    current_role_type = random.choice(['pm_solutions', 'gtm', 'bd'])
    
    if current_role_type == 'pm_solutions':
        current_title = random.choice(PM_SOLUTIONS_TITLES + ['Product Lead', 'Group Product Manager'])
    elif current_role_type == 'gtm':
        current_title = random.choice(['Head of GTM', 'Director of Business Development', 'VP of Partnerships', 'Director of Strategy'])
    else:
        current_title = random.choice(['Director of Business Development', 'Head of Partnerships', 'Strategic Initiatives Lead'])
    
    current_years = random.randint(2, 4)
    
    work_history.append({
        'company': current_company,
        'title': current_title,
        'years': current_years,
        'start_year': 2024 - current_years,
        'end_year': 2024
    })
    
    # Previous: Founder role with venture-backed indicators
    founder_prefix = random.choice(['Vertex', 'Quantum', 'Nexus', 'Catalyst', 'Prism', 'Helix', 'Vector'])
    founder_suffix = random.choice(['AI', 'Labs', 'Technologies', 'Software', 'Systems', 'Solutions'])
    founder_company = f"{founder_prefix} {founder_suffix}"
    founder_years = random.randint(2, 5)
    work_history.append({
        'company': founder_company,
        'title': random.choice(['Founder & CEO', 'Co-Founder & CTO', 'Co-Founder & CPO']),
        'years': founder_years,
        'start_year': 2024 - current_years - founder_years,
        'end_year': 2024 - current_years
    })
    
    # Earlier role at established tech company (shows credibility)
    if random.random() > 0.5:
        early_company = random.choice(TIER_1_COMPANIES + ENTERPRISE_COMPANIES)
        early_title = random.choice(ENGINEERING_TITLES + PM_SOLUTIONS_TITLES[:3])
        early_years = random.randint(2, 3)
        work_history.append({
            'company': early_company,
            'title': early_title,
            'years': early_years,
            'start_year': 2024 - current_years - founder_years - early_years,
            'end_year': 2024 - current_years - founder_years
        })
    
    # Skills: Well-rounded with technical, product, and business acumen
    skills = random.sample(TECHNICAL_SKILLS, k=random.randint(5, 8)) + \
             random.sample(CUSTOMER_SKILLS, k=random.randint(5, 8)) + \
             ['Entrepreneurship', 'Business Development', 'Strategy', 'Leadership', 'Product Strategy', 'Go-to-Market']
    
    # Calculate persona scores
    persona_scores = ScoringEngine.calculate_persona_scores(
        work_history=work_history,
        skills=skills,
        is_former_founder=True,
        current_title=current_title,
        years_in_role=current_years
    )
    
    # Create candidate
    candidate = Candidate(
        candidate_id=f'tam_{candidate_id:05d}',
        full_name=fake.name(),
        email=fake.email(),
        phone=fake.phone_number()[:20],
        current_title=current_title,
        current_company=current_company,
        seniority_level='Senior',
        city=location[0],
        state=location[1],
        region=location[3],
        country=location[2],
        source_vendor_id=vendor.id,
        discovered_at_position=random.randint(1, 3),
        profile_last_updated=date.today() - timedelta(days=random.randint(5, 45)),
        work_history=json.dumps(work_history),
        skills=json.dumps(skills),
        education=f"BS Computer Science, {school}",
        years_in_role=current_years,
        is_former_founder=True,
        linkedin_url=f"https://linkedin.com/in/{fake.user_name()}",
        persona_scores=json.dumps(persona_scores),
        last_contacted_at=datetime.now() - timedelta(days=random.randint(0, 180)) if random.random() > 0.3 else None
    )
    
    return candidate


def create_tam_candidates(session, vendors):
    """
    Create 250 TAM candidates across three personas
    """
    candidates = []
    vendor = vendors[0]  # Use Cognism as primary vendor
    
    # Distribution across personas
    # Persona 1: 100 candidates (40%)
    # Persona 2: 100 candidates (40%)
    # Persona 3: 50 candidates (20%)
    
    candidate_id = 1
    
    print("Generating Persona 1 candidates (Engineer→PM/Solutions)...")
    for i in range(100):
        candidate = generate_persona_1_candidate(candidate_id, vendor)
        session.add(candidate)
        candidates.append(candidate)
        candidate_id += 1
        
        if (i + 1) % 25 == 0:
            print(f"  Generated {i + 1}/100 Persona 1 candidates")
    
    print("\nGenerating Persona 2 candidates (CS/Solutions Leaders)...")
    for i in range(100):
        candidate = generate_persona_2_candidate(candidate_id, vendor)
        session.add(candidate)
        candidates.append(candidate)
        candidate_id += 1
        
        if (i + 1) % 25 == 0:
            print(f"  Generated {i + 1}/100 Persona 2 candidates")
    
    print("\nGenerating Persona 3 candidates (Former Founders)...")
    for i in range(50):
        candidate = generate_persona_3_candidate(candidate_id, vendor)
        session.add(candidate)
        candidates.append(candidate)
        candidate_id += 1
        
        if (i + 1) % 25 == 0:
            print(f"  Generated {i + 1}/50 Persona 3 candidates")
    
    session.commit()
    print(f"\n✓ Created {len(candidates)} TAM candidates")
    return candidates


def create_simple_vendor(session):
    """Create a simple vendor for TAM demo"""
    vendor = Vendor(
        name='Cognism',
        contract_start_date=date(2024, 1, 1),
        contract_value=75000.0,
        api_endpoint='https://api.cognism.com/v1',
        is_active=True,
        quality_score=13.2
    )
    session.add(vendor)
    session.commit()
    print("✓ Created vendor")
    return [vendor]


def main():
    """
    Main seeding function for TAM candidates
    """
    print("=" * 60)
    print("SEEDING TAM CANDIDATES DATABASE")
    print("=" * 60)
    print()
    
    # Drop existing tables and recreate
    print("Dropping existing tables...")
    drop_all_tables()
    
    print("Initializing database...")
    init_db()
    print()
    
    # Seed TAM-specific data
    with get_db_session() as session:
        print("Creating vendors...")
        vendors = create_simple_vendor(session)
        print()
        
        print("Creating TAM candidates...")
        print()
        candidates = create_tam_candidates(session, vendors)
    
    print()
    print("=" * 60)
    print("✓ TAM CANDIDATES DATABASE SEEDING COMPLETE")
    print("=" * 60)
    print()
    print("Database location: data/recruiting_data.db")
    print()
    print("Summary:")
    print("  - 1 vendor (Cognism)")
    print("  - 250 TAM candidates:")
    print("    • 100 Persona 1 (Engineer→PM/Solutions)")
    print("    • 100 Persona 2 (CS/Solutions Leaders)")
    print("    • 50 Persona 3 (Former Founders)")
    print("  - AI fit scores calculated for all candidates")
    print()
    print("Next steps:")
    print("  1. Start the FastAPI backend: cd src && uvicorn api.main:app --reload")
    print("  2. Start the Next.js frontend: cd frontend && npm run dev")
    print()


if __name__ == "__main__":
    main()

