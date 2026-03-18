"use client";

import { useState } from "react";

import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";

export function VoiceChat() {
  const [input, setInput] = useState("");
  const { transcript, addTranscript } = useSpeechRecognition();

  const submitVoiceLine = (text = input) => {
    if (!text.trim()) return;
    addTranscript(`You: ${text}`);

    const lower = text.toLowerCase();
    if (lower.includes("book doctor")) {
      addTranscript("Assistant: Sure. Dr. Sarah Smith is next available on March 22.");
    } else if (lower.includes("next available")) {
      addTranscript("Assistant: The next available slot is 9:00 AM on March 22.");
    } else if (lower.includes("confirm")) {
      addTranscript("Assistant: Booking confirmed. A confirmation message has been sent.");
    } else {
      addTranscript("Assistant: Try saying 'Book doctor', 'Next available', or 'Confirm'.");
    }

    setInput("");
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="mb-1 text-sm font-semibold uppercase tracking-[0.14em] text-calm-600">
            {/* INTERFACE TYPE: voice can be hands-free, but needs strong feedback and fallback options. */}
            Voice interface
          </p>
          <h3 className="text-2xl font-bold text-slate-900">Simulated VUI transcript</h3>
        </div>
        <button
          type="button"
          onClick={() => submitVoiceLine("Book doctor")}
          className="grid h-16 w-16 place-items-center rounded-full bg-calm-600 text-2xl text-white shadow-lg transition-transform hover:scale-105"
        >
          🎤
        </button>
      </div>

      <div className="mb-4 max-h-80 space-y-3 overflow-y-auto rounded-2xl bg-slate-50 p-4">
        {transcript.map((line, index) => (
          <div
            key={`${line}-${index}`}
            className={`max-w-[85%] rounded-2xl px-4 py-3 ${
              line.startsWith("Assistant:")
                ? "bg-white text-slate-700"
                : "ml-auto bg-calm-600 text-white"
            }`}
          >
            {line}
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && submitVoiceLine()}
          placeholder="Fallback text input..."
          className="flex-1 rounded-2xl border border-slate-300 px-4 py-3"
        />
        <button
          type="button"
          onClick={() => submitVoiceLine()}
          className="rounded-2xl bg-calm-600 px-5 py-3 font-semibold text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}
