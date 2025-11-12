'use client';

/**
 * Waterfall Analysis Component
 * Visualizes waterfall configurations and optimization opportunities
 * Copyright Anysphere Inc.
 */

import type { WaterfallAnalysis as WaterfallAnalysisType } from '@/lib/api';

interface WaterfallAnalysisProps {
  analysis: WaterfallAnalysisType | null;
  isLoading?: boolean;
}

export default function WaterfallAnalysis({ analysis, isLoading }: WaterfallAnalysisProps) {
  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 animate-pulse">
          <div className="h-6 bg-slate-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-16 bg-slate-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!analysis) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-12 text-center">
        <p className="text-slate-500">No waterfall analysis data available</p>
      </div>
    );
  }

  const getScoreColor = (score: number | null | undefined) => {
    if (score === null || score === undefined) return 'text-slate-400';
    if (score <= 20) return 'text-emerald-600';
    if (score <= 40) return 'text-blue-600';
    if (score <= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number | null | undefined) => {
    if (score === null || score === undefined) return 'bg-slate-100';
    if (score <= 20) return 'bg-emerald-100';
    if (score <= 40) return 'bg-blue-100';
    if (score <= 60) return 'bg-orange-100';
    return 'bg-red-100';
  };

  const configs = ['standard', 'optimized', 'executive'];
  const configTitles = {
    standard: 'Current Configuration',
    optimized: 'Recommended (Optimized)',
    executive: 'Executive (High-Stakes)'
  };

  const configDescriptions = {
    standard: 'Current waterfall with suboptimal vendor ordering',
    optimized: 'Data-driven reorganization prioritizing quality vendors',
    executive: 'Best vendors only for critical searches'
  };

  return (
    <div className="space-y-8">
      {/* Recommendation Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Optimization Opportunity</h3>
            <p className="text-blue-800 mb-3">
              Reorganizing the waterfall to prioritize high-quality vendors (Cognism, Vendor_E) at Position 1-2 could reduce data quality issues by up to 84%.
            </p>
            <div className="flex gap-4 text-sm">
              <div>
                <span className="font-medium text-blue-900">Expected Impact:</span>
                <span className="text-blue-800"> 49% improvement in data freshness</span>
              </div>
              <div>
                <span className="font-medium text-blue-900">Cost:</span>
                <span className="text-blue-800"> Minimal (configuration change only)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Waterfall Configurations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {configs.map((configName) => {
          const config = analysis.configurations[configName];
          if (!config) return null;

          const isRecommended = configName === 'optimized';

          return (
            <div
              key={configName}
              className={`bg-white rounded-lg shadow-sm border-2 ${
                isRecommended ? 'border-emerald-500' : 'border-slate-200'
              } overflow-hidden`}
            >
              {/* Header */}
              <div className={`px-6 py-4 ${isRecommended ? 'bg-emerald-50' : 'bg-slate-50'} border-b ${isRecommended ? 'border-emerald-200' : 'border-slate-200'}`}>
                <div className="flex items-center justify-between mb-1">
                  <h3 className={`text-lg font-bold ${isRecommended ? 'text-emerald-900' : 'text-slate-900'}`}>
                    {configTitles[configName as keyof typeof configTitles]}
                  </h3>
                  {isRecommended && (
                    <span className="px-2 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
                      RECOMMENDED
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-600">
                  {configDescriptions[configName as keyof typeof configDescriptions]}
                </p>
              </div>

              {/* Positions */}
              <div className="p-4 space-y-2">
                {config.positions.map((position) => (
                  <div
                    key={position.position}
                    className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    {/* Position Number */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-700">
                      {position.position}
                    </div>

                    {/* Vendor Info */}
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-slate-900 truncate">
                        {position.vendor_name || 'No vendor'}
                      </div>
                      {position.quality_score !== null && position.quality_score !== undefined && (
                        <div className="text-xs text-slate-500">
                          Score: <span className={`font-semibold ${getScoreColor(position.quality_score)}`}>
                            {position.quality_score.toFixed(1)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Issue Count (only for standard config) */}
                    {configName === 'standard' && position.issue_count > 0 && (
                      <div className="text-right">
                        <div className="text-sm font-semibold text-slate-900">
                          {position.issue_count.toLocaleString()}
                        </div>
                        <div className="text-xs text-slate-500">issues</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Footer Stats (only for standard) */}
              {configName === 'standard' && (
                <div className="px-6 py-3 bg-slate-50 border-t border-slate-200">
                  <div className="text-sm text-slate-600">
                    Total Issues:{' '}
                    <span className="font-semibold text-slate-900">
                      {config.positions.reduce((sum, p) => sum + p.issue_count, 0).toLocaleString()}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Position Impact Analysis */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Issues by Waterfall Position</h3>
        <p className="text-sm text-slate-600 mb-6">
          Earlier positions (1-2) are queried more frequently. Issues at Position 1 have the highest impact on recruiter productivity.
        </p>
        
        <div className="space-y-3">
          {Object.entries(analysis.position_breakdown)
            .sort(([a], [b]) => Number(a) - Number(b))
            .map(([position, data]) => {
              const maxCount = Math.max(...Object.values(analysis.position_breakdown).map(d => d.count));
              const widthPercentage = (data.count / maxCount) * 100;

              return (
                <div key={position} className="flex items-center gap-4">
                  <div className="w-20 text-sm font-medium text-slate-700">
                    Position {position}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-slate-100 rounded-full h-8">
                        <div
                          className={`h-8 rounded-full flex items-center justify-end pr-3 text-white text-sm font-semibold transition-all ${
                            Number(position) <= 2 ? 'bg-red-500' :
                            Number(position) <= 4 ? 'bg-orange-500' : 'bg-blue-500'
                          }`}
                          style={{ width: `${widthPercentage}%` }}
                        >
                          {widthPercentage > 20 && `${data.count.toLocaleString()} issues`}
                        </div>
                      </div>
                      <div className="w-24 text-right text-sm text-slate-600">
                        {data.percentage.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

