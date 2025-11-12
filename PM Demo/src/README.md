# Vendor Waterfall System

## Overview

This is a backend service that demonstrates a **vendor waterfall system** for recruiting data procurement. The system manages multiple data vendors, prioritizes them by quality, and orchestrates sequential queries to find candidate information.

**Purpose:** This demo codebase showcases how Cursor can help Product Managers understand complex systems by exploring code, schemas, and business logic.

---

## What is a Vendor Waterfall?

A **waterfall** is a prioritized sequence of vendors that are queried in order until results are found:

```
┌─────────────────────────────────────────────┐
│         WATERFALL EXECUTION FLOW            │
└─────────────────────────────────────────────┘

Search Request: "Senior Engineer at Google"

Position 1: Query Cognism API
            ↓
            Found results? → YES → Return to user ✓
            ↓ NO
            
Position 2: Query Vendor_E API  
            ↓
            Found results? → YES → Return to user ✓
            ↓ NO
            
Position 3: Query Vendor_C API
            ↓
            Found results? → YES → Return to user ✓
            ↓ NO
            
... continue through Position 6 or until found
```

### Why Use a Waterfall?

1. **Cost Optimization**: Only pay for API calls actually needed
2. **Quality Optimization**: Query best vendors first (fewer bad results)
3. **Latency Optimization**: Return quickly when top vendors have data
4. **Redundancy**: Fallback options if primary vendors fail

### Key Insight

**Position matters!** A vendor at Position 1 gets queried on every search, while Position 6 only gets queried when all others fail. Poor vendors at Position 1 generate disproportionate data quality issues.

---

## Architecture

### Database Schema

```
┌──────────────┐
│   vendors    │
├──────────────┤
│ id           │──┐
│ name         │  │
│ quality_score│  │
│ is_active    │  │
└──────────────┘  │
                  │
┌──────────────────────┐      ┌─────────────────────┐
│ waterfall_configs    │      │    candidates       │
├──────────────────────┤      ├─────────────────────┤
│ id                   │      │ id                  │
│ config_name          │      │ candidate_id        │
│ position (1-6)       │      │ full_name           │
│ vendor_id            │──────│ source_vendor_id    │
│ is_active            │      │ discovered_at_pos   │
└──────────────────────┘      │ profile_last_update │
                              └─────────────────────┘
                                       │
                                       │
                              ┌────────┴──────────────┐
                              │ data_quality_issues   │
                              ├───────────────────────┤
                              │ id                    │
                              │ report_id             │
                              │ candidate_id          │
                              │ vendor_id             │
                              │ issue_type            │
                              │ severity              │
                              │ waterfall_position    │
                              │ days_since_update     │
                              │ email_bounced         │
                              │ phone_invalid         │
                              └───────────────────────┘
```

### Core Components

#### Models (`/models`)

- **`vendor.py`**: Data vendor representation (Cognism, Vendor_A, etc.)
- **`candidate.py`**: Candidate profile sourced through waterfall
- **`data_quality_issue.py`**: Quality problems with vendor data
- **`waterfall_config.py`**: Vendor priority ordering rules

#### Services (`/services`)

- **`waterfall_manager.py`**: Orchestrates vendor selection and query execution
- **`vendor_scorer.py`**: Calculates vendor quality metrics
- **`data_quality_analyzer.py`**: Aggregates and analyzes quality issues

---

## Business Logic Deep Dive

### 1. Vendor Quality Scoring

**Location:** `services/vendor_scorer.py`

Quality scores are calculated using a **weighted formula** (lower is better):

```
quality_score = (staleness_score × 0.4) + 
                (contact_accuracy_score × 0.4) + 
                (volume_score × 0.2)
```

**Components:**

- **Staleness Score (40% weight)**: Average days since profile update
  - Cognism: ~23 days (best)
  - Vendor_D: ~175 days (worst)

- **Contact Accuracy Score (40% weight)**: Email bounce + phone invalid rates
  - Vendor_E: 14.9% error rate (best)
  - Vendor_D: 22.6% error rate (worst)

- **Volume Score (20% weight)**: Total issues generated
  - Lower weight because high-volume vendors naturally have more issues

**Why This Matters:**

These scores inform waterfall optimization. The "optimized" configuration reorganizes vendors by quality score, reducing issues by 84%.

### 2. Waterfall Configurations

**Location:** `models/waterfall_config.py`

Three configurations exist:

#### Standard (Current/Suboptimal)
```
Position 1: Vendor_A (quality: 46.0)
Position 2: Vendor_B (quality: 53.7)
Position 3: Vendor_C (quality: 43.1)
Position 4: Vendor_E (quality: 37.8)
Position 5: Cognism (quality: 13.2)  ← Best vendor at last position!
Position 6: Vendor_D (quality: 56.3)
```

**Problem:** Best vendor (Cognism) rarely gets queried because it's last.

