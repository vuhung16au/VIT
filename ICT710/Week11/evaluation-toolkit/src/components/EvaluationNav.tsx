import Link from "next/link";

const links = [
  { href: "/", label: "Hub" },
  { href: "/heuristic", label: "Heuristic" },
  { href: "/cognitive-walkthrough", label: "Walkthrough" },
  { href: "/analytics", label: "Analytics" },
  { href: "/checklist", label: "Checklist" },
  { href: "/comparison", label: "Comparison" },
  { href: "/ab-testing", label: "A/B Testing" },
];

type EvaluationNavProps = {
  currentPath: string;
};

export function EvaluationNav({ currentPath }: EvaluationNavProps) {
  return (
    <nav className="navbar navbar-expand-lg bg-white border rounded-4 shadow-sm">
      <div className="container-fluid px-4 py-2">
        <span className="navbar-brand fw-bold text-success mb-0">Week 11 Toolkit</span>
        <div className="navbar-nav flex-row flex-wrap gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`btn ${currentPath === link.href ? "btn-success" : "btn-outline-success"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
