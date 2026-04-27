"use client";

import { useState } from "react";

import type { UseCase } from "@/types/requirements";

type UseCaseDiagramProps = {
  useCases: UseCase[];
};

export function UseCaseDiagram({ useCases }: UseCaseDiagramProps) {
  const [selected, setSelected] = useState<UseCase>(useCases[0]);

  return (
    <div className="row g-4">
      <div className="col-lg-5">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body p-4">
            <h2 className="h5 fw-bold mb-3">Actors and use cases</h2>
            <div className="d-grid gap-3">
              {useCases.map((useCase) => (
                <button
                  key={useCase.id}
                  type="button"
                  className={`btn text-start rounded-4 p-3 ${
                    selected.id === useCase.id ? "btn-success" : "btn-outline-success"
                  }`}
                  onClick={() => setSelected(useCase)}
                >
                  <div className="small opacity-75">{useCase.actor}</div>
                  <div className="fw-semibold">{useCase.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-7">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
              <div>
                <div className="small text-success fw-semibold">{selected.id}</div>
                <h2 className="h4 fw-bold mb-0">{selected.name}</h2>
              </div>
              <span className="badge text-bg-light">{selected.actor}</span>
            </div>
            <p className="text-muted">{selected.summary}</p>

            {selected.includes && (
              <>
                <div className="small text-muted mb-1">Includes</div>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {selected.includes.map((item) => (
                    <span key={item} className="badge text-bg-success">
                      {item}
                    </span>
                  ))}
                </div>
              </>
            )}

            {selected.extends && (
              <>
                <div className="small text-muted mb-1">Extends</div>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {selected.extends.map((item) => (
                    <span key={item} className="badge text-bg-secondary">
                      {item}
                    </span>
                  ))}
                </div>
              </>
            )}

            {selected.preconditions && selected.preconditions.length > 0 && (
              <>
                <div className="small text-muted mb-1">Preconditions</div>
                <ul className="mb-3">
                  {selected.preconditions.map((item) => (
                    <li key={item} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="small text-muted mb-1">Main flow</div>
            <ol className="mb-3">
              {selected.mainFlow.map((step) => (
                <li key={step} className="mb-2">
                  {step}
                </li>
              ))}
            </ol>

            {selected.alternatives && selected.alternatives.length > 0 && (
              <>
                <div className="small text-muted mb-1">Alternative flows</div>
                <ul className="mb-3">
                  {selected.alternatives.map((item) => (
                    <li key={item} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {selected.postconditions && selected.postconditions.length > 0 && (
              <>
                <div className="small text-muted mb-1">Postconditions</div>
                <ul className="mb-0">
                  {selected.postconditions.map((item) => (
                    <li key={item} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
