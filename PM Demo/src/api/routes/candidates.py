"""
Candidates API Routes
Endpoints for querying and filtering TAM candidates.
Copyright Anysphere Inc.
"""

from fastapi import APIRouter, Query, HTTPException
from typing import List, Optional
from pydantic import BaseModel
import sys
import os

# Add parent directory to path for imports
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))

from database import get_db_session
from models.candidate import Candidate
from services.scoring_engine import ScoringEngine

router = APIRouter()


class CandidateResponse(BaseModel):
    """Response model for candidate data"""
    id: int
    candidate_id: str
    full_name: str
    email: Optional[str]
    current_title: Optional[str]
    current_company: Optional[str]
    seniority_level: Optional[str]
    city: Optional[str]
    state: Optional[str]
    region: Optional[str]
    country: Optional[str]
    education: Optional[str]
    years_in_role: Optional[int]
    is_former_founder: bool
    linkedin_url: Optional[str]
    work_history: List[dict]
    skills: List[str]
    persona_scores: dict
    overall_score: float
    selected_persona_score: Optional[dict] = None
    last_contacted_at: Optional[str] = None

    class Config:
        from_attributes = True


class FilterOptionsResponse(BaseModel):
    """Response model for available filter options"""
    locations: List[str]
    companies: List[str]
    titles: List[str]
    schools: List[str]
    personas: List[dict]


@router.get("/candidates", response_model=List[CandidateResponse])
async def get_candidates(
    ai_criteria: Optional[str] = Query(None, description="AI-powered search criteria"),
    persona: Optional[str] = Query(None, description="Filter by persona type (deprecated, use ai_criteria)"),
    location: Optional[str] = Query(None, description="Filter by location"),
    location_operator: Optional[str] = Query("OR", description="Boolean operator for locations (OR/AND)"),
    companies: Optional[str] = Query(None, description="Comma-separated list of companies"),
    companies_operator: Optional[str] = Query("OR", description="Boolean operator for companies (OR/AND)"),
    titles: Optional[str] = Query(None, description="Comma-separated list of titles"),
    titles_operator: Optional[str] = Query("OR", description="Boolean operator for titles (OR/AND)"),
    schools: Optional[str] = Query(None, description="Comma-separated list of schools"),
    schools_operator: Optional[str] = Query("OR", description="Boolean operator for schools (OR/AND)"),
    min_years: Optional[int] = Query(None, description="Minimum years of experience"),
    max_years: Optional[int] = Query(None, description="Maximum years of experience"),
    limit: int = Query(100, le=500, description="Maximum number of results"),
    offset: int = Query(0, description="Offset for pagination")
):
    """
    Get TAM candidates with optional filtering.
    Results are sorted by AI fit score (highest first).
    """
    with get_db_session() as session:
        # Base query
        query = session.query(Candidate)
        
        # Apply deterministic filters with boolean logic
        from sqlalchemy import or_, and_
        
        if location:
            location_list = [loc.strip() for loc in location.split(',')]
            location_filters = [Candidate.country.ilike(f"%{loc}%") for loc in location_list]
            if location_filters:
                if location_operator == "AND":
                    query = query.filter(and_(*location_filters))
                else:
                    query = query.filter(or_(*location_filters))
        
        if companies:
            company_list = [c.strip() for c in companies.split(',')]
            if companies_operator == "AND":
                # For AND: candidate must have worked at all companies (check work history)
                for company in company_list:
                    query = query.filter(
                        or_(
                            Candidate.current_company.ilike(f"%{company}%"),
                            Candidate.work_history.cast(str).ilike(f"%{company}%")
                        )
                    )
            else:
                # For OR: candidate must have worked at any of the companies
                company_filters = [
                    or_(
                        Candidate.current_company.ilike(f"%{c}%"),
                        Candidate.work_history.cast(str).ilike(f"%{c}%")
                    )
                    for c in company_list
                ]
                query = query.filter(or_(*company_filters))
        
        if titles:
            title_list = [t.strip() for t in titles.split(',')]
            title_filters = [Candidate.current_title.ilike(f"%{t}%") for t in title_list]
            if title_filters:
                if titles_operator == "AND":
                    query = query.filter(and_(*title_filters))
                else:
                    query = query.filter(or_(*title_filters))
        
        if schools:
            school_list = [s.strip() for s in schools.split(',')]
            school_filters = [Candidate.education.ilike(f"%{s}%") for s in school_list]
            if school_filters:
                if schools_operator == "AND":
                    query = query.filter(and_(*school_filters))
                else:
                    query = query.filter(or_(*school_filters))
        
        if min_years is not None:
            query = query.filter(Candidate.years_in_role >= min_years)
        
        if max_years is not None:
            query = query.filter(Candidate.years_in_role <= max_years)
        
        # Get all matching candidates
        candidates = query.all()
        
        # Convert to response format
        results = []
        scoring_engine = ScoringEngine()
        
        for candidate in candidates:
            candidate_dict = candidate.to_dict()
            persona_scores = candidate.get_persona_scores()
            
            # If ai_criteria is provided, use it to score candidates
            if ai_criteria:
                # Parse multiple criteria (separated by |||)
                criteria_list = [c.strip() for c in ai_criteria.split('|||') if c.strip()]
                
                if len(criteria_list) > 1:
                    # Score candidate based on multiple AI criteria
                    ai_score = scoring_engine.score_candidate_with_multiple_criteria(
                        candidate_dict, 
                        criteria_list
                    )
                else:
                    # Score candidate based on single AI criterion
                    ai_score = scoring_engine.score_candidate_with_ai_criteria(
                        candidate_dict, 
                        criteria_list[0] if criteria_list else ai_criteria
                    )
                
                overall_score = ai_score.get('overall', 0)
                selected_persona_score = ai_score
            elif persona and persona in persona_scores:
                # Use selected persona score
                overall_score = persona_scores[persona].get('overall', 0)
                selected_persona_score = persona_scores[persona]
            else:
                # If no persona or AI criteria, use the highest score
                if persona_scores:
                    max_persona = max(
                        persona_scores.items(),
                        key=lambda x: x[1].get('overall', 0)
                    )
                    overall_score = max_persona[1].get('overall', 0)
                    selected_persona_score = max_persona[1]
                else:
                    overall_score = 0
                    selected_persona_score = None
            
            results.append(CandidateResponse(
                id=candidate_dict['id'],
                candidate_id=candidate_dict['candidate_id'],
                full_name=candidate_dict['full_name'],
                email=candidate_dict['email'],
                current_title=candidate_dict['current_title'],
                current_company=candidate_dict['current_company'],
                seniority_level=candidate_dict['seniority_level'],
                city=candidate_dict.get('city'),
                state=candidate_dict.get('state'),
                region=candidate_dict['region'],
                country=candidate_dict['country'],
                education=candidate_dict['education'],
                years_in_role=candidate_dict['years_in_role'],
                is_former_founder=candidate_dict['is_former_founder'],
                linkedin_url=candidate_dict['linkedin_url'],
                work_history=candidate_dict['work_history'],
                skills=candidate_dict['skills'],
                persona_scores=persona_scores,
                overall_score=overall_score,
                selected_persona_score=selected_persona_score,
                last_contacted_at=candidate_dict.get('last_contacted_at')
            ))
        
        # Sort by overall score (descending)
        results.sort(key=lambda x: x.overall_score, reverse=True)
        
        # Apply pagination
        paginated_results = results[offset:offset + limit]
        
        return paginated_results


