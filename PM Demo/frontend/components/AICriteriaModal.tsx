'use client';

/**
 * AI Search Criteria Modal
 * Modal dialog for adding and managing multiple AI search criteria
 * Copyright Anysphere Inc.
 */

import { useState, useEffect, useRef } from 'react';
import { loadPersonas, deletePersona, type SavedPersona } from '@/lib/personas';

interface AICriteriaModalProps {
  isOpen: boolean;
  onClose: () => void;
  criteria: string[];
  onApply: (criteria: string[]) => void;
}

// Preset criteria for demo staging
const PERSONA_PRESETS: { [key: string]: string[] } = {
  persona1: [
    'Former software engineer or technical role who transitioned to customer-facing position (Solutions Engineering, Technical Account Management, or Sales Engineering)',
    '3-5 years experience in GTM roles (Sales, Customer Success, Solutions) at B2B technology companies',
    'Experience working with enterprise customers (Fortune 500 or companies with 1000+ employees)',
    'Background at high-growth tech companies or public cloud/SaaS platforms'
  ],
  persona2: [
    'Senior Customer Success Manager (5+ years) or Customer Success leadership (Director, VP) at a technology company',
    'Experience at developer tools, infrastructure, or B2B SaaS companies serving technical buyers',
    'Track record managing strategic or enterprise accounts with complex technical requirements',
    'Proven ability to drive expansion revenue and build executive relationships'
  ],
  persona3: [
    'Former founder or co-founder of a venture-backed technology startup',
    'Post-founding experience in product management, GTM, or business development roles at established tech companies',
    'Strong technical or product background with customer empathy and business acumen',
    'Experience at high-growth startups or well-known technology brands (Series B+ or public companies)'
  ]
};

