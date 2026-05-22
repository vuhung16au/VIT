export type Severity = "Critical" | "High" | "Medium" | "Low";

export type Finding = {
  id: string;
  heuristicId: number;
  project: "Doctor Booking App" | "Design System Studio";
  screen: string;
  issue: string;
  severity: Severity;
  rating: 1 | 2 | 3 | 4 | 5;
  recommendation: string;
  evidence: string;
};

export type WalkthroughStepData = {
  id: string;
  step: string;
  userGoal: string;
  answers: Array<"Yes" | "Maybe" | "No">;
  issue: string;
  severity: Severity;
  recommendation: string;
};

export type ChecklistItemData = {
  id: string;
  label: string;
  status: "Pass" | "Fail" | "N/A";
  notes: string;
  heuristicId?: number;
  evidence?: string;
};

export const sampleFindings: Finding[] = [
  {
    id: "h1-booking-loading",
    heuristicId: 1,
    project: "Doctor Booking App",
    screen: "Appointment booking form",
    issue: "No loading indicator appears when the appointment request is being submitted.",
    severity: "High",
    rating: 2,
    recommendation: 'Add a spinner plus a clear "Booking your appointment..." message.',
    evidence: "Users receive no feedback for 2-3 seconds after pressing the primary CTA.",
  },
  {
    id: "h4-date-format",
    heuristicId: 4,
    project: "Doctor Booking App",
    screen: "Date picker and confirmation summary",
    issue: "Date formats switch between DD/MM and MM/DD, making follow-up confirmation harder to trust.",
    severity: "Medium",
    rating: 3,
    recommendation: "Use one date pattern and mirror it everywhere, including reminders and confirmation cards.",
    evidence: "Observed inconsistency between calendar overlay and booking summary sidebar.",
  },
  {
    id: "h6-jargon-specialties",
    heuristicId: 6,
    project: "Doctor Booking App",
    screen: "Doctor selection",
    issue: "Specialties rely on clinical jargon, forcing users to remember unfamiliar terms before making a choice.",
    severity: "Medium",
    rating: 3,
    recommendation: "Use plain-language labels with optional tooltips for medical terminology.",
    evidence: "Otolaryngology, gastroenterology, and rheumatology caused hesitation in novice walkthroughs.",
  },
  {
    id: "h5-incomplete-form",
    heuristicId: 5,
    project: "Doctor Booking App",
    screen: "Patient details form",
    issue: "Validation happens only after submit, so users discover missing details too late in the process.",
    severity: "High",
    rating: 2,
    recommendation: "Add inline required-field cues and progressive validation before final submit.",
    evidence: "18% error rate in the simulated analytics points to preventable form mistakes.",
  },
  {
    id: "h8-overview-density",
    heuristicId: 8,
    project: "Design System Studio",
    screen: "Studio overview page",
    issue: "Too many equally weighted cards compete for attention, reducing scanability for first-time viewers.",
    severity: "Low",
    rating: 4,
    recommendation: "Increase hierarchy between starter guidance, reference sections, and advanced tools.",
    evidence: "All cards use the same visual weight, resulting in weak prioritization.",
  },
  {
    id: "h10-button-docs",
    heuristicId: 10,
    project: "Design System Studio",
    screen: "Button library",
    issue: "Guidance exists, but it is not organised around beginner questions such as when to use each variant.",
    severity: "Low",
    rating: 4,
    recommendation: "Add a quick-start block with usage intent, do/don't guidance, and accessible defaults.",
    evidence: "Documentation is available, but learners must scroll to piece together the recommended pattern.",
  },
  {
    id: "h3-token-editor",
    heuristicId: 3,
    project: "Design System Studio",
    screen: "Token editor",
    issue: "A reset action is available but there is no undo confirmation after editing spacing tokens.",
    severity: "High",
    rating: 2,
    recommendation: "Offer undo for destructive token changes and preview impacted components before save.",
    evidence: "Token edits can affect many components, but the flow gives users little room to recover safely.",
  },
  {
    id: "h9-empty-analytics",
    heuristicId: 9,
    project: "Design System Studio",
    screen: "Adoption analytics panel",
    issue: "Empty states explain that no data was found, but not what the user should do next.",
    severity: "Medium",
    rating: 3,
    recommendation: "Pair empty states with recommended filters, example events, or a reset action.",
    evidence: "Users saw a blank-style state without meaningful recovery guidance.",
  },
];

