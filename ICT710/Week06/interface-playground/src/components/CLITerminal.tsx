"use client";

import { useState } from "react";

import { doctors } from "@/data/doctors";

const suggestions = ["list doctors", "select smith", "choose date 2026-03-22", "confirm"];

export function CLITerminal() {
  const [history, setHistory] = useState<string[]>([
    "HealthCare CLI v2.0",
    "Type 'list doctors' to begin.",
  ]);
  const [input, setInput] = useState("");

  const runCommand = () => {
    if (!input.trim()) return;
    const command = input.trim();
    const lower = command.toLowerCase();
    let response = "Unknown command. Try one of the suggested commands.";

    if (lower === "list doctors") {
      response = doctors
        .map((doctor) => `${doctor.name} (${doctor.specialty})`)
        .join(" | ");
    } else if (lower.startsWith("select")) {
      response = "Doctor selected. Now choose a date with 'choose date YYYY-MM-DD'.";
    } else if (lower.startsWith("choose date")) {
      response = "Date accepted. Finish with 'confirm'.";
    } else if (lower === "confirm") {
      response = "Booking confirmed. Efficiency is high if you already know the commands.";
    }

    setHistory((current) => [...current, `> ${command}`, response]);
    setInput("");
  };

  return (
    <div className="rounded-3xl bg-black p-5 font-mono text-green-400 shadow-2xl">
      <p className="mb-4 text-sm text-green-500">
        {/* INTERFACE TYPE: CLI prioritizes efficiency for expert users over discoverability. */}
        Suggested commands: {suggestions.join(" • ")}
      </p>
      <div className="mb-4 h-80 overflow-y-auto rounded-2xl border border-green-900 bg-slate-950 p-4">
        {history.map((line, index) => (
          <p key={`${line}-${index}`} className="mb-2 break-words">
            {line}
          </p>
        ))}
      </div>
      <div className="flex items-center rounded-xl border border-green-800 bg-slate-950 px-4 py-3">
        <span className="mr-3">&gt;</span>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && runCommand()}
          placeholder="Type command..."
          className="flex-1 bg-transparent text-green-300 placeholder:text-green-700 focus:outline-none"
        />
        <button
          type="button"
          onClick={runCommand}
          className="rounded-lg border border-green-700 px-4 py-2 text-sm font-semibold text-green-200 transition-colors hover:bg-green-700/10"
        >
          Run
        </button>
      </div>
    </div>
  );
}
