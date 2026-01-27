"use client";

import React from "react";
import useSWR from "swr";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Loader2,
  TrendingUp,
  Users,
  MousePointerClick,
  FileText,
  Clock,
  ArrowLeft,
  Eye,
  Link2,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

interface DailySummary {
  date: string;
  pageViews: number;
  uniqueVisitors: number;
  linkClicks: number;
  docViews: number;
}

interface PageStat {
  path: string;
  pageViews: number;
  uniqueVisitors: number;
  avgTimeSeconds: number;
  maxScrollDepth: number;
}

interface VisitorStat {
  visitorId: string;
  totalTimeSeconds: number;
  totalPageViews: number;
  totalSessions: number;
  firstSeenAt: string;
  lastSeenAt: string;
}

interface RecentEvent {
  id: string;
  type: string;
  visitorId: string;
  path: string | null;
  createdAt: string;
  metadata: Record<string, unknown> | null;
}

interface ClickedLink {
  url: string;
  linkText: string | null;
  clickCount: number;
  lastClickedAt: string;
}

interface DeepLinkClick {
  url: string;
  label: string | null;
  clickCount: number;
  lastClickedAt: string;
  fromPages: string[];
}

interface SectionToggle {
  sectionId: string;
  expandCount: number;
  collapseCount: number;
  path: string | null;
}

interface AnalyticsStats {
  totals: {
    pageViews: number;
    uniqueVisitors: number;
    linkClicks: number;
    docViews: number;
    deepLinkClicks: number;
    avgTimeOnPage: number;
    avgTimePerVisitor: number;
  };
  daily: DailySummary[];
  topPages: PageStat[];
  topDocs: PageStat[];
  clickedLinks: ClickedLink[];
  deepLinkClicks: DeepLinkClick[];
  sectionToggles: SectionToggle[];
  topVisitors: VisitorStat[];
  recentEvents: RecentEvent[];
  visitorInsights: {
    newVisitors: number;
    returningVisitors: number;
    avgPagesPerVisitor: number;
  };
}

async function fetchStats(url: string): Promise<AnalyticsStats> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch analytics stats");
  }
  return res.json();
}

function StatCard({
  title,
  value,
  icon: Icon,
  description,
}: {
  title: string;
  value: number | string;
  icon: React.ElementType;
  description?: string;
}): React.ReactElement {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-stone-500">{title}</p>
          <p className="mt-1 text-3xl font-bold tracking-tight text-stone-900">
            {typeof value === "number" ? value.toLocaleString() : value}
          </p>
          {description && <p className="mt-1 text-sm text-stone-400">{description}</p>}
        </div>
        <div className="rounded-full bg-stone-100 p-3">
          <Icon className="h-6 w-6 text-stone-600" />
        </div>
      </div>
    </div>
  );
}

function formatEventType(type: string): string {
  const labels: Record<string, string> = {
    page_view: "Page View",
    link_click: "Link Click",
    doc_view: "Doc View",
    scroll_depth: "Scroll",
    time_on_page: "Time Track",
    deep_link_click: "Deep Link",
    doc_nav_click: "Doc Nav",
    section_toggle: "Section Toggle",
    filter_click: "Filter",
    button_click: "Button",
  };
  return labels[type] ?? type;
}

function formatRelativeTime(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) {
    return "Just now";
  }
  if (diffMins < 60) {
    return `${diffMins}m ago`;
  }
  if (diffHours < 24) {
    return `${diffHours}h ago`;
  }
  if (diffDays < 7) {
    return `${diffDays}d ago`;
  }
  return date.toLocaleDateString();
}

function formatDuration(seconds: number): string {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins < 60) {
    return secs > 0 ? `${mins}m ${secs}s` : `${mins}m`;
  }
  const hours = Math.floor(mins / 60);
  const remainingMins = mins % 60;
  return `${hours}h ${remainingMins}m`;
}

function truncateVisitorId(visitorId: string): string {
  if (visitorId.length <= 12) {
    return visitorId;
  }
  return `${visitorId.slice(0, 6)}...${visitorId.slice(-4)}`;
}

