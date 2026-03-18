import type { UseCase } from "@/types/requirements";

export const useCases: UseCase[] = [
  {
    id: "UC-001",
    name: "Book Appointment",
    actor: "Patient",
    summary: "Patient searches for a doctor, selects a slot, and confirms a booking.",
    includes: ["Search doctors", "Select time slot", "Confirm booking"],
    mainFlow: [
      "Patient opens the booking flow.",
      "Patient searches by specialty or availability.",
      "System displays matching doctors and slots.",
      "Patient selects a doctor and time.",
      "System sends confirmation and reminder options.",
    ],
  },
  {
    id: "UC-002",
    name: "Cancel Appointment",
    actor: "Patient",
    summary: "Patient cancels an existing booking and receives confirmation.",
    extends: ["Book Appointment"],
    mainFlow: [
      "Patient opens an existing booking.",
      "Patient selects cancel appointment.",
      "System asks for confirmation before proceeding.",
      "System marks the booking as cancelled and confirms the change.",
    ],
  },
  {
    id: "UC-003",
    name: "Manage Availability",
    actor: "Doctor",
    summary: "Doctor updates availability so appointment slots stay accurate.",
    mainFlow: [
      "Doctor signs in to the clinic system.",
      "Doctor updates schedule and blocked times.",
      "System refreshes available slots for patients.",
    ],
  },
  {
    id: "UC-004",
    name: "Manage Booking Rules",
    actor: "Admin",
    summary: "Admin configures reminder rules, booking windows, and operational constraints.",
    mainFlow: [
      "Admin opens booking administration.",
      "Admin updates policy values.",
      "System validates and applies rule changes.",
    ],
  },
];
