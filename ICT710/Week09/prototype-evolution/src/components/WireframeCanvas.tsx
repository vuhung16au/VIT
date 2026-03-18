import "@/styles/wireframe.css";

export function WireframeCanvas() {
  return (
    <div className="wireframe-layout rounded-4 p-4">
      <div className="wireframe-header mb-4">
        <div className="wireframe-bar w-25" />
        <div className="wireframe-bar w-50 mt-2" />
      </div>
      <div className="row g-4">
        <div className="col-lg-7">
          <div className="wireframe-panel p-4 h-100">
            <div className="wireframe-box mb-3" />
            <div className="wireframe-card mb-3" />
            <div className="wireframe-card mb-3" />
            <div className="wireframe-card" />
          </div>
        </div>
        <div className="col-lg-5">
          <div className="wireframe-panel p-4 h-100">
            <div className="wireframe-field mb-3" />
            <div className="wireframe-field mb-3" />
            <div className="wireframe-field mb-3" />
            <div className="wireframe-button" />
          </div>
        </div>
      </div>
    </div>
  );
}
