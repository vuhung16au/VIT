"use client";

import { useMemo, useState } from "react";

import { iconCategories } from "@/lib/designTokens";

function glyphFor(name: string) {
  const map: Record<string, string> = {
    Plus: "+",
    Edit: "P",
    Delete: "x",
    Share: "^",
    Download: "v",
    "Arrow Right": ">",
    "Arrow Left": "<",
    Menu: "=",
    Search: "?",
    Home: "H",
    Heart: "o",
    Message: "~",
    Users: "U",
    Bell: "!",
    Bookmark: "B",
    Check: "C",
    Warning: "!",
    Info: "i",
    Error: "x",
    Clock: "t",
  };
  return map[name] ?? "*";
}

export function IconGrid() {
  const [query, setQuery] = useState("");
  const entries = useMemo(
    () =>
      Object.entries(iconCategories).flatMap(([category, icons]) =>
        icons.map((name) => ({ category, name })),
      ),
    [],
  );

  const filtered = entries.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4 p-md-5">
        <div className="d-flex justify-content-between align-items-center gap-3 mb-4">
          <h2 className="h3 fw-bold mb-0">Icon library</h2>
          <input
            className="form-control"
            style={{ maxWidth: "260px" }}
            placeholder="Search icons"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="row g-3">
          {filtered.map((item) => (
            <div key={`${item.category}-${item.name}`} className="col-6 col-md-4 col-lg-3">
              <div className="border rounded-4 p-3 h-100 bg-light text-center">
                <div className="display-6 fw-bold">{glyphFor(item.name)}</div>
                <div className="fw-semibold">{item.name}</div>
                <div className="small text-muted">{item.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
