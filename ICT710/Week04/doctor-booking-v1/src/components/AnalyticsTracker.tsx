"use client";

import { useEffect } from "react";

type AnalyticsTrackerProps = {
  eventName: string;
  version: "A" | "B";
};

export function AnalyticsTracker({ eventName, version }: AnalyticsTrackerProps) {
  useEffect(() => {
    console.log(`Analytics event: ${eventName} | version=${version} | ${new Date().toISOString()}`);
  }, [eventName, version]);

  return null;
}
