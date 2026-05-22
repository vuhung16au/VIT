export const workflowStages = [
  { title: "Plan", detail: "Define objectives, participant criteria, tasks, and success metrics." },
  { title: "Recruit", detail: "Screen a representative sample and schedule moderated sessions." },
  { title: "Conduct", detail: "Moderate think-aloud tasks while capturing notes and metrics." },
  { title: "Analyze", detail: "Combine task evidence, errors, satisfaction, and qualitative themes." },
  { title: "Report", detail: "Prioritize findings and package recommendations for action." },
];

export const activeTests = [
  {
    name: "Doctor Booking App Usability Test",
    status: "In progress",
    sessions: 8,
    objective: "Validate appointment booking within 3 minutes without moderator help.",
  },
  {
    name: "Design System Navigation Test",
    status: "Planned",
    sessions: 4,
    objective: "Check whether engineers can find patterns and tokens in under 2 minutes.",
  },
];

export const planningObjectives = [
  "Evaluate if users can book an appointment in under 3 minutes.",
  "Identify terminology or navigation points that create hesitation.",
  "Measure confidence after completing the booking flow.",
];

export const participantProfile = {
  recommendedRange: "5-12 participants",
  nielsenNote: "Nielsen suggests 5 participants can reveal about 85% of usability issues.",
  demographics: ["Age range", "Gender mix", "Tech savvy", "Primary device"],
  experienceLevels: ["First-time users", "Occasional patients", "Frequent users"],
  screeningCriteria: [
    "Booked a medical appointment online in the last 12 months",
    "Uses at least one digital device weekly",
    "Comfortable sharing screen during a remote session",
  ],
  incentive: "$25 gift card",
};

export const planningTasks = [
  {
    title: "Task 1: Primary task",
    description: "Book an appointment with Dr. Sarah Chen for next Tuesday at 2 PM.",
    successCriteria: "Booking completed without moderator intervention.",
    timeLimit: "5 minutes",
  },
  {
    title: "Task 2: Secondary task",
    description: "Reschedule an existing appointment to Friday morning.",
    successCriteria: "Participant updates the booking and confirms the new slot.",
    timeLimit: "4 minutes",
  },
  {
    title: "Task 3: Exploration task",
    description: "Find a cardiologist and compare two available practitioners.",
    successCriteria: "Participant narrows the list and explains their decision path.",
    timeLimit: "4 minutes",
  },
];

export const planningMetrics = {
  quantitative: [
    "Task completion rate (%)",
    "Time on task (seconds)",
    "Error count",
    "Clicks to complete",
    "Navigation path",
  ],
  qualitative: [
    "User satisfaction (1-5 scale)",
    "Difficulty rating (1-5 scale)",
    "Think-aloud observations",
    "Post-task interview responses",
  ],
};

export const testEnvironment = {
  settings: ["Lab", "Remote", "In-the-wild"],
  equipment: ["Laptop", "Mobile device", "Screen recording software", "Backup audio channel"],
  resources: ["Moderator script template", "Consent form template", "Session checklist"],
};

export const screeningQuestions = [
  {
    id: "booking-frequency",
    prompt: "How often do you book medical appointments online?",
    type: "single",
    options: [
      "Never (exclude)",
      "Rarely (1-2 times/year)",
      "Sometimes (3-6 times/year)",
      "Frequently (7+ times/year)",
    ],
  },
  {
    id: "device-usage",
    prompt: "What devices do you use for online tasks?",
    type: "multi",
    options: ["Desktop/laptop", "Smartphone", "Tablet"],
  },
  {
    id: "age-range",
    prompt: "Age range?",
    type: "single",
    options: ["18-29", "30-49", "50-65", "65+"],
  },
  {
    id: "tech-comfort",
    prompt: "Rate your comfort with technology (1-5).",
    type: "slider",
    options: ["1", "2", "3", "4", "5"],
  },
];

export const participants = [
  {
    name: "Alex",
    age: "30-49",
    tech: "4/5",
    device: "Smartphone",
    slot: "Tue 10:00",
    diversity: "High",
    availability: "Tue or Thu mornings",
  },
  {
    name: "Mina",
    age: "18-29",
    tech: "5/5",
    device: "Laptop",
    slot: "Tue 14:00",
    diversity: "Medium",
    availability: "Weekday afternoons",
  },
  {
    name: "Robert",
    age: "65+",
    tech: "2/5",
    device: "Tablet",
    slot: "Wed 09:30",
    diversity: "High",
    availability: "Mornings only",
  },
  {
    name: "Priya",
    age: "50-65",
    tech: "3/5",
    device: "Laptop",
    slot: "Wed 13:30",
    diversity: "Medium",
    availability: "Mon-Wed afternoons",
  },
];

