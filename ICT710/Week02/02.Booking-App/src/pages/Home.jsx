import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] bg-gradient-to-br from-primary-600 via-blue-600 to-indigo-700 px-8 py-12 text-white shadow-xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-100">
          Week 02: Problem Space and Conceptualization
        </p>
        <h1 className="mb-3 text-4xl font-bold">Design before you build</h1>
        <p className="max-w-2xl text-lg text-blue-50">
          Explore four different interaction types for the same doctor-booking task, then use
          the 5W framework to clarify the problem space before moving into detailed UI decisions.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/interaction-types"
            className="min-h-touch inline-flex items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-primary-700 transition-all hover:-translate-y-0.5 hover:bg-blue-50"
          >
            Explore interaction types
          </Link>
          <Link
            to="/problem-space"
            className="min-h-touch inline-flex items-center justify-center rounded-xl border border-white/30 px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
          >
            Start 5W analysis
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-6 shadow-md">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">Demo 1: Interaction Types</h2>
          <p className="mb-4 text-gray-600">
            Compare instructing, conversing, manipulating, and exploring to see how the same
            task changes with different interaction patterns.
          </p>
          <Link
            to="/interaction-types"
            className="inline-flex items-center font-semibold text-primary-700 hover:text-primary-800"
          >
            Open interaction types →
          </Link>
        </article>

        <article className="rounded-2xl bg-white p-6 shadow-md">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">Demo 2: Problem Space</h2>
          <p className="mb-4 text-gray-600">
            Answer who, what, when, where, and why before touching interface details, then review
            the conceptual model that follows from that analysis.
          </p>
          <Link
            to="/problem-space"
            className="inline-flex items-center font-semibold text-primary-700 hover:text-primary-800"
          >
            Open 5W worksheet →
          </Link>
        </article>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Existing booking flow</h2>
        <p className="mb-4 text-gray-600">
          The booking wizard from the original app is still available if you want to compare a
          production-style flow with the conceptual demos from Week 02.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/book"
            className="min-h-touch inline-flex items-center justify-center rounded-xl bg-primary-600 px-6 text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            Book an appointment
          </Link>
          <Link
            to="/appointments"
            className="min-h-touch inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50"
          >
            My appointments
          </Link>
        </div>
      </section>
    </div>
  );
}
