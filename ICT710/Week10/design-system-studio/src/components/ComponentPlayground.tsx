"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";

export function ComponentPlayground() {
  const [variant, setVariant] = useState<"primary" | "secondary" | "tertiary" | "danger">("primary");
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [loading, setLoading] = useState(false);

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4 p-md-5">
        <h2 className="h3 fw-bold mb-4">Button playground</h2>
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <label className="form-label">Variant</label>
            <select className="form-select" value={variant} onChange={(e) => setVariant(e.target.value as typeof variant)}>
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="tertiary">Tertiary</option>
              <option value="danger">Danger</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Size</label>
            <select className="form-select" value={size} onChange={(e) => setSize(e.target.value as typeof size)}>
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-wrap gap-3 align-items-center">
          <Button variant={variant} size={size} loading={loading} onClick={() => setLoading((v) => !v)}>
            Preview button
          </Button>
          <span className="text-muted small">Toggle loading by clicking the button.</span>
        </div>
      </div>
    </div>
  );
}