export const inviteChecklist = [
  "Date and time",
  "Location or Zoom link",
  "What to expect in the session",
  "Consent form and recording reminder",
];

export const moderatorScript = [
  "Thank you for participating. Today you'll use a doctor booking app.",
  "We're testing the interface, not you. There are no wrong answers.",
  "Please think aloud: say what you are trying to do, what you expect, and what confuses you.",
  "I cannot help during the tasks, but I will ask questions after each one. Ready?",
];

export const sessionTasks = [
  {
    id: "task-1",
    title: "Task 1 of 3",
    scenario: "You need to book an appointment with Dr. Sarah Chen, a cardiologist, for next Tuesday at 2 PM.",
    targetTime: "5 min",
    pathHint: ["Homepage", "Search", "Doctor detail", "Date picker", "Confirmation"],
    knownErrors: ["Wrong CTA", "Date picker hidden"],
  },
  {
    id: "task-2",
    title: "Task 2 of 3",
    scenario: "Reschedule an existing appointment to Friday morning without losing your previous notes.",
    targetTime: "4 min",
    pathHint: ["Dashboard", "Upcoming appointments", "Reschedule", "Review"],
    knownErrors: ["Back navigation data loss", "Validation message unclear"],
  },
  {
    id: "task-3",
    title: "Task 3 of 3",
    scenario: "Find a doctor by specialty and compare two options before choosing one.",
    targetTime: "4 min",
    pathHint: ["Homepage", "Specialties", "Search results", "Compare view"],
    knownErrors: ["Medical jargon", "Filters easy to miss"],
  },
];

export const observerNotes = [
  "00:45 - Negative - User clicked Find Doctor instead of Book Appointment.",
  "01:23 - Question - 'Where do I put the date?' while searching for date picker.",
  "02:10 - Negative - Back button caused form data loss.",
  "03:05 - Positive - 'This calendar view is nice.'",
];

export const nielsenHeuristics = [
  "Visibility of system status",
  "Match between system and the real world",
  "User control and freedom",
  "Consistency and standards",
  "Error prevention",
  "Recognition rather than recall",
  "Flexibility and efficiency of use",
  "Aesthetic and minimalist design",
  "Help users recognize, diagnose, and recover from errors",
  "Help and documentation",
];

export const recordingPlaceholders = [
  "Screen recording feed",
  "Participant face cam",
  "Hand or device camera for mobile testing",
];

export const thinkAloudOverview = [
  "Participants verbalize what they are thinking while they work through tasks.",
  "Moderators prompt gently when the participant goes quiet without leading them.",
  "The method reveals mental models, expectations, and moments of confusion.",
];

export const moderatorPrompts = [
  "What are you thinking right now?",
  "What did you expect to happen there?",
  "Can you tell me what you are looking for?",
];

export const thinkAloudTranscript = [
  'User: "OK, so I am on the homepage... I want to book an appointment..."',
  'User: "There is a Book Now button, that makes sense... [clicks]"',
  'User: "Hmm, now I have to pick a specialty? I do not know what specialty a cardiologist is... let me scroll..."',
  'User: "Oh wait, there is a search box! [types cardio]"',
  'User: "Why is it showing Cardiovascular Surgery? I just want a regular heart doctor..."',
  "Moderator note: Terminology mismatch - cardiology versus heart doctor.",
];

export const thinkAloudInsights = [
  "User did not know the medical term for the specialty.",
  "Search helped, but the results vocabulary stayed confusing.",
  "The participant expected plain-language labels first.",
];

export const analysisSummary = [
  {
    task: "Book appointment with specific doctor",
    success: "6/8 (75%)",
    successRate: 75,
    time: "3.5 minutes",
    target: "Target: 3 minutes",
  },
  {
    task: "Reschedule existing appointment",
    success: "5/8 (62.5%)",
    successRate: 62.5,
    time: "4.2 minutes",
    target: "Target: 4 minutes",
  },
  {
    task: "Find doctor by specialty",
    success: "7/8 (87.5%)",
    successRate: 87.5,
    time: "2.1 minutes",
    target: "Target: 3 minutes",
  },
];

export const errorTable = [
  { error: "Clicked wrong button", frequency: 12, severity: "Medium" },
  { error: "Couldn't find date picker", frequency: 8, severity: "High" },
  { error: "Form validation unclear", frequency: 7, severity: "High" },
  { error: "Lost data on back button", frequency: 5, severity: "Critical" },
  { error: "Confused by medical jargon", frequency: 11, severity: "Medium" },
];

