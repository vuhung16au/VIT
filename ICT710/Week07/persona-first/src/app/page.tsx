import { PersonaSelector } from "@/components/PersonaSelector";
import { PersonaNav } from "@/components/PersonaNav";

export default function HomePage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <PersonaNav currentPath="/" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm bg-primary text-white">
            <div className="card-body p-4 p-md-5">
              <p className="text-uppercase fw-semibold small mb-2">Week 07 Demo Plan</p>
              <h1 className="display-6 fw-bold">Persona-First Design</h1>
              <p className="col-lg-8 mb-0">
                Use data-driven personas to redesign the doctor booking experience for specific user
                contexts instead of aiming for one generic interface.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <PersonaSelector />
        </div>
      </div>
    </main>
  );
}
