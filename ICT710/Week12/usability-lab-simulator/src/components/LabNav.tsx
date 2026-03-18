import Link from "next/link";

const links = [
  { href: "/", label: "Hub" },
  { href: "/plan", label: "Plan" },
  { href: "/recruit", label: "Recruit" },
  { href: "/conduct", label: "Conduct" },
  { href: "/think-aloud", label: "Think-Aloud" },
  { href: "/analyze", label: "Analyze" },
  { href: "/report", label: "Report" },
];

type LabNavProps = {
  currentPath: string;
};

export function LabNav({ currentPath }: LabNavProps) {
  return (
    <nav className="navbar navbar-expand-lg bg-white border rounded-4 shadow-sm">
      <div className="container-fluid px-4 py-2">
        <span className="navbar-brand fw-bold text-danger mb-0">Week 12 Lab</span>
        <div className="navbar-nav flex-row flex-wrap gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`btn ${currentPath === link.href ? "btn-danger" : "btn-outline-danger"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
