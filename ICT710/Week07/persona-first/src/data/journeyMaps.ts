import type { JourneyStage } from "@/types/persona";

export const journeyMaps: Record<"sarah" | "robert" | "maya", JourneyStage[]> = {
  sarah: [
    {
      stage: "Awareness",
      emotion: "Neutral",
      touchpoint: "Quick mobile search",
      painPoint: "Needs immediate path to action",
    },
    {
      stage: "Booking",
      emotion: "Impatient",
      touchpoint: "One-screen booking form",
      painPoint: "Extra fields feel like friction",
    },
    {
      stage: "Confirmation",
      emotion: "Relieved",
      touchpoint: "Calendar integration",
      painPoint: "Needs confidence the slot is locked in",
    },
    {
      stage: "Reminder",
      emotion: "Focused",
      touchpoint: "Calendar notifications",
      painPoint: "Wants no manual follow-up work",
    },
  ],
  robert: [
    {
      stage: "Awareness",
      emotion: "Cautious",
      touchpoint: "Home computer browser",
      painPoint: "Unsure where to begin",
    },
    {
      stage: "Booking",
      emotion: "Anxious",
      touchpoint: "Step-by-step wizard",
      painPoint: "Needs large text and confirmation at each step",
    },
    {
      stage: "Confirmation",
      emotion: "Reassured",
      touchpoint: "Clear review screen",
      painPoint: "Wants to know a phone option still exists",
    },
    {
      stage: "Reminder",
      emotion: "Prepared",
      touchpoint: "Email and phone reminder",
      painPoint: "Needs simple next steps",
    },
  ],
  maya: [
    {
      stage: "Awareness",
      emotion: "Busy",
      touchpoint: "Phone while multitasking",
      painPoint: "Context switches interrupt progress",
    },
    {
      stage: "Booking",
      emotion: "Determined",
      touchpoint: "Family booking dashboard",
      painPoint: "Needs to book for others without duplicate effort",
    },
    {
      stage: "Confirmation",
      emotion: "Relieved",
      touchpoint: "Reminder setup",
      painPoint: "Needs to avoid forgetting the appointment",
    },
    {
      stage: "Reminder",
      emotion: "Supported",
      touchpoint: "Saved favorites and rebooking",
      painPoint: "Wants future appointments to be faster",
    },
  ],
};
