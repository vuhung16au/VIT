"use client";

import { useState } from "react";

import { doctors } from "@/data/doctors";

export function TouchCards() {
  const [index, setIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("");
  const doctor = doctors[index];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-calm-600">
        {/* INTERFACE TYPE: touch UI uses large tap targets and thumb-friendly placement. */}
        Touch-first booking
      </p>
      <div className="rounded-3xl bg-gradient-to-br from-calm-50 to-white p-5">
        <div className="mb-3 text-5xl text-center">👩‍⚕️</div>
        <h3 className="text-center text-2xl font-bold text-slate-900">{doctor.name}</h3>
        <p className="text-center text-slate-600">{doctor.specialty}</p>
        <p className="mt-2 text-center text-sm text-slate-500">Swipe simulation: use the buttons below</p>
      </div>

      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => setIndex((current) => (current === 0 ? doctors.length - 1 : current - 1))}
          className="touch-manipulation min-h-11 flex-1 rounded-2xl border border-slate-300 px-4 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50"
        >
          Swipe Left
        </button>
        <button
          type="button"
          onClick={() => setIndex((current) => (current === doctors.length - 1 ? 0 : current + 1))}
          className="touch-manipulation min-h-11 flex-1 rounded-2xl border border-slate-300 px-4 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50"
        >
          Swipe Right
        </button>
      </div>

      <div className="mt-5">
        <p className="mb-2 text-sm font-semibold text-slate-700">Pick a touch-friendly time</p>
        <div className="grid grid-cols-2 gap-3">
          {["09:00", "10:30", "14:00", "15:30"].map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => setSelectedSlot(slot)}
              className={`touch-manipulation min-h-11 rounded-2xl border-2 px-4 py-4 text-base font-semibold transition-colors ${
                selectedSlot === slot
                  ? "border-calm-400 bg-calm-50 text-calm-900"
                  : "border-slate-200 hover:border-calm-400"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-slate-50 p-4">
        <p className="mb-2 text-sm font-semibold text-slate-700">Bottom navigation</p>
        <div className="grid grid-cols-4 gap-2 text-center text-xs text-slate-600">
          <div className="rounded-xl bg-white px-2 py-3 shadow-sm">Home</div>
          <div className="rounded-xl bg-white px-2 py-3 shadow-sm">Doctors</div>
          <div className="rounded-xl bg-calm-600 px-2 py-3 text-white shadow-sm">Book</div>
          <div className="rounded-xl bg-white px-2 py-3 shadow-sm">Profile</div>
        </div>
      </div>
    </div>
  );
}
