import Link from "next/link";

const links = [
  { href: "/", label: "Gallery" },
  { href: "/prototypes/paper", label: "Paper" },
  { href: "/prototypes/wireframe", label: "Wireframe" },
  { href: "/prototypes/low-fi", label: "Low-Fi" },
  { href: "/prototypes/high-fi", label: "High-Fi" },
  { href: "/storyboard", label: "Storyboard" },
  { href: "/wizard-oz", label: "Wizard of Oz" },
  { href: "/components-demo", label: "Components" },
];

type PrototypeNavProps = {
  currentPath: string;
};

export function PrototypeNav({ currentPath }: PrototypeNavProps) {
  return (
    <nav className="navbar navbar-expand-lg bg-white border rounded-4 shadow-sm">
      <div className="container-fluid px-4 py-2">
        <span className="navbar-brand fw-bold text-danger mb-0">Week 09 Demo</span>
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
