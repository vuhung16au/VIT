import Link from "next/link";

const links = [
  { href: "/", label: "Hub" },
  { href: "/cli", label: "CLI" },
  { href: "/gui", label: "GUI" },
  { href: "/touch", label: "Touch" },
  { href: "/voice", label: "Voice" },
  { href: "/gesture", label: "Gesture" },
  { href: "/timeline", label: "Timeline" },
];

type PlaygroundNavProps = {
  currentPath: string;
};

export function PlaygroundNav({ currentPath }: PlaygroundNavProps) {
  return (
    <nav className="rounded-2xl border border-slate-200/80 bg-white/85 p-4 shadow-sm backdrop-blur">
      <ul className="grid gap-3 md:grid-cols-7">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`flex h-full items-center justify-center rounded-xl border px-4 py-3 text-center font-semibold transition-all duration-200 ${
                currentPath === link.href
                  ? "border-calm-400 bg-calm-50 text-calm-900 shadow-[0_10px_22px_rgba(79,70,229,0.12)]"
                  : "border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-calm-400"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
