import Link from "next/link";

import { ComponentPlayground } from "@/components/ComponentPlayground";
import { SystemNav } from "@/components/SystemNav";

const sections = [
  { title: "Typography", href: "/foundations/typography", description: "Modular scale, weights, spacing, and do/don't examples." },
  { title: "Colors", href: "/foundations/colors", description: "Brand palette, semantic colors, and accessibility ratios." },
  { title: "Icons", href: "/foundations/icons", description: "Searchable icon system with category guidance." },
  { title: "Layout", href: "/foundations/layout", description: "12-column grid, breakpoints, and spacing scale." },
  { title: "Motion", href: "/foundations/motion", description: "Timing, easing, and micro-interaction principles." },
  { title: "Buttons", href: "/components/buttons", description: "Component variants, states, and playground." },
];

export default function HomePage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <SystemNav currentPath="/" />
        </div>
        <div className="col-12">
          <div className="card studio-hero border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <p className="text-uppercase fw-semibold small mb-2">Week 10 Demo Plan</p>
              <h1 className="display-6 fw-bold">Design System Studio</h1>
              <p className="col-lg-8 mb-4">
                Explore how design languages scale through tokens, foundations, reusable
                components, and purposeful motion.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="token-pill">Tokens before screens</span>
                <span className="token-pill">Consistency beats one-off decisions</span>
                <span className="token-pill">Systems make teams faster</span>
              </div>
            </div>
          </div>
        </div>
        {sections.map((section) => (
          <div key={section.href} className="col-md-6 col-lg-4">
            <Link href={section.href} className="text-decoration-none">
              <div className="card border-0 shadow-sm h-100 motion-demo">
                <div className="card-body p-4">
                  <h2 className="h4 fw-bold text-dark">{section.title}</h2>
                  <p className="text-muted mb-0">{section.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
        <div className="col-12">
          <ComponentPlayground />
        </div>
      </div>
    </main>
  );
}