const COLORS = ["#78716c", "#a8a29e", "#d6d3d1", "#e7e5e4"];

export default function AnalyticsPage(): React.ReactElement {
  const { data, error, isLoading } = useSWR<AnalyticsStats>(
    "/api/analytics/stats?days=30",
    fetchStats,
    {
      refreshInterval: 30000, // Refresh every 30 seconds
    }
  );

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-stone-50">
        <Loader2 className="h-8 w-8 animate-spin text-stone-400" />
        <p className="mt-4 text-sm text-stone-500">Loading analytics...</p>
      </main>
    );
  }

  if (error || !data) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-stone-50">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-red-600">Failed to load analytics</h2>
          <p className="mt-2 text-sm text-stone-500">{error?.message ?? "Unknown error"}</p>
          <Link
            href="/"
            className="mt-4 inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  const { totals, daily, topPages, topDocs, clickedLinks, deepLinkClicks, sectionToggles, topVisitors, recentEvents, visitorInsights } = data;

  // Prepare chart data with formatted dates
  const chartData = daily.map((d) => ({
    ...d,
    dateLabel: new Date(d.date).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
  }));

  // Visitor insights pie chart data
  const visitorPieData = [
    { name: "New", value: visitorInsights.newVisitors },
    { name: "Returning", value: visitorInsights.returningVisitors },
  ].filter((d) => d.value > 0);

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center gap-4">
          <Link href="/" className="text-stone-500 transition-colors hover:text-stone-700">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-xl font-semibold text-stone-900">Analytics Dashboard</h1>
            <p className="text-sm text-stone-500">Last 30 days of usage metrics</p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-6">
        {/* Summary Cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <StatCard title="Page Views" value={totals.pageViews} icon={Eye} description="Total page loads" />
          <StatCard
            title="Unique Visitors"
            value={totals.uniqueVisitors}
            icon={Users}
            description="Distinct users"
          />
          <StatCard
            title="Deep Links"
            value={totals.deepLinkClicks}
            icon={Link2}
            description="cursor:// clicks"
          />
          <StatCard
            title="Link Clicks"
            value={totals.linkClicks}
            icon={MousePointerClick}
            description="External links clicked"
          />
          <StatCard
            title="Doc Views"
            value={totals.docViews}
            icon={FileText}
            description="Documentation pages"
          />
        </div>

        {/* Time Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Avg Time on Page"
            value={formatDuration(totals.avgTimeOnPage)}
            icon={Clock}
            description="Per page average"
          />
          <StatCard
            title="Avg Time per Visitor"
            value={formatDuration(totals.avgTimePerVisitor)}
            icon={TrendingUp}
            description="Cumulative per visitor"
          />
          <StatCard
            title="Avg Pages per Visitor"
            value={visitorInsights.avgPagesPerVisitor}
            icon={FileText}
            description="Pages viewed per visitor"
          />
        </div>

        {/* Charts Section */}
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Page Views Over Time */}
          <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-stone-900">Page Views & Visitors</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
                  <XAxis dataKey="dateLabel" tick={{ fontSize: 12 }} stroke="#a8a29e" />
                  <YAxis tick={{ fontSize: 12 }} stroke="#a8a29e" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e7e5e4",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pageViews"
                    stroke="#78716c"
                    strokeWidth={2}
                    name="Page Views"
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="uniqueVisitors"
                    stroke="#a8a29e"
                    strokeWidth={2}
                    name="Unique Visitors"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Visitor Insights Pie */}
          <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-stone-900">Visitor Breakdown</h2>
            <div className="h-64">
              {visitorPieData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={visitorPieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                    >
                      {visitorPieData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length] ?? "#78716c"} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex h-full items-center justify-center text-stone-400">
                  No visitor data yet
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Top Pages Bar Chart */}
        <div className="mb-8 rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-stone-900">Top Pages</h2>
          <div className="h-64">
            {topPages.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topPages.slice(0, 10)} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
                  <XAxis type="number" tick={{ fontSize: 12 }} stroke="#a8a29e" />
                  <YAxis
                    type="category"
                    dataKey="path"
                    tick={{ fontSize: 11 }}
                    stroke="#a8a29e"
                    width={150}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e7e5e4",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="pageViews" fill="#78716c" name="Page Views" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-full items-center justify-center text-stone-400">
                No page data yet
              </div>
            )}
          </div>
        </div>

        {/* Tables Section */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Top Visitors by Time */}
          <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-stone-900">Most Engaged Visitors</h2>
            {topVisitors.length === 0 ? (
              <p className="text-sm text-stone-500">No visitor data yet</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-stone-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-stone-500">
                        Visitor
                      </th>
                      <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wider text-stone-500">
                        Time
                      </th>
                      <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wider text-stone-500">
                        Pages
                      </th>
                      <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wider text-stone-500">
                        Sessions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {topVisitors.slice(0, 10).map((visitor) => (
                      <tr key={visitor.visitorId} className="hover:bg-stone-50">
                        <td className="whitespace-nowrap px-4 py-3">
                          <code className="rounded bg-stone-100 px-1.5 py-0.5 text-xs text-stone-600">
                            {truncateVisitorId(visitor.visitorId)}
                          </code>
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-stone-600">
                          {formatDuration(visitor.totalTimeSeconds)}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-stone-600">
                          {visitor.totalPageViews}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-stone-600">
                          {visitor.totalSessions}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Recent Activity */}
          <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-stone-900">Recent Activity</h2>
            {recentEvents.length === 0 ? (
              <p className="text-sm text-stone-500">No recent activity</p>
            ) : (
              <div className="max-h-80 space-y-2 overflow-y-auto">
                {recentEvents.slice(0, 20).map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center justify-between rounded-lg bg-stone-50 px-4 py-3"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-stone-900">
                        {formatEventType(event.type)}
                      </p>
                      <p className="truncate text-xs text-stone-500">
                        {event.path ?? "/"} • {truncateVisitorId(event.visitorId)}
                      </p>
                    </div>
                    <span className="ml-4 flex-shrink-0 text-xs text-stone-400">
                      {formatRelativeTime(event.createdAt)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Deep Link Clicks Table - Most Important! */}
        <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-blue-900">
            <Link2 className="mr-2 inline-block h-5 w-5" />
            Cursor Deep Links (Demo Prompts)
          </h2>
          <p className="mb-4 text-sm text-blue-700">
            These are the cursor:// links people are clicking to try demos and prompts.
          </p>
          {deepLinkClicks.length === 0 ? (
            <p className="text-sm text-blue-600">No deep link clicks tracked yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-blue-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-blue-600">
                      Prompt / Label
                    </th>
                    <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wider text-blue-600">
                      Clicks
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-blue-600">
                      From Pages
                    </th>
                    <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wider text-blue-600">
                      Last Clicked
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-100">
                  {deepLinkClicks.map((link, idx) => (
                    <tr key={idx} className="hover:bg-blue-100">
                      <td className="max-w-md px-4 py-3">
                        <p className="text-sm font-medium text-blue-900 truncate" title={link.label ?? link.url}>
                          {link.label ?? link.url.substring(0, 80)}
                        </p>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right text-sm font-bold text-blue-900">
                        {link.clickCount.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-sm text-blue-700">
                        {link.fromPages.slice(0, 2).map((page, i) => (
                          <span key={i} className="mr-1 rounded bg-blue-200 px-1.5 py-0.5 text-xs">
                            {page.replace("/presenter-docs/", "")}
                          </span>
                        ))}
                        {link.fromPages.length > 2 && (
                          <span className="text-xs text-blue-500">+{link.fromPages.length - 2} more</span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-blue-600">
                        {formatRelativeTime(link.lastClickedAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Section Toggles - What content are people expanding? */}
        <div className="mt-6 rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-stone-900">
            <ChevronDown className="mr-2 inline-block h-5 w-5" />
            Collapsible Sections Expanded
          </h2>
          <p className="mb-4 text-sm text-stone-500">
            Shows which expandable sections people are opening to read more content.
          </p>
          {sectionToggles.length === 0 ? (
            <p className="text-sm text-stone-500">No section toggles tracked yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-stone-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-stone-500">
                      Section
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-stone-500">
                      Page
                    </th>
                    <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wider text-stone-500">
                      Expands
                    </th>
                    <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wider text-stone-500">
                      Collapses
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {sectionToggles.map((section, idx) => (
                    <tr key={idx} className="hover:bg-stone-50">
                      <td className="px-4 py-3 text-sm font-medium text-stone-900">
                        {section.sectionId}
                      </td>
                      <td className="px-4 py-3 text-sm text-stone-600">
                        {section.path?.replace("/presenter-docs/", "") ?? "—"}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-green-600 font-medium">
                        {section.expandCount}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-stone-400">
                        {section.collapseCount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Clicked Links Table */}
        <div className="mt-6 rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-stone-900">
            <MousePointerClick className="mr-2 inline-block h-5 w-5" />
            External Links Clicked
          </h2>
          {clickedLinks.length === 0 ? (
            <p className="text-sm text-stone-500">No link clicks tracked yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-stone-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-stone-500">
                      Link URL
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-stone-500">
                      Link Text
                    </th>
                    <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wider text-stone-500">
                      Clicks
                    </th>
                    <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wider text-stone-500">
                      Last Clicked
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {clickedLinks.map((link) => (
                    <tr key={link.url} className="hover:bg-stone-50">
                      <td className="max-w-xs truncate px-4 py-3">
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          {link.url}
                        </a>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-sm text-stone-600">
                        {link.linkText ?? "—"}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right text-sm font-medium text-stone-900">
                        {link.clickCount.toLocaleString()}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-stone-500">
                        {formatRelativeTime(link.lastClickedAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Documentation Pages Table */}
        <div className="mt-6 rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-stone-900">
            <FileText className="mr-2 inline-block h-5 w-5" />
            Documentation Usage
          </h2>
          {topDocs.length === 0 ? (
            <p className="text-sm text-stone-500">No documentation pages viewed yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-stone-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-stone-500">
                      Documentation Page
                    </th>
                    <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wider text-stone-500">
                      Views
                    </th>
                    <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wider text-stone-500">
                      Visitors
                    </th>
                    <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wider text-stone-500">
                      Avg Time
                    </th>
                    <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wider text-stone-500">
                      Scroll Depth
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {topDocs.map((doc) => (
                    <tr key={doc.path} className="hover:bg-stone-50">
                      <td className="whitespace-nowrap px-4 py-3">
                        <Link href={doc.path} className="text-sm text-blue-600 hover:underline">
                          {doc.path.replace("/presenter-docs/", "")}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-stone-600">
                        {doc.pageViews.toLocaleString()}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-stone-600">
                        {doc.uniqueVisitors.toLocaleString()}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-stone-600">
                        {formatDuration(doc.avgTimeSeconds)}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-stone-600">
                        {doc.maxScrollDepth}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Page Stats Table */}
        <div className="mt-6 rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-stone-900">All Pages Performance</h2>
          {topPages.length === 0 ? (
            <p className="text-sm text-stone-500">No page data yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-stone-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-stone-500">
                      Page
                    </th>
                    <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wider text-stone-500">
                      Views
                    </th>
                    <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wider text-stone-500">
                      Visitors
                    </th>
                    <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wider text-stone-500">
                      Avg Time
                    </th>
                    <th className="px-4 py-2 text-right text-xs font-medium uppercase tracking-wider text-stone-500">
                      Scroll Depth
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {topPages.map((page) => (
                    <tr key={page.path} className="hover:bg-stone-50">
                      <td className="whitespace-nowrap px-4 py-3">
                        <code className="text-sm text-stone-700">{page.path}</code>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-stone-600">
                        {page.pageViews.toLocaleString()}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-stone-600">
                        {page.uniqueVisitors.toLocaleString()}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-stone-600">
                        {formatDuration(page.avgTimeSeconds)}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-stone-600">
                        {page.maxScrollDepth}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