@router.get("/candidates/{candidate_id}", response_model=CandidateResponse)
async def get_candidate_by_id(candidate_id: str):
    """
    Get a specific candidate by ID.
    """
    with get_db_session() as session:
        candidate = session.query(Candidate).filter(
            Candidate.candidate_id == candidate_id
        ).first()
        
        if not candidate:
            raise HTTPException(status_code=404, detail="Candidate not found")
        
        candidate_dict = candidate.to_dict()
        persona_scores = candidate.get_persona_scores()
        
        # Use highest score as overall
        if persona_scores:
            max_persona = max(
                persona_scores.items(),
                key=lambda x: x[1].get('overall', 0)
            )
            overall_score = max_persona[1].get('overall', 0)
            selected_persona_score = max_persona[1]
        else:
            overall_score = 0
            selected_persona_score = None
        
        return CandidateResponse(
            id=candidate_dict['id'],
            candidate_id=candidate_dict['candidate_id'],
            full_name=candidate_dict['full_name'],
            email=candidate_dict['email'],
            current_title=candidate_dict['current_title'],
            current_company=candidate_dict['current_company'],
            seniority_level=candidate_dict['seniority_level'],
            city=candidate_dict.get('city'),
            state=candidate_dict.get('state'),
            region=candidate_dict['region'],
            country=candidate_dict['country'],
            education=candidate_dict['education'],
            years_in_role=candidate_dict['years_in_role'],
            is_former_founder=candidate_dict['is_former_founder'],
            linkedin_url=candidate_dict['linkedin_url'],
            work_history=candidate_dict['work_history'],
            skills=candidate_dict['skills'],
            persona_scores=persona_scores,
            overall_score=overall_score,
            selected_persona_score=selected_persona_score,
            last_contacted_at=candidate_dict.get('last_contacted_at')
        )


@router.get("/filters/options", response_model=FilterOptionsResponse)
async def get_filter_options():
    """
    Get available options for all filters.
    """
    with get_db_session() as session:
        candidates = session.query(Candidate).all()
        
        # Extract unique values
        locations = sorted(list(set(
            c.country for c in candidates if c.country
        )))
        
        companies = sorted(list(set(
            c.current_company for c in candidates if c.current_company
        )))
        
        titles = sorted(list(set(
            c.current_title for c in candidates if c.current_title
        )))
        
        schools = sorted(list(set(
            c.education.split(', ')[-1] if c.education and ', ' in c.education else c.education
            for c in candidates if c.education
        )))
        
        # Persona definitions
        personas = [
            {
                "id": ScoringEngine.PERSONA_1,
                "name": "Engineer → PM/Solutions",
                "description": "Former engineers with PM/solutions experience at well-regarded startups (2018-2023). Strong technical background with 2-5 years in customer-facing roles.",
                "color": "blue"
            },
            {
                "id": ScoringEngine.PERSONA_2,
                "name": "CS/Solutions Leaders",
                "description": "Customer Success or Solutions leaders at top tech startups (Brex, Ramp, Gong, Rippling, etc.). 3+ years of enterprise CS experience.",
                "color": "purple"
            },
            {
                "id": ScoringEngine.PERSONA_3,
                "name": "Former Founders",
                "description": "Non-traditional candidates with high upside. Former founders who transitioned into operational roles at early-stage startups.",
                "color": "emerald"
            }
        ]
        
        return FilterOptionsResponse(
            locations=locations,
            companies=companies,
            titles=titles,
            schools=schools,
            personas=personas
        )

