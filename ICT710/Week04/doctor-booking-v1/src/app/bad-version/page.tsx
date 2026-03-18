import { AppNav } from "@/components/AppNav";

export default function BadVersionPage() {
  return (
    <main className="scene-shell space-y-6">
      <header className="scene-card space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
          Discover Phase
        </p>
        <h1 className="text-4xl text-slate-900 md:text-5xl">Bad Version to Analyze</h1>
        <p className="max-w-3xl text-slate-700">
          This page is intentionally frustrating. It gives students something concrete to critique
          before moving into clearer problem definition and better alternatives.
        </p>
        <AppNav currentPath="/bad-version" />
      </header>

      <section className="scene-card">
        <div className="rounded-3xl border border-yellow-600 bg-yellow-300 p-5 shadow-inner">
          <h2 className="mb-4 text-sm font-bold tracking-[0.12em] text-red-600">
            DOCTOR BOOKING SYSTEM!!!
          </h2>
          <form className="space-y-3">
            <div>
              <input type="text" placeholder="name" className="w-[100px] border border-slate-600 bg-white px-2 py-1 text-sm" />
            </div>
            <div>
              <input type="text" placeholder="email" className="border border-slate-600 bg-white px-2 py-1 text-sm" />
            </div>
            <div>
              <input type="text" placeholder="phone" className="border border-slate-600 bg-white px-2 py-1 text-sm" />
            </div>
            <div>
              <input type="text" placeholder="address" className="border border-slate-600 bg-white px-2 py-1 text-sm" />
            </div>
            <div>
              <input type="text" placeholder="insurance" className="border border-slate-600 bg-white px-2 py-1 text-sm" />
            </div>
            <div>
              <select className="w-[80px] border border-slate-600 bg-white px-2 py-1 text-sm">
                <option>dr</option>
              </select>
            </div>
            <div>
              <input type="text" placeholder="date" className="border border-slate-600 bg-white px-2 py-1 text-sm" />
            </div>
            <div>
              <input type="text" placeholder="time" className="border border-slate-600 bg-white px-2 py-1 text-sm" />
            </div>
            <div>
              <textarea placeholder="why" rows={2} className="w-[150px] border border-slate-600 bg-white px-2 py-1 text-sm" />
            </div>
            <button
              type="submit"
              className="bg-lime-400 px-3 py-2 text-sm font-bold text-blue-700"
            >
              CLICK HERE TO SUBMIT NOW!!!
            </button>
          </form>
        </div>
      </section>

      <section className="scene-card">
        <h2 className="mb-3 text-2xl text-slate-900">What Students Should Notice</h2>
        <ul className="space-y-2 text-slate-700">
          <li>Overwhelming number of fields with no grouping or hierarchy.</li>
          <li>Poor contrast, aggressive language, and inconsistent sizing.</li>
          <li>No validation, no guidance, and no trust-building signals.</li>
        </ul>
      </section>
    </main>
  );
}
