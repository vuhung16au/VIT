export const sampleFindings = [
  {
    heuristicId: 1,
    project: "Doctor Booking App",
    screen: "Appointment booking form",
    issue: "No loading indicator when submitting an appointment.",
    severity: "High",
    rating: 2,
    recommendation: 'Add a spinner with "Booking your appointment..." feedback.',
  },
  {
    heuristicId: 4,
    project: "Doctor Booking App",
    screen: "Date picker",
    issue: "Date format is inconsistent across screens.",
    severity: "Medium",
    rating: 3,
    recommendation: "Use one date pattern consistently throughout the app.",
  },
  {
    heuristicId: 6,
    project: "Doctor Booking App",
    screen: "Doctor selection",
    issue: "Specialties use medical jargon instead of plain language.",
    severity: "Medium",
    rating: 3,
    recommendation: "Use plain-language labels with optional explanatory help text.",
  },
  {
    heuristicId: 8,
    project: "Design System Studio",
    screen: "Overview page",
    issue: "Too many equally weighted cards make scanning harder.",
    severity: "Low",
    rating: 4,
    recommendation: "Increase hierarchy between getting started content and supporting sections.",
  },
  {
    heuristicId: 10,
    project: "Design System Studio",
    screen: "Button library",
    issue: "Component usage guidance is visible but not grouped by beginner needs.",
    severity: "Low",
    rating: 4,
    recommendation: "Add a short getting-started section for first-time readers.",
  },
];

export const checklistSections = [
  {
    title: "Accessibility",
    items: [
      "Color contrast meets WCAG AA",
      "All images have alt text",
      "Keyboard navigation works for all actions",
      "Focus indicators are visible",
      "Screen reader support is considered",
      "Form labels are properly associated",
    ],
  },
  {
    title: "Usability",
    items: [
      "Primary CTA is clearly visible",
      "Error messages are specific and actionable",
      "Terminology is consistent",
      "Undo or recovery is available for critical actions",
      "Search is available where needed",
      "Help or documentation is accessible",
    ],
  },
  {
    title: "Performance",
    items: [
      "Page load time is under 3 seconds",
      "Images are optimized",
      "No visible console errors",
      "Layouts remain responsive on mobile",
    ],
  },
  {
    title: "Content",
    items: [
      "Headings follow logical structure",
      'Links are descriptive rather than "click here"',
      "Plain language is used for key actions",
    ],
  },
];

export const walkthroughSteps = [
  {
    step: "Navigate to booking page",
    answers: ["No", "Maybe", "No", "No"],
    issue: 'Homepage has multiple competing CTAs instead of one clear "Book Appointment" path.',
    recommendation: "Reduce CTA competition and emphasize the primary booking action.",
  },
  {
    step: "Select specialty",
    answers: ["Yes", "Maybe", "Yes", "Maybe"],
    issue: "Long specialty list requires too much scanning for novice users.",
    recommendation: "Add search, grouping, and plain-language categories.",
  },
  {
    step: "Choose doctor",
    answers: ["Yes", "Yes", "Yes", "Yes"],
    issue: "Doctor cards provide clear status and support decision-making well.",
    recommendation: "Keep this pattern and reuse it elsewhere.",
  },
  {
    step: "Select date and time",
    answers: ["Maybe", "Yes", "No", "No"],
    issue: "Selected date does not provide strong enough progress confirmation.",
    recommendation: "Highlight selected time and show an always-visible summary panel.",
  },
];
