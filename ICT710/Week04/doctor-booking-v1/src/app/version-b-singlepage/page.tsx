"use client";

import { useState } from "react";

import { AppNav } from "@/components/AppNav";

const doctorOptions = [
  "Dr. Sarah Smith - Cardiology",
  "Dr. Mike Jones - Pediatrics",
  "Dr. Lisa Chen - Dermatology",
];

const timeSlots = ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"];

export default function VersionBSinglePage() {
  const [expandedSection, setExpandedSection] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    timeSlot: "",
  });

  const toggleSection = (section: number) => {
    setExpandedSection(expandedSection === section ? 0 : section);
  };

  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Develop Phase
        </p>
        <h1 className="text-4xl text-slate-900 md:text-5xl">Version B: Single-Page Accordion</h1>
        <p className="max-w-3xl text-slate-700">
          This alternative keeps everything on one page, giving users more overview and quicker
          access to earlier sections.
        </p>
        <AppNav currentPath="/version-b-singlepage" />
      </header>

      <section className="scene-card">
        <div className="mx-auto max-w-2xl">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl bg-white shadow-md">
              <button
                type="button"
                onClick={() => toggleSection(1)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-50"
              >
                <div>
                  <h2 className="text-lg font-bold text-slate-900">1. Your Information</h2>
                  {formData.name && (
                    <p className="mt-1 text-sm text-slate-600">
                      {formData.name} • {formData.email}
                    </p>
                  )}
                </div>
                <span className="text-2xl text-slate-500">{expandedSection === 1 ? "−" : "+"}</span>
              </button>
              {expandedSection === 1 && (
                <div className="space-y-4 border-t px-6 pb-6 pt-4">
                  <div>
                    <label className="mb-2 block font-medium text-slate-800">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium text-slate-800">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium text-slate-800">Phone *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-md">
              <button
                type="button"
                onClick={() => toggleSection(2)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-50"
              >
                <div>
                  <h2 className="text-lg font-bold text-slate-900">2. Choose Doctor</h2>
                  {formData.doctor && <p className="mt-1 text-sm text-slate-600">Selected: {formData.doctor}</p>}
                </div>
                <span className="text-2xl text-slate-500">{expandedSection === 2 ? "−" : "+"}</span>
              </button>
              {expandedSection === 2 && (
                <div className="space-y-2 border-t px-6 pb-6 pt-4">
                  {doctorOptions.map((doctor) => (
                    <button
                      key={doctor}
                      type="button"
                      onClick={() => setFormData({ ...formData, doctor })}
                      className={`w-full rounded-xl border-2 p-3 text-left transition-colors ${
                        formData.doctor === doctor
                          ? "border-emerald-600 bg-emerald-50"
                          : "border-slate-200 hover:border-emerald-300"
                      }`}
                    >
                      {doctor}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-md">
              <button
                type="button"
                onClick={() => toggleSection(3)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-50"
              >
                <div>
                  <h2 className="text-lg font-bold text-slate-900">3. Date and Time</h2>
                  {formData.date && formData.timeSlot && (
                    <p className="mt-1 text-sm text-slate-600">
                      {formData.date} at {formData.timeSlot}
                    </p>
                  )}
                </div>
                <span className="text-2xl text-slate-500">{expandedSection === 3 ? "−" : "+"}</span>
              </button>
              {expandedSection === 3 && (
                <div className="space-y-4 border-t px-6 pb-6 pt-4">
                  <div>
                    <label className="mb-2 block font-medium text-slate-800">Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(event) => setFormData({ ...formData, date: event.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium text-slate-800">Time Slot</label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeSlot: time })}
                          className={`rounded-xl border-2 p-2 text-sm transition-colors ${
                            formData.timeSlot === time
                              ? "border-emerald-600 bg-emerald-50"
                              : "border-slate-200 hover:border-emerald-300"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button className="mt-6 w-full rounded-xl bg-indigo-600 py-4 text-lg font-semibold text-white transition-colors hover:bg-indigo-700">
            Confirm Booking
          </button>
        </div>
      </section>
    </main>
  );
}
