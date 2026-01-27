import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

const VALID_EVENT_TYPES = [
  "page_view",
  "link_click",
  "doc_view",
  "scroll_depth",
  "time_on_page",
  "deep_link_click",
  "doc_nav_click",
  "section_toggle",
  "filter_click",
  "button_click",
] as const;
type EventType = (typeof VALID_EVENT_TYPES)[number];

interface TrackRequestBody {
  type: string;
  visitorId: string;
  path?: string;
  metadata?: Record<string, unknown>;
  timestamp?: string;
}

function isValidEventType(type: string): type is EventType {
  return VALID_EVENT_TYPES.includes(type as EventType);
}

function getStartOfDay(date: Date): Date {
  const start = new Date(date);
  start.setUTCHours(0, 0, 0, 0);
  return start;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = (await request.json()) as TrackRequestBody;

    // Validate required fields
    if (!body.type || !body.visitorId) {
      return NextResponse.json(
        { error: "Missing required fields: type and visitorId are required" },
        { status: 400 }
      );
    }

    // Validate event type
    if (!isValidEventType(body.type)) {
      return NextResponse.json(
        { error: `Invalid event type. Must be one of: ${VALID_EVENT_TYPES.join(", ")}` },
        { status: 400 }
      );
    }

    const eventType = body.type;
    const today = getStartOfDay(new Date());
    const path = body.path ?? "/";

    // Create the event record
    await prisma.analyticsEvent.create({
      data: {
        type: eventType,
        visitorId: body.visitorId,
        path,
        metadata: body.metadata ? (body.metadata as Prisma.InputJsonValue) : Prisma.JsonNull,
      },
    });

    // Update daily summary (upsert)
    const summaryUpdateData: Record<string, { increment: number }> = {};

    if (eventType === "page_view") {
      summaryUpdateData.pageViews = { increment: 1 };

      // Check if this is first page view for this visitor today
      const visitorCountToday = await prisma.analyticsEvent.count({
        where: {
          visitorId: body.visitorId,
          type: "page_view",
          createdAt: {
            gte: today,
            lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
          },
        },
      });

      if (visitorCountToday === 1) {
        summaryUpdateData.uniqueVisitors = { increment: 1 };
      }
    } else if (eventType === "link_click") {
      summaryUpdateData.linkClicks = { increment: 1 };
    } else if (eventType === "doc_view") {
      summaryUpdateData.docViews = { increment: 1 };
    }

    if (Object.keys(summaryUpdateData).length > 0) {
      await prisma.analyticsSummary.upsert({
        where: { date: today },
        create: {
          date: today,
          pageViews: eventType === "page_view" ? 1 : 0,
          uniqueVisitors: eventType === "page_view" ? 1 : 0,
          linkClicks: eventType === "link_click" ? 1 : 0,
          docViews: eventType === "doc_view" ? 1 : 0,
        },
        update: summaryUpdateData,
      });
    }

    // Update page stats
    if (eventType === "page_view" || eventType === "doc_view") {
      const existingPageStats = await prisma.pageStats.findUnique({
        where: { path },
      });

      // Check if this visitor has viewed this page before today
      const visitorPageViewToday = await prisma.analyticsEvent.count({
        where: {
          visitorId: body.visitorId,
          path,
          type: { in: ["page_view", "doc_view"] },
          createdAt: {
            gte: today,
            lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
          },
        },
      });

      const isUniqueToday = visitorPageViewToday === 1;

      await prisma.pageStats.upsert({
        where: { path },
        create: {
          path,
          pageViews: 1,
          uniqueVisitors: 1,
        },
        update: {
          pageViews: { increment: 1 },
          uniqueVisitors: isUniqueToday
            ? { increment: 1 }
            : existingPageStats?.uniqueVisitors ?? 0,
        },
      });
    }

    // Update page stats for time tracking
    if (eventType === "time_on_page" && body.metadata?.seconds) {
      const seconds = Number(body.metadata.seconds);
      if (!isNaN(seconds) && seconds > 0) {
        const pageStats = await prisma.pageStats.findUnique({
          where: { path },
        });

        if (pageStats) {
          const newTotalTime = pageStats.totalTimeSeconds + seconds;
          const newAvgTime = Math.round(newTotalTime / pageStats.pageViews);

          await prisma.pageStats.update({
            where: { path },
            data: {
              totalTimeSeconds: newTotalTime,
              avgTimeSeconds: newAvgTime,
            },
          });
        }

        // Update visitor stats with cumulative time
        await prisma.visitorStats.upsert({
          where: { visitorId: body.visitorId },
          create: {
            visitorId: body.visitorId,
            totalTimeSeconds: seconds,
            totalPageViews: 0,
            totalSessions: 1,
          },
          update: {
            totalTimeSeconds: { increment: seconds },
          },
        });
      }
    }

    // Update scroll depth stats
    if (eventType === "scroll_depth" && body.metadata?.depth) {
      const depth = Number(body.metadata.depth);
      if (!isNaN(depth)) {
        const pageStats = await prisma.pageStats.findUnique({
          where: { path },
        });

        if (pageStats && depth > pageStats.maxScrollDepth) {
          await prisma.pageStats.update({
            where: { path },
            data: { maxScrollDepth: depth },
          });
        }
      }
    }

    // Update visitor stats for page views
    if (eventType === "page_view") {
      // Check if this is a new session (first page view in last 30 minutes)
      const recentActivity = await prisma.analyticsEvent.findFirst({
        where: {
          visitorId: body.visitorId,
          type: "page_view",
          createdAt: {
            gte: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
            lt: new Date(Date.now() - 1000), // Exclude the event we just created
          },
        },
      });

      const isNewSession = !recentActivity;

      await prisma.visitorStats.upsert({
        where: { visitorId: body.visitorId },
        create: {
          visitorId: body.visitorId,
          totalPageViews: 1,
          totalSessions: 1,
        },
        update: {
          totalPageViews: { increment: 1 },
          ...(isNewSession ? { totalSessions: { increment: 1 } } : {}),
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Analytics tracking error:", error);
    return NextResponse.json({ error: "Failed to track event" }, { status: 500 });
  }
}
