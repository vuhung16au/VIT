import { AnalyticsChart } from "@/components/AnalyticsChart";
import { EvaluationNav } from "@/components/EvaluationNav";
import {
  analyticsInsights,
  funnelData,
  heatmapInsights,
  heatmapPoints,
  metrics,
  performanceMetrics,
} from "@/data/analyticsData";

export default function AnalyticsPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <EvaluationNav currentPath="/analytics" />
        </div>

        {metrics.map((metric) => (
          <div key={metric.label} className="col-md-6 col-xl-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="small text-success fw-semibold">{metric.label}</div>
                <div className="display-6 fw-bold">{metric.value}</div>
                <div className="small text-muted">{metric.note}</div>
              </div>
            </div>
          </div>
        ))}

        <div className="col-lg-7">
          <AnalyticsChart items={funnelData} />
        </div>

        <div className="col-lg-5">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4 p-md-5">
              <h2 className="h4 fw-bold mb-3">Heatmap overlay</h2>
              <p className="text-muted small mb-3">
                Simulated click concentration shows attention clustering near specialty search while advanced filters remain under-used.
              </p>
              <div className="heatmap-canvas">
                {heatmapPoints.map((point) => (
                  <div
                    key={point.id}
                    className="heatmap-point"
                    style={{
                      left: `${point.x}%`,
                      top: `${point.y}%`,
                      opacity: Math.max(point.intensity, 0.2),
                      width: `${44 + point.intensity * 36}px`,
                      height: `${44 + point.intensity * 36}px`,
                    }}
                    title={point.label}
                  />
                ))}
                <div className="heatmap-label">Homepage and booking UI mock area</div>
              </div>
              <ul className="mb-0 mt-3">
                {heatmapInsights.map((item) => (
                  <li key={item.area} className="mb-2">
                    <strong>{item.area}:</strong> {item.clicks}% clicks. {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4 p-md-5">
              <h2 className="h4 fw-bold mb-4">Time-on-task and error metrics</h2>
              <div className="d-grid gap-4">
                {performanceMetrics.map((metric) => {
                  const width = Math.min((metric.value / metric.benchmark) * 55, 100);
                  return (
                    <div key={metric.label}>
                      <div className="d-flex justify-content-between small mb-1">
                        <span>{metric.label}</span>
                        <span>
                          {metric.value} {metric.unit} vs benchmark {metric.benchmark} {metric.unit}
                        </span>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-primary" style={{ width: `${width}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4 p-md-5">
              <h2 className="h4 fw-bold mb-3">Insights and recommendations</h2>
              <div className="d-grid gap-3">
                {analyticsInsights.map((insight) => (
                  <div key={insight} className="border rounded-4 p-3 bg-light">
                    {insight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
