"use client";

import Link from "next/link";
import { useCallback, type ComponentProps } from "react";
import { useAnalytics } from "@/app/hooks/useAnalytics";

type NextLinkProps = ComponentProps<typeof Link>;

interface TrackedLinkProps extends NextLinkProps {
  /** Whether this is an external link (opens in new tab) */
  external?: boolean;
  /** Custom link text for analytics (defaults to children text content) */
  trackingLabel?: string;
}

/**
 * TrackedLink component that tracks link clicks for analytics.
 * Use this for external links and important deep links you want to track.
 */
export function TrackedLink({
  children,
  href,
  external = false,
  trackingLabel,
  onClick,
  ...props
}: TrackedLinkProps): React.ReactElement {
  const { trackLinkClick } = useAnalytics();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Get the link text for tracking
      const linkText =
        trackingLabel ?? (typeof children === "string" ? children : undefined);

      // Get the URL string
      const url = typeof href === "string" ? href : href.pathname ?? String(href);

      // Track the click
      trackLinkClick({
        url,
        ...(linkText ? { linkText } : {}),
      });

      // Call any existing onClick handler
      onClick?.(e);
    },
    [href, children, trackingLabel, trackLinkClick, onClick]
  );

  // For external links, add target="_blank" and rel="noopener noreferrer"
  if (external) {
    return (
      <Link
        href={href}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

/**
 * TrackedExternalLink - Convenience wrapper for external links.
 * Automatically sets external=true and adds visual indicator.
 */
interface TrackedExternalLinkProps extends Omit<TrackedLinkProps, "external"> {
  /** Show external link indicator (arrow icon) */
  showIndicator?: boolean;
}

export function TrackedExternalLink({
  children,
  showIndicator = true,
  ...props
}: TrackedExternalLinkProps): React.ReactElement {
  return (
    <TrackedLink external {...props}>
      {children}
      {showIndicator && (
        <span className="ml-1 inline-block text-xs opacity-60" aria-hidden="true">
          ↗
        </span>
      )}
    </TrackedLink>
  );
}
