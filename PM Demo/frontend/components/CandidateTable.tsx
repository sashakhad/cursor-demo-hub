'use client';

/**
 * CandidateTable Component
 * Displays candidates with expandable rows showing AI fit score breakdowns
 * Copyright Anysphere Inc.
 */

import React, { useState } from 'react';
import type { Candidate, PersonaScore, CriterionScore } from '@/lib/api';
import ScoreCircle from './ScoreCircle';

interface CandidateTableProps {
  candidates: Candidate[];
  isLoading?: boolean;
}

export default function CandidateTable({ candidates, isLoading }: CandidateTableProps) {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());
  const [expandedReasoning, setExpandedReasoning] = useState<Set<string>>(new Set());
  
  // Helper function to extract school name from education string
  const getSchoolName = (education: string | null) => {
    if (!education) return 'N/A';
    
    // Extract school name from education string like "BS Computer Science, Stanford University"
    const parts = education.split(', ');
    return parts.length > 1 ? parts[parts.length - 1] : education;
  };
  
  const toggleRow = (id: number) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };
  
  const toggleReasoning = (key: string) => {
    const newExpanded = new Set(expandedReasoning);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedReasoning(newExpanded);
  };
  
  const getScoreBadgeStyle = (score: number) => {
    if (score >= 90) return {
      gradient: 'bg-gradient-to-br from-emerald-300 to-emerald-500',
      shadow: 'shadow-md shadow-emerald-100',
      glow: 'ring-2 ring-emerald-100'
    };
    if (score >= 80) return {
      gradient: 'bg-gradient-to-br from-blue-300 to-blue-500',
      shadow: 'shadow-md shadow-blue-100',
      glow: 'ring-2 ring-blue-100'
    };
    if (score >= 70) return {
      gradient: 'bg-gradient-to-br from-purple-300 to-purple-500',
      shadow: 'shadow-md shadow-purple-100',
      glow: 'ring-2 ring-purple-100'
    };
    if (score >= 60) return {
      gradient: 'bg-gradient-to-br from-amber-300 to-amber-500',
      shadow: 'shadow-md shadow-amber-100',
      glow: 'ring-2 ring-amber-100'
    };
    if (score >= 50) return {
      gradient: 'bg-gradient-to-br from-slate-300 to-slate-400',
      shadow: 'shadow-md shadow-slate-100',
      glow: 'ring-2 ring-slate-100'
    };
    return {
      gradient: 'bg-gradient-to-br from-slate-400 to-slate-500',
      shadow: 'shadow-md shadow-slate-200',
      glow: 'ring-2 ring-slate-200'
    };
  };
  
  const getScoreLabel = (label: string) => {
    const labels: { [key: string]: string } = {
      technical_background: 'Technical Background',
      customer_facing_experience: 'Customer-Facing Experience',
      startup_culture_fit: 'Startup Culture Fit',
      company_tier_alignment: 'Company Tier Alignment',
      tenure_appropriateness: 'Tenure Appropriateness',
    };
    return labels[label] || label;
  };
  
  
  // Modern Rounded Badge Component
  const MatchBadge = ({ score, size = 'md' }: { score: number; size?: 'sm' | 'md' | 'lg' }) => {
    const sizeClasses = {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-5 py-1.5 text-lg'
    };
    
    return (
      <div className={`inline-flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold ${sizeClasses[size]}`}>
        {Math.round(score)}% Match
      </div>
    );
  };
  
  
  if (isLoading) {
    return (
      <div className="flex-1 overflow-hidden">
        <div className="p-8">
          <div className="animate-pulse space-y-6">
            <div className="h-20 bg-slate-200 rounded-xl"></div>
            <div className="h-20 bg-slate-200 rounded-xl"></div>
            <div className="h-20 bg-slate-200 rounded-xl"></div>
            <div className="h-20 bg-slate-200 rounded-xl"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (candidates.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">No candidates found</h3>
          <p className="text-slate-600">Try adjusting your filters to see more results</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex-1 overflow-auto">
      <div className="min-w-full inline-block align-middle">
        <div className="overflow-x-auto">
          <table className="min-w-max border-separate border-spacing-0">
            <thead className="bg-white sticky top-0 z-10 rounded-t-xl">
              <tr>
                <th className="w-12 px-6 py-4"></th>
                <th className="px-8 py-4 text-left text-sm font-semibold text-slate-700 uppercase tracking-wider">
                  👤 Candidate
                </th>
                <th className="px-8 py-4 text-left text-sm font-semibold text-slate-700 uppercase tracking-wider">
                  💼 Title
                </th>
                <th className="px-8 py-4 text-left text-sm font-semibold text-slate-700 uppercase tracking-wider w-48 min-w-48">
                  🏢 Company
                </th>
                <th className="px-8 py-4 text-left text-sm font-semibold text-slate-700 uppercase tracking-wider w-48 min-w-48">
                  📍 Location
                </th>
                <th className="px-8 py-4 text-left text-sm font-semibold text-slate-700 uppercase tracking-wider">
                  🎓 School
                </th>
                <th className="px-8 py-4 text-center text-sm font-semibold text-slate-700 uppercase tracking-wider">
                  🔗
                </th>
                <th className="px-8 py-4 text-center text-sm font-semibold text-slate-700 uppercase tracking-wider">
                  🎯 AI Fit Score
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {candidates.map((candidate) => (
                <React.Fragment key={candidate.id}>
                  <tr
                    className="hover:bg-slate-50 transition-all duration-200 cursor-pointer border-b border-slate-100"
                    onClick={() => toggleRow(candidate.id)}
                  >
                    <td className="px-6 py-4 text-center">
                      <button
                        className="text-slate-400 hover:text-slate-600 transition-colors"
                        aria-label="Expand row"
                      >
                        <svg
                          className={`w-5 h-5 transition-transform ${
                            expandedRows.has(candidate.id) ? 'rotate-90' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </td>
                    <td className="px-8 py-4 whitespace-nowrap">
                      <div className="text-base font-medium text-slate-900">
                        {candidate.full_name}
                      </div>
                      <div className="text-sm text-slate-500 mt-1">
                        <span>
                          {candidate.years_in_role} {candidate.years_in_role === 1 ? 'year' : 'years'} in role
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-4">
                      <div className="text-sm text-slate-900 max-w-xs leading-relaxed">
                        {candidate.current_title || 'N/A'}
                      </div>
                    </td>
                    <td className="px-8 py-4 w-48 min-w-48">
                      <div className="text-sm font-medium text-slate-900 leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis">
                        {candidate.current_company || 'N/A'}
                      </div>
                    </td>
                    <td className="px-8 py-4 whitespace-nowrap w-48 min-w-48">
                      <div className="text-sm text-slate-900">
                        {candidate.city && candidate.state 
                          ? `${candidate.city}, ${candidate.state}` 
                          : candidate.country || 'N/A'}
                      </div>
                    </td>
                    <td className="px-8 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-900">{getSchoolName(candidate.education)}</div>
                    </td>
                    <td className="px-8 py-4 whitespace-nowrap text-center">
                      {candidate.linkedin_url ? (
                        <a
                          href={candidate.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </td>
                    <td className="px-8 py-4 whitespace-nowrap text-center">
                      <div className="inline-flex items-center justify-center">
                        <ScoreCircle 
                          score={candidate.overall_score} 
                          size="md" 
                          label="Overall AI Fit Score"
                        />
                      </div>
                    </td>
                  </tr>
                  
                  {expandedRows.has(candidate.id) && (
                    <tr key={`${candidate.id}-expanded`}>
                      <td colSpan={7} className="px-8 py-10 bg-slate-50/50">
                        <div className="max-w-5xl space-y-8">
                          {/* Overall Score and Reasoning */}
                          {candidate.selected_persona_score && (
                            <div>
                              <div className="mb-6">
                                <h4 className="text-base font-bold text-slate-900 tracking-tight">
                                  AI Fit Score Breakdown
                                </h4>
                              </div>
                              
                              {/* Criterion Scores - Show if multiple criteria were used */}
                              {candidate.selected_persona_score.criterion_scores && 
                               candidate.selected_persona_score.criterion_scores.length > 0 ? (
                                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-6">
                                  <h5 className="px-4 pt-4 pb-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                                    Individual Criterion Scores
                                  </h5>
                                  <div className="divide-y divide-slate-100">
                                    {candidate.selected_persona_score.criterion_scores.map((criterionScore, idx) => {
                                      const reasoningKey = `${candidate.id}-criterion-${idx}`;
                                      const isReasoningExpanded = expandedReasoning.has(reasoningKey);
                                      return (
                                        <div key={idx} className="group p-4 flex items-start gap-3">
                                          <ScoreCircle 
                                            score={criterionScore.score} 
                                            size="sm" 
                                            label={criterionScore.criterion}
                                          />
                                          <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-slate-900 leading-relaxed truncate">
                                              {criterionScore.criterion}
                                            </p>
                                            {criterionScore.reasoning && isReasoningExpanded && (
                                              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                                                {criterionScore.reasoning}
                                              </p>
                                            )}
                                          </div>
                                          {criterionScore.reasoning && (
                                            <button
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                toggleReasoning(reasoningKey);
                                              }}
                                              className="self-start ml-2 text-slate-400 hover:text-slate-600 transition-colors"
                                              aria-expanded={isReasoningExpanded}
                                            >
                                              <svg className={`w-3.5 h-3.5 transition-transform ${isReasoningExpanded ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                              </svg>
                                            </button>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              ) : (
                                <>
                                  {/* Traditional persona-based scoring */}
                                  {candidate.selected_persona_score.reasoning && (
                                    <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-2xl shadow-soft">
                                      <p className="text-sm text-blue-900 leading-relaxed">
                                        {candidate.selected_persona_score.reasoning}
                                      </p>
                                    </div>
                                  )}
                                  
                                  {/* Score Components - Compact Circle Display */}
                                  <div className="flex flex-wrap gap-3">
                                    {Object.entries(candidate.selected_persona_score)
                                      .filter(([key]) => key !== 'overall' && key !== 'reasoning' && key !== 'criterion_scores')
                                      .map(([key, value]) => (
                                        <div key={key} className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl shadow-soft hover:shadow-soft-md transition-all duration-200">
                                          {typeof value === 'number' && (
                                            <ScoreCircle 
                                              score={value} 
                                              size="md" 
                                              label={getScoreLabel(key)}
                                            />
                                          )}
                                          <div className="flex-1">
                                            <div className="text-sm font-semibold text-slate-900">
                                              {getScoreLabel(key)}
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                  </div>
                                </>
                              )}
                            </div>
                          )}
                          
                          {/* Work History */}
                          {candidate.work_history && candidate.work_history.length > 0 && (
                            <div>
                              <h4 className="text-base font-bold text-slate-900 mb-4">
                                Work History
                              </h4>
                              <div className="space-y-3">
                                {candidate.work_history.map((job, idx) => (
                                  <div
                                    key={`${candidate.id}-job-${idx}-${job.company}-${job.start_year}`}
                                    className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-soft hover:shadow-soft-md transition-all duration-200 hover:border-slate-300"
                                  >
                                    <div className="flex-1">
                                      <div className="text-base font-semibold text-slate-900 mb-1">
                                        {job.title}
                                      </div>
                                      <div className="text-sm text-slate-600 mb-2">{job.company}</div>
                                      <div className="text-xs text-slate-500">
                                        {job.start_year} - {job.end_year} ({job.years}{' '}
                                        {job.years === 1 ? 'year' : 'years'})
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {/* Skills */}
                          {candidate.skills && candidate.skills.length > 0 && (
                            <div>
                              <h4 className="text-base font-bold text-slate-900 mb-4">Skills</h4>
                              <div className="flex flex-wrap gap-2">
                                {candidate.skills.slice(0, 15).map((skill, idx) => {
                                  const jewelTones = [
                                    'bg-emerald-50 text-emerald-700 border-emerald-200',
                                    'bg-blue-50 text-blue-700 border-blue-200',
                                    'bg-purple-50 text-purple-700 border-purple-200',
                                    'bg-amber-50 text-amber-700 border-amber-200',
                                  ];
                                  const toneClass = jewelTones[idx % jewelTones.length];
                                  return (
                                    <span
                                      key={`${candidate.id}-skill-${idx}-${skill}`}
                                      className={`px-4 py-2 border rounded-full text-xs font-medium transition-all duration-200 hover:shadow-md ${toneClass}`}
                                    >
                                      {skill}
                                    </span>
                                  );
                                })}
                                {candidate.skills.length > 15 && (
                                  <span className="px-4 py-2 text-xs text-slate-500 font-medium">
                                    +{candidate.skills.length - 15} more
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                          
                          {/* Education */}
                          {candidate.education && (
                            <div>
                              <h4 className="text-base font-bold text-slate-900 mb-3">
                                Education
                              </h4>
                              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-soft">
                                <p className="text-sm text-slate-700 leading-relaxed">{candidate.education}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

