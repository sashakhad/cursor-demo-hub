"use client";

import { useEffect, useState } from "react";

interface Stats {
  totalViews: number | null;
  uniqueVisitors: number | null;
}

export function VisitorCounter() {
  const [stats, setStats] = useState<Stats>({
    totalViews: null,
    uniqueVisitors: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch("/api/stats");
        const data = await response.json();
        setStats({
          totalViews: data.totalViews,
          uniqueVisitors: data.uniqueVisitors,
        });
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-4 rounded-lg bg-stone-100 px-4 py-2 text-sm text-stone-500">
        <span className="animate-pulse">Loading stats...</span>
      </div>
    );
  }

  if (stats.totalViews === null) {
    return null;
  }

  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  return (
    <div className="flex items-center gap-4 rounded-lg bg-stone-100 px-4 py-2.5 text-sm">
      <div className="flex items-center gap-1.5">
        <span className="text-stone-400">👁</span>
        <span className="font-medium text-stone-700">
          {formatNumber(stats.totalViews)}
        </span>
        <span className="text-stone-500">views</span>
      </div>
      <div className="h-4 w-px bg-stone-300" />
      <div className="flex items-center gap-1.5">
        <span className="text-stone-400">👤</span>
        <span className="font-medium text-stone-700">
          {formatNumber(stats.uniqueVisitors ?? 0)}
        </span>
        <span className="text-stone-500">visitors</span>
      </div>
    </div>
  );
}