export const satisfactionScores = [
  { label: "Overall satisfaction", value: "3.2/5", score: 3.2 },
  { label: "Ease of use", value: "2.8/5", score: 2.8 },
  { label: "Visual appeal", value: "4.1/5", score: 4.1 },
  { label: "Likelihood to recommend", value: "2.9/5", score: 2.9 },
];

export const qualitativeThemes = [
  { label: "Medical terminology too technical", count: "8/8 participants mentioned" },
  { label: "Date picker not obvious enough", count: "6/8 struggled" },
  { label: "No confirmation after booking", count: "5/8 uncertain if succeeded" },
  { label: "Navigation inconsistent", count: "4/8 comments" },
  { label: "Visual design praised", count: "7/8 positive" },
];

export const quoteCloud = [
  { word: "confusing", weight: 5 },
  { word: "clear", weight: 3 },
  { word: "booking", weight: 2 },
  { word: "calendar", weight: 4 },
  { word: "search", weight: 3 },
  { word: "doctor", weight: 2 },
  { word: "heart", weight: 4 },
  { word: "confirmation", weight: 5 },
];

export const methodology = [
  "Participants: 8, ages 25-68, mixed technology experience.",
  "Location: Remote moderated sessions.",
  "Duration: 30 minutes per session.",
  "Method: Think-aloud protocol with live observation notes.",
];

export const topFindings = [
  {
    title: "Medical terminology barrier",
    severity: "Critical",
    evidence: "8/8 participants were confused by specialty names.",
    recommendation: "Use plain language labels with optional medical detail and tooltips.",
    priority: "Priority 2",
  },
  {
    title: "Date picker visibility",
    severity: "High",
    evidence: "6/8 participants could not find date selection quickly.",
    recommendation: "Increase date-picker prominence and add a clear text label.",
    priority: "Priority 2",
  },
  {
    title: "No booking confirmation",
    severity: "Critical",
    evidence: "5/8 participants were unsure whether booking succeeded.",
    recommendation: "Add a clear success page with booking details and next steps.",
    priority: "Priority 1",
  },
  {
    title: "Back navigation loses form data",
    severity: "Critical",
    evidence: "Users lost progress when stepping backward during rescheduling.",
    recommendation: "Persist form state and warn before destructive navigation.",
    priority: "Priority 1",
  },
];

export const recommendations = [
  {
    priority: "Priority 1 (Critical - fix immediately)",
    items: ["Add booking confirmation page", "Preserve form data on back button"],
  },
  {
    priority: "Priority 2 (High - fix next sprint)",
    items: ["Replace medical jargon with plain terms", "Increase date picker visibility"],
  },
  {
    priority: "Priority 3 (Medium - fix within month)",
    items: ["Add inline form validation", "Improve error messages"],
  },
];

export const appendices = [
  "Raw data: success rates, times, and errors",
  "Participant quotes",
  "Video clips (if applicable)",
  "Consent forms",
];

export const remoteChecklist = {
  before: [
    "Send Zoom link and calendar invite",
    "Ask participant to test audio and video 5 minutes early",
    "Share screen-sharing instructions",
    "Prepare backup contact details",
    "Start recording with consent",
  ],
  during: [
    "Ask participant to share screen",
    "Remind them to talk through their thoughts",
    "Use chat for links and task prompts",
    "Watch for technical issues",
    "Take notes in a separate window",
  ],
  after: [
    "Thank participant and explain next steps",
    "Send compensation",
    "Download recording before it expires",
    "Back up notes and clips",
  ],
};

export const remoteTools = [
  { tool: "Zoom", features: "Screen share, recording", bestFor: "Live moderated" },
  { tool: "UserTesting", features: "Automated tasks, participant panel", bestFor: "Unmoderated" },
  { tool: "Lookback", features: "Session recording, notes", bestFor: "Mobile testing" },
  { tool: "Optimal Workshop", features: "Card sorting, tree testing", bestFor: "IA evaluation" },
  { tool: "Hotjar", features: "Heatmaps, recordings", bestFor: "Website analytics" },
  { tool: "UsabilityHub", features: "5-second tests, surveys", bestFor: "Quick feedback" },
];

export const unmoderatedSetup = [
  "Participant receives a link and completes tasks alone.",
  "Instructions are pre-recorded or shown inline before each task.",
  "Screen and audio can be recorded automatically.",
  "No moderator is present, which makes the method easier to scale.",
];

export const unmoderatedTradeoffs = {
  pros: ["Faster", "Cheaper", "Supports more participants", "Captures natural environment"],
  cons: ["Cannot probe in the moment", "Cannot help if participant gets stuck", "Think-aloud quality may drop"],
};
