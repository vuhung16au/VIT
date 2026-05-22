export const funnelData = [
  { stage: "Homepage", users: 1000, conversion: 100, dropoffRate: 0 },
  { stage: 'Clicked "Book Now"', users: 650, conversion: 65, dropoffRate: 35 },
  { stage: "Selected specialty", users: 520, conversion: 80, dropoffRate: 20 },
  { stage: "Selected doctor", users: 410, conversion: 79, dropoffRate: 21 },
  { stage: "Completed booking", users: 245, conversion: 60, dropoffRate: 40 },
];

export const metrics = [
  {
    label: "Overall funnel completion",
    value: "24.5%",
    note: "245 of 1,000 visitors reach a successful booking.",
  },
  {
    label: "Average time to book",
    value: "4.5 mins",
    note: "Higher than the 2-minute benchmark used for streamlined healthcare flows.",
  },
  {
    label: "Error rate",
    value: "18%",
    note: "Most errors happen in incomplete form submissions and invalid slot selections.",
  },
  {
    label: "Return rate",
    value: "35%",
    note: "A sizeable segment abandons then returns later, suggesting unresolved friction.",
  },
];

export const heatmapInsights = [
  { area: "Search by specialty", clicks: 85, description: "Strong intent signal and the highest interaction zone." },
  { area: "Advanced filters", clicks: 12, description: "Hidden utility feature with weak discoverability." },
  { area: "Footer links", clicks: 2, description: "Dead zone with very low engagement." },
];

export const heatmapPoints = [
  { id: "hero-search", x: 20, y: 18, intensity: 0.85, label: "Specialty search hotspot" },
  { id: "doctor-cards", x: 62, y: 32, intensity: 0.62, label: "Doctor card comparison zone" },
  { id: "advanced-filter", x: 84, y: 22, intensity: 0.12, label: "Low-use filter control" },
  { id: "confirm-button", x: 72, y: 74, intensity: 0.58, label: "Final booking CTA cluster" },
  { id: "footer-links", x: 44, y: 92, intensity: 0.02, label: "Footer dead zone" },
];

export const performanceMetrics = [
  { label: "Average booking time", value: 4.5, benchmark: 2.0, unit: "mins" },
  { label: "Error rate", value: 18, benchmark: 10, unit: "%" },
  { label: "Return rate", value: 35, benchmark: 20, unit: "%" },
];

export const analyticsInsights = [
  "The biggest drop-off happens between doctor selection and final booking, which suggests date selection and confirmation UX issues.",
  "High time-on-task indicates avoidable cognitive load during the multi-field booking flow.",
  "The error rate points to weak prevention and late validation rather than one isolated bug.",
];

export const comparisonData = [
  {
    version: "Version A",
    pattern: "Single-page form",
    description: "All booking fields appear on one screen for speed, but the dense layout increases cognitive load.",
    learnability: 6,
    efficiency: 8,
    memorability: 6,
    errors: 4,
    satisfaction: 5,
    completionTime: "3.2 mins",
    accessibility: "72%",
    heuristicScore: "64%",
    cognitiveLoad: "High",
  },
  {
    version: "Version B",
    pattern: "Multi-step wizard",
    description: "Fields are broken across three steps with stronger guidance and clearer progress signalling.",
    learnability: 9,
    efficiency: 5,
    memorability: 8,
    errors: 9,
    satisfaction: 8,
    completionTime: "4.1 mins",
    accessibility: "86%",
    heuristicScore: "82%",
    cognitiveLoad: "Medium",
  },
];

export const abResults = [
  {
    version: "Version A",
    conversion: "52%",
    completionTime: "3.2 mins",
    errorRate: "22%",
    summary: "Faster for confident users, but more error-prone and less forgiving.",
  },
  {
    version: "Version B",
    conversion: "68%",
    completionTime: "4.1 mins",
    errorRate: "9%",
    summary: "Slower, but significantly clearer and more resilient for first-time patients.",
  },
];

export const decisionMatrix = [
  { criteria: "Learnability", weight: 25, versionA: 6, versionB: 9 },
  { criteria: "Efficiency", weight: 20, versionA: 8, versionB: 5 },
  { criteria: "Error prevention", weight: 30, versionA: 4, versionB: 9 },
  { criteria: "Satisfaction", weight: 25, versionA: 5, versionB: 8 },
];
