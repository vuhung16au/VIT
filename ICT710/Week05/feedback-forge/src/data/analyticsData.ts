import type { ObservationNote } from "@/types/feedback";

export const observationMetrics: ObservationNote[] = [
  {
    id: "hero-cta",
    title: "Hero call to action",
    clicks: 142,
    avgSeconds: 12,
    dropOff: 8,
    insight: "Users notice the main booking CTA quickly and engage early.",
  },
  {
    id: "calendar-step",
    title: "Date and time selection",
    clicks: 88,
    avgSeconds: 46,
    dropOff: 19,
    insight: "Time-slot selection still creates hesitation and the highest drop-off.",
  },
  {
    id: "confirmation-step",
    title: "Confirmation screen",
    clicks: 64,
    avgSeconds: 21,
    dropOff: 6,
    insight: "Users who reach confirmation usually complete the process.",
  },
];

export const userJourney = [
  { step: "Landing page", users: 250, color: "bg-primary" },
  { step: "Booking form", users: 205, color: "bg-info" },
  { step: "Date & time", users: 166, color: "bg-warning" },
  { step: "Confirmation", users: 154, color: "bg-success" },
];
