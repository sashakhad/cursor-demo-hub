"use client";

import { useEffect, useRef, useCallback } from "react";

interface CollapsibleContentProps {
  contentHtml: string;
}

/**
 * Client component that renders doc content with URL-synced collapsible sections
 * and handles deep link copy functionality.
 * 
 * Uses only native browser APIs to avoid React re-renders on URL changes.
 */
export function CollapsibleContent({ contentHtml }: CollapsibleContentProps) {
  const containerRef = useRef<HTMLElement>(null);
  const initialSyncDone = useRef(false);

  // Read sections from current URL (no React hooks - just reads window.location)
  const getSectionsFromUrl = useCallback((): Set<string> => {
    if (typeof window === "undefined") {return new Set();}
    const params = new URLSearchParams(window.location.search);
    const param = params.get("sections") || "";
    if (!param) {return new Set();}
    return new Set(param.split(",").map(decodeURIComponent));
  }, []);

  // Update URL without triggering any React re-render
  const updateUrl = useCallback((openSections: Set<string>) => {
    if (typeof window === "undefined") {return;}
    
    const params = new URLSearchParams(window.location.search);
    if (openSections.size > 0) {
      params.set("sections", Array.from(openSections).map(encodeURIComponent).join(","));
    } else {
      params.delete("sections");
    }
    const newUrl = params.toString() 
      ? `${window.location.pathname}?${params.toString()}` 
      : window.location.pathname;
    window.history.replaceState(null, "", newUrl);
  }, []);

  // Get current open state from DOM
  const getOpenSectionsFromDom = useCallback((): Set<string> => {
    const container = containerRef.current;
    if (!container) {return new Set();}
    
    const openSections = new Set<string>();
    container.querySelectorAll("details").forEach((details) => {
      if (details.open) {
        const summary = details.querySelector("summary");
        const sectionId = summary?.textContent?.trim() || "";
        if (sectionId) {openSections.add(sectionId);}
      }
    });
    return openSections;
  }, []);

  // Initial sync: set DOM state from URL on mount only
  useEffect(() => {
    if (initialSyncDone.current) {return;}
    
    const container = containerRef.current;
    if (!container) {return;}

    const urlSections = getSectionsFromUrl();
    container.querySelectorAll("details").forEach((details) => {
      const summary = details.querySelector("summary");
      const sectionId = summary?.textContent?.trim() || "";
      if (sectionId && urlSections.has(sectionId)) {
        details.open = true;
      }
    });
    
    initialSyncDone.current = true;
  }, [contentHtml, getSectionsFromUrl]);

  // Listen for toggle events and update URL
  useEffect(() => {
    const container = containerRef.current;
    if (!container) {return;}

    const handleToggle = () => {
      // Read current state from DOM and sync to URL
      const openSections = getOpenSectionsFromDom();
      updateUrl(openSections);
    };

    const detailsElements = container.querySelectorAll("details");
    detailsElements.forEach((details) => {
      details.addEventListener("toggle", handleToggle);
    });

    return () => {
      detailsElements.forEach((details) => {
        details.removeEventListener("toggle", handleToggle);
      });
    };
  }, [contentHtml, getOpenSectionsFromDom, updateUrl]);

  // Handle deep link copy button clicks
  useEffect(() => {
    const container = containerRef.current;
    if (!container) {return;}

    const handleCopyClick = async (event: Event) => {
      const button = event.currentTarget as HTMLButtonElement;
      const prompt = button.getAttribute("data-prompt");
      
      if (!prompt) {return;}

      try {
        await navigator.clipboard.writeText(prompt);
        
        // Visual feedback
        button.classList.add("copied");
        
        // Reset after 2 seconds
        setTimeout(() => {
          button.classList.remove("copied");
        }, 2000);
      } catch {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = prompt;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        
        button.classList.add("copied");
        setTimeout(() => {
          button.classList.remove("copied");
        }, 2000);
      }
    };

    const copyButtons = container.querySelectorAll(".deep-link-copy");
    copyButtons.forEach((button) => {
      button.addEventListener("click", handleCopyClick);
    });

    return () => {
      copyButtons.forEach((button) => {
        button.removeEventListener("click", handleCopyClick);
      });
    };
  }, [contentHtml]);

  return (
    <article
      ref={containerRef}
      className="prose prose-lg max-w-none text-dev-text
        prose-headings:text-dev-text
        prose-a:text-dev-accent prose-a:no-underline hover:prose-a:underline
        prose-strong:text-dev-text
        prose-code:text-dev-accent prose-code:bg-dev-card prose-code:px-1 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-dev-card prose-pre:text-dev-text
        prose-blockquote:border-dev-accent prose-blockquote:text-dev-secondary
        prose-img:rounded-lg prose-img:shadow-md
        [&_table]:w-full [&_table]:border-collapse [&_table]:my-6
        [&_th]:border [&_th]:border-dev-text/20 [&_th]:bg-dev-card [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold
        [&_td]:border [&_td]:border-dev-text/20 [&_td]:px-4 [&_td]:py-2
        [&_tr:nth-child(even)]:bg-dev-card/50
        [&_details]:my-2
        [&_summary]:cursor-pointer [&_summary]:text-sm [&_summary]:font-normal [&_summary]:text-dev-text/50 [&_summary]:select-none [&_summary]:py-1 hover:[&_summary]:text-dev-text/70"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
