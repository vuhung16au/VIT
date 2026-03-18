import Link from "next/link";

import { RequirementsNav } from "@/components/RequirementsNav";
import { environmentalRequirements } from "@/data/environmentalRequirements";
import { functionalRequirements } from "@/data/functionalRequirements";
import { nonFunctionalRequirements } from "@/data/nonFunctionalRequirements";
import { useCases } from "@/data/useCases";
import { userStories } from "@/data/userStories";

const sections = [
  {
    href: "/requirements/functional",
    title: "Functional requirements",
    count: functionalRequirements.length,
    description: "Core actions the booking system must support.",
  },
  {
    href: "/requirements/non-functional",
    title: "Non-functional requirements",
    count: nonFunctionalRequirements.length,
    description: "Usability, performance, reliability, and security expectations.",
  },
  {
    href: "/requirements/user-stories",
    title: "User stories",
    count: userStories.length,
    description: "Persona-driven stories with acceptance criteria.",
  },
  {
    href: "/requirements/use-cases",
    title: "Use cases",
    count: useCases.length,
    description: "Actor goals and end-to-end interaction flows.",
  },
  {
    href: "/requirements/environment",
    title: "Environmental context",
    count: environmentalRequirements.length,
    description: "Physical, social, organizational, and technical constraints.",
  },
];

export default function RequirementsPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <RequirementsNav currentPath="/requirements" />
        </div>
        <div className="col-12">
          <div className="card section-card">
            <div className="card-body p-4 p-md-5">
              <p className="text-uppercase text-success fw-semibold small mb-1">Demo 1</p>
              <h1 className="display-6 fw-bold">Requirements dashboard</h1>
              <p className="text-muted mb-0 col-lg-8">
                Explore how persona research becomes structured specifications, testable stories,
                and contextual constraints that guide interface decisions.
              </p>
            </div>
          </div>
        </div>
        {sections.map((section) => (
          <div key={section.href} className="col-md-6 col-lg-4">
            <Link href={section.href} className="text-decoration-none">
              <div className="card section-card h-100">
                <div className="card-body p-4">
                  <div className="small text-success fw-semibold">{section.count} items</div>
                  <h2 className="h4 fw-bold text-dark">{section.title}</h2>
                  <p className="text-muted mb-0">{section.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
