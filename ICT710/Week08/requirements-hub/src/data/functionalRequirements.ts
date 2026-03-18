import type { FunctionalRequirement } from "@/types/requirements";

export const functionalRequirements: FunctionalRequirement[] = [
  {
    id: "FR-001",
    title: "Search doctors by specialty",
    description: "The system shall allow users to search doctors by specialty and care need.",
    priority: "Must Have",
    personas: ["Sarah", "Robert", "Maya"],
    acceptanceCriteria: [
      "Users can search using at least one specialty filter.",
      "Results show matching doctors with clear labels.",
    ],
    mappedFeature: "Specialty search panel",
  },
  {
    id: "FR-002",
    title: "Display real-time availability",
    description: "The system shall display doctor availability in real time before confirmation.",
    priority: "Must Have",
    personas: ["Sarah", "Maya"],
    acceptanceCriteria: [
      "Available time slots update before booking confirmation.",
      "Unavailable slots are clearly disabled.",
    ],
    mappedFeature: "Live availability view",
  },
  {
    id: "FR-003",
    title: "Send booking confirmation",
    description: "The system shall send booking confirmations via email or SMS.",
    priority: "Must Have",
    personas: ["Sarah", "Robert", "Maya"],
    acceptanceCriteria: [
      "Confirmation appears immediately after booking.",
      "A notification channel can be selected by the user.",
    ],
    mappedFeature: "Confirmation workflow",
  },
  {
    id: "FR-004",
    title: "Cancel appointments",
    description: "The system shall allow users to cancel booked appointments.",
    priority: "Should Have",
    personas: ["Sarah", "Maya"],
    acceptanceCriteria: [
      "Users can cancel from their booking summary.",
      "Cancellation confirmation is shown before completion.",
    ],
    mappedFeature: "Manage booking actions",
  },
  {
    id: "FR-005",
    title: "Support recurring appointments",
    description: "The system shall support recurring appointment scheduling for repeat care.",
    priority: "Could Have",
    personas: ["Robert", "Maya"],
    acceptanceCriteria: [
      "Users can choose a recurring frequency.",
      "The system previews upcoming sessions before saving.",
    ],
    mappedFeature: "Recurring booking setup",
  },
  {
    id: "FR-006",
    title: "Book for family members",
    description: "The system shall allow users to book appointments for family members.",
    priority: "Must Have",
    personas: ["Maya"],
    acceptanceCriteria: [
      "Users can choose a saved family member profile.",
      "The booking flow distinguishes who the appointment is for.",
    ],
    mappedFeature: "Family account booking",
  },
  {
    id: "FR-007",
    title: "Integrate with calendar apps",
    description: "The system shall offer calendar integration for confirmed appointments.",
    priority: "Should Have",
    personas: ["Sarah"],
    acceptanceCriteria: [
      "Users can export a confirmed appointment to a calendar app.",
      "Date, time, and location are included in the event.",
    ],
    mappedFeature: "Calendar export button",
  },
  {
    id: "FR-008",
    title: "Save favorite doctors",
    description: "The system shall allow users to save preferred doctors for future bookings.",
    priority: "Should Have",
    personas: ["Maya", "Sarah"],
    acceptanceCriteria: [
      "Users can mark a doctor as a favorite.",
      "Saved doctors appear in a quick-access area.",
    ],
    mappedFeature: "Favorites list",
  },
  {
    id: "FR-009",
    title: "Show doctor ratings and reviews",
    description: "The system shall display doctor ratings and review summaries.",
    priority: "Could Have",
    personas: ["Sarah", "Maya"],
    acceptanceCriteria: [
      "Each doctor profile shows a rating summary.",
      "Users can view short review excerpts.",
    ],
    mappedFeature: "Doctor profile insights",
  },
  {
    id: "FR-010",
    title: "Provide appointment reminders",
    description: "The system shall provide appointment reminders before the visit.",
    priority: "Must Have",
    personas: ["Robert", "Maya"],
    acceptanceCriteria: [
      "Users can choose reminder channels.",
      "Reminders are scheduled before the appointment date.",
    ],
    mappedFeature: "Reminder settings",
  },
];
