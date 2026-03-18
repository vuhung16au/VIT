"use client";

import { useState } from "react";

import { JourneyNav } from "@/components/JourneyNav";

const members = [
  { id: "1", name: "You", relation: "Self", age: 35, icon: "👤" },
  { id: "2", name: "Sarah", relation: "Daughter", age: 7, icon: "👧" },
  { id: "3", name: "Mark", relation: "Son", age: 10, icon: "👦" },
];

export default function SocialPage() {
  const [selectedMember, setSelectedMember] = useState("1");
  const selected = members.find((member) => member.id === selectedMember);

  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">
          Demo 2
        </p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">Social UX: Family Account Management</h1>
        <p className="max-w-3xl text-slate-700">
          Healthcare often involves other people. This demo shows how interfaces can support
          booking for family members while keeping the current context clear.
        </p>
        <JourneyNav currentPath="/social-emotional/trust" />
      </header>

      <section className="scene-card">
        <h2 className="mb-4 text-2xl text-calm-900">Who are you booking for?</h2>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          {members.map((member) => (
            <button
              key={member.id}
              type="button"
              onClick={() => setSelectedMember(member.id)}
              className={`rounded-2xl border-2 p-4 text-center transition-all ${
                selectedMember === member.id
                  ? "border-calm-400 bg-calm-50"
                  : "border-slate-200 bg-white hover:border-calm-400"
              }`}
            >
              <div className="mb-2 text-3xl">{member.icon}</div>
              <p className="font-semibold text-slate-900">{member.name}</p>
              <p className="text-sm text-slate-600">{member.relation}</p>
              <p className="text-xs text-slate-500">Age {member.age}</p>
            </button>
          ))}
        </div>

        {selected && (
          <div className="mb-4 rounded-xl bg-calm-50 p-4 text-sm text-calm-900">
            Booking context: <strong>{selected.name}</strong> ({selected.relation}). Confirmation
            and reminders will still go to the main account owner.
          </div>
        )}

        <button className="w-full rounded-xl bg-calm-600 py-3 font-semibold text-white transition-colors hover:bg-calm-900">
          Continue to Doctor Selection
        </button>
      </section>

      <section className="scene-card">
        <h2 className="mb-3 text-2xl text-calm-900">Social UX Principles</h2>
        <ul className="space-y-2 text-slate-700">
          <li>Support shared access for family-centered healthcare tasks.</li>
          <li>Always show who the action is being completed for.</li>
          <li>Make notification and ownership rules explicit.</li>
          <li>Reduce booking mistakes by keeping context visible.</li>
        </ul>
      </section>
    </main>
  );
}
