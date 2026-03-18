"use client";

import { useState } from "react";

export function useGestureDetection() {
  const [gesture, setGesture] = useState("Waiting for gesture...");

  const triggerGesture = (label: string) => {
    setGesture(label);
  };

  return {
    gesture,
    triggerGesture,
  };
}
