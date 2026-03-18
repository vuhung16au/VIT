import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/personas", label: "Personas" },
  { href: "/booking/sarah", label: "Sarah" },
  { href: "/booking/robert", label: "Robert" },
  { href: "/booking/maya", label: "Maya" },
  { href: "/guidelines", label: "Guidelines" },
];

type PersonaNavProps = {
  currentPath: string;
};

export function PersonaNav({ currentPath }: PersonaNavProps) {
  return (
    <nav className="navbar navbar-expand-lg bg-white border rounded-4 shadow-sm">
      <div className="container-fluid px-4">
        <span className="navbar-brand fw-bold text-primary mb-0">Week 07 Demo</span>
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