#### Optimized (Recommended)
```
Position 1: Cognism (quality: 13.2)  ← Best vendor first!
Position 2: Vendor_E (quality: 37.8)
Position 3: Vendor_C (quality: 43.1)
Position 4: Vendor_A (quality: 46.0)
Position 5: Vendor_B (quality: 53.7)
Position 6: Vendor_D (quality: 56.3)
```

**Impact:** Reduces first-hit issues by 84%, improves data freshness by 49%.

#### Executive (High-Stakes)
```
Position 1: Cognism
Position 2: Vendor_E
Position 3: Vendor_C
(Only use best vendors for critical searches)
```

### 3. Waterfall Execution

**Location:** `services/waterfall_manager.py`

The `WaterfallManager.execute_waterfall_search()` method implements the sequential query logic:

```python
def execute_waterfall_search(search_criteria, config_name):
    vendors = get_waterfall_for_config(config_name)  # Get ordered list
    
    for position, vendor in enumerate(vendors, start=1):
        results = query_vendor_api(vendor, search_criteria)
        
        if results:
            return {
                'success': True,
                'vendor_hit': vendor,
                'position_hit': position
            }
    
    return {'success': False}  # Waterfall exhausted
```

**Key Concept:** The system stops at the first vendor that returns results. This is why position matters—Position 1 vendors get queried 100% of the time, Position 6 only when all others fail.

---

## Data Quality Issues

**Location:** `models/data_quality_issue.py`

Issues are classified by **severity**:

### Critical (31.5% of issues)
- `invalid_email`: Email bounced
- `wrong_phone`: Phone disconnected/invalid

**Impact:** Recruiters cannot contact candidate (blocks outreach entirely)

### High (65.2% of issues)
- `stale_employment`: Candidate left company
- `outdated_title`: Candidate's role changed

**Impact:** Wrong context for outreach (lower response rates)

### Medium (3.3% of issues)
- `stale_location`: Minor discrepancies

**Impact:** Low concern

---

## Getting Started

### 1. Install Dependencies

```bash
cd "/Users/mpotteiger/Developer/PM Demo"
pip install -r requirements.txt
```

### 2. Initialize Database

```bash
cd src
python seed_data.py
```

This creates `data/recruiting_data.db` with:
- 6 vendors
- 3 waterfall configurations
- 100 sample candidates
- 300 data quality issues

### 3. Explore the Code

```python
from database import get_db_session
from models import Vendor, Candidate, DataQualityIssue
from services import WaterfallManager, VendorScorer

# Query vendors
with get_db_session() as session:
    vendors = session.query(Vendor).all()
    for v in vendors:
        print(f"{v.name}: Quality Score = {v.quality_score}")

# Get waterfall configuration
with get_db_session() as session:
    manager = WaterfallManager(session)
    vendors = manager.get_waterfall_for_config("optimized")
    print("Optimized waterfall order:", [v.name for v in vendors])
```

---

## Questions to Ask Cursor

Use this codebase to demonstrate Cursor's code exploration capabilities:

### Schema Questions
- "What's the database schema for candidates?"
- "Show me all the relationships between vendors and data quality issues"
- "What fields are in the waterfall_config table?"

### Business Logic Questions
- "How does the waterfall selection algorithm work?"
- "Where is the vendor quality score calculated?"
- "What factors influence the quality score formula?"
- "Explain how we determine which vendor to query first"

### Implementation Questions
- "How do we handle a case where all vendors in the waterfall return no results?"
- "What's the difference between the 'standard' and 'optimized' configurations?"
- "How do we classify issue severity?"

### Data Analysis Questions
- "Which vendor has the worst quality score and why?"
- "How many positions can a waterfall have?"
- "What percentage of issues are critical vs high priority?"

---

## Key Files Reference

| File | Purpose | Key Concepts |
|------|---------|--------------|
| `models/vendor.py` | Vendor data model | Quality scores, vendor relationships |
| `models/candidate.py` | Candidate profiles | Discovered position, data staleness |
| `models/data_quality_issue.py` | Quality problems | Issue types, severity classification |
| `models/waterfall_config.py` | Priority ordering | Position-based vendor sequencing |
| `services/waterfall_manager.py` | Query orchestration | Sequential vendor queries, fallthrough logic |
| `services/vendor_scorer.py` | Quality metrics | Weighted scoring formula |
| `services/data_quality_analyzer.py` | Issue aggregation | Bounce rates, severity breakdowns |
| `database.py` | SQLAlchemy setup | Session management, DB initialization |
| `seed_data.py` | Data population | Sample data generation |

---

## Real-World Context

This system is based on actual recruiting operations at tech companies:

- **Vendors**: Real companies like Cognism, ZoomInfo, LinkedIn Recruiter, etc.
- **Waterfall**: Common pattern for balancing cost and quality in data procurement
- **Quality Metrics**: Based on Q2-Q3 2024 analysis of 9,600+ data quality issues
- **Business Impact**: Optimizing waterfall reduced issues by 60-70%, saved $XXX,XXX annually

---

## License

Copyright Anysphere Inc.

---

*This is a demo codebase designed to showcase Cursor's code exploration capabilities for Product Managers.*