export const walkthroughSteps: WalkthroughStepData[] = [
  {
    id: "step-1",
    step: "Navigate to booking page",
    userGoal: "Identify the right starting point for booking a new appointment.",
    answers: ["No", "Maybe", "No", "No"],
    issue: 'The homepage presents three competing CTAs, so first-time users are unsure whether "Find Doctor", "Book Now", or "View Specialists" starts the booking journey.',
    severity: "High",
    recommendation: 'Make "Book Appointment" the clear primary action and demote exploration links.',
  },
  {
    id: "step-2",
    step: "Select specialty",
    userGoal: "Narrow the doctor list to the right kind of care.",
    answers: ["Yes", "Maybe", "Yes", "Maybe"],
    issue: "The specialty dropdown is long and not searchable, so older users may miss the correct option while scanning.",
    severity: "Medium",
    recommendation: "Add search, common categories, and plain-language labels such as ENT alongside clinical names.",
  },
  {
    id: "step-3",
    step: "Choose doctor",
    userGoal: "Compare available doctors and pick the right clinician.",
    answers: ["Yes", "Yes", "Yes", "Yes"],
    issue: "This step works well: cards show availability, key attributes, and a clear next action.",
    severity: "Low",
    recommendation: "Use this card pattern as the benchmark for clarity in other decision-heavy screens.",
  },
  {
    id: "step-4",
    step: "Select date and time",
    userGoal: "Choose a valid slot and feel confident it has been captured.",
    answers: ["Maybe", "Yes", "No", "No"],
    issue: "The selected slot does not stand out enough, and there is no persistent progress summary after selection.",
    severity: "High",
    recommendation: "Highlight the chosen slot strongly and keep a booking summary visible through confirmation.",
  },
];

export const checklistSections: Array<{
  title: string;
  items: ChecklistItemData[];
}> = [
  {
    title: "Accessibility checklist",
    items: [
      {
        id: "a11y-contrast",
        label: "Color contrast meets WCAG AA (4.5:1)",
        status: "Pass",
        notes: "Primary CTA and navigation states meet contrast targets in the reviewed screens.",
        heuristicId: 8,
        evidence: "Doctor booking CTA buttons and nav states maintain strong visual contrast.",
      },
      {
        id: "a11y-alt-text",
        label: "All images have alt text",
        status: "Fail",
        notes: "A few decorative screenshots are present without clear alt handling guidance.",
        heuristicId: 10,
        evidence: "Design system overview cards include visuals without documented alternative text.",
      },
      {
        id: "a11y-keyboard",
        label: "Keyboard navigation works for all actions",
        status: "Pass",
        notes: "Primary actions are reachable, but advanced filters should be double-checked in implementation.",
        heuristicId: 3,
      },
      {
        id: "a11y-focus",
        label: "Focus indicators are visible",
        status: "Pass",
        notes: "Visible focus treatments help users track progress across booking controls.",
        heuristicId: 1,
      },
      {
        id: "a11y-screen-reader",
        label: "Screen reader compatible",
        status: "N/A",
        notes: "Requires formal assistive technology validation in the live app.",
      },
      {
        id: "a11y-labels",
        label: "Form labels properly associated",
        status: "Fail",
        notes: "The final booking form relies too much on placeholders instead of persistent labels.",
        heuristicId: 5,
      },
    ],
  },
  {
    title: "Usability checklist",
    items: [
      {
        id: "usability-cta",
        label: "Primary CTA clearly visible",
        status: "Fail",
        notes: "The homepage splits attention across multiple first-step actions.",
        heuristicId: 1,
      },
      {
        id: "usability-errors",
        label: "Error messages specific and actionable",
        status: "Fail",
        notes: "Validation feedback appears late and does not always explain the recovery path.",
        heuristicId: 9,
      },
      {
        id: "usability-terms",
        label: "Consistent terminology throughout",
        status: "Pass",
        notes: "Most labels align, but specialty names still need plain-language support.",
        heuristicId: 4,
      },
      {
        id: "usability-undo",
        label: "Undo or redo available for critical actions",
        status: "Fail",
        notes: "Token edits and booking-step changes should offer safer recovery.",
        heuristicId: 3,
      },
      {
        id: "usability-search",
        label: "Search functionality available",
        status: "Pass",
        notes: "Doctor search exists, but specialty search should be added for the full flow.",
        heuristicId: 7,
      },
      {
        id: "usability-help",
        label: "Help and documentation accessible",
        status: "Pass",
        notes: "The design system includes guidance, though it needs stronger onboarding structure.",
        heuristicId: 10,
      },
    ],
  },
  {
    title: "Performance checklist",
    items: [
      {
        id: "perf-load",
        label: "Page load time under 3 seconds",
        status: "N/A",
        notes: "Would need live performance instrumentation to confirm on production devices.",
      },
      {
        id: "perf-images",
        label: "Images optimized",
        status: "Pass",
        notes: "No obvious large-image bottlenecks in the reviewed screens.",
        heuristicId: 8,
      },
      {
        id: "perf-console",
        label: "No console errors",
        status: "Pass",
        notes: "Simulated review assumes a clean console in the observed flows.",
        heuristicId: 5,
      },
      {
        id: "perf-responsive",
        label: "Mobile responsive",
        status: "Pass",
        notes: "Layouts adapt, but some dense data cards should be simplified on small screens.",
        heuristicId: 7,
      },
    ],
  },
  {
    title: "Content checklist",
    items: [
      {
        id: "content-headings",
        label: "Headings in logical order (H1 to H2 to H3)",
        status: "Pass",
        notes: "Screen structure is mostly easy to scan and narrate.",
        heuristicId: 8,
      },
      {
        id: "content-links",
        label: 'Links descriptive (not "click here")',
        status: "Pass",
        notes: "Primary action labels are descriptive and task-oriented.",
        heuristicId: 2,
      },
      {
        id: "content-language",
        label: "Plain language (8th grade reading level)",
        status: "Fail",
        notes: "Medical specialty names and technical component terms still add cognitive load.",
        heuristicId: 6,
      },
    ],
  },
];