export default function AICriteriaModal({ isOpen, onClose, criteria, onApply }: AICriteriaModalProps) {
  const [localCriteria, setLocalCriteria] = useState<string[]>(criteria);
  const [inputValue, setInputValue] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [showUrlSuccess, setShowUrlSuccess] = useState(false);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [savedPersonas, setSavedPersonas] = useState<SavedPersona[]>([]);
  const [showPersonasSection, setShowPersonasSection] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Jewel tone rotation for badges
  const getJewelToneClasses = (index: number) => {
    const jewelTones = [
      'bg-emerald-100 text-emerald-700',
      'bg-purple-100 text-purple-700',
      'bg-teal-100 text-teal-700',
    ];
    return jewelTones[index % jewelTones.length];
  };

  // Tips data structure with fun icons
  const tips = [
    {
      title: 'Be specific about company types and time periods',
      description: 'Mention specific company tiers, stages, or categories along with when they worked there.',
      example: 'Experience at Series B-D enterprise SaaS companies between 2019-2024',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Combine role requirements with industry context',
      description: 'Specify the role type and years of experience within a particular industry or product category.',
      example: '3-5 years as Customer Success Manager in developer tools or infrastructure software',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
    {
      title: 'Specify technical skills in context',
      description: "Don't just list skills—describe how they were used and at what type of company.",
      example: 'Hands-on API integration and troubleshooting experience at scale-ups serving technical buyers',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Call out unique career transitions',
      description: 'Highlight non-linear career paths or role changes that indicate specific strengths.',
      example: 'Former software engineer who transitioned to Solutions Engineering at a top-tier cloud platform',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Reference specific company examples',
      description: 'Naming specific companies or groups helps set the right context and quality bar.',
      example: 'Worked at top-tier enterprise companies like Salesforce, Workday, or ServiceNow in a customer-facing technical role',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  const handleNextTip = () => {
    setCurrentTipIndex((prev) => (prev + 1) % tips.length);
  };

  const handlePrevTip = () => {
    setCurrentTipIndex((prev) => (prev - 1 + tips.length) % tips.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentTipIndex(index);
  };

  useEffect(() => {
    setLocalCriteria(criteria);
  }, [criteria]);

  useEffect(() => {
    if (isOpen) {
      // Load saved personas when modal opens
      setSavedPersonas(loadPersonas());
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleLinkedinUrlSubmit = () => {
    const url = linkedinUrl.trim();
    if (!url) return;
    
    // Parse URL to detect persona keywords
    const urlLower = url.toLowerCase();
    let detectedPersona: string | null = null;
    
    if (urlLower.includes('persona1')) {
      detectedPersona = 'persona1';
    } else if (urlLower.includes('persona2')) {
      detectedPersona = 'persona2';
    } else if (urlLower.includes('persona3')) {
      detectedPersona = 'persona3';
    }
    
    // If persona detected, populate criteria
    if (detectedPersona && PERSONA_PRESETS[detectedPersona]) {
      setLocalCriteria(PERSONA_PRESETS[detectedPersona]);
      setLinkedinUrl('');
      setShowUrlSuccess(true);
      
      // Hide success message after 2 seconds
      setTimeout(() => {
        setShowUrlSuccess(false);
      }, 2000);
    }
  };

  const handleLinkedinUrlKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleLinkedinUrlSubmit();
    }
  };

  const handleAddCriterion = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue && !localCriteria.includes(trimmedValue)) {
      setLocalCriteria([...localCriteria, trimmedValue]);
      setInputValue('');
    }
  };

  const handleRemoveCriterion = (index: number) => {
    setLocalCriteria(localCriteria.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddCriterion();
    }
  };

  const handleApply = () => {
    onApply(localCriteria);
    onClose();
  };

  const handleLoadPersona = (persona: SavedPersona) => {
    setLocalCriteria(persona.criteria);
  };

  const handleDeletePersona = (id: string) => {
    try {
      deletePersona(id);
      setSavedPersonas(loadPersonas());
    } catch (error) {
      console.error('Failed to delete persona:', error);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">AI Search Criteria</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content - Two Column Layout */}
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
          {/* Left Panel - Input */}
          <div className="flex-1 p-6 border-r border-slate-200 flex flex-col">
            {/* LinkedIn URL Quick Action */}
            <div className="mb-4 pb-4 border-b border-slate-200">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-2">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block text-sm font-semibold text-slate-900 mb-1">
                    Quick Start
                  </label>
                  <p className="text-xs text-slate-600 mb-2">
                    Paste a LinkedIn profile URL and press Enter to auto-populate criteria
                  </p>
                  <input
                    type="text"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    onKeyPress={handleLinkedinUrlKeyPress}
                    placeholder="https://linkedin.com/in/profile-url (press Enter)"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                  {showUrlSuccess && (
                    <div className="mt-2 flex items-center gap-2 text-xs text-emerald-700">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Criteria populated successfully!
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Saved Personas Section */}
            {savedPersonas.length > 0 && (
              <div className="mb-4 pb-4 border-b border-slate-200">
                <button
                  onClick={() => setShowPersonasSection(!showPersonasSection)}
                  className="flex items-center justify-between w-full text-sm font-semibold text-slate-900 mb-2 hover:text-slate-700"
                >
                  <span>Saved Personas ({savedPersonas.length})</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${showPersonasSection ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showPersonasSection && (
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {savedPersonas.map((persona) => (
                      <div
                        key={persona.id}
                        className="group flex items-center justify-between p-2 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors"
                      >
                        <button
                          onClick={() => handleLoadPersona(persona)}
                          className="flex-1 text-left"
                        >
                          <p className="text-sm font-medium text-purple-900">{persona.name}</p>
                          <p className="text-xs text-purple-600">
                            {persona.criteria.length} {persona.criteria.length === 1 ? 'criterion' : 'criteria'}
                          </p>
                        </button>
                        <button
                          onClick={() => handleDeletePersona(persona.id)}
                          className="flex-shrink-0 p-1 text-purple-400 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100"
                          aria-label="Delete persona"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Add Search Qualification
              </label>
              <p className="text-xs text-slate-600 mb-3">
                Describe one qualification at a time. Each will be scored separately (0-100) for every candidate.
              </p>
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="e.g., 3+ years in customer-facing roles at MAG7 companies"
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                />
                <button
                  onClick={handleAddCriterion}
                  disabled={!inputValue.trim()}
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors text-sm"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Criteria List */}
            <div className="flex-1 overflow-auto">
              {localCriteria.length === 0 ? (
                <div className="text-center py-8 text-slate-400">
                  <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <p className="text-sm">No criteria added yet</p>
                  <p className="text-xs mt-1">Add your first qualification above</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {localCriteria.map((criterion, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
                    >
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full ${getJewelToneClasses(index)} flex items-center justify-center text-xs font-semibold mt-0.5`}>
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-900 leading-relaxed">{criterion}</p>
                      </div>
                      <button
                        onClick={() => handleRemoveCriterion(index)}
                        className="flex-shrink-0 text-slate-400 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100"
                        aria-label="Remove criterion"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Tips Carousel */}
          <div className="w-full md:w-96 bg-slate-50 flex flex-col">
            <div className="p-6 pb-4">
              <h3 className="text-sm font-semibold text-slate-900">
                Writing Effective Search Criteria
              </h3>
            </div>

            {/* Carousel Content */}
            <div className="flex-1 flex flex-col justify-center px-8 py-6">
              <div className="space-y-6">
                {/* Tip Icon Badge */}
                <div className="flex justify-center">
                  <span className={`w-10 h-10 rounded-full ${getJewelToneClasses(currentTipIndex)} flex items-center justify-center`}>
                    {tips[currentTipIndex].icon}
                  </span>
                </div>

                {/* Tip Title */}
                <h4 className="text-base font-semibold text-slate-900 text-center leading-snug">
                  {tips[currentTipIndex].title}
                </h4>

                {/* Tip Description */}
                <p className="text-sm text-slate-600 leading-relaxed text-center">
                  {tips[currentTipIndex].description}
                </p>

                {/* Tip Example */}
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <p className="text-sm text-slate-700 italic leading-relaxed">
                    "{tips[currentTipIndex].example}"
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="p-6 pt-4 space-y-4">
              {/* Navigation Arrows */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePrevTip}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-white transition-all"
                  aria-label="Previous tip"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Dot Indicators */}
                <div className="flex items-center gap-2">
                  {tips.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`transition-all rounded-full ${
                        index === currentTipIndex
                          ? 'w-2 h-2 bg-teal-600'
                          : 'w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to tip ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNextTip}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-white transition-all"
                  aria-label="Next tip"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200">
          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-600">
              {localCriteria.length === 0 ? (
                <span>No criteria added</span>
              ) : (
                <span>
                  <span className="font-semibold text-slate-900">{localCriteria.length}</span> {localCriteria.length === 1 ? 'criterion' : 'criteria'} added
                </span>
              )}
            </div>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                className="px-6 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors text-sm"
              >
                Apply Criteria
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

