"""
AI Fit Scoring Engine
Calculates persona-based fit scores for TAM candidates with realistic variance.
Copyright Anysphere Inc.
"""

import random
from typing import Dict, List, Tuple
from datetime import datetime


class ScoringEngine:
    """
    Calculates AI fit scores for Technical Account Manager candidates
    across different persona types with weighted criteria.
    """
    
    # Persona definitions
    PERSONA_1 = "engineer_to_pm"  # Former engineers → PM/Solutions
    PERSONA_2 = "cs_solutions_leader"  # CS/Solutions leaders at top startups
    PERSONA_3 = "former_founder"  # Former founders with high upside
    
    # Well-regarded tech startups (recent 5 years)
    TOP_STARTUPS = [
        'Stripe', 'Databricks', 'Snowflake', 'Figma', 'Notion',
        'Brex', 'Ramp', 'Gong', 'Rippling', 'GitLab', 'Confluent',
        'Plaid', 'Scale AI', 'Anthropic', 'OpenAI', 'Retool',
        'Linear', 'Vercel', 'Clerk', 'Neon', 'Supabase'
    ]
    
    # Tier 1 tech companies
    TIER_1_COMPANIES = [
        'Google', 'Meta', 'Amazon', 'Microsoft', 'Apple',
        'Netflix', 'Uber', 'Airbnb', 'Twitter', 'LinkedIn'
    ]
    
    # Engineering/technical titles
    ENGINEERING_TITLES = [
        'Software Engineer', 'Senior Software Engineer', 'Staff Engineer',
        'Principal Engineer', 'Engineering Manager', 'Tech Lead',
        'Backend Engineer', 'Frontend Engineer', 'Full Stack Engineer',
        'DevOps Engineer', 'SRE', 'Data Engineer', 'ML Engineer'
    ]
    
    # PM/Solutions titles
    PM_SOLUTIONS_TITLES = [
        'Product Manager', 'Senior Product Manager', 'Principal PM',
        'Technical Product Manager', 'Solutions Engineer', 'Solutions Architect',
        'Technical Solutions Engineer', 'Sales Engineer', 'PreSales Engineer'
    ]
    
    # CS/TAM titles
    CS_TAM_TITLES = [
        'Customer Success Manager', 'Senior CSM', 'Enterprise CSM',
        'Technical Account Manager', 'Senior TAM', 'Strategic Account Manager',
        'Solutions Consultant', 'Customer Solutions Manager'
    ]
    
    @staticmethod
    def calculate_persona_scores(
        work_history: List[Dict],
        skills: List[str],
        is_former_founder: bool,
        current_title: str,
        years_in_role: int
    ) -> Dict[str, Dict]:
        """
        Calculate fit scores for all three personas.
        
        Returns:
            Dict with persona keys, each containing overall score and sub-scores
        """
        return {
            ScoringEngine.PERSONA_1: ScoringEngine._score_persona_1(
                work_history, skills, current_title, years_in_role
            ),
            ScoringEngine.PERSONA_2: ScoringEngine._score_persona_2(
                work_history, skills, current_title, years_in_role
            ),
            ScoringEngine.PERSONA_3: ScoringEngine._score_persona_3(
                work_history, skills, is_former_founder, current_title, years_in_role
            )
        }
    
    @staticmethod
    def _score_persona_1(
        work_history: List[Dict],
        skills: List[str],
        current_title: str,
        years_in_role: int
    ) -> Dict:
        """
        Score Persona 1: Former engineers → PM/Solutions with customer-facing experience
        
        Criteria:
        - Technical background (engineering experience)
        - Transition to PM/Solutions role
        - Customer-facing tenure at well-regarded startups
        - Years in customer-facing roles (2-5 years ideal)
        """
        scores = {}
        
        # Technical background (0-100)
        tech_score = 0
        has_eng_background = False
        for job in work_history:
            title = job.get('title', '').lower()
            if any(eng_title.lower() in title for eng_title in ScoringEngine.ENGINEERING_TITLES):
                has_eng_background = True
                years = job.get('years', 0)
                tech_score = min(100, 60 + (years * 8))  # Base 60, +8 per year
                break
        
        # Add realistic variance
        if has_eng_background:
            tech_score = min(100, max(0, tech_score + random.randint(-8, 8)))
        
        scores['technical_background'] = tech_score
        
        # Customer-facing experience (0-100)
        customer_facing_score = 0
        for job in work_history:
            title = job.get('title', '').lower()
            company = job.get('company', '')
            years = job.get('years', 0)
            
            is_pm_solutions = any(pm_title.lower() in title for pm_title in ScoringEngine.PM_SOLUTIONS_TITLES)
            is_cs_tam = any(cs_title.lower() in title for cs_title in ScoringEngine.CS_TAM_TITLES)
            
            if is_pm_solutions or is_cs_tam:
                base_score = 50
                # Bonus for top startups
                if company in ScoringEngine.TOP_STARTUPS:
                    base_score += 20
                elif company in ScoringEngine.TIER_1_COMPANIES:
                    base_score += 10
                
                # Tenure bonus (2-5 years is sweet spot)
                if 2 <= years <= 5:
                    base_score += 20
                elif years > 5:
                    base_score += 10
                elif years >= 1:
                    base_score += 5
                
                customer_facing_score = max(customer_facing_score, base_score)
        
        customer_facing_score = min(100, max(0, customer_facing_score + random.randint(-5, 5)))
        scores['customer_facing_experience'] = customer_facing_score
        
        # Startup culture fit (0-100)
        startup_score = 0
        for job in work_history:
            company = job.get('company', '')
            if company in ScoringEngine.TOP_STARTUPS:
                startup_score = min(100, startup_score + 35)
            elif company in ScoringEngine.TIER_1_COMPANIES:
                startup_score = min(100, startup_score + 15)
        
        startup_score = min(100, max(0, startup_score + random.randint(-5, 10)))
        scores['startup_culture_fit'] = startup_score
        
        # Company tier alignment (0-100)
        company_tier_score = 0
        for job in work_history:
            company = job.get('company', '')
            if company in ScoringEngine.TOP_STARTUPS:
                company_tier_score = max(company_tier_score, 85 + random.randint(-10, 15))
            elif company in ScoringEngine.TIER_1_COMPANIES:
                company_tier_score = max(company_tier_score, 75 + random.randint(-10, 10))
        
        scores['company_tier_alignment'] = min(100, company_tier_score)
        
        # Tenure appropriateness (0-100)
        tenure_score = 50
        if years_in_role:
            if 2 <= years_in_role <= 5:
                tenure_score = 85 + random.randint(-5, 15)
            elif 1 <= years_in_role < 2:
                tenure_score = 70 + random.randint(-10, 10)
            elif 5 < years_in_role <= 8:
                tenure_score = 75 + random.randint(-10, 10)
            else:
                tenure_score = 55 + random.randint(-10, 15)
        
        scores['tenure_appropriateness'] = min(100, tenure_score)
        
        # Calculate weighted overall score
        weights = {
            'technical_background': 0.30,
            'customer_facing_experience': 0.30,
            'startup_culture_fit': 0.20,
            'company_tier_alignment': 0.10,
            'tenure_appropriateness': 0.10
        }
        
        overall = sum(scores[key] * weights[key] for key in weights)
        scores['overall'] = round(overall, 1)
        
        # Add reasoning
        scores['reasoning'] = ScoringEngine._generate_reasoning_persona_1(
            has_eng_background, work_history, years_in_role
        )
        
        return scores
    
    @staticmethod
    def _score_persona_2(
        work_history: List[Dict],
        skills: List[str],
        current_title: str,
        years_in_role: int
    ) -> Dict:
        """
        Score Persona 2: CS/Solutions leaders at top startups
        
        Criteria:
        - CS/Solutions experience at Brex, Ramp, Gong, Rippling, etc.
        - Leadership indicators
        - Tenure at quality startups
        """
        scores = {}
        
        # CS/Solutions experience (0-100)
        cs_experience_score = 0
        for job in work_history:
            title = job.get('title', '').lower()
            years = job.get('years', 0)
            
            is_cs_tam = any(cs_title.lower() in title for cs_title in ScoringEngine.CS_TAM_TITLES)
            is_pm_solutions = any(pm_title.lower() in title for pm_title in ScoringEngine.PM_SOLUTIONS_TITLES)
            
            if is_cs_tam or is_pm_solutions:
                base_score = 60 + (years * 5)
                cs_experience_score = max(cs_experience_score, min(100, base_score))
        
        cs_experience_score = min(100, max(0, cs_experience_score + random.randint(-5, 10)))
        scores['customer_facing_experience'] = cs_experience_score
        
        # Technical depth (0-100)
        tech_score = 40  # Base score for CS/Solutions roles
        technical_skills = ['API', 'SQL', 'Python', 'Integration', 'Architecture', 'SaaS', 'Cloud']
        matching_skills = sum(1 for skill in skills if any(tech in skill for tech in technical_skills))
        tech_score += min(50, matching_skills * 8)
        tech_score = min(100, max(0, tech_score + random.randint(-5, 10)))
        scores['technical_background'] = tech_score
        
        # Startup culture fit (0-100)
        startup_score = 0
        for job in work_history:
            company = job.get('company', '')
            if company in ScoringEngine.TOP_STARTUPS:
                startup_score = min(100, startup_score + 40)
        
        startup_score = min(100, max(0, startup_score + random.randint(-5, 15)))
        scores['startup_culture_fit'] = startup_score
        
        # Company tier alignment (0-100)
        company_tier_score = 0
        target_companies = ['Brex', 'Ramp', 'Gong', 'Rippling', 'Stripe', 'Plaid', 'Retool']
        for job in work_history:
            company = job.get('company', '')
            if company in target_companies:
                company_tier_score = max(company_tier_score, 90 + random.randint(-5, 10))
            elif company in ScoringEngine.TOP_STARTUPS:
                company_tier_score = max(company_tier_score, 75 + random.randint(-5, 10))
        
        scores['company_tier_alignment'] = min(100, company_tier_score)
        
        # Tenure appropriateness (0-100)
        tenure_score = 50
        if years_in_role:
            if 3 <= years_in_role <= 6:
                tenure_score = 85 + random.randint(-5, 15)
            elif 2 <= years_in_role < 3:
                tenure_score = 75 + random.randint(-10, 10)
            elif 6 < years_in_role <= 10:
                tenure_score = 70 + random.randint(-10, 10)
            else:
                tenure_score = 55 + random.randint(-10, 10)
        
        scores['tenure_appropriateness'] = min(100, tenure_score)
        
        # Calculate weighted overall score
        weights = {
            'customer_facing_experience': 0.35,
            'technical_background': 0.20,
            'startup_culture_fit': 0.20,
            'company_tier_alignment': 0.15,
            'tenure_appropriateness': 0.10
        }
        
        overall = sum(scores[key] * weights[key] for key in weights)
        scores['overall'] = round(overall, 1)
        
        scores['reasoning'] = ScoringEngine._generate_reasoning_persona_2(work_history, years_in_role)
        
        return scores
    
    @staticmethod
    def _score_persona_3(
        work_history: List[Dict],
        skills: List[str],
        is_former_founder: bool,
        current_title: str,
        years_in_role: int
    ) -> Dict:
        """
        Score Persona 3: Former founders with high upside (non-traditional)
        
        Criteria:
        - Founder experience
        - Transition to operational roles
        - Early-stage startup experience
        """
        scores = {}
        
        # Founder background (0-100)
        founder_score = 0
        if is_former_founder:
            founder_score = 75 + random.randint(-5, 25)
            
            # Bonus if they've since taken operational roles
            has_operational_role = any(
                job.get('title', '').lower() in ['ceo', 'founder', 'co-founder']
                for job in work_history
            )
            if has_operational_role and len(work_history) > 1:
                founder_score = min(100, founder_score + 15)
        
        scores['technical_background'] = founder_score
        
        # Customer-facing transition (0-100)
        transition_score = 30  # Base for founders
        for job in work_history:
            title = job.get('title', '').lower()
            is_customer_facing = (
                any(cs_title.lower() in title for cs_title in ScoringEngine.CS_TAM_TITLES) or
                any(pm_title.lower() in title for pm_title in ScoringEngine.PM_SOLUTIONS_TITLES)
            )
            if is_customer_facing:
                transition_score = 80 + random.randint(-10, 20)
                break
        
        scores['customer_facing_experience'] = min(100, transition_score)
        
        # Startup culture fit (0-100) - naturally high for founders
        startup_score = 85 + random.randint(-10, 15)
        scores['startup_culture_fit'] = min(100, startup_score)
        
        # Company tier alignment (0-100)
        company_tier_score = 60  # Base for founders
        for job in work_history:
            company = job.get('company', '')
            if company in ScoringEngine.TOP_STARTUPS:
                company_tier_score = max(company_tier_score, 80 + random.randint(-5, 15))
        
        scores['company_tier_alignment'] = min(100, company_tier_score)
        
        # Tenure appropriateness (0-100)
        tenure_score = 65  # Founders often have varied tenure
        if years_in_role:
            if 1 <= years_in_role <= 3:
                tenure_score = 75 + random.randint(-5, 15)
            elif 3 < years_in_role <= 5:
                tenure_score = 80 + random.randint(-5, 10)
            else:
                tenure_score = 60 + random.randint(-10, 10)
        
        scores['tenure_appropriateness'] = min(100, tenure_score)
        
        # Calculate weighted overall score
        weights = {
            'technical_background': 0.30,
            'customer_facing_experience': 0.25,
            'startup_culture_fit': 0.25,
            'company_tier_alignment': 0.10,
            'tenure_appropriateness': 0.10
        }
        
        overall = sum(scores[key] * weights[key] for key in weights)
        scores['overall'] = round(overall, 1)
        
        scores['reasoning'] = ScoringEngine._generate_reasoning_persona_3(
            is_former_founder, work_history, years_in_role
        )
        
        return scores
    
    @staticmethod
    def _generate_reasoning_persona_1(
        has_eng_background: bool,
        work_history: List[Dict],
        years_in_role: int
    ) -> str:
        """Generate human-readable reasoning for Persona 1 score."""
        reasons = []
        
        if has_eng_background:
            reasons.append("Strong technical background as former engineer")
        
        customer_facing_companies = [
            job.get('company') for job in work_history
            if any(pm_title.lower() in job.get('title', '').lower() 
                   for pm_title in ScoringEngine.PM_SOLUTIONS_TITLES)
        ]
        
        if customer_facing_companies:
            top_companies = [c for c in customer_facing_companies if c in ScoringEngine.TOP_STARTUPS]
            if top_companies:
                reasons.append(f"Customer-facing experience at {', '.join(top_companies[:2])}")
        
        if years_in_role and 2 <= years_in_role <= 5:
            reasons.append(f"{years_in_role} years in role - ideal tenure")
        
        return "; ".join(reasons) if reasons else "Some relevant experience"
    
    @staticmethod
    def _generate_reasoning_persona_2(work_history: List[Dict], years_in_role: int) -> str:
        """Generate human-readable reasoning for Persona 2 score."""
        reasons = []
        
        target_companies = ['Brex', 'Ramp', 'Gong', 'Rippling', 'Stripe', 'Plaid']
        cs_companies = [
            job.get('company') for job in work_history
            if any(cs_title.lower() in job.get('title', '').lower() 
                   for cs_title in ScoringEngine.CS_TAM_TITLES)
        ]
        
        matching_target = [c for c in cs_companies if c in target_companies]
        if matching_target:
            reasons.append(f"CS/Solutions leader at {', '.join(matching_target[:2])}")
        elif cs_companies:
            top_matches = [c for c in cs_companies if c in ScoringEngine.TOP_STARTUPS]
            if top_matches:
                reasons.append(f"CS experience at {', '.join(top_matches[:2])}")
        
        if years_in_role and years_in_role >= 3:
            reasons.append(f"{years_in_role}+ years in customer success roles")
        
        return "; ".join(reasons) if reasons else "Relevant CS/Solutions experience"
    
    @staticmethod
    def _generate_reasoning_persona_3(
        is_former_founder: bool,
        work_history: List[Dict],
        years_in_role: int
    ) -> str:
        """Generate human-readable reasoning for Persona 3 score."""
        reasons = []
        
        if is_former_founder:
            reasons.append("Former founder with entrepreneurial background")
        
        operational_roles = [
            job.get('title') for job in work_history
            if not any(founder in job.get('title', '').lower() for founder in ['founder', 'ceo'])
        ]
        
        if operational_roles:
            reasons.append("Transitioned to operational role post-founding")
        
        startup_companies = [
            job.get('company') for job in work_history
            if job.get('company') in ScoringEngine.TOP_STARTUPS
        ]
        
        if startup_companies:
            reasons.append(f"Early-stage experience at {', '.join(startup_companies[:2])}")
        
        return "; ".join(reasons) if reasons else "Non-traditional high-upside candidate"
    
    def score_candidate_with_multiple_criteria(
        self,
        candidate_dict: Dict,
        criteria_list: List[str]
    ) -> Dict:
        """
        Score a candidate based on multiple AI criteria.
        Each criterion is scored independently (0-100).
        
        Args:
            candidate_dict: Dictionary containing candidate information
            criteria_list: List of natural language criteria
            
        Returns:
            Dictionary with overall score and individual criterion scores
        """
        if not criteria_list:
            return {}
        
        criterion_scores = []
        
        # Score each criterion independently with criterion-specific reasoning
        for criterion in criteria_list:
            score_result = self._score_single_criterion(candidate_dict, criterion)
            criterion_scores.append({
                'criterion': criterion,
                'score': score_result.get('score', 0),
                'reasoning': score_result.get('reasoning', '')
            })
        
        # Calculate overall score as average of all criterion scores
        if criterion_scores:
            overall_score = sum(cs['score'] for cs in criterion_scores) / len(criterion_scores)
        else:
            overall_score = 0
        
        # Build response with criterion scores
        result = {
            'overall': round(overall_score, 1),
            'criterion_scores': criterion_scores,
            # Keep component scores from first criterion for backwards compatibility
            'technical_background': 0,
            'customer_facing_experience': 0,
            'startup_culture_fit': 0,
            'company_tier_alignment': 0,
            'tenure_appropriateness': 0,
            'reasoning': f"Scored against {len(criterion_scores)} criteria"
        }
        
        return result
    
    def score_candidate_with_ai_criteria(
        self,
        candidate_dict: Dict,
        ai_criteria: str
    ) -> Dict:
        """
        Score a candidate based on free-text AI criteria.
        
        This is a mock implementation that uses keyword matching and heuristics.
        In production, this would use an LLM API to analyze the candidate against criteria.
        
        Args:
            candidate_dict: Dictionary containing candidate information
            ai_criteria: Natural language description of ideal candidate
            
        Returns:
            Dictionary with overall score and component scores
        """
        scores = {}
        criteria_lower = ai_criteria.lower()
        
        # Extract key terms from criteria
        work_history = candidate_dict.get('work_history', [])
        skills = candidate_dict.get('skills', [])
        current_title = candidate_dict.get('current_title', '')
        current_company = candidate_dict.get('current_company', '')
        years_in_role = candidate_dict.get('years_in_role', 0)
        
        # Technical background score (0-100)
        tech_score = self._score_technical_fit(
            criteria_lower, work_history, skills, current_title
        )
        scores['technical_background'] = tech_score
        
        # Customer-facing experience score (0-100)
        customer_score = self._score_customer_facing_fit(
            criteria_lower, work_history, current_title
        )
        scores['customer_facing_experience'] = customer_score
        
        # Company alignment score (0-100)
        company_score = self._score_company_alignment(
            criteria_lower, work_history, current_company
        )
        scores['company_tier_alignment'] = company_score
        
        # Startup culture fit (0-100)
        startup_score = self._score_startup_fit(work_history)
        scores['startup_culture_fit'] = startup_score
        
        # Tenure appropriateness (0-100)
        tenure_score = self._score_tenure_fit(criteria_lower, years_in_role)
        scores['tenure_appropriateness'] = tenure_score
        
        # Calculate weighted overall score
        weights = {
            'technical_background': 0.25,
            'customer_facing_experience': 0.30,
            'company_tier_alignment': 0.25,
            'startup_culture_fit': 0.10,
            'tenure_appropriateness': 0.10
        }
        
        overall = sum(scores[key] * weights[key] for key in weights)
        scores['overall'] = round(overall, 1)
        
        # Generate reasoning
        scores['reasoning'] = self._generate_ai_criteria_reasoning(
            ai_criteria, work_history, current_company, scores
        )
        
        return scores
    
    def _score_technical_fit(
        self,
        criteria: str,
        work_history: List[Dict],
        skills: List[str],
        current_title: str
    ) -> int:
        """Score technical background fit based on criteria."""
        score = 50  # Base score
        
        # Check for engineering background
        has_eng_background = any(
            any(eng_title.lower() in job.get('title', '').lower() 
                for eng_title in self.ENGINEERING_TITLES)
            for job in work_history
        )
        
        if has_eng_background:
            score += 30
            
            # Bonus for engineering-to-GTM transition criteria
            if 'transition' in criteria and 'customer-facing' in criteria:
                # Check if they moved to customer-facing role
                has_cf_role = any(
                    any(cs_title.lower() in job.get('title', '').lower() 
                        for cs_title in self.CS_TAM_TITLES + self.PM_SOLUTIONS_TITLES)
                    for job in work_history
                )
                if has_cf_role:
                    score += 20  # Strong match for transition criteria
        
        # Check for technical keywords in criteria
        tech_keywords = ['technical', 'engineer', 'api', 'integration', 'architecture', 'coding', 'software']
        matching_keywords = sum(1 for kw in tech_keywords if kw in criteria)
        score += min(20, matching_keywords * 5)
        
        # Check technical skills
        technical_skills = ['API', 'SQL', 'Python', 'JavaScript', 'Integration', 'Architecture']
        matching_skills = sum(1 for skill in skills if any(tech in skill for tech in technical_skills))
        score += min(10, matching_skills * 2)
        
        return min(100, max(0, score + random.randint(-5, 5)))
    
    def _score_customer_facing_fit(
        self,
        criteria: str,
        work_history: List[Dict],
        current_title: str
    ) -> int:
        """Score customer-facing experience fit."""
        score = 40  # Base score
        
        # Check for customer-facing keywords in criteria
        cf_keywords = ['customer', 'client', 'account', 'facing', 'success', 'support', 'gtm', 'sales']
        matching_keywords = sum(1 for kw in cf_keywords if kw in criteria)
        score += min(20, matching_keywords * 4)
        
        # Check for seniority/leadership indicators if mentioned in criteria
        is_senior_criteria = any(kw in criteria for kw in ['senior', 'director', 'vp', 'leadership', '5+', '5 +'])
        
        # Check work history for customer-facing roles
        cf_years = 0
        has_senior_role = False
        has_leadership_role = False
        
        for job in work_history:
            title = job.get('title', '').lower()
            is_cf = (
                any(cs_title.lower() in title for cs_title in self.CS_TAM_TITLES) or
                any(pm_title.lower() in title for pm_title in self.PM_SOLUTIONS_TITLES)
            )
            if is_cf:
                cf_years += job.get('years', 0)
                
                # Check for senior/leadership titles
                if any(keyword in title for keyword in ['senior', 'sr.', 'sr ', 'principal', 'staff']):
                    has_senior_role = True
                if any(keyword in title for keyword in ['director', 'vp', 'vice president', 'head of', 'chief']):
                    has_leadership_role = True
        
        # Base scoring for experience
        if cf_years > 0:
            score += min(40, cf_years * 8)
        
        # Bonus for senior/leadership if criteria mentions it
        if is_senior_criteria:
            if has_leadership_role:
                score += 20
            elif has_senior_role:
                score += 15
            elif cf_years >= 5:
                score += 10
        
        # Bonus for enterprise/strategic account keywords
        if 'enterprise' in criteria or 'strategic' in criteria:
            enterprise_indicators = ['enterprise', 'strategic', 'key account']
            has_enterprise = any(
                any(indicator in job.get('title', '').lower() for indicator in enterprise_indicators)
                for job in work_history
            )
            if has_enterprise:
                score += 15
        
        return min(100, max(0, score + random.randint(-5, 5)))
    
    def _score_company_alignment(
        self,
        criteria: str,
        work_history: List[Dict],
        current_company: str
    ) -> int:
        """Score alignment with company criteria (e.g., MAG7, enterprise tech)."""
        score = 30  # Base score
        
        # MAG7 (Microsoft, Apple, Google, Amazon, Meta, NVIDIA, Tesla)
        mag7_companies = ['Microsoft', 'Apple', 'Google', 'Amazon', 'Meta', 'NVIDIA', 'Tesla', 'Facebook']
        
        # Developer tools / infrastructure companies
        dev_tools_companies = [
            'GitLab', 'GitHub', 'Atlassian', 'JetBrains', 'MongoDB', 'Redis', 'Elastic',
            'Databricks', 'Snowflake', 'Confluent', 'Splunk', 'New Relic', 'Datadog',
            'Vercel', 'Netlify', 'Docker', 'HashiCorp', 'Terraform', 'Pulumi'
        ]
        
        # Cloud/SaaS platforms
        cloud_saas_companies = [
            'Salesforce', 'Workday', 'ServiceNow', 'Twilio', 'Segment', 'Auth0',
            'AWS', 'Azure', 'Google Cloud', 'Oracle', 'SAP', 'Adobe'
        ]
        
        # Check if criteria mentions specific company types
        if 'mag' in criteria or 'mag7' in criteria:
            # Bonus for MAG7 experience
            mag7_experience = any(
                any(company in job.get('company', '') for company in mag7_companies)
                for job in work_history
            )
            if mag7_experience:
                score += 50
            else:
                score -= 20
        
        if 'developer tools' in criteria or 'infrastructure' in criteria:
            # Strong bonus for developer tools companies
            dev_tools_exp = any(
                job.get('company') in dev_tools_companies + self.TOP_STARTUPS
                for job in work_history
            )
            if dev_tools_exp:
                score += 45
        
        if 'b2b' in criteria or 'saas' in criteria or 'cloud' in criteria:
            # Bonus for B2B SaaS/Cloud experience
            b2b_experience = any(
                job.get('company') in cloud_saas_companies or 
                job.get('company') in self.TOP_STARTUPS
                for job in work_history
            )
            if b2b_experience:
                score += 35
        
        if 'enterprise' in criteria or 'fortune 500' in criteria:
            # Bonus for tier 1 company experience
            enterprise_experience = any(
                job.get('company') in self.TIER_1_COMPANIES or 
                job.get('company') in mag7_companies or
                job.get('company') in cloud_saas_companies
                for job in work_history
            )
            if enterprise_experience:
                score += 40
        
        if 'startup' in criteria or 'scale-up' in criteria or 'high-growth' in criteria:
            startup_experience = any(
                job.get('company') in self.TOP_STARTUPS
                for job in work_history
            )
            if startup_experience:
                score += 40
        
        if 'series b' in criteria or 'public' in criteria or 'established' in criteria:
            # Well-known tech brands
            established_exp = any(
                job.get('company') in self.TOP_STARTUPS or
                job.get('company') in self.TIER_1_COMPANIES
                for job in work_history
            )
            if established_exp:
                score += 35
        
        # General tech company experience
        all_tech_companies = set(self.TOP_STARTUPS + self.TIER_1_COMPANIES + mag7_companies + dev_tools_companies)
        tech_experience = any(
            job.get('company') in all_tech_companies
            for job in work_history
        )
        if tech_experience:
            score += 20
        
        return min(100, max(0, score + random.randint(-5, 10)))
    
    def _score_startup_fit(self, work_history: List[Dict]) -> int:
        """Score startup culture fit based on work history."""
        score = 40
        
        for job in work_history:
            company = job.get('company', '')
            if company in self.TOP_STARTUPS:
                score = min(100, score + 35)
            elif company in self.TIER_1_COMPANIES:
                score = min(100, score + 15)
        
        return min(100, max(0, score + random.randint(-5, 10)))
    
    def _score_tenure_fit(self, criteria: str, years_in_role: int) -> int:
        """Score tenure appropriateness."""
        score = 50
        
        if years_in_role:
            # Look for experience requirements in criteria
            if 'senior' in criteria or 'experienced' in criteria or '5+' in criteria or '5 +' in criteria:
                if years_in_role >= 5:
                    score = 85 + random.randint(-5, 15)
                elif years_in_role >= 3:
                    score = 70 + random.randint(-10, 10)
            elif '2-5' in criteria or '3+' in criteria or '3 +' in criteria:
                if 2 <= years_in_role <= 5:
                    score = 90 + random.randint(-5, 10)
                elif years_in_role >= 3:
                    score = 85 + random.randint(-5, 10)
            else:
                # General scoring
                if 2 <= years_in_role <= 5:
                    score = 80 + random.randint(-5, 15)
                elif 1 <= years_in_role < 2:
                    score = 70 + random.randint(-10, 10)
                elif years_in_role > 5:
                    score = 75 + random.randint(-10, 10)
        
        return min(100, max(0, score))
    
    def _generate_ai_criteria_reasoning(
        self,
        ai_criteria: str,
        work_history: List[Dict],
        current_company: str,
        scores: Dict
    ) -> str:
        """Generate reasoning for AI criteria match."""
        reasons = []
        
        # Check for notable companies in work history
        mag7_companies = ['Microsoft', 'Apple', 'Google', 'Amazon', 'Meta', 'NVIDIA', 'Tesla']
        dev_tools_companies = ['GitLab', 'GitHub', 'Databricks', 'Snowflake', 'Confluent', 'Atlassian']
        notable_companies = []
        
        for job in work_history[:3]:  # Top 3 most recent
            company = job.get('company', '')
            if company in mag7_companies:
                notable_companies.append(company)
            elif company in dev_tools_companies:
                notable_companies.append(company)
            elif company in self.TOP_STARTUPS:
                notable_companies.append(company)
            elif company in self.TIER_1_COMPANIES:
                notable_companies.append(company)
        
        if notable_companies:
            reasons.append(f"Experience at {', '.join(notable_companies[:2])}")
        
        # Check for engineering transition
        has_eng = any(
            any(eng_title.lower() in job.get('title', '').lower() for eng_title in self.ENGINEERING_TITLES)
            for job in work_history
        )
        has_cf = any(
            any(cs.lower() in job.get('title', '').lower() for cs in self.CS_TAM_TITLES + self.PM_SOLUTIONS_TITLES)
            for job in work_history
        )
        
        if has_eng and has_cf and ('transition' in ai_criteria or 'former' in ai_criteria):
            reasons.append("Successful transition from technical to customer-facing role")
        
        # Check for senior/leadership roles
        has_leadership = any(
            any(keyword in job.get('title', '').lower() for keyword in ['director', 'vp', 'head of'])
            for job in work_history
        )
        has_senior = any(
            any(keyword in job.get('title', '').lower() for keyword in ['senior', 'sr.', 'principal'])
            for job in work_history
        )
        
        if has_leadership and ('leadership' in ai_criteria or 'director' in ai_criteria or 'vp' in ai_criteria):
            reasons.append("Leadership experience in relevant roles")
        elif has_senior and 'senior' in ai_criteria:
            reasons.append("Senior-level contributor experience")
        
        # Check for customer-facing roles with specifics
        cf_roles = [
            job.get('title') for job in work_history
            if any(cs.lower() in job.get('title', '').lower() for cs in self.CS_TAM_TITLES + self.PM_SOLUTIONS_TITLES)
        ]
        if cf_roles and not (has_eng and has_cf):
            # Calculate years in customer-facing roles
            cf_years = sum(
                job.get('years', 0) for job in work_history
                if any(cs.lower() in job.get('title', '').lower() for cs in self.CS_TAM_TITLES + self.PM_SOLUTIONS_TITLES)
            )
            if cf_years >= 5:
                reasons.append(f"{cf_years}+ years in customer-facing roles")
            elif cf_years > 0:
                reasons.append(f"{cf_years} years of customer-facing experience")
        
        # Check for founder background
        is_founder = any(
            any(keyword in job.get('title', '').lower() for keyword in ['founder', 'co-founder'])
            for job in work_history
        )
        if is_founder and 'founder' in ai_criteria:
            reasons.append("Former founder with operational experience")
        
        # Overall fit assessment
        overall_score = scores.get('overall', 0)
        if overall_score >= 80:
            reasons.insert(0, "Strong match for criteria")
        elif overall_score >= 60:
            reasons.insert(0, "Good match for criteria")
        else:
            reasons.insert(0, "Partial match for criteria")
        
        return "; ".join(reasons) if reasons else "Evaluated against custom AI criteria"
    
    def _score_single_criterion(
        self,
        candidate_dict: Dict,
        criterion: str
    ) -> Dict:
        """
        Score a candidate against a single criterion with criterion-specific reasoning.
        
        Args:
            candidate_dict: Dictionary containing candidate information
            criterion: Natural language criterion to evaluate
            
        Returns:
            Dictionary with score and criterion-specific reasoning
        """
        work_history = candidate_dict.get('work_history', [])
        skills = candidate_dict.get('skills', [])
        current_title = candidate_dict.get('current_title', '')
        current_company = candidate_dict.get('current_company', '')
        years_in_role = candidate_dict.get('years_in_role', 0)
        is_former_founder = candidate_dict.get('is_former_founder', False)
        
        criterion_lower = criterion.lower()
        score = 50  # Base score
        reasons = []
        
        # Check for engineering-to-customer-facing transition
        if 'engineer' in criterion_lower and 'transition' in criterion_lower:
            has_eng = any(
                any(eng_title.lower() in job.get('title', '').lower() for eng_title in self.ENGINEERING_TITLES)
                for job in work_history
            )
            has_cf = any(
                any(cs.lower() in job.get('title', '').lower() for cs in self.CS_TAM_TITLES + self.PM_SOLUTIONS_TITLES)
                for job in work_history
            )
            
            if has_eng and has_cf:
                score += 40
                eng_companies = [job.get('company') for job in work_history 
                               if any(eng_title.lower() in job.get('title', '').lower() for eng_title in self.ENGINEERING_TITLES)]
                reasons.append(f"Successfully transitioned from software engineering to customer-facing role")
                if eng_companies:
                    reasons.append(f"Engineering background at {eng_companies[0]}")
            elif has_cf:
                score += 20
                reasons.append("Customer-facing experience, though no clear engineering background")
            else:
                score -= 10
                reasons.append("Limited customer-facing experience")
        
        # Check for GTM/PM/Solutions experience years
        if any(kw in criterion_lower for kw in ['gtm', 'product management', 'solutions', 'customer success']):
            cf_years = sum(
                job.get('years', 0) for job in work_history
                if any(cs.lower() in job.get('title', '').lower() for cs in self.CS_TAM_TITLES + self.PM_SOLUTIONS_TITLES)
            )
            
            # Check for specific year requirements
            if '3-5' in criterion or '3 to 5' in criterion_lower:
                if 3 <= cf_years <= 5:
                    score += 30
                    reasons.append(f"{cf_years} years in GTM roles (ideal 3-5 year range)")
                elif cf_years >= 3:
                    score += 20
                    reasons.append(f"{cf_years} years in GTM roles")
                else:
                    score -= 10
                    reasons.append(f"Only {cf_years} years in GTM roles (below 3-5 year target)")
            elif '5+' in criterion or '5 +' in criterion_lower or 'leadership' in criterion_lower:
                if cf_years >= 5:
                    score += 30
                    reasons.append(f"{cf_years}+ years in customer success/solutions roles")
                else:
                    score -= 10
                    reasons.append(f"{cf_years} years experience (below 5+ year requirement)")
        
        # Check for enterprise/Fortune 500 experience
        if 'enterprise' in criterion_lower or 'fortune' in criterion_lower or '1000+' in criterion:
            enterprise_companies = ['Salesforce', 'Workday', 'ServiceNow', 'Oracle', 'SAP', 'Adobe', 
                                   'Cisco', 'VMware', 'IBM', 'Dell']
            has_enterprise = any(
                job.get('company') in enterprise_companies or 
                job.get('company') in self.TIER_1_COMPANIES or
                'enterprise' in job.get('title', '').lower()
                for job in work_history
            )
            
            if has_enterprise:
                score += 25
                enterprise_cos = [job.get('company') for job in work_history 
                                 if job.get('company') in enterprise_companies + self.TIER_1_COMPANIES]
                if enterprise_cos:
                    reasons.append(f"Enterprise experience at {', '.join(enterprise_cos[:2])}")
                else:
                    reasons.append("Enterprise customer-facing role experience")
            else:
                score -= 15
                reasons.append("Limited enterprise/Fortune 500 company experience")
        
        # Check for B2B tech, cloud, SaaS experience
        if any(kw in criterion_lower for kw in ['b2b', 'cloud', 'saas', 'platform']):
            b2b_companies = self.TOP_STARTUPS + ['Salesforce', 'Workday', 'ServiceNow', 'AWS', 
                                                  'Google Cloud', 'Twilio', 'Segment']
            has_b2b = any(job.get('company') in b2b_companies for job in work_history)
            
            if has_b2b:
                score += 25
                b2b_cos = [job.get('company') for job in work_history if job.get('company') in b2b_companies]
                reasons.append(f"B2B tech experience at {', '.join(b2b_cos[:2])}")
            else:
                score -= 10
                reasons.append("Limited B2B technology company experience")
        
        # Check for developer tools / infrastructure experience
        if 'developer' in criterion_lower or 'infrastructure' in criterion_lower or 'technical buyer' in criterion_lower:
            dev_companies = ['GitHub', 'GitLab', 'Atlassian', 'MongoDB', 'HashiCorp', 'Databricks', 
                            'Snowflake', 'Confluent', 'Datadog', 'New Relic', 'Elastic', 'Redis']
            has_dev_tools = any(job.get('company') in dev_companies for job in work_history)
            
            if has_dev_tools:
                score += 30
                dev_cos = [job.get('company') for job in work_history if job.get('company') in dev_companies]
                reasons.append(f"Developer tools/infrastructure experience at {', '.join(dev_cos[:2])}")
            else:
                score -= 10
                reasons.append("No developer tools or infrastructure company background")
        
        # Check for leadership (Director, VP)
        if any(kw in criterion_lower for kw in ['leadership', 'director', 'vp', 'head of']):
            has_leadership = any(
                any(keyword in job.get('title', '').lower() for keyword in ['director', 'vp', 'vice president', 'head of'])
                for job in work_history
            )
            
            if has_leadership:
                score += 30
                leadership_titles = [job.get('title') for job in work_history 
                                   if any(kw in job.get('title', '').lower() for kw in ['director', 'vp', 'head of'])]
                reasons.append(f"Leadership experience: {leadership_titles[0]}")
            else:
                score -= 15
                reasons.append("No leadership role experience (Director/VP level)")
        
        # Check for strategic/enterprise account management
        if 'strategic' in criterion_lower or 'expansion' in criterion_lower or 'executive' in criterion_lower:
            has_strategic = any(
                any(kw in job.get('title', '').lower() for kw in ['strategic', 'enterprise', 'executive'])
                for job in work_history
            ) or 'Enterprise Sales' in skills or 'Executive Relationships' in skills
            
            if has_strategic:
                score += 25
                reasons.append("Strategic/enterprise account management experience")
            else:
                score -= 10
                reasons.append("Limited strategic account or executive relationship experience")
        
        # Check for founder background
        if 'founder' in criterion_lower or 'venture-backed' in criterion_lower:
            if is_former_founder:
                score += 40
                founder_role = next((job for job in work_history 
                                   if 'founder' in job.get('title', '').lower()), None)
                if founder_role:
                    reasons.append(f"Former founder: {founder_role.get('title')} at {founder_role.get('company')}")
                else:
                    reasons.append("Former founder background")
            else:
                score -= 20
                reasons.append("Not a former founder")
        
        # Check for post-founding operational roles
        if 'post-founding' in criterion_lower or 'transitioned' in criterion_lower:
            if is_former_founder:
                operational_roles = [
                    job for job in work_history 
                    if 'founder' not in job.get('title', '').lower()
                ]
                if operational_roles:
                    score += 25
                    reasons.append(f"Post-founding role: {operational_roles[0].get('title')} at {operational_roles[0].get('company')}")
                else:
                    score -= 10
                    reasons.append("Founder but no clear post-founding operational roles")
        
        # Check for Series B+/established tech company experience
        if any(kw in criterion_lower for kw in ['series b', 'established', 'public', 'well-known']):
            established_companies = ['Stripe', 'Databricks', 'Snowflake', 'Uber', 'Airbnb', 'Square', 
                                    'Coinbase', 'DoorDash', 'GitLab', 'Confluent', 'HashiCorp']
            has_established = any(
                job.get('company') in established_companies + self.TIER_1_COMPANIES
                for job in work_history
            )
            
            if has_established:
                score += 25
                est_cos = [job.get('company') for job in work_history 
                          if job.get('company') in established_companies + self.TIER_1_COMPANIES]
                reasons.append(f"Established tech company experience: {', '.join(est_cos[:2])}")
            else:
                score -= 10
                reasons.append("Limited experience at Series B+/public companies")
        
        # Check for product/technical background
        if 'product' in criterion_lower or 'technical' in criterion_lower:
            has_product = any(
                'product' in job.get('title', '').lower() or 'technical' in job.get('title', '').lower()
                for job in work_history
            )
            
            if has_product:
                score += 20
                reasons.append("Strong technical or product background")
            else:
                score -= 5
        
        # Ensure score is in valid range
        score = min(100, max(0, score + random.randint(-5, 5)))
        
        # Build final reasoning
        if not reasons:
            reasons.append("Evaluated against criterion")
        
        return {
            'score': score,
            'reasoning': "; ".join(reasons)
        }

