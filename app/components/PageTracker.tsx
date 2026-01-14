"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useAnalytics } from "@/app/hooks/useAnalytics";

interface PageTrackerProps {
  children: React.ReactNode;
}

/**
 * Check if a URL is external (different origin or absolute URL to different domain)
 */
function isExternalUrl(href: string): boolean {
  if (!href) {
    return false;
  }
  // Absolute URLs starting with http:// or https://
  if (href.startsWith("http://") || href.startsWith("https://")) {
    try {
      const url = new URL(href);
      return url.origin !== window.location.origin;
    } catch {
      return false;
    }
  }
  // Protocol-relative URLs
  if (href.startsWith("//")) {
    return true;
  }
  return false;
}

/**
 * Check if a URL is a Cursor deep link
 */
function isCursorDeepLink(href: string): boolean {
  return href.startsWith("cursor://");
}

/**
 * Check if a URL is an internal doc navigation link
 */
function isDocLink(href: string): boolean {
  return href.startsWith("/presenter-docs");
}

/**
 * Extract a readable label from a cursor:// deep link
 */
function extractDeepLinkLabel(href: string): string {
  try {
    // cursor://anysphere.cursor-deeplink/prompt?prompt=...
    const url = new URL(href);
    const prompt = url.searchParams.get("prompt");
    if (prompt) {
      // Return first 100 chars of the prompt
      const decoded = decodeURIComponent(prompt);
      return decoded.length > 100 ? `${decoded.substring(0, 100)}...` : decoded;
    }
    return url.pathname;
  } catch {
    return href.substring(0, 50);
  }
}

/**
 * PageTracker automatically tracks:
 * - Page views on navigation
 * - Scroll depth (25%, 50%, 75%, 100%)
 * - Time spent on page (sent on visibility change or unload)
 * - External link clicks (any <a> with external href)
 */
export function PageTracker({ children }: PageTrackerProps): React.ReactElement {
  const pathname = usePathname();
  const { trackPageView, trackScrollDepth, trackTimeOnPage, trackLinkClick, trackDeepLinkClick, trackDocNavClick, trackSectionToggle } = useAnalytics();

  // Track page entry time
  const pageEntryTimeRef = useRef<number>(Date.now());
  const lastPathRef = useRef<string>(pathname);

  // Track which scroll depths have been recorded for current page
  const scrollDepthsTrackedRef = useRef<Set<number>>(new Set());

  // Send time on page event
  const sendTimeOnPage = useCallback(() => {
    const timeSpent = Math.round((Date.now() - pageEntryTimeRef.current) / 1000);
    if (timeSpent > 0) {
      trackTimeOnPage({ seconds: timeSpent, path: lastPathRef.current });
    }
  }, [trackTimeOnPage]);

  // Track page view on pathname change
  useEffect(() => {
    // Reset tracking state for new page
    pageEntryTimeRef.current = Date.now();
    lastPathRef.current = pathname;
    scrollDepthsTrackedRef.current.clear();

    // Track the page view
    const referrer = typeof document !== "undefined" ? document.referrer : undefined;
    trackPageView({
      path: pathname,
      ...(referrer ? { referrer } : {}),
    });
  }, [pathname, trackPageView]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = (): void => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);

      // Track at 25%, 50%, 75%, and 100% thresholds
      const thresholds = [25, 50, 75, 100];
      for (const threshold of thresholds) {
        if (scrollPercent >= threshold && !scrollDepthsTrackedRef.current.has(threshold)) {
          scrollDepthsTrackedRef.current.add(threshold);
          trackScrollDepth({ depth: threshold, path: pathname });
        }
      }
    };

    // Debounce scroll handler
    let timeoutId: ReturnType<typeof setTimeout>;
    const debouncedScrollHandler = (): void => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", debouncedScrollHandler, { passive: true });

    return () => {
      window.removeEventListener("scroll", debouncedScrollHandler);
      clearTimeout(timeoutId);
    };
  }, [pathname, trackScrollDepth]);

  // Track time on page when visibility changes or page unloads
  useEffect(() => {
    const handleVisibilityChange = (): void => {
      if (document.visibilityState === "hidden") {
        sendTimeOnPage();
      }
    };

    const handleBeforeUnload = (): void => {
      sendTimeOnPage();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      // Send time on page when component unmounts (navigation)
      sendTimeOnPage();
    };
  }, [sendTimeOnPage]);

  // Track link clicks automatically (external, deep links, doc navigation)
  useEffect(() => {
    const handleClick = (event: MouseEvent): void => {
      const target = event.target as HTMLElement;
      const anchor = target.closest("a");

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href) {
        return;
      }

      // Get link text for context
      const linkText = anchor.textContent?.trim() ?? anchor.getAttribute("title") ?? undefined;

      // Track cursor:// deep links (most important!)
      if (isCursorDeepLink(href)) {
        trackDeepLinkClick({
          url: href,
          label: extractDeepLinkLabel(href),
          path: pathname,
        });
        return;
      }

      // Track external links
      if (isExternalUrl(href)) {
        trackLinkClick({
          url: href,
          ...(linkText ? { linkText } : {}),
          path: pathname,
        });
        return;
      }

      // Track doc navigation links (when clicking from one doc to another)
      if (isDocLink(href) && pathname.startsWith("/presenter-docs")) {
        trackDocNavClick({
          targetDoc: href,
          fromPath: pathname,
        });
        return;
      }
    };

    // Use capture phase to catch clicks before they propagate
    document.addEventListener("click", handleClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, [pathname, trackLinkClick, trackDeepLinkClick, trackDocNavClick]);

  // Track collapsible section toggles (details elements)
  useEffect(() => {
    const handleToggle = (event: Event): void => {
      const target = event.target as HTMLElement;
      if (target.tagName.toLowerCase() !== "details") {
        return;
      }

      const details = target as HTMLDetailsElement;
      const summary = details.querySelector("summary");
      const sectionId = summary?.textContent?.trim().substring(0, 50) ?? "unknown";

      trackSectionToggle({
        sectionId,
        expanded: details.open,
        path: pathname,
      });
    };

    document.addEventListener("toggle", handleToggle, { capture: true });

    return () => {
      document.removeEventListener("toggle", handleToggle, { capture: true });
    };
  }, [pathname, trackSectionToggle]);

  return <>{children}</>;
}
