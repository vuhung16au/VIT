"use client";

import { useState } from "react";

import { AppNav } from "@/components/AppNav";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";

const doctors = [
  { id: "smith", name: "Dr. Sarah Smith", specialty: "Cardiology", rating: 4.9 },
  { id: "jones", name: "Dr. Mike Jones", specialty: "Pediatrics", rating: 4.8 },
  { id: "chen", name: "Dr. Lisa Chen", specialty: "Dermatology", rating: 4.7 },
];

const timeSlots = ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"];

export default function VersionAMultiStepPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    timeSlot: "",
  });

  const nextStep = () => {
    console.log(`User completed step ${step}`);
    setStep((current) => Math.min(current + 1, 3));
  };

  const previousStep = () => setStep((current) => Math.max(current - 1, 1));

  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
          Develop Phase
        </p>
        <h1 className="text-4xl text-slate-900 md:text-5xl">Version A: Multi-Step Form</h1>
        <p className="max-w-3xl text-slate-700">
          This version uses progressive disclosure to reduce cognitive load and keep mobile users
          focused on one decision at a time.
        </p>
        <AppNav currentPath="/version-a-multistep" />
      </header>

      <section className="scene-card">
        {step === 1 && <AnalyticsTracker eventName="view_step_1" version="A" />}
        {step === 2 && <AnalyticsTracker eventName="view_step_2" version="A" />}
        {step === 3 && <AnalyticsTracker eventName="view_step_3" version="A" />}

        <div className="mx-auto max-w-lg">
          <div className="mb-8">
            <div className="mb-2 flex justify-between">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex flex-1 items-center">
                  <div
                    className={`grid h-10 w-10 place-items-center rounded-full font-bold ${
                      item <= step ? "bg-indigo-600 text-white" : "bg-slate-300 text-slate-600"
                    }`}
                  >
                    {item}
                  </div>
                  {item < 3 && (
                    <div
                      className={`mx-2 h-1 flex-1 rounded-full ${
                        item < step ? "bg-indigo-600" : "bg-slate-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-slate-600">Step {step} of 3</p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            {step === 1 && (
              <div>
                <h2 className="mb-6 text-2xl font-bold text-slate-900">Your Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block font-medium text-slate-800">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium text-slate-800">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium text-slate-800">Phone *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="mb-6 text-2xl font-bold text-slate-900">Choose Your Doctor</h2>
                <div className="space-y-3">
                  {doctors.map((doctor) => (
                    <button
                      key={doctor.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, doctor: doctor.id })}
                      className={`w-full rounded-2xl border-2 p-4 text-left transition-all ${
                        formData.doctor === doctor.id
                          ? "border-indigo-600 bg-indigo-50"
                          : "border-slate-200 hover:border-indigo-300"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-bold text-slate-900">{doctor.name}</p>
                          <p className="text-sm text-slate-600">{doctor.specialty}</p>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <span className="text-yellow-500">★</span>
                          <span className="font-semibold text-slate-900">{doctor.rating}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="mb-6 text-2xl font-bold text-slate-900">Pick Date and Time</h2>
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block font-medium text-slate-800">Preferred Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(event) => setFormData({ ...formData, date: event.target.value })}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium text-slate-800">Available Time Slots</label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeSlot: time })}
                          className={`rounded-xl border-2 p-3 font-semibold transition-colors ${
                            formData.timeSlot === time
                              ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                              : "border-slate-200 hover:border-indigo-300"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 flex gap-3">
              {step > 1 && (
                <button
                  type="button"
                  onClick={previousStep}
                  className="flex-1 rounded-xl border-2 border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Back
                </button>
              )}
              {step < 3 && (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
                >
                  Next Step
                </button>
              )}
              {step === 3 && (
                <button
                  type="button"
                  className="flex-1 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
                >
                  Confirm Booking
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
