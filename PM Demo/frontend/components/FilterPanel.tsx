'use client';

/**
 * FilterPanel Component
 * Horizontal filter bar with expandable filter pills and boolean logic
 * Copyright Anysphere Inc.
 */

import { useState, useEffect, useRef } from 'react';
import type { FilterOptions, CandidateFilters } from '@/lib/api';
import AICriteriaModal from './AICriteriaModal';
import MultiSelectCombobox from './MultiSelectCombobox';
import { loadPersonas, type SavedPersona } from '@/lib/personas';

interface FilterPanelProps {
  options: FilterOptions | null;
  filters: CandidateFilters;
  onFiltersChange: (filters: CandidateFilters) => void;
  isLoading?: boolean;
}

type ExpandedFilter = 'location' | 'companies' | 'titles' | 'schools' | 'years' | null;
type BooleanOperator = 'OR' | 'AND';

export default function FilterPanel({ options, filters, onFiltersChange, isLoading }: FilterPanelProps) {
  const [localFilters, setLocalFilters] = useState<CandidateFilters>(filters);
  const [expandedFilter, setExpandedFilter] = useState<ExpandedFilter>(null);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [locationOperator, setLocationOperator] = useState<BooleanOperator>('OR');
  const [titlesOperator, setTitlesOperator] = useState<BooleanOperator>('OR');
  const [skillsOperator, setSkillsOperator] = useState<BooleanOperator>('OR');
  const [savedPersonas, setSavedPersonas] = useState<SavedPersona[]>([]);
  const [showPersonaDropdown, setShowPersonaDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const personaDropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);
  
  // Load saved personas on mount and when modal closes
  useEffect(() => {
    setSavedPersonas(loadPersonas());
  }, [isAIModalOpen]);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setExpandedFilter(null);
      }
      if (personaDropdownRef.current && !personaDropdownRef.current.contains(event.target as Node)) {
        setShowPersonaDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const handleAICriteriaChange = (criteria: string[]) => {
    const newFilters = { ...localFilters, ai_criteria: criteria.length > 0 ? criteria : undefined };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };
  
  const handleLoadPersona = (persona: SavedPersona) => {
    handleAICriteriaChange(persona.criteria);
    setShowPersonaDropdown(false);
  };
  
  const handleLocationChange = (locations: string[]) => {
    const newFilters = { 
      ...localFilters, 
      location: locations.length > 0 ? locations.join(',') : undefined,
      location_operator: locationOperator
    };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };
  
  const handleMultiSelect = (field: 'companies' | 'titles' | 'schools', values: string[]) => {
    const newFilters = { 
      ...localFilters, 
      [field]: values.length > 0 ? values : undefined,
      [`${field}_operator`]: field === 'titles' ? titlesOperator : 'OR'
    };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };
  
  const handleYearsChange = (field: 'min_years' | 'max_years', value: string) => {
    const numValue = value ? parseInt(value) : undefined;
    const newFilters = { ...localFilters, [field]: numValue };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };
  
  const handleClearAll = () => {
    const newFilters = {};
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
    setExpandedFilter(null);
  };
  
  const toggleFilter = (filter: ExpandedFilter) => {
    setExpandedFilter(expandedFilter === filter ? null : filter);
  };
  
  const getActiveFilterCount = () => {
    let count = 0;
    if (localFilters.ai_criteria && localFilters.ai_criteria.length > 0) count++;
    if (localFilters.location) count++;
    if (localFilters.companies?.length) count++;
    if (localFilters.titles?.length) count++;
    if (localFilters.schools?.length) count++;
    if (localFilters.min_years !== undefined || localFilters.max_years !== undefined) count++;
    return count;
  };
  
  if (isLoading) {
    return (
      <div className="px-8 py-6">
        <div className="animate-pulse flex gap-4">
          <div className="h-12 w-36 bg-slate-200 rounded-xl"></div>
          <div className="h-12 w-28 bg-slate-200 rounded-xl"></div>
          <div className="h-12 w-32 bg-slate-200 rounded-xl"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="px-8 py-6" ref={dropdownRef}>
      <div className="flex items-center gap-4 flex-wrap">
        {/* AI Search Criteria */}
        <div className="relative">
          <button
            onClick={() => setIsAIModalOpen(true)}
            className={`px-6 py-3 rounded-xl border-2 text-sm font-medium transition-all flex items-center gap-2 shadow-soft hover:shadow-soft-md ${
              localFilters.ai_criteria && localFilters.ai_criteria.length > 0
                ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-soft-md'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            AI Search
            {localFilters.ai_criteria && localFilters.ai_criteria.length > 0 && (
              <span className="ml-2 px-2 py-1 bg-purple-600 text-white text-xs rounded-full font-medium">
                {localFilters.ai_criteria.length}
              </span>
            )}
          </button>
        </div>
        
        {/* Saved Personas Dropdown */}
        {savedPersonas.length > 0 && (
          <div className="relative" ref={personaDropdownRef}>
            <button
              onClick={() => setShowPersonaDropdown(!showPersonaDropdown)}
              className="px-6 py-3 rounded-xl border-2 border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 text-sm font-medium transition-all flex items-center gap-2 shadow-soft hover:shadow-soft-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              Saved Personas
              <span className="ml-1 px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full font-semibold">
                {savedPersonas.length}
              </span>
            </button>
            
            {showPersonaDropdown && (
              <div className="absolute top-full mt-3 w-80 bg-white border border-slate-200 rounded-2xl shadow-soft-lg p-4 z-30 max-h-96 overflow-y-auto">
                <div className="text-xs font-semibold text-slate-900 mb-2 px-1">
                  Load Saved Persona
                </div>
                <div className="space-y-2">
                  {savedPersonas.map((persona) => (
                    <button
                      key={persona.id}
                      onClick={() => handleLoadPersona(persona)}
                      className="w-full text-left p-4 bg-purple-50 rounded-xl border border-purple-200 hover:border-purple-300 hover:bg-purple-100 transition-all duration-200 shadow-soft hover:shadow-soft-md"
                    >
                      <div className="font-medium text-purple-900 text-sm mb-1">
                        {persona.name}
                      </div>
                      <div className="text-xs text-purple-600">
                        {persona.criteria.length} {persona.criteria.length === 1 ? 'criterion' : 'criteria'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* AI Criteria Modal */}
        <AICriteriaModal
          isOpen={isAIModalOpen}
          onClose={() => setIsAIModalOpen(false)}
          criteria={localFilters.ai_criteria || []}
          onApply={handleAICriteriaChange}
        />
        
        {/* Location Filter */}
        <div className="relative">
          <button
            onClick={() => toggleFilter('location')}
            className={`px-6 py-3 rounded-xl border-2 text-sm font-medium transition-all flex items-center gap-2 shadow-soft hover:shadow-soft-md ${
              localFilters.location
                ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-soft-md'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Location
            {localFilters.location && (
              <span className="ml-2 px-2 py-1 bg-blue-600 text-white text-xs rounded-full font-medium">
                {localFilters.location.split(',').length}
              </span>
            )}
          </button>
          
          {expandedFilter === 'location' && (
            <div className="absolute top-full mt-3 w-96 bg-white border border-slate-200 rounded-2xl shadow-soft-lg p-6 z-30">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-semibold text-slate-900">
                  Location
                </label>
                <div className="flex items-center gap-2 text-xs">
                  <button
                    onClick={() => setLocationOperator('OR')}
                    className={`px-2 py-1 rounded ${locationOperator === 'OR' ? 'bg-blue-100 text-blue-700 font-medium' : 'text-slate-600 hover:bg-slate-100'}`}
                  >
                    OR
                  </button>
                  <button
                    onClick={() => setLocationOperator('AND')}
                    className={`px-2 py-1 rounded ${locationOperator === 'AND' ? 'bg-blue-100 text-blue-700 font-medium' : 'text-slate-600 hover:bg-slate-100'}`}
                  >
                    AND
                  </button>
                </div>
              </div>
              <MultiSelectCombobox
                options={options?.locations || []}
                selectedValues={localFilters.location ? localFilters.location.split(',') : []}
                onChange={handleLocationChange}
                placeholder="Type to search locations..."
              />
            </div>
          )}
        </div>
        
        {/* Titles Filter */}
        <div className="relative">
          <button
            onClick={() => toggleFilter('titles')}
            className={`px-6 py-3 rounded-xl border-2 text-sm font-medium transition-all flex items-center gap-2 shadow-soft hover:shadow-soft-md ${
              localFilters.titles && localFilters.titles.length > 0
                ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-soft-md'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Titles
            {localFilters.titles && localFilters.titles.length > 0 && (
              <span className="ml-2 px-2 py-1 bg-blue-600 text-white text-xs rounded-full font-medium">
                {localFilters.titles.length}
              </span>
            )}
          </button>
          
          {expandedFilter === 'titles' && (
            <div className="absolute top-full mt-3 w-96 bg-white border border-slate-200 rounded-2xl shadow-soft-lg p-6 z-30">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-semibold text-slate-900">
                  Titles
                </label>
                <div className="flex items-center gap-2 text-xs">
                  <button
                    onClick={() => setTitlesOperator('OR')}
                    className={`px-2 py-1 rounded ${titlesOperator === 'OR' ? 'bg-blue-100 text-blue-700 font-medium' : 'text-slate-600 hover:bg-slate-100'}`}
                  >
                    OR
                  </button>
                  <button
                    onClick={() => setTitlesOperator('AND')}
                    className={`px-2 py-1 rounded ${titlesOperator === 'AND' ? 'bg-blue-100 text-blue-700 font-medium' : 'text-slate-600 hover:bg-slate-100'}`}
                  >
                    AND
                  </button>
                </div>
              </div>
              <MultiSelectCombobox
                options={options?.titles || []}
                selectedValues={localFilters.titles || []}
                onChange={(values) => handleMultiSelect('titles', values)}
                placeholder="Type to search titles..."
              />
            </div>
          )}
        </div>
        
        {/* Companies Filter */}
        <div className="relative">
          <button
            onClick={() => toggleFilter('companies')}
            className={`px-6 py-3 rounded-xl border-2 text-sm font-medium transition-all flex items-center gap-2 shadow-soft hover:shadow-soft-md ${
              localFilters.companies && localFilters.companies.length > 0
                ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-soft-md'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Companies
            {localFilters.companies && localFilters.companies.length > 0 && (
              <span className="ml-2 px-2 py-1 bg-blue-600 text-white text-xs rounded-full font-medium">
                {localFilters.companies.length}
              </span>
            )}
          </button>
          
          {expandedFilter === 'companies' && (
            <div className="absolute top-full mt-3 w-96 bg-white border border-slate-200 rounded-2xl shadow-soft-lg p-6 z-30">
              <MultiSelectCombobox
                options={options?.companies || []}
                selectedValues={localFilters.companies || []}
                onChange={(values) => handleMultiSelect('companies', values)}
                placeholder="Type to search companies..."
                label="Companies"
              />
            </div>
          )}
        </div>
        
        {/* Schools Filter */}
        <div className="relative">
          <button
            onClick={() => toggleFilter('schools')}
            className={`px-6 py-3 rounded-xl border-2 text-sm font-medium transition-all flex items-center gap-2 shadow-soft hover:shadow-soft-md ${
              localFilters.schools && localFilters.schools.length > 0
                ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-soft-md'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            Schools
            {localFilters.schools && localFilters.schools.length > 0 && (
              <span className="ml-2 px-2 py-1 bg-blue-600 text-white text-xs rounded-full font-medium">
                {localFilters.schools.length}
              </span>
            )}
          </button>
          
          {expandedFilter === 'schools' && (
            <div className="absolute top-full mt-3 w-96 bg-white border border-slate-200 rounded-2xl shadow-soft-lg p-6 z-30">
              <MultiSelectCombobox
                options={options?.schools || []}
                selectedValues={localFilters.schools || []}
                onChange={(values) => handleMultiSelect('schools', values)}
                placeholder="Type to search schools..."
                label="Schools"
              />
            </div>
          )}
        </div>
        
        {/* Years of Experience Filter */}
        <div className="relative">
          <button
            onClick={() => toggleFilter('years')}
            className={`px-6 py-3 rounded-xl border-2 text-sm font-medium transition-all flex items-center gap-2 shadow-soft hover:shadow-soft-md ${
              (localFilters.min_years !== undefined || localFilters.max_years !== undefined)
                ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-soft-md'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Experience
            {(localFilters.min_years !== undefined || localFilters.max_years !== undefined) && (
              <span className="ml-1 w-2 h-2 bg-blue-500 rounded-full"></span>
            )}
          </button>
          
          {expandedFilter === 'years' && (
            <div className="absolute top-full mt-3 w-80 bg-white border border-slate-200 rounded-2xl shadow-soft-lg p-6 z-30">
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Years of Experience
              </label>
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="block text-xs text-slate-600 mb-1">Min</label>
                  <input
                    type="number"
                    placeholder="0"
                    value={localFilters.min_years ?? ''}
                    onChange={(e) => handleYearsChange('min_years', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm shadow-soft"
                    min="0"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs text-slate-600 mb-1">Max</label>
                  <input
                    type="number"
                    placeholder="Any"
                    value={localFilters.max_years ?? ''}
                    onChange={(e) => handleYearsChange('max_years', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm shadow-soft"
                    min="0"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Clear All Button */}
        {getActiveFilterCount() > 0 && (
          <button
            onClick={handleClearAll}
            className="ml-auto px-6 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 transition-all rounded-xl hover:bg-slate-50"
          >
            Clear all ({getActiveFilterCount()})
          </button>
        )}
      </div>
    </div>
  );
}
