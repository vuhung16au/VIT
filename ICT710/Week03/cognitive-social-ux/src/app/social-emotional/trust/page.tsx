import { JourneyNav } from "@/components/JourneyNav";

export default function TrustPage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-calm-600">
          Demo 2
        </p>
        <h1 className="text-4xl text-calm-900 md:text-5xl">Emotional UX: Building Trust</h1>
        <p className="max-w-3xl text-slate-700">
          In healthcare, trust is part of the user experience. Compare a weak profile with a more
          reassuring version that explains why users feel more confident.
        </p>
        <JourneyNav currentPath="/social-emotional/trust" />
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <article className="scene-card">
          <h2 className="mb-4 text-xl font-bold text-red-600">Low Trust Design</h2>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="mb-2 text-2xl font-bold text-slate-900">Dr. John</p>
            <p className="mb-4 text-slate-700">Doctor</p>
            <button className="w-full rounded-lg bg-red-500 py-3 font-semibold text-white">
              BOOK NOW!!!
            </button>
            <p className="mt-4 text-xs text-slate-400">
              No credentials, no reviews, no photo, and aggressive language leave users uncertain.
            </p>
          </div>
        </article>

        <article className="scene-card">
          <h2 className="mb-4 text-xl font-bold text-green-600">High Trust Design</h2>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex gap-4">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-calm-50 text-3xl">
                👨‍⚕️
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Dr. John Smith, MD</h3>
                <p className="text-sm text-slate-600">Board Certified Cardiologist</p>
                <p className="text-sm text-slate-600">15 years experience</p>
              </div>
            </div>

            <div className="mb-4 rounded-xl bg-yellow-50 p-3">
              <div className="mb-1 flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="font-semibold text-slate-900">4.9/5.0</span>
                <span className="text-sm text-slate-600">(247 reviews)</span>
              </div>
              <p className="text-sm text-slate-700">
                &quot;Very thorough and caring doctor.&quot; - Sarah M.
              </p>
            </div>

            <div className="mb-4 border-t border-slate-200 pt-4 text-sm text-slate-700">
              <p>
                <strong>Education:</strong> Harvard Medical School
              </p>
              <p>
                <strong>Hospital:</strong> City General Hospital
              </p>
              <p>
                <strong>Languages:</strong> English, Spanish
              </p>
            </div>

            <button className="w-full rounded-xl bg-calm-600 py-3 font-semibold text-white transition-colors hover:bg-calm-900">
              Schedule Appointment
            </button>
            <p className="mt-2 text-center text-xs text-slate-500">
              Free cancellation up to 24 hours before
            </p>
          </div>
        </article>
      </section>

      <section className="scene-card">
        <h2 className="mb-3 text-2xl text-calm-900">Trust-Building Elements</h2>
        <ul className="grid gap-3 md:grid-cols-2 text-slate-700">
          <li>Professional credentials and certifications</li>
          <li>Real ratings and patient reviews</li>
          <li>Calm, professional language</li>
          <li>Transparent policies and expectations</li>
          <li>Humanizing details like profile photos</li>
          <li>Privacy and security reassurance</li>
        </ul>
      </section>
    </main>
  );
}
