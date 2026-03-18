import { ColorSwatch } from "@/components/ColorSwatch";
import { SystemNav } from "@/components/SystemNav";
import { neutralPalette, primaryPalette, semanticColors } from "@/lib/designTokens";

export default function ColorsPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <SystemNav currentPath="/foundations/colors" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">Color system</h1>
              <p className="text-muted mb-0">Primary palette, semantic meaning, and accessibility guidance.</p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <h2 className="h3 fw-bold">Primary palette</h2>
        </div>
        {primaryPalette.map(([name, hex]) => (
          <div key={name} className="col-6 col-md-4 col-lg-3">
            <ColorSwatch name={`Primary ${name}`} hex={hex} detail="Brand palette" />
          </div>
        ))}
        <div className="col-12 pt-3">
          <h2 className="h3 fw-bold">Semantic colors</h2>
        </div>
        {semanticColors.map((color) => (
          <div key={color.name} className="col-md-6 col-lg-3">
            <ColorSwatch name={color.name} hex={color.hex} detail={`${color.use} • Contrast ${color.contrast}`} />
          </div>
        ))}
        <div className="col-12 pt-3">
          <h2 className="h3 fw-bold">Neutral palette</h2>
        </div>
        {neutralPalette.map(([name, hex]) => (
          <div key={name} className="col-6 col-md-4 col-lg-3">
            <ColorSwatch name={`Gray ${name}`} hex={hex} detail="Text, surfaces, and borders" />
          </div>
        ))}
      </div>
    </main>
  );
}
