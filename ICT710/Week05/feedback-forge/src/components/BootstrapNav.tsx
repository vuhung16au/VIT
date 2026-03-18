import Link from "next/link";

const links = [
  { href: "/", label: "Feedback Forge" },
  { href: "/booking-complete", label: "Questionnaire" },
  { href: "/admin/analytics", label: "Analytics" },
  { href: "/admin/insights", label: "Insights" },
];

type BootstrapNavProps = {
  currentPath: string;
};

export function BootstrapNav({ currentPath }: BootstrapNavProps) {
  return (
    <nav className="navbar navbar-expand-lg bg-white border rounded-4 shadow-sm">
      <div className="container-fluid px-4">
        <span className="navbar-brand fw-bold text-primary mb-0">Week 05 Demo</span>
        <div className="navbar-nav flex-row flex-wrap gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`btn ${currentPath === link.href ? "btn-primary" : "btn-outline-primary"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
