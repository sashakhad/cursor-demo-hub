'use client';

/**
 * Quality Summary Cards Component
 * Displays key quality metrics in stat cards
 * Copyright Anysphere Inc.
 */

import type { QualitySummary } from '@/lib/api';

interface QualitySummaryCardsProps {
  summary: QualitySummary | null;
  isLoading?: boolean;
}

export default function QualitySummaryCards({ summary, isLoading }: QualitySummaryCardsProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
            <div className="h-4 bg-slate-200 rounded w-3/4 mb-3"></div>
            <div className="h-8 bg-slate-200 rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-slate-200 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!summary) {
    return null;
  }

  const getScoreColor = (score: number) => {
    if (score <= 20) return 'text-emerald-600';
    if (score <= 40) return 'text-blue-600';
    if (score <= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreBadge = (score: number) => {
    if (score <= 20) return { text: 'Excellent', color: 'bg-emerald-100 text-emerald-800' };
    if (score <= 40) return { text: 'Good', color: 'bg-blue-100 text-blue-800' };
    if (score <= 60) return { text: 'Fair', color: 'bg-orange-100 text-orange-800' };
    return { text: 'Poor', color: 'bg-red-100 text-red-800' };
  };

  const avgScoreBadge = getScoreBadge(summary.avg_quality_score);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Total Issues */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-slate-600">Total Issues</h3>
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div className="text-3xl font-bold text-slate-900 mb-1">
          {summary.total_issues.toLocaleString()}
        </div>
        <div className="text-sm text-slate-500">
          {summary.critical_issues_count.toLocaleString()} critical ({summary.critical_issues_percentage}%)
        </div>
      </div>

      {/* Average Quality Score */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-slate-600">Avg Quality Score</h3>
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <div className={`text-3xl font-bold mb-1 ${getScoreColor(summary.avg_quality_score)}`}>
          {summary.avg_quality_score.toFixed(1)}
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${avgScoreBadge.color}`}>
            {avgScoreBadge.text}
          </span>
          <span className="text-sm text-slate-500">Lower is better</span>
        </div>
      </div>

      {/* Best Vendor */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-slate-600">Best Vendor</h3>
          <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="text-xl font-bold text-slate-900 mb-1">
          {summary.best_vendor.name}
        </div>
        <div className="text-sm text-emerald-600 font-medium">
          Score: {summary.best_vendor.quality_score?.toFixed(1) || 'N/A'}
        </div>
      </div>

      {/* Worst Vendor */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-slate-600">Worst Vendor</h3>
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="text-xl font-bold text-slate-900 mb-1">
          {summary.worst_vendor.name}
        </div>
        <div className="text-sm text-red-600 font-medium">
          Score: {summary.worst_vendor.quality_score?.toFixed(1) || 'N/A'}
        </div>
      </div>
    </div>
  );
}

