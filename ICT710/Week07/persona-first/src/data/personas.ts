import type { Persona } from "@/types/persona";

export const personas: Persona[] = [
  {
    slug: "sarah",
    name: "Sarah",
    age: 35,
    occupation: "Project Manager",
    techLevel: 5,
    goals: ["Book quickly on mobile", "Find the next available doctor", "Keep admin overhead low"],
    painPoints: ["Too many steps", "Slow forms", "Needing to re-enter details"],
    behaviors: ["Uses shortcuts", "Books while multitasking", "Prefers compact interfaces"],
    quote: "I need to finish this between meetings, not study the interface.",
    avatar: "💼",
    colorClass: "bg-dark text-light",
  },
  {
    slug: "robert",
    name: "Robert",
    age: 68,
    occupation: "Retired Teacher",
    techLevel: 2,
    goals: ["Feel confident while booking", "Understand each step clearly", "Know that help is available"],
    painPoints: ["Small text", "Too many controls at once", "Unclear error feedback"],
    behaviors: ["Reads carefully", "Prefers linear steps", "Looks for reassurance"],
    quote: "Please show me one thing at a time and tell me I’m doing it right.",
    avatar: "👴",
    colorClass: "bg-white text-dark",
  },
  {
    slug: "maya",
    name: "Maya",
    age: 32,
    occupation: "Parent and Small Business Owner",
    techLevel: 4,
    goals: ["Book for family members", "Save time on repeat bookings", "Set reminders"],
    painPoints: ["Losing progress", "Repeating family details", "Forgetting follow-ups"],
    behaviors: ["Juggles multiple tasks", "Uses reminders heavily", "Wants reusable shortcuts"],
    quote: "If I’m booking for my child, I want reminders and a way to save progress.",
    avatar: "👩‍👧",
    colorClass: "bg-primary-subtle text-dark",
  },
];

export const personasBySlug = Object.fromEntries(personas.map((persona) => [persona.slug, persona]));
