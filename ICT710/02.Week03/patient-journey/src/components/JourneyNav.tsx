import Link from "next/link";

type JourneyNavProps = {
  currentStep: number;
};

const steps = [
  { step: 1, title: "Journey Map", href: "/" },
  { step: 2, title: "Smart Booking", href: "/scene-2" },
  { step: 3, title: "Waiting + Consult", href: "/scene-3" },
  { step: 4, title: "Trust + Recovery", href: "/scene-4" },
];

export function JourneyNav({ currentStep }: JourneyNavProps) {
  return (
    <nav className="rounded-2xl border border-sky-100/70 bg-white/75 p-4 backdrop-blur">
      <ul className="grid gap-3 md:grid-cols-4">
        {steps.map((item) => {
          const isActive = item.step === currentStep;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`group flex h-full flex-col rounded-xl border p-3 transition-all duration-300 ${
                  isActive
                    ? "border-teal-300 bg-teal-50 shadow-[0_8px_24px_rgba(20,184,166,0.15)]"
                    : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-sky-300"
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Scene {item.step}
                </span>
                <span className="mt-1 font-semibold text-slate-900">{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
