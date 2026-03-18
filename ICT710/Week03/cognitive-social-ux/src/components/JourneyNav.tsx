import Link from "next/link";

const sections = [
  { href: "/", label: "UX Foundations", short: "Home" },
  { href: "/cognitive-ux", label: "Cognitive UX", short: "Cognitive" },
  { href: "/social-emotional/trust", label: "Trust and Social", short: "Social" },
  { href: "/ab-testing", label: "A/B Testing", short: "Testing" },
];

type JourneyNavProps = {
  currentPath: string;
};

export function JourneyNav({ currentPath }: JourneyNavProps) {
  return (
    <nav className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur">
      <ul className="grid gap-3 md:grid-cols-4">
        {sections.map((item) => {
          const isActive = currentPath === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex h-full flex-col rounded-xl border p-3 transition-all duration-200 ${
                  isActive
                    ? "border-calm-400 bg-calm-50 shadow-[0_10px_24px_rgba(21,113,152,0.14)]"
                    : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-calm-400"
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {item.short}
                </span>
                <span className="mt-1 font-semibold text-slate-900">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
