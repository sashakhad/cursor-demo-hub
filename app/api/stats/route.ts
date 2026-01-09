import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const TOTAL_VIEWS_KEY = "stats:total_views";
const UNIQUE_VISITORS_KEY = "stats:unique_visitors";

function hashIP(ip: string): string {
  return crypto.createHash("sha256").update(ip).digest("hex").slice(0, 16);
}

export async function GET(request: NextRequest) {
  try {
    // Get visitor IP for unique tracking
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";
    const visitorHash = hashIP(ip);

    // Increment total views
    const totalViews = await kv.incr(TOTAL_VIEWS_KEY);

    // Check if this is a unique visitor (using a Set)
    const isNewVisitor = await kv.sadd(UNIQUE_VISITORS_KEY, visitorHash);
    const uniqueVisitors = await kv.scard(UNIQUE_VISITORS_KEY);

    return NextResponse.json({
      totalViews,
      uniqueVisitors,
      isNewVisitor: isNewVisitor === 1,
    });
  } catch (error) {
    // If KV is not configured, return fallback values
    console.error("Stats API error:", error);
    return NextResponse.json(
      {
        totalViews: null,
        uniqueVisitors: null,
        error: "Stats unavailable",
      },
      { status: 200 }
    );
  }
}



