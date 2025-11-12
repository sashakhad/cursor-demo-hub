/**
 * API Client
 * Handles communication with FastAPI backend
 * Copyright Anysphere Inc.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export interface WorkHistory {
  company: string;
  title: string;
  years: number;
  start_year: number;
  end_year: number;
}

export interface CriterionScore {
  criterion: string;
  score: number;
  reasoning: string;
}

export interface PersonaScore {
  overall: number;
  technical_background: number;
  customer_facing_experience: number;
  startup_culture_fit: number;
  company_tier_alignment: number;
  tenure_appropriateness: number;
  reasoning: string;
  criterion_scores?: CriterionScore[];
}

export interface Candidate {
  id: number;
  candidate_id: string;
  full_name: string;
  email: string | null;
  current_title: string | null;
  current_company: string | null;
  seniority_level: string | null;
  city: string | null;
  state: string | null;
  region: string | null;
  country: string | null;
  education: string | null;
  years_in_role: number | null;
  is_former_founder: boolean;
  linkedin_url: string | null;
  work_history: WorkHistory[];
  skills: string[];
  persona_scores: {
    [key: string]: PersonaScore;
  };
  overall_score: number;
  selected_persona_score: PersonaScore | null;
  last_contacted_at?: string | null;
}

export interface Persona {
  id: string;
  name: string;
  description: string;
  color: string;
}

export interface FilterOptions {
  locations: string[];
  companies: string[];
  titles: string[];
  schools: string[];
  personas: Persona[];
}

export interface CandidateFilters {
  ai_criteria?: string[];
  persona?: string;
  location?: string;
  location_operator?: 'OR' | 'AND';
  companies?: string[];
  companies_operator?: 'OR' | 'AND';
  titles?: string[];
  titles_operator?: 'OR' | 'AND';
  schools?: string[];
  schools_operator?: 'OR' | 'AND';
  min_years?: number;
  max_years?: number;
  limit?: number;
  offset?: number;
}

// Quality Reports Types
export interface VendorMetrics {
  vendor_id: number;
  vendor_name: string;
  total_issues: number;
  quality_score: number | null;
  email_bounce_rate: number;
  phone_invalid_rate: number;
  avg_staleness_days: number;
  severity_breakdown: Record<string, { count: number; percentage: number }>;
  issue_type_breakdown: Record<string, { count: number; percentage: number }>;
}

export interface QualitySummary {
  total_issues: number;
  total_vendors: number;
  avg_quality_score: number;
  best_vendor: {
    id: number;
    name: string;
    quality_score: number;
  };
  worst_vendor: {
    id: number;
    name: string;
    quality_score: number;
  };
  critical_issues_count: number;
  critical_issues_percentage: number;
  avg_staleness_days: number;
}

export interface WaterfallPosition {
  position: number;
  vendor_name: string | null;
  vendor_id: number | null;
  quality_score?: number | null;
  issue_count: number;
  percentage: number;
}

export interface WaterfallConfiguration {
  config_name: string;
  positions: WaterfallPosition[];
}

export interface WaterfallAnalysis {
  configurations: Record<string, WaterfallConfiguration>;
  position_breakdown: Record<number, { count: number; percentage: number }>;
}

export interface TrendDataPoint {
  date: string;
  issue_count: number;
  vendor_breakdown: Record<string, number>;
}

export interface QualityTrends {
  trends: TrendDataPoint[];
  total_days: number;
}

/**
 * Fetch candidates with optional filters
 */
export async function getCandidates(filters: CandidateFilters = {}): Promise<Candidate[]> {
  const params = new URLSearchParams();
  
  if (filters.ai_criteria && filters.ai_criteria.length > 0) {
    params.append('ai_criteria', filters.ai_criteria.join('|||'));
  }
  if (filters.persona) params.append('persona', filters.persona);
  if (filters.location) params.append('location', filters.location);
  if (filters.location_operator) params.append('location_operator', filters.location_operator);
  if (filters.companies && filters.companies.length > 0) {
    params.append('companies', filters.companies.join(','));
  }
  if (filters.companies_operator) params.append('companies_operator', filters.companies_operator);
  if (filters.titles && filters.titles.length > 0) {
    params.append('titles', filters.titles.join(','));
  }
  if (filters.titles_operator) params.append('titles_operator', filters.titles_operator);
  if (filters.schools && filters.schools.length > 0) {
    params.append('schools', filters.schools.join(','));
  }
  if (filters.schools_operator) params.append('schools_operator', filters.schools_operator);
  if (filters.min_years !== undefined) {
    params.append('min_years', filters.min_years.toString());
  }
  if (filters.max_years !== undefined) {
    params.append('max_years', filters.max_years.toString());
  }
  if (filters.limit) params.append('limit', filters.limit.toString());
  if (filters.offset) params.append('offset', filters.offset.toString());
  
  const url = `${API_BASE_URL}/candidates?${params.toString()}`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch candidates: ${response.statusText}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching candidates:', error);
    throw error;
  }
}

/**
 * Fetch a single candidate by ID
 */
export async function getCandidateById(candidateId: string): Promise<Candidate> {
  const url = `${API_BASE_URL}/candidates/${candidateId}`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch candidate: ${response.statusText}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching candidate:', error);
    throw error;
  }
}

/**
 * Fetch available filter options
 */
export async function getFilterOptions(): Promise<FilterOptions> {
  const url = `${API_BASE_URL}/filters/options`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch filter options: ${response.statusText}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching filter options:', error);
    throw error;
  }
}

/**
 * Fetch vendor quality metrics
 */
export async function getVendorMetrics(): Promise<VendorMetrics[]> {
  const url = `${API_BASE_URL}/quality/vendors`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch vendor metrics: ${response.statusText}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching vendor metrics:', error);
    throw error;
  }
}

/**
 * Fetch quality summary statistics
 */
export async function getQualitySummary(): Promise<QualitySummary> {
  const url = `${API_BASE_URL}/quality/summary`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch quality summary: ${response.statusText}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching quality summary:', error);
    throw error;
  }
}

/**
 * Fetch waterfall analysis
 */
export async function getWaterfallAnalysis(): Promise<WaterfallAnalysis> {
  const url = `${API_BASE_URL}/quality/waterfall-analysis`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch waterfall analysis: ${response.statusText}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching waterfall analysis:', error);
    throw error;
  }
}

/**
 * Fetch quality trends over time
 */
export async function getQualityTrends(days: number = 90): Promise<QualityTrends> {
  const url = `${API_BASE_URL}/quality/trends?days=${days}`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch quality trends: ${response.statusText}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching quality trends:', error);
    throw error;
  }
}

