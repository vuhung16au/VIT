"use client";

import { useState } from "react";

import { doctors } from "@/data/doctors";

export function GUIWindow() {
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0].id);
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="rounded-3xl border border-slate-300 bg-white shadow-2xl">
      <div className="flex items-center justify-between rounded-t-3xl bg-slate-100 px-4 py-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <p className="mb-0 text-sm font-semibold text-slate-700">Doctor Booking Desktop</p>
        <div className="text-xs text-slate-500">File • Edit • View • Help</div>
      </div>

      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
        <div className="flex gap-2 text-sm text-slate-600">
          <span className="rounded-lg bg-white px-3 py-2 shadow-sm">🗂 Doctors</span>
          <span className="rounded-lg bg-white px-3 py-2 shadow-sm">📅 Schedule</span>
          <span className="rounded-lg bg-white px-3 py-2 shadow-sm">⚙ Preferences</span>
        </div>
      </div>

      <div className="grid gap-6 p-5 md:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <label className="mb-2 block text-sm font-semibold text-slate-700">Doctor list</label>
          <select
            className="w-full rounded-xl border border-slate-300 px-3 py-2"
            value={selectedDoctor}
            onChange={(event) => setSelectedDoctor(event.target.value)}
          >
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name} - {doctor.specialty}
              </option>
            ))}
          </select>
          <div className="mt-4 max-h-56 overflow-y-auto rounded-2xl border border-slate-200 p-3">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="mb-3 rounded-xl bg-slate-50 p-3">
                <div className="font-semibold text-slate-900">{doctor.name}</div>
                <div className="text-sm text-slate-600">{doctor.specialty}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <h3 className="text-xl font-bold text-slate-900">Booking dialog</h3>
          <p className="mt-2 text-sm text-slate-600">
            {/* INTERFACE TYPE: GUI is more discoverable because menus and visible controls expose choices. */}
            Classic desktop patterns make options visible but depend on precise pointing and screen space.
          </p>
          <div className="mt-4 grid gap-3">
            <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Patient name" />
            <input className="rounded-xl border border-slate-300 px-3 py-2" type="date" />
            <select className="rounded-xl border border-slate-300 px-3 py-2">
              <option>09:00 AM</option>
              <option>10:00 AM</option>
              <option>02:00 PM</option>
            </select>
          </div>
          <button
            type="button"
            onClick={() => setShowDialog(true)}
            className="mt-4 rounded-xl bg-calm-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-calm-900"
          >
            Open confirmation dialog
          </button>
        </div>
      </div>

      {showDialog && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-slate-900">Confirm appointment</h3>
            <p className="mt-2 text-slate-600">
              Traditional GUIs often rely on modal dialogs to make decisions explicit before the
              user commits.
            </p>
            <div className="mt-5 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowDialog(false)}
                className="rounded-xl border border-slate-300 px-4 py-2 font-medium text-slate-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setShowDialog(false)}
                className="rounded-xl bg-calm-600 px-4 py-2 font-semibold text-white"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
