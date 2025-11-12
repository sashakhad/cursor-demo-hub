'use client';

/**
 * Vendor Metrics Table Component
 * Displays vendor quality metrics in a sortable table
 * Copyright Anysphere Inc.
 */

import React, { useState } from 'react';
import type { VendorMetrics } from '@/lib/api';

interface VendorMetricsTableProps {
  metrics: VendorMetrics[];
  isLoading?: boolean;
}

type SortKey = 'vendor_name' | 'total_issues' | 'quality_score' | 'email_bounce_rate' | 'avg_staleness_days';
type SortOrder = 'asc' | 'desc';

export default function VendorMetricsTable({ metrics, isLoading }: VendorMetricsTableProps) {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());
  const [sortKey, setSortKey] = useState<SortKey>('quality_score');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const toggleRow = (vendorId: number) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(vendorId)) {
      newExpanded.delete(vendorId);
    } else {
      newExpanded.add(vendorId);
    }
    setExpandedRows(newExpanded);
  };

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedMetrics = [...metrics].sort((a, b) => {
    let aVal = a[sortKey];
    let bVal = b[sortKey];

    // Handle null values
    if (aVal === null) aVal = sortOrder === 'asc' ? Infinity : -Infinity;
    if (bVal === null) bVal = sortOrder === 'asc' ? Infinity : -Infinity;

    if (sortOrder === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  const getScoreColor = (score: number | null) => {
    if (score === null) return 'text-slate-400';
    if (score <= 20) return 'text-emerald-600';
    if (score <= 40) return 'text-blue-600';
    if (score <= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number | null) => {
    if (score === null) return 'bg-slate-100';
    if (score <= 20) return 'bg-emerald-100';
    if (score <= 40) return 'bg-blue-100';
    if (score <= 60) return 'bg-orange-100';
    return 'bg-red-100';
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-slate-200">
        <div className="p-6">
          <div className="animate-pulse space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-12 bg-slate-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (metrics.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-12 text-center">
        <p className="text-slate-500">No vendor metrics available</p>
      </div>
    );
  }

  const SortIcon = ({ columnKey }: { columnKey: SortKey }) => {
    if (sortKey !== columnKey) {
      return (
        <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    }
    return sortOrder === 'asc' ? (
      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    ) : (
      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-medium text-slate-600 uppercase tracking-wider">
                <button
                  onClick={() => handleSort('vendor_name')}
                  className="flex items-center gap-2 hover:text-slate-900"
                >
                  Vendor <SortIcon columnKey="vendor_name" />
                </button>
              </th>
              <th className="text-left px-6 py-3 text-xs font-medium text-slate-600 uppercase tracking-wider">
                <button
                  onClick={() => handleSort('quality_score')}
                  className="flex items-center gap-2 hover:text-slate-900"
                >
                  Quality Score <SortIcon columnKey="quality_score" />
                </button>
              </th>
              <th className="text-left px-6 py-3 text-xs font-medium text-slate-600 uppercase tracking-wider">
                <button
                  onClick={() => handleSort('total_issues')}
                  className="flex items-center gap-2 hover:text-slate-900"
                >
                  Total Issues <SortIcon columnKey="total_issues" />
                </button>
              </th>
              <th className="text-left px-6 py-3 text-xs font-medium text-slate-600 uppercase tracking-wider">
                <button
                  onClick={() => handleSort('email_bounce_rate')}
                  className="flex items-center gap-2 hover:text-slate-900"
                >
                  Bounce Rate <SortIcon columnKey="email_bounce_rate" />
                </button>
              </th>
              <th className="text-left px-6 py-3 text-xs font-medium text-slate-600 uppercase tracking-wider">
                <button
                  onClick={() => handleSort('avg_staleness_days')}
                  className="flex items-center gap-2 hover:text-slate-900"
                >
                  Avg Staleness <SortIcon columnKey="avg_staleness_days" />
                </button>
              </th>
              <th className="w-12"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {sortedMetrics.map((vendor) => (
              <React.Fragment key={vendor.vendor_id}>
                <tr
                  className="hover:bg-slate-50 cursor-pointer"
                  onClick={() => toggleRow(vendor.vendor_id)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-slate-900">{vendor.vendor_name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getScoreBg(vendor.quality_score)} ${getScoreColor(vendor.quality_score)}`}>
                        {vendor.quality_score !== null ? vendor.quality_score.toFixed(1) : 'N/A'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-slate-900">
                    {vendor.total_issues.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-slate-900">
                    {vendor.email_bounce_rate.toFixed(1)}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-slate-900">
                    {vendor.avg_staleness_days.toFixed(0)} days
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <svg
                      className={`w-5 h-5 text-slate-400 transition-transform ${expandedRows.has(vendor.vendor_id) ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </td>
                </tr>
                
                {expandedRows.has(vendor.vendor_id) && (
                  <tr key={`${vendor.vendor_id}-expanded`}>
                    <td colSpan={6} className="px-6 py-4 bg-slate-50">
                      <div className="grid grid-cols-2 gap-6">
                        {/* Severity Breakdown */}
                        <div>
                          <h4 className="text-sm font-semibold text-slate-700 mb-3">Severity Breakdown</h4>
                          <div className="space-y-2">
                            {Object.entries(vendor.severity_breakdown).map(([severity, data]) => (
                              <div key={`${vendor.vendor_id}-severity-${severity}`} className="flex items-center justify-between">
                                <span className="text-sm text-slate-600">{severity}</span>
                                <div className="flex items-center gap-2">
                                  <div className="w-32 bg-slate-200 rounded-full h-2">
                                    <div
                                      className={`h-2 rounded-full ${
                                        severity === 'Critical' ? 'bg-red-500' :
                                        severity === 'High' ? 'bg-orange-500' : 'bg-yellow-500'
                                      }`}
                                      style={{ width: `${data.percentage}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-sm font-medium text-slate-900 w-16 text-right">
                                    {data.count} ({data.percentage.toFixed(1)}%)
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Issue Type Breakdown */}
                        <div>
                          <h4 className="text-sm font-semibold text-slate-700 mb-3">Issue Type Breakdown</h4>
                          <div className="space-y-2">
                            {Object.entries(vendor.issue_type_breakdown).map(([issueType, data]) => (
                              <div key={`${vendor.vendor_id}-issue-${issueType}`} className="flex items-center justify-between">
                                <span className="text-sm text-slate-600 capitalize">
                                  {issueType.replace(/_/g, ' ')}
                                </span>
                                <div className="flex items-center gap-2">
                                  <div className="w-32 bg-slate-200 rounded-full h-2">
                                    <div
                                      className="bg-blue-500 h-2 rounded-full"
                                      style={{ width: `${data.percentage}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-sm font-medium text-slate-900 w-16 text-right">
                                    {data.count} ({data.percentage.toFixed(1)}%)
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Additional Metrics */}
                      <div className="mt-4 pt-4 border-t border-slate-200 grid grid-cols-3 gap-4">
                        <div>
                          <div className="text-xs text-slate-500">Phone Invalid Rate</div>
                          <div className="text-sm font-semibold text-slate-900">{vendor.phone_invalid_rate.toFixed(1)}%</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500">Email Bounce Rate</div>
                          <div className="text-sm font-semibold text-slate-900">{vendor.email_bounce_rate.toFixed(1)}%</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500">Average Data Staleness</div>
                          <div className="text-sm font-semibold text-slate-900">{vendor.avg_staleness_days.toFixed(0)} days</div>
                        </div>
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
  );
}

