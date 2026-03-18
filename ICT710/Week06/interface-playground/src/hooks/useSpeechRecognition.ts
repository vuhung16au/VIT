"use client";

import { useState } from "react";

export function useSpeechRecognition() {
  const [transcript, setTranscript] = useState<string[]>([
    "Assistant: Say 'Book doctor' to begin.",
  ]);

  const addTranscript = (line: string) => {
    setTranscript((current) => [...current, line]);
  };

  return {
    transcript,
    addTranscript,
  };
}
