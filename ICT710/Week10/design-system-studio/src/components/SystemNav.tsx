import Link from "next/link";

const links = [
  { href: "/", label: "Overview" },
  { href: "/foundations/typography", label: "Typography" },
  { href: "/foundations/colors", label: "Colors" },
  { href: "/foundations/icons", label: "Icons" },
  { href: "/foundations/layout", label: "Layout" },
  { href: "/foundations/motion", label: "Motion" },
  { href: "/components/buttons", label: "Buttons" },
  { href: "/components/forms", label: "Forms" },
  { href: "/components/cards", label: "Cards" },
  { href: "/components/navigation", label: "Navigation" },
];

type SystemNavProps = {
  currentPath: string;
};

export function SystemNav({ currentPath }: SystemNavProps) {
  return (
    <nav className="navbar navbar-expand-lg bg-white border rounded-4 shadow-sm">
      <div className="container-fluid px-4 py-2">
        <span className="navbar-brand fw-bold text-primary mb-0">Week 10 Studio</span>
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
