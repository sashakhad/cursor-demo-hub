'use client';

/**
 * Main Candidate Search Page
 * AI-powered sourcing tool with horizontal filters
 * Copyright Anysphere Inc.
 */

import { useState, useEffect, useCallback } from 'react';
import FilterPanel from '@/components/FilterPanel';
import CandidateTable from '@/components/CandidateTable';
import { getCandidates, getFilterOptions } from '@/lib/api';
import type { Candidate, FilterOptions, CandidateFilters } from '@/lib/api';

export default function Home() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterOptions | null>(null);
  const [filters, setFilters] = useState<CandidateFilters>({});
  const [isLoadingCandidates, setIsLoadingCandidates] = useState(false);
  const [isLoadingFilters, setIsLoadingFilters] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasAppliedFilters, setHasAppliedFilters] = useState(false);
  
  // Load filter options on mount
  useEffect(() => {
    const loadFilterOptions = async () => {
      try {
        setIsLoadingFilters(true);
        const options = await getFilterOptions();
        setFilterOptions(options);
      } catch (err) {
        console.error('Failed to load filter options:', err);
        setError('Failed to load filter options. Please ensure the API is running.');
      } finally {
        setIsLoadingFilters(false);
      }
    };
    
    loadFilterOptions();
  }, []);
  
  // Load candidates with debouncing
  const loadCandidates = useCallback(async (currentFilters: CandidateFilters) => {
    // Check if any filters are applied
    const hasFilters = Object.keys(currentFilters).some(key => {
      const value = currentFilters[key as keyof CandidateFilters];
      if (Array.isArray(value)) return value.length > 0;
      return value !== undefined && value !== null && value !== '';
    });
    
    if (!hasFilters) {
      setCandidates([]);
      setHasAppliedFilters(false);
      return;
    }
    
    try {
      setIsLoadingCandidates(true);
      setError(null);
      setHasAppliedFilters(true);
      const data = await getCandidates(currentFilters);
      setCandidates(data);
    } catch (err) {
      console.error('Failed to load candidates:', err);
      setError('Failed to load candidates. Please ensure the API is running.');
      setCandidates([]);
    } finally {
      setIsLoadingCandidates(false);
    }
  }, []);
  
  // Load candidates when filters change (with debounce)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      loadCandidates(filters);
    }, 300); // 300ms debounce
    
    return () => clearTimeout(timeoutId);
  }, [filters, loadCandidates]);
  
  const handleFiltersChange = (newFilters: CandidateFilters) => {
    setFilters(newFilters);
  };
  
  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* Horizontal Filter Bar - Sticky */}
      <div className="sticky top-0 z-20 bg-white border-b border-slate-200">
        <FilterPanel
          options={filterOptions}
          filters={filters}
          onFiltersChange={handleFiltersChange}
          isLoading={isLoadingFilters}
        />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Error Message */}
        {error && (
          <div className="mx-8 mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-red-800">{error}</p>
            </div>
            <p className="text-xs text-red-600 mt-2">
              Make sure the FastAPI backend is running: <code className="bg-red-100 px-2 py-1 rounded">cd src && python -m uvicorn api.main:app --reload</code>
            </p>
          </div>
        )}
        
        {/* Results Count */}
        {hasAppliedFilters && (
          <div className="px-8 pt-8 pb-6">
            <div className="flex items-center justify-between">
              <div className="text-base text-slate-600">
                {isLoadingCandidates ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Searching profiles...
                  </span>
                ) : (
                  <span>
                    <span className="font-semibold text-slate-900 text-lg">{candidates.length.toLocaleString()}</span> profiles match your criteria
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Candidate Table or Blank State */}
        {!hasAppliedFilters ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center max-w-lg px-8">
              <div className="mb-8">
                <svg className="w-24 h-24 mx-auto text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Apply filters to search across 500M profiles
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Use the filters above to find the perfect candidates for your role. Combine AI-powered search with deterministic filters for precision.
              </p>
            </div>
          </div>
        ) : (
          <CandidateTable
            candidates={candidates}
            isLoading={isLoadingCandidates}
          />
        )}
      </div>
    </div>
  );
}
