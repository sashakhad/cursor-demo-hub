'use client';

/**
 * Quality Dashboard Page
 * Displays vendor quality metrics and waterfall analysis
 * Copyright Anysphere Inc.
 */

import { useState, useEffect } from 'react';
import QualitySummaryCards from '@/components/QualitySummaryCards';
import VendorMetricsTable from '@/components/VendorMetricsTable';
import WaterfallAnalysis from '@/components/WaterfallAnalysis';
import {
  getQualitySummary,
  getVendorMetrics,
  getWaterfallAnalysis,
  type QualitySummary,
  type VendorMetrics as VendorMetricsType,
  type WaterfallAnalysis as WaterfallAnalysisType
} from '@/lib/api';

type TabType = 'metrics' | 'waterfall' | 'trends';

export default function QualityDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('metrics');
  const [summary, setSummary] = useState<QualitySummary | null>(null);
  const [metrics, setMetrics] = useState<VendorMetricsType[]>([]);
  const [waterfallAnalysis, setWaterfallAnalysis] = useState<WaterfallAnalysisType | null>(null);
  
  const [isLoadingSummary, setIsLoadingSummary] = useState(true);
  const [isLoadingMetrics, setIsLoadingMetrics] = useState(true);
  const [isLoadingWaterfall, setIsLoadingWaterfall] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load summary data
  useEffect(() => {
    const loadSummary = async () => {
      try {
        setIsLoadingSummary(true);
        setError(null);
        const data = await getQualitySummary();
        setSummary(data);
      } catch (err) {
        console.error('Failed to load quality summary:', err);
        setError('Failed to load quality data. Please ensure the API is running.');
      } finally {
        setIsLoadingSummary(false);
      }
    };

    loadSummary();
  }, []);

  // Load metrics when metrics tab is active
  useEffect(() => {
    if (activeTab !== 'metrics') return;

    const loadMetrics = async () => {
      try {
        setIsLoadingMetrics(true);
        const data = await getVendorMetrics();
        setMetrics(data);
      } catch (err) {
        console.error('Failed to load vendor metrics:', err);
      } finally {
        setIsLoadingMetrics(false);
      }
    };

    if (metrics.length === 0) {
      loadMetrics();
    }
  }, [activeTab, metrics.length]);

  // Load waterfall analysis when waterfall tab is active
  useEffect(() => {
    if (activeTab !== 'waterfall') return;

    const loadWaterfall = async () => {
      try {
        setIsLoadingWaterfall(true);
        const data = await getWaterfallAnalysis();
        setWaterfallAnalysis(data);
      } catch (err) {
        console.error('Failed to load waterfall analysis:', err);
      } finally {
        setIsLoadingWaterfall(false);
      }
    };

    if (!waterfallAnalysis) {
      loadWaterfall();
    }
  }, [activeTab, waterfallAnalysis]);

  const tabs = [
    { id: 'metrics' as TabType, label: 'Vendor Metrics', icon: '📊' },
    { id: 'waterfall' as TabType, label: 'Waterfall Analysis', icon: '⚡' },
    { id: 'trends' as TabType, label: 'Trends', icon: '📈' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <a
                  href="/"
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                  title="Back to Candidates"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </a>
                <h1 className="text-3xl font-bold text-slate-900">
                  Vendor Quality Dashboard
                </h1>
              </div>
              <p className="text-slate-600 mt-1 ml-10">
                Real-time quality metrics and waterfall optimization insights
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs text-slate-500 uppercase tracking-wide">Data Period</div>
                <div className="text-sm font-semibold text-slate-900">Q2-Q3 2024</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Error Message */}
      {error && (
        <div className="max-w-7xl mx-auto px-8 mt-6">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-red-800">{error}</p>
            </div>
            <p className="text-xs text-red-600 mt-2 ml-8">
              Make sure the FastAPI backend is running: <code className="bg-red-100 px-2 py-1 rounded">cd src && python -m uvicorn api.main:app --reload</code>
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        {/* Summary Cards */}
        <QualitySummaryCards summary={summary} isLoading={isLoadingSummary} />

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-slate-200">
            <nav className="flex -mb-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex-1 px-6 py-4 text-sm font-medium border-b-2 transition-colors
                    ${activeTab === tab.id
                      ? 'border-blue-600 text-blue-600 bg-blue-50'
                      : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                    }
                  `}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'metrics' && (
              <div>
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-slate-900">Vendor Performance Metrics</h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Compare vendor quality scores, bounce rates, and data staleness. Click a row to see detailed breakdowns.
                  </p>
                </div>
                <VendorMetricsTable metrics={metrics} isLoading={isLoadingMetrics} />
              </div>
            )}

            {activeTab === 'waterfall' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-slate-900">Waterfall Configuration Analysis</h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Compare current vs. optimized vendor ordering and identify optimization opportunities.
                  </p>
                </div>
                <WaterfallAnalysis analysis={waterfallAnalysis} isLoading={isLoadingWaterfall} />
              </div>
            )}

            {activeTab === 'trends' && (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">Trends Coming Soon</h3>
                <p className="text-slate-500">
                  Time-series analysis and trend visualization will be available in a future update.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

