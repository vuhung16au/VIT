import type { Doctor } from "@/types/booking";

export const doctors: Doctor[] = [
  {
    id: "smith",
    name: "Dr. Sarah Smith",
    specialty: "Cardiology",
    nextAvailable: "2026-03-22",
    rating: 4.9,
  },
  {
    id: "jones",
    name: "Dr. Mike Jones",
    specialty: "Pediatrics",
    nextAvailable: "2026-03-23",
    rating: 4.8,
  },
  {
    id: "chen",
    name: "Dr. Lisa Chen",
    specialty: "Dermatology",
    nextAvailable: "2026-03-24",
    rating: 4.7,
  },
];
