import Link from "next/link";

import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";
import { BootstrapNav } from "@/components/BootstrapNav";

export default function AnalyticsPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <BootstrapNav currentPath="/admin/analytics" />
        </div>
        <div className="col-12">
          <AnalyticsDashboard />
        </div>
        <div className="col-12">
          <Link href="/admin/insights" className="btn btn-primary">
            Continue to triangulated insights
          </Link>
        </div>
      </div>
    </main>
  );
}
