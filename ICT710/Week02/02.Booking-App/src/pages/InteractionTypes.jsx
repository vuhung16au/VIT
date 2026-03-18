import { Link } from 'react-router-dom';

const typeCards = [
  {
    type: 'Instructing',
    description: 'Command-based interaction with precise text commands.',
    href: '/interaction-types/instructing',
    colorClass: 'border-blue-500 hover:bg-blue-50',
  },
  {
    type: 'Conversing',
    description: 'Natural language chatbot flow that guides the booking.',
    href: '/interaction-types/conversing',
    colorClass: 'border-green-500 hover:bg-green-50',
  },
  {
    type: 'Manipulating',
    description: 'Direct manipulation through clickable appointment slots.',
    href: '/interaction-types/manipulating',
    colorClass: 'border-purple-500 hover:bg-purple-50',
  },
  {
    type: 'Exploring',
    description: 'Browse doctors visually and discover options before deciding.',
    href: '/interaction-types/exploring',
    colorClass: 'border-orange-500 hover:bg-orange-50',
  },
];

export default function InteractionTypes() {
  return (
    <div className="min-h-screen rounded-[2rem] bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary-600">
            Week 02 Demo
          </p>
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Four Ways to Book a Doctor</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            The same task can feel very different depending on the interaction type we choose.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {typeCards.map((card) => (
            <Link
              key={card.type}
              to={card.href}
              className={`block rounded-2xl border-l-4 bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${card.colorClass}`}
            >
              <h2 className="mb-2 text-2xl font-bold text-gray-900">{card.type}</h2>
              <p className="text-gray-600">{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
