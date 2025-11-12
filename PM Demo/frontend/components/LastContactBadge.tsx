/**
 * LastContactBadge Component
 * Shows when a candidate was last contacted
 * Copyright Anysphere Inc.
 */

import React from 'react';

interface LastContactBadgeProps {
  dateIso: string;
}

export default function LastContactBadge({ dateIso }: LastContactBadgeProps) {
  const formatLastContact = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365));
    
    if (diffInYears === 0) {
      const diffInMonths = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30));
      return diffInMonths === 1 ? '1mo ago' : `${diffInMonths}mo ago`;
    }
    
    return diffInYears === 1 ? '1y ago' : `${diffInYears}y ago`;
  };

  return (
    <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-medium">
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2M8 6h8M6 10h12" />
      </svg>
      <span>Last contact {formatLastContact(dateIso)}</span>
    </div>
  );
}
