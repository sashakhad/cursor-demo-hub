# Recruiting Operations Demo Environment

A comprehensive demo environment showcasing multiple aspects of a modern recruiting operations platform, including AI-powered sourcing, vendor data quality analysis, and PM research artifacts.

![Status](https://img.shields.io/badge/status-demo-blue)
![Python](https://img.shields.io/badge/python-3.9+-blue)
![Next.js](https://img.shields.io/badge/next.js-15.5-black)
![FastAPI](https://img.shields.io/badge/fastapi-0.104-teal)

## 🎯 Demo Components

This is a **demo environment** containing three main components that together represent a complete recruiting operations ecosystem:

### 1. 🤖 AI Sourcing Tool (Interactive Demo)
**Frontend + Backend Application**

A sophisticated, AI-powered candidate sourcing platform for Technical Account Manager roles.

- **Modern React frontend** (Next.js 15) with real-time filtering
- **FastAPI backend** with SQLite database
- **250 realistic candidate profiles** across 3 personas
- **AI-powered scoring** with natural language search criteria
- **Advanced filtering** with boolean logic (AND/OR)
- **Quality dashboard** with 9,600+ vendor issue reports

**Status:** ✅ Fully interactive - start the demo and explore!

**Quick Start:** See [AI Sourcing Tool Setup](#ai-sourcing-tool-setup) below

### 2. 📊 Vendor Waterfall & Data Quality System (Backend Demo)
**Data Quality Analysis + Waterfall Orchestration**

A backend service demonstrating vendor waterfall management and data quality analysis.

- **Vendor waterfall system** for optimized data procurement
- **Quality scoring** across 6 data vendors
- **9,600+ real data quality issues** from Q2-Q3 2024
- **Waterfall configurations** (standard, optimized, executive)
- **84% issue reduction potential** through optimization
- **Executive reports** and detailed analysis

**Status:** ✅ Backend services + analysis reports available

**Learn More:** 
- [src/README.md](src/README.md) - Vendor waterfall system documentation
- [analysis/README.md](analysis/README.md) - Quality analysis and recommendations

### 3. 📝 PM Research & Customer Insights
**Interview Transcripts + Meeting Notes**

Research content and artifacts for product management workflows.

- **24 customer interview transcripts** (Stripe, Netflix, Goldman Sachs, etc.)
- **Internal meeting notes** and planning documents
- **Prompt engineering examples** for AI-generated content
- Real-world context for product decisions

**Status:** ✅ Read-only content for exploration

**Browse Content:** [notes/](notes/)

---

## 🧭 Where to Start

**Want to run the interactive demo?**  
→ Go to [AI Sourcing Tool Setup](#ai-sourcing-tool-setup) below

**Want to understand the vendor waterfall system?**  
→ Read [src/README.md](src/README.md) for complete documentation

**Want to see the data quality analysis?**  
→ Start with [analysis/EXECUTIVE_SUMMARY.md](analysis/EXECUTIVE_SUMMARY.md) (5 min read)

**Want to explore customer research?**  
→ Browse interview transcripts in [notes/transcripts/company-transcripts/](notes/transcripts/company-transcripts/)

---

## 🚀 AI Sourcing Tool Setup

The interactive AI Sourcing Tool is the primary demo - follow these steps to get it running:

### Prerequisites
- Python 3.9+
- Node.js 16+
- npm or yarn

### Option 1: Quick Start (Recommended)

Use the automated startup script:

```bash
./start_demo.sh
```

This will:
- Check and install dependencies
- Generate demo data if needed
- Start both backend and frontend
- Open the application in your browser

**Access the demo:**
- Frontend: `http://localhost:3002`
- Backend API: `http://localhost:8000`
- API Docs: `http://localhost:8000/docs`

### Option 2: Manual Setup

If you prefer to start services individually:

#### 1. Install Backend Dependencies

```bash
pip install -r requirements.txt
```

#### 2. Generate Demo Data

```bash
cd src
python3 seed_all_data.py
```

This creates:
- 250 TAM candidates across 3 personas
- 6 data vendors with quality metrics
- 9,600+ data quality issues
- 3 waterfall configurations

#### 3. Start the Backend

```bash
cd src
python3 -m uvicorn api.main:app --reload
```

Backend runs at: `http://localhost:8000`

#### 4. Install Frontend Dependencies

```bash
cd frontend
npm install
```

#### 5. Start the Frontend

```bash
cd frontend
npm run dev
```

Frontend runs at: `http://localhost:3000` (or next available port)

---

## 📋 AI Sourcing Tool Features

### **Three Candidate Personas**

1. **Engineer → PM/Solutions** (40% of pool)
   - Former engineers who transitioned to PM or Solutions roles
   - Strong technical background with customer-facing experience
   - 2-5 years tenure at well-regarded startups (2018-2023)

2. **CS/Solutions Leaders** (40% of pool)
   - Customer Success or Solutions leaders from top tech startups
   - Experience at companies like Brex, Ramp, Gong, Rippling
   - 3+ years of enterprise CS experience

3. **Former Founders** (20% of pool)
   - Non-traditional high-upside candidates
   - Entrepreneurial background
   - Transitioned to operational roles at early-stage startups

## ✨ Key Features

### 🤖 AI-Powered Scoring
- **Weighted algorithms** with 5 scoring components per persona
- **Realistic variance** to simulate real-world candidate quality
- **0-100 scoring** across technical background, customer-facing experience, startup fit, company tier, and tenure

### 🎨 Modern UI/UX
- **Clean, polished design** with blue and jewel tones
- **Real-time filtering** with 300ms debounce
- **Expandable candidate rows** showing detailed score breakdowns
- **Smooth animations** and loading states
- **Responsive layout** optimized for desktop

### 🔍 Powerful Filtering
- **AI Persona Filters**: Select persona type to optimize ranking
- **Deterministic Filters**: Location, company, title, school, years of experience
- **Real-time updates**: Results refresh as you adjust filters
- **Always sorted** by AI fit score (highest first)

## 🧪 Testing

### Run API Tests

```bash
# Python test script (recommended)
python3 tests/test_api.py

# Bash test script (alternative)
./tests/test_api.sh
```

### Manual Testing

```bash
# Health check
curl http://localhost:8000/health

# Get candidates
curl "http://localhost:8000/api/candidates?limit=5"

# Filter by persona
curl "http://localhost:8000/api/candidates?persona=engineer_to_pm&limit=5"

# Combined filters
curl "http://localhost:8000/api/candidates?persona=cs_solutions_leader&companies=Stripe,Brex&min_years=3"
```

### API Documentation

Interactive API docs available at:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## 📁 Project Structure

```
.
├── src/                             # Backend: AI Sourcing + Vendor Waterfall
│   ├── api/
│   │   ├── main.py                  # FastAPI application
│   │   └── routes/
│   │       ├── candidates.py        # AI Sourcing endpoints
│   │       └── quality_reports.py   # Vendor quality endpoints
│   ├── models/
│   │   ├── candidate.py             # Candidate profiles
│   │   ├── vendor.py                # Vendor data model
│   │   ├── waterfall_config.py      # Waterfall configurations
│   │   └── data_quality_issue.py    # Quality issue model
│   ├── services/
│   │   ├── scoring_engine.py        # AI candidate scoring
│   │   ├── waterfall_manager.py     # Vendor orchestration
│   │   ├── vendor_scorer.py         # Vendor quality metrics
│   │   └── data_quality_analyzer.py # Issue aggregation
│   ├── seed_all_data.py             # Generate all demo data
│   └── README.md                    # Backend system docs
│
├── frontend/                        # Frontend: React/Next.js UI
│   ├── app/
│   │   ├── page.tsx                 # AI Sourcing search page
│   │   └── quality/
│   │       └── page.tsx             # Quality dashboard
│   ├── components/
│   │   ├── CandidateTable.tsx       # Candidate results
│   │   ├── FilterPanel.tsx          # Search filters
│   │   ├── QualitySummaryCards.tsx  # Quality metrics
│   │   └── WaterfallAnalysis.tsx    # Waterfall visualization
│   └── lib/
│       └── api.ts                   # API client
│
├── analysis/                        # Vendor Quality Analysis
│   ├── EXECUTIVE_SUMMARY.md         # Key findings (start here)
│   ├── waterfall_optimization_report.md  # Full analysis
│   ├── vendor_analysis.py           # Analysis script
│   ├── vendor_metrics.json          # Calculated metrics
│   └── README.md                    # Analysis docs
│
├── notes/                           # PM Research Content
│   ├── transcripts/
│   │   ├── company-transcripts/     # 24 customer interviews
│   │   └── team-meetings/           # Internal meetings
│   └── prompt building/             # Prompt engineering examples
│
├── data/                            # Data & Database
│   ├── recruiting_data.db           # SQLite database
│   └── stale_data_report_april25-sept25/  # Historical data
│
├── tests/                           # Test scripts
│   ├── test_api.py                  # Python test suite
│   └── test_api.sh                  # Bash test script
│
├── logs/                            # Application logs
├── docs/                            # Additional documentation
├── README.md                        # This file (overview)
├── requirements.txt                 # Python dependencies
└── start_demo.sh                    # Quick start script
```

## 🎨 UI Components

### Filter Panel
- **AI Persona Selection**: Three persona cards with descriptions
- **Deterministic Filters**: Dropdowns and checkboxes for precise filtering
- **Active Filter Count**: Visual indicators showing applied filters
- **Clear All**: Reset all filters with one click

### Candidate Table
- **Sortable Columns**: Name, title, company, location, AI fit score
- **Color-Coded Scores**: 
  - 🟢 80-100: Excellent fit
  - 🔵 60-79: Good fit
  - 🟣 40-59: Moderate fit
  - ⚪ 0-39: Lower fit
- **Expandable Rows**: Click any row to see:
  - Score breakdown (5 components)
  - Work history timeline
  - Skills and competencies
  - Education
  - AI reasoning for score

### Header
- **Live Result Count**: Updates in real-time
- **Active Filter Badges**: Shows all applied filters
- **Clean Typography**: Modern, readable design

## 🔧 Configuration

### Backend Configuration
Located in `src/config.py`:
- Database URL
- API settings

### Frontend Configuration
Located in `frontend/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

## 📊 Scoring Methodology

### Persona 1: Engineer→PM/Solutions
- **30%** Technical background
- **30%** Customer-facing experience
- **20%** Startup culture fit
- **10%** Company tier alignment
- **10%** Tenure appropriateness

### Persona 2: CS/Solutions Leaders
- **35%** Customer-facing experience
- **20%** Technical background
- **20%** Startup culture fit
- **15%** Company tier alignment
- **10%** Tenure appropriateness

### Persona 3: Former Founders
- **30%** Technical background (founder experience)
- **25%** Customer-facing experience
- **25%** Startup culture fit
- **10%** Company tier alignment
- **10%** Tenure appropriateness

## 🌐 API Endpoints

### `GET /api/candidates`
Get filtered list of candidates

**Query Parameters:**
- `persona` - Filter by persona type
- `location` - Filter by location
- `companies` - Comma-separated list
- `titles` - Comma-separated list
- `schools` - Comma-separated list
- `min_years` - Minimum years of experience
- `max_years` - Maximum years of experience
- `limit` - Number of results (default: 100)
- `offset` - Pagination offset

**Response:** Array of candidates sorted by AI fit score

### `GET /api/candidates/{id}`
Get specific candidate by ID

**Response:** Single candidate with full details

### `GET /api/filters/options`
Get available filter options

**Response:** Object with locations, companies, titles, schools, and personas

### `GET /health`
Health check endpoint

**Response:** `{"status": "healthy"}`

## 🎯 Demo Scenarios

### Scenario 1: Find Technical Former Engineers
1. Select "Engineer → PM/Solutions" persona
2. Add company filter: Stripe, Databricks, Snowflake
3. Set years: 3-5
4. Review top candidates sorted by AI fit score

### Scenario 2: Find CS Leaders from Top Startups
1. Select "CS/Solutions Leaders" persona
2. Add company filter: Brex, Ramp, Gong, Rippling
3. Filter by titles: "Senior Customer Success Manager"
4. Review candidates with highest scores

### Scenario 3: Find High-Upside Non-Traditional Candidates
1. Select "Former Founders" persona
2. Review candidates sorted by fit score
3. Expand rows to see entrepreneurial background
4. Note transition to operational roles

## 🔄 Data Generation

The seed script (`seed_tam_candidates.py`) generates realistic candidate profiles:

- **Names & Contact**: Using Faker library
- **Work History**: 2-3 jobs with realistic companies and tenure
- **Skills**: Mix of technical and customer-facing skills
- **Education**: Top CS schools (Stanford, MIT, etc.)
- **Scores**: Weighted algorithms with realistic variance

## 🐛 Troubleshooting

### Backend won't start
```bash
# Check Python version
python3 --version  # Should be 3.9+

# Reinstall dependencies
pip install -r requirements.txt

# Check if database exists
ls data/recruiting_data.db
```

### Frontend won't connect to API
```bash
# Verify backend is running
curl http://localhost:8000/health

# Check CORS settings in src/api/main.py
# Check .env.local file exists in frontend/
```

### No candidates showing
```bash
# Re-run seed script
cd src
python3 seed_tam_candidates.py

# Verify database has data
python3 -c "from database import get_db_session; from models.candidate import Candidate; \
with get_db_session() as session: print(f'Candidates: {session.query(Candidate).count()}')"
```

### Port already in use
```bash
# Backend: Change port in uvicorn command
python3 -m uvicorn api.main:app --reload --port 8001

# Frontend: Next.js will auto-increment to available port
```

## 📚 Additional Documentation

### AI Sourcing Tool
- **API Docs**: `http://localhost:8000/docs` (Swagger UI when backend running)
- **tests/test_api.py**: Example API usage and integration tests

### Vendor Waterfall System
- **[src/README.md](src/README.md)**: Complete vendor waterfall documentation
  - Database schema and relationships
  - Waterfall execution logic
  - Quality scoring methodology
  - Business logic deep dive
  
### Vendor Quality Analysis
- **[analysis/README.md](analysis/README.md)**: Analysis overview
- **[analysis/EXECUTIVE_SUMMARY.md](analysis/EXECUTIVE_SUMMARY.md)**: Key findings (5 min read)
- **[analysis/waterfall_optimization_report.md](analysis/waterfall_optimization_report.md)**: Full report (30 min read)

### PM Research Content
- **[notes/transcripts/company-transcripts/](notes/transcripts/company-transcripts/)**: 24 customer interviews
- **[notes/prompt building/](notes/prompt%20building/)**: Prompt engineering examples

## 🔐 Demo Environment Notes

- This is a **demo environment** with mock data for exploration and learning
- **Candidate data** is randomly generated but follows realistic patterns
- **Vendor quality issues** are based on real Q2-Q3 2024 data (9,600+ issues)
- **Customer transcripts** are AI-generated examples for PM workflows
- AI fit scores use weighted algorithms with realistic variance
- All data resets when re-running the seed script
- Not intended for production use

## 📄 License

Copyright Anysphere Inc.

---

**Built with:**
- FastAPI (Python backend)
- Next.js 15 (React frontend)
- TypeScript
- Tailwind CSS 4
- SQLite
- SQLAlchemy

**For questions or issues**, check the troubleshooting section or review the test scripts for example API usage.

