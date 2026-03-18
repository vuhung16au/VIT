export type LikertRating = 1 | 2 | 3 | 4 | 5;

export type SurveyResponse = {
  id: string;
  satisfaction: LikertRating;
  clarity: LikertRating;
  trust: LikertRating;
  bookingEase: string;
  comment: string;
  createdAt: string;
};

export type InterviewSchedule = {
  id: string;
  name: string;
  email: string;
  phone: string;
  preferredSlot: string;
  interviewType: "Phone" | "Video" | "In-person";
  createdAt: string;
};

export type ObservationNote = {
  id: string;
  title: string;
  clicks: number;
  avgSeconds: number;
  dropOff: number;
  insight: string;
};

export type RecordingEntry = {
  id: string;
  method: "Notes + Photos" | "Audio + Photos" | "Video Recording";
  category: "Confusion" | "Success" | "Error";
  note: string;
  createdAt: string;
};

export type TriangulatedInsight = {
  title: string;
  questionnaire: string;
  interviews: string;
  observation: string;
};
