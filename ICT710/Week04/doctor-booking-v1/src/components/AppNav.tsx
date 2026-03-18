import Link from "next/link";

const links = [
  { href: "/", label: "Overview" },
  { href: "/bad-version", label: "Bad Version" },
  { href: "/version-a-multistep", label: "Version A" },
  { href: "/version-b-singlepage", label: "Version B" },
  { href: "/ab-test", label: "A/B Test" },
];

type AppNavProps = {
  currentPath: string;
};

export function AppNav({ currentPath }: AppNavProps) {
  return (
    <nav className="rounded-2xl border border-slate-200/80 bg-white/85 p-4 shadow-sm backdrop-blur">
      <ul className="grid gap-3 md:grid-cols-5">
        {links.map((item) => {
          const isActive = currentPath === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex h-full items-center justify-center rounded-xl border px-4 py-3 text-center font-semibold transition-all duration-200 ${
                  isActive
                    ? "border-indigo-300 bg-indigo-50 text-indigo-700 shadow-[0_10px_22px_rgba(99,102,241,0.16)]"
                    : "border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-indigo-300"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
