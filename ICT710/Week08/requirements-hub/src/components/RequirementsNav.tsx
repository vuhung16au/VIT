import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/requirements", label: "Dashboard" },
  { href: "/requirements/functional", label: "Functional" },
  { href: "/requirements/non-functional", label: "Non-Functional" },
  { href: "/requirements/user-stories", label: "User Stories" },
  { href: "/requirements/use-cases", label: "Use Cases" },
  { href: "/requirements/environment", label: "Environment" },
  { href: "/traceability", label: "Traceability" },
  { href: "/prioritization", label: "Prioritization" },
];

type RequirementsNavProps = {
  currentPath: string;
};

export function RequirementsNav({ currentPath }: RequirementsNavProps) {
  return (
    <nav className="navbar navbar-expand-lg bg-white border rounded-4 shadow-sm">
      <div className="container-fluid px-4 py-2">
        <span className="navbar-brand fw-bold text-success mb-0">Week 08 Demo</span>
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
