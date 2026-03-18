import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar, FiMapPin, FiUsers, FiVideo } from 'react-icons/fi'

import DoctorSearch from '../components/DoctorSearch'

const featureCards = [
  {
    title: 'Video Consultation',
    description: 'Connect with doctors via video call from home with clear, guided steps.',
    icon: '🎥',
  },
  {
    title: 'In-Person Visit',
    description: 'Schedule face-to-face appointments with a layout that keeps the next action obvious.',
    icon: '🏥',
  },
  {
    title: 'Specialist Booking',
    description: 'Find and book specialist doctors quickly with familiar search patterns.',
    icon: '👨‍⚕️',
  },
]

const interactionPrinciples = [
  {
    title: 'Motion',
    description: 'Hover and press states show how movement can make actions feel responsive.',
  },
  {
    title: 'Space',
    description: 'Generous spacing, cards, and hierarchy help users scan and decide faster.',
  },
  {
    title: 'Time',
    description: 'Live preview and instant focus feedback reduce uncertainty while typing.',
  },
]

const Home = () => {
  return (
    <div className="bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_45%),linear-gradient(180deg,_#eff6ff_0%,_#f8fafc_45%,_#ffffff_100%)]">
      <section className="overflow-hidden">
        <div className="container-custom section-padding relative">
          <div className="absolute left-0 top-12 h-32 w-32 rounded-full bg-blue-200/40 blur-3xl" aria-hidden="true" />
          <div className="absolute right-0 top-24 h-48 w-48 rounded-full bg-indigo-200/40 blur-3xl" aria-hidden="true" />

          <div className="relative mx-auto max-w-5xl text-center">
            <p className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-blue-700 shadow-sm">
              Introduction to Interaction Design
            </p>
            <h1 className="mx-auto max-w-4xl text-balance text-5xl font-bold tracking-tight text-slate-950 md:text-6xl">
              Book Your Doctor Appointment Online
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Quick, safe, and convenient healthcare at your fingertips with a clear layout, meaningful feedback, and intuitive actions.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/booking/1"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:bg-blue-700 hover:shadow-xl active:scale-95"
              >
                <FiCalendar className="h-5 w-5" />
                <span>Book Appointment Now</span>
              </Link>
              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white/90 px-8 py-4 text-lg font-semibold text-blue-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white"
              >
                <FiUsers className="h-5 w-5" />
                <span>Find Doctors</span>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                <FiVideo className="h-4 w-4 text-blue-600" />
                Video consults
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                <FiMapPin className="h-4 w-4 text-blue-600" />
                In-person visits
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                <FiArrowRight className="h-4 w-4 text-blue-600" />
                Specialist referrals
              </span>
            </div>
          </div>

          <div className="relative mt-16">
            <DoctorSearch />
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-3">
            {featureCards.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[1.75rem] border border-white/70 bg-white/90 p-8 shadow-lg shadow-slate-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 text-4xl" aria-hidden="true">
                  {feature.icon}
                </div>
                <h2 className="mb-3 text-2xl font-semibold text-slate-900">{feature.title}</h2>
                <p className="leading-7 text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
              IxD Principles in action
            </p>
            <h2 className="text-4xl font-bold text-slate-950">Why this demo works</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              The page shows how interaction design goes beyond visuals by combining layout, motion, and live feedback to guide the user.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {interactionPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="rounded-[1.5rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-8"
              >
                <h3 className="mb-3 text-2xl font-semibold text-slate-900">{principle.title}</h3>
                <p className="leading-7 text-slate-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
