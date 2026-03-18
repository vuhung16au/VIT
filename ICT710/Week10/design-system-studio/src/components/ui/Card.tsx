import type { ReactNode } from "react";

type CardProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Card({ title, subtitle, children }: CardProps) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <h3 className="h5 fw-bold mb-1">{title}</h3>
        {subtitle ? <div className="text-muted small mb-3">{subtitle}</div> : null}
        {children}
      </div>
    </div>
  );
}
