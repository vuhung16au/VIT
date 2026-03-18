"use client";

import { useState } from "react";

import { useGestureDetection } from "@/hooks/useGestureDetection";

const instructions = [
  { label: "Wave Right", effect: "Advance to next booking step" },
  { label: "Wave Left", effect: "Go back to previous step" },
  { label: "Circle", effect: "Select highlighted option" },
];

export function GestureVisualizer() {
  const { gesture, triggerGesture } = useGestureDetection();
  const [selectedInstruction, setSelectedInstruction] = useState("");

  const activateGesture = (label: string) => {
    setSelectedInstruction(label);
    triggerGesture(label);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
      <p className="mb-1 text-sm font-semibold uppercase tracking-[0.14em] text-calm-600">
        {/* INTERFACE TYPE: gesture is touchless but physically demanding and often better for special contexts. */}
        Gesture simulation
      </p>
      <h3 className="text-2xl font-bold text-slate-900">Touchless booking controls</h3>

      <div className="mt-4 rounded-3xl border-2 border-dashed border-calm-400 bg-calm-50 p-6 text-center">
        <div className="mx-auto mb-3 grid h-36 max-w-sm place-items-center rounded-3xl bg-white shadow-inner">
          <div>
            <div className="text-5xl">📷</div>
            <p className="mt-2 text-sm text-slate-600">Simulated webcam preview area</p>
          </div>
        </div>
        <div className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-calm-900 shadow-sm">
          Detected gesture: {gesture}
        </div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {instructions.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => activateGesture(item.label)}
            className={`rounded-2xl border p-4 text-left transition-all ${
              selectedInstruction === item.label
                ? "border-calm-400 bg-calm-50"
                : "border-slate-200 hover:border-calm-400"
            }`}
          >
            <div className="font-semibold text-slate-900">{item.label}</div>
            <div className="mt-1 text-sm text-slate-600">{item.effect}</div>
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-slate-600">
        Demo mode: gestures are simulated with click actions rather than real webcam tracking.
      </p>
    </div>
  );
}
