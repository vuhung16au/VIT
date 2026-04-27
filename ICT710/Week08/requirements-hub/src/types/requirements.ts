export type Priority = "Must Have" | "Should Have" | "Could Have" | "Won't Have";

export type FunctionalRequirement = {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  personas: string[];
  acceptanceCriteria: string[];
  mappedFeature: string;
  evidence?: string;
};

export type NonFunctionalRequirement = {
  id: string;
  category: "Usability" | "Performance" | "Reliability" | "Security" | "Compliance";
  statement: string;
  measure: string;
  designImpact: string;
  priority: Priority;
  evidence?: string;
};

export type UserStory = {
  id: string;
  persona: string;
  story: string;
  benefit: string;
  priority: Priority;
  acceptanceCriteria: string[];
  relatedRequirements: string[];
};

export type UseCase = {
  id: string;
  name: string;
  actor: "Patient" | "Doctor" | "Admin" | "System";
  summary: string;
  includes?: string[];
  extends?: string[];
  preconditions?: string[];
  postconditions?: string[];
  alternatives?: string[];
  mainFlow: string[];
};

export type EnvironmentalRequirement = {
  category: "Physical" | "Social" | "Organizational" | "Technical";
  title: string;
  details: string;
  designResponse: string;
};

export type TraceabilityItem = {
  requirementId: string;
  persona: string;
  storyId: string;
  mapsTo: string;
  priority: Priority;
};
