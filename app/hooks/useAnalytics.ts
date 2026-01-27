"use client";

import { useCallback, useEffect, useRef } from "react";

// Event types for analytics tracking
export type AnalyticsEventType =
  | "page_view"
  | "link_click"
  | "doc_view"
  | "scroll_depth"
  | "time_on_page"
  | "deep_link_click"
  | "doc_nav_click"
  | "section_toggle"
  | "filter_click"
  | "button_click";

export interface TrackEventOptions {
  type: AnalyticsEventType;
  path?: string | undefined;
  metadata?: Record<string, unknown> | undefined;
}

// Generate or retrieve a persistent visitor ID from localStorage
function getVisitorId(): string {
  if (typeof window === "undefined") {
    return "server";
  }

  const storageKey = "analytics_visitor_id";
  let visitorId = localStorage.getItem(storageKey);

  if (!visitorId) {
    // Generate a unique ID: v_{timestamp}_{random}
    visitorId = `v_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
    localStorage.setItem(storageKey, visitorId);
  }

  return visitorId;
}

// Send tracking data using sendBeacon (non-blocking) or fetch as fallback
function sendTrackingData(data: Record<string, unknown>): void {
  const payload = JSON.stringify(data);
  const url = "/api/analytics/track";

  // Try sendBeacon first (non-blocking, works even on page unload)
  if (typeof navigator !== "undefined" && navigator.sendBeacon) {
    const blob = new Blob([payload], { type: "application/json" });
    const sent = navigator.sendBeacon(url, blob);
    if (sent) {
      return;
    }
  }

  // Fallback to fetch with keepalive
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  }).catch((err) => {
    // Silently fail - analytics should not break the app
    console.warn("Analytics tracking failed:", err);
  });
}

/**
 * Hook for tracking analytics events.
 * Provides methods for tracking page views, link clicks, scroll depth, and time on page.
 */
export function useAnalytics() {
  const visitorIdRef = useRef<string | null>(null);

  // Initialize visitor ID on mount
  useEffect(() => {
    visitorIdRef.current = getVisitorId();
  }, []);

  const trackEvent = useCallback((options: TrackEventOptions) => {
    const visitorId = visitorIdRef.current ?? getVisitorId();

    sendTrackingData({
      type: options.type,
      visitorId,
      path: options.path ?? (typeof window !== "undefined" ? window.location.pathname : undefined),
      metadata: options.metadata,
      timestamp: new Date().toISOString(),
    });
  }, []);

  const trackPageView = useCallback(
    (options: { path?: string | undefined; referrer?: string | undefined } = {}) => {
      trackEvent({
        type: "page_view",
        path: options.path,
        metadata: options.referrer ? { referrer: options.referrer } : undefined,
      });
    },
    [trackEvent]
  );

  const trackLinkClick = useCallback(
    (options: { url: string; linkText?: string | undefined; path?: string | undefined }) => {
      trackEvent({
        type: "link_click",
        path: options.path,
        metadata: {
          url: options.url,
          ...(options.linkText ? { linkText: options.linkText } : {}),
        },
      });
    },
    [trackEvent]
  );

  const trackDocView = useCallback(
    (options: { docSlug: string; category?: string }) => {
      trackEvent({
        type: "doc_view",
        path: `/presenter-docs/${options.docSlug}`,
        metadata: {
          docSlug: options.docSlug,
          category: options.category,
        },
      });
    },
    [trackEvent]
  );

  const trackScrollDepth = useCallback(
    (options: { depth: number; path?: string | undefined }) => {
      trackEvent({
        type: "scroll_depth",
        path: options.path,
        metadata: {
          depth: options.depth, // 25, 50, 75, or 100
        },
      });
    },
    [trackEvent]
  );

  const trackTimeOnPage = useCallback(
    (options: { seconds: number; path?: string | undefined }) => {
      trackEvent({
        type: "time_on_page",
        path: options.path,
        metadata: {
          seconds: options.seconds,
        },
      });
    },
    [trackEvent]
  );

  const trackDeepLinkClick = useCallback(
    (options: { url: string; label?: string; path?: string | undefined }) => {
      trackEvent({
        type: "deep_link_click",
        path: options.path,
        metadata: {
          url: options.url,
          ...(options.label ? { label: options.label } : {}),
        },
      });
    },
    [trackEvent]
  );

  const trackDocNavClick = useCallback(
    (options: { targetDoc: string; fromPath?: string | undefined }) => {
      trackEvent({
        type: "doc_nav_click",
        path: options.fromPath,
        metadata: {
          targetDoc: options.targetDoc,
        },
      });
    },
    [trackEvent]
  );

  const trackSectionToggle = useCallback(
    (options: { sectionId: string; expanded: boolean; path?: string | undefined }) => {
      trackEvent({
        type: "section_toggle",
        path: options.path,
        metadata: {
          sectionId: options.sectionId,
          expanded: options.expanded,
        },
      });
    },
    [trackEvent]
  );

  const trackFilterClick = useCallback(
    (options: { filterType: string; filterValue: string; path?: string | undefined }) => {
      trackEvent({
        type: "filter_click",
        path: options.path,
        metadata: {
          filterType: options.filterType,
          filterValue: options.filterValue,
        },
      });
    },
    [trackEvent]
  );

  const trackButtonClick = useCallback(
    (options: { buttonId: string; buttonLabel?: string; path?: string | undefined }) => {
      trackEvent({
        type: "button_click",
        path: options.path,
        metadata: {
          buttonId: options.buttonId,
          ...(options.buttonLabel ? { buttonLabel: options.buttonLabel } : {}),
        },
      });
    },
    [trackEvent]
  );

  return {
    trackEvent,
    trackPageView,
    trackLinkClick,
    trackDocView,
    trackScrollDepth,
    trackTimeOnPage,
    trackDeepLinkClick,
    trackDocNavClick,
    trackSectionToggle,
    trackFilterClick,
    trackButtonClick,
    getVisitorId: () => visitorIdRef.current ?? getVisitorId(),
  };
}
