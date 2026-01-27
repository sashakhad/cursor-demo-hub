import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { AnalyticsSummary, PageStats, VisitorStats, AnalyticsEvent } from "@prisma/client";

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

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const daysParam = searchParams.get("days");
    const days = daysParam ? parseInt(daysParam, 10) : 30;

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    startDate.setUTCHours(0, 0, 0, 0);

    // Get daily summaries for the time period
    const dailySummaries = await prisma.analyticsSummary.findMany({
      where: {
        date: { gte: startDate },
      },
      orderBy: { date: "asc" },
    });

    // Calculate totals
    type TotalsAcc = { pageViews: number; uniqueVisitors: number; linkClicks: number; docViews: number };
    const totals = dailySummaries.reduce<TotalsAcc>(
      (acc: TotalsAcc, day: AnalyticsSummary) => ({
        pageViews: acc.pageViews + day.pageViews,
        uniqueVisitors: acc.uniqueVisitors + day.uniqueVisitors,
        linkClicks: acc.linkClicks + day.linkClicks,
        docViews: acc.docViews + day.docViews,
      }),
      { pageViews: 0, uniqueVisitors: 0, linkClicks: 0, docViews: 0 }
    );

    // Get top pages by views
    const topPages = await prisma.pageStats.findMany({
      orderBy: { pageViews: "desc" },
      take: 20,
    });

    // Calculate average time on page
    const pagesWithTime = topPages.filter((p: PageStats) => p.avgTimeSeconds > 0);
    const avgTimeOnPage =
      pagesWithTime.length > 0
        ? Math.round(
            pagesWithTime.reduce((sum: number, p: PageStats) => sum + p.avgTimeSeconds, 0) / pagesWithTime.length
          )
        : 0;

    // Get visitor stats
    const visitorStats = await prisma.visitorStats.findMany({
      orderBy: { totalTimeSeconds: "desc" },
      take: 20,
    });

    // Calculate average time per visitor
    const visitorsWithTime = visitorStats.filter((v: VisitorStats) => v.totalTimeSeconds > 0);
    const avgTimePerVisitor =
      visitorsWithTime.length > 0
        ? Math.round(
            visitorsWithTime.reduce((sum: number, v: VisitorStats) => sum + v.totalTimeSeconds, 0) /
              visitorsWithTime.length
          )
        : 0;

    // Get visitor insights
    const totalVisitorCount = await prisma.visitorStats.count();
    const returningVisitors = await prisma.visitorStats.count({
      where: { totalSessions: { gt: 1 } },
    });
    const newVisitors = totalVisitorCount - returningVisitors;

    // Calculate average pages per visitor
    const allVisitorStats = await prisma.visitorStats.aggregate({
      _avg: { totalPageViews: true },
    });
    const avgPagesPerVisitor = Math.round(allVisitorStats._avg.totalPageViews ?? 0);

    // Get recent events
    const recentEvents = await prisma.analyticsEvent.findMany({
      take: 50,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        type: true,
        visitorId: true,
        path: true,
        createdAt: true,
        metadata: true,
      },
    });

    // Get top documentation pages (paths starting with /presenter-docs)
    const topDocs = topPages.filter((p: PageStats) => p.path.startsWith("/presenter-docs"));

    // Get clicked links from events
    const linkClickEvents = await prisma.analyticsEvent.findMany({
      where: {
        type: "link_click",
        createdAt: { gte: startDate },
      },
      orderBy: { createdAt: "desc" },
      select: {
        metadata: true,
        createdAt: true,
      },
    });

    // Aggregate link clicks by URL
    const linkClickMap = new Map<string, { url: string; linkText: string | null; count: number; lastClicked: Date }>();
    for (const event of linkClickEvents) {
      if (event.metadata) {
        const meta = event.metadata as { url?: string; linkText?: string };
        if (meta.url) {
          const existing = linkClickMap.get(meta.url);
          if (existing) {
            existing.count++;
            if (event.createdAt > existing.lastClicked) {
              existing.lastClicked = event.createdAt;
            }
          } else {
            linkClickMap.set(meta.url, {
              url: meta.url,
              linkText: meta.linkText ?? null,
              count: 1,
              lastClicked: event.createdAt,
            });
          }
        }
      }
    }

    const clickedLinks: ClickedLink[] = Array.from(linkClickMap.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, 20)
      .map((link) => ({
        url: link.url,
        linkText: link.linkText,
        clickCount: link.count,
        lastClickedAt: link.lastClicked.toISOString(),
      }));

    // Get deep link clicks (cursor:// protocol)
    const deepLinkEvents = await prisma.analyticsEvent.findMany({
      where: {
        type: "deep_link_click",
        createdAt: { gte: startDate },
      },
      orderBy: { createdAt: "desc" },
      select: {
        metadata: true,
        path: true,
        createdAt: true,
      },
    });

    // Aggregate deep link clicks by URL
    const deepLinkMap = new Map<string, { url: string; label: string | null; count: number; lastClicked: Date; fromPages: Set<string> }>();
    for (const event of deepLinkEvents) {
      if (event.metadata) {
        const meta = event.metadata as { url?: string; label?: string };
        if (meta.url) {
          const existing = deepLinkMap.get(meta.url);
          if (existing) {
            existing.count++;
            if (event.createdAt > existing.lastClicked) {
              existing.lastClicked = event.createdAt;
            }
            if (event.path) {
              existing.fromPages.add(event.path);
            }
          } else {
            const fromPages = new Set<string>();
            if (event.path) {
              fromPages.add(event.path);
            }
            deepLinkMap.set(meta.url, {
              url: meta.url,
              label: meta.label ?? null,
              count: 1,
              lastClicked: event.createdAt,
              fromPages,
            });
          }
        }
      }
    }

    const deepLinkClicks: DeepLinkClick[] = Array.from(deepLinkMap.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, 30)
      .map((link) => ({
        url: link.url,
        label: link.label,
        clickCount: link.count,
        lastClickedAt: link.lastClicked.toISOString(),
        fromPages: Array.from(link.fromPages),
      }));

    const totalDeepLinkClicks = deepLinkEvents.length;

    // Get section toggle events
    const sectionToggleEvents = await prisma.analyticsEvent.findMany({
      where: {
        type: "section_toggle",
        createdAt: { gte: startDate },
      },
      select: {
        metadata: true,
        path: true,
      },
    });

    // Aggregate section toggles
    const sectionToggleMap = new Map<string, { sectionId: string; expandCount: number; collapseCount: number; path: string | null }>();
    for (const event of sectionToggleEvents) {
      if (event.metadata) {
        const meta = event.metadata as { sectionId?: string; expanded?: boolean };
        if (meta.sectionId) {
          const key = `${event.path ?? "unknown"}:${meta.sectionId}`;
          const existing = sectionToggleMap.get(key);
          if (existing) {
            if (meta.expanded) {
              existing.expandCount++;
            } else {
              existing.collapseCount++;
            }
          } else {
            sectionToggleMap.set(key, {
              sectionId: meta.sectionId,
              expandCount: meta.expanded ? 1 : 0,
              collapseCount: meta.expanded ? 0 : 1,
              path: event.path,
            });
          }
        }
      }
    }

    const sectionToggles: SectionToggle[] = Array.from(sectionToggleMap.values())
      .sort((a, b) => (b.expandCount + b.collapseCount) - (a.expandCount + a.collapseCount))
      .slice(0, 20);

    const stats: AnalyticsStats = {
      totals: {
        ...totals,
        deepLinkClicks: totalDeepLinkClicks,
        avgTimeOnPage,
        avgTimePerVisitor,
      },
      daily: dailySummaries.map((day: AnalyticsSummary) => ({
        date: day.date.toISOString().split("T")[0] ?? "",
        pageViews: day.pageViews,
        uniqueVisitors: day.uniqueVisitors,
        linkClicks: day.linkClicks,
        docViews: day.docViews,
      })),
      topPages: topPages.map((page: PageStats) => ({
        path: page.path,
        pageViews: page.pageViews,
        uniqueVisitors: page.uniqueVisitors,
        avgTimeSeconds: page.avgTimeSeconds,
        maxScrollDepth: page.maxScrollDepth,
      })),
      topDocs: topDocs.map((page: PageStats) => ({
        path: page.path,
        pageViews: page.pageViews,
        uniqueVisitors: page.uniqueVisitors,
        avgTimeSeconds: page.avgTimeSeconds,
        maxScrollDepth: page.maxScrollDepth,
      })),
      clickedLinks,
      deepLinkClicks,
      sectionToggles,
      topVisitors: visitorStats.map((visitor: VisitorStats) => ({
        visitorId: visitor.visitorId,
        totalTimeSeconds: visitor.totalTimeSeconds,
        totalPageViews: visitor.totalPageViews,
        totalSessions: visitor.totalSessions,
        firstSeenAt: visitor.firstSeenAt.toISOString(),
        lastSeenAt: visitor.lastSeenAt.toISOString(),
      })),
      recentEvents: recentEvents.map((event: Pick<AnalyticsEvent, 'id' | 'type' | 'visitorId' | 'path' | 'createdAt' | 'metadata'>) => ({
        id: event.id,
        type: event.type,
        visitorId: event.visitorId,
        path: event.path,
        createdAt: event.createdAt.toISOString(),
        metadata: (event.metadata as Record<string, unknown>) ?? null,
      })),
      visitorInsights: {
        newVisitors,
        returningVisitors,
        avgPagesPerVisitor,
      },
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Analytics stats error:", error);
    return NextResponse.json({ error: "Failed to fetch analytics stats" }, { status: 500 });
  }
}
