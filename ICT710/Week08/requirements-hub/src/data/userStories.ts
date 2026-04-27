import type { UserStory } from "@/types/requirements";

export const userStories: UserStory[] = [
  {
    id: "US-001",
    persona: "Sarah",
    story: "As Sarah, I want to book via a one-screen flow",
    benefit: "so that I can save time between meetings.",
    priority: "Must Have",
    acceptanceCriteria: [
      "Given Sarah is signed in, when she selects quick book, then she can confirm from one screen.",
      "And confirmation appears within 2 seconds of submission.",
    ],
    relatedRequirements: ["FR-001", "FR-002", "FR-007", "FR-011", "NFR-U1"],
  },
  {
    id: "US-002",
    persona: "Robert",
    story: "As Robert, I want large text and clear instructions",
    benefit: "so that I can book without confusion.",
    priority: "Must Have",
    acceptanceCriteria: [
      "Given Robert opens booking, when he starts the flow, then he sees one clear step at a time.",
      "And text remains readable at larger font sizes.",
    ],
    relatedRequirements: ["FR-003", "FR-010", "NFR-U2", "NFR-U3", "NFR-C1"],
  },
  {
    id: "US-003",
    persona: "Maya",
    story: "As Maya, I want to book for my children",
    benefit: "so that I can manage family healthcare from one account.",
    priority: "Must Have",
    acceptanceCriteria: [
      "Given Maya has family profiles saved, when she starts a booking, then she can choose who the appointment is for.",
      "And reminder settings can be customized per appointment.",
    ],
    relatedRequirements: ["FR-006", "FR-010", "FR-008", "FR-011", "NFR-C1"],
  },
  {
    id: "US-004",
    persona: "Any user",
    story: "As any user, I want appointment reminders",
    benefit: "so that I do not miss my visit.",
    priority: "Should Have",
    acceptanceCriteria: [
      "Given a booking is confirmed, when reminder preferences are saved, then the system schedules reminders automatically.",
    ],
    relatedRequirements: ["FR-010", "NFR-R1"],
  },
  {
    id: "US-005",
    persona: "Sarah",
    story: "As Sarah, I want to filter doctors by next available slot",
    benefit: "so that I can find immediate care quickly.",
    priority: "Should Have",
    acceptanceCriteria: [
      "Given Sarah searches for doctors, when she applies the next-available filter, then the earliest slots appear first.",
    ],
    relatedRequirements: ["FR-001", "FR-002", "NFR-P2"],
  },
];
