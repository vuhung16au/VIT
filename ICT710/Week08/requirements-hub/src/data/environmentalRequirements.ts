import type { EnvironmentalRequirement } from "@/types/requirements";

export const environmentalRequirements: EnvironmentalRequirement[] = [
  {
    category: "Physical",
    title: "Noisy or distracting locations",
    details: "Users may book from clinic waiting rooms, public transport, or busy workplaces.",
    designResponse: "Use clear labels, strong feedback, and minimal cognitive load.",
  },
  {
    category: "Physical",
    title: "Bright outdoor mobile usage",
    details: "Screens may be viewed in sunlight, reducing readability.",
    designResponse: "Use high contrast and strong hierarchy for important controls.",
  },
  {
    category: "Social",
    title: "Privacy in shared spaces",
    details: "Sensitive booking details may be visible when users are around others.",
    designResponse: "Hide unnecessary medical detail and require confirmation before showing history.",
  },
  {
    category: "Social",
    title: "Booking for dependents",
    details: "Parents or carers may manage care for children or older relatives.",
    designResponse: "Support family profiles and clear ownership of each appointment.",
  },
  {
    category: "Organizational",
    title: "Clinic workflow alignment",
    details: "The app must fit with clinic operating hours and scheduling rules.",
    designResponse: "Reflect clinic policies in slot rules and confirmation messages.",
  },
  {
    category: "Organizational",
    title: "Healthcare compliance",
    details: "Booking processes must respect privacy and health record regulations.",
    designResponse: "Design clear consent, data handling, and access control patterns.",
  },
  {
    category: "Technical",
    title: "Older devices and browsers",
    details: "Users may access the system from older mobile devices and common browsers.",
    designResponse: "Favor resilient layouts and avoid heavy interaction dependencies.",
  },
  {
    category: "Technical",
    title: "Low-bandwidth access",
    details: "Some users may rely on unstable or slower mobile networks.",
    designResponse: "Optimize payload size and show loading feedback early.",
  },
];
