import { SystemNav } from "@/components/SystemNav";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function FormsPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <SystemNav currentPath="/components/forms" />
        </div>
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">Form components</h1>
              <div className="row g-3 mt-1">
                <div className="col-md-6">
                  <label className="form-label">Full name</label>
                  <Input placeholder="Jordan Lee" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <Input placeholder="jordan@example.com" />
                </div>
                <div className="col-12">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows={4} placeholder="A system should support clear focus and error states." />
                </div>
              </div>
              <div className="mt-4 d-flex gap-2">
                <Button>Submit</Button>
                <Button variant="secondary">Cancel</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold">Guidelines</h2>
              <ul className="mb-0">
                <li>Labels above inputs for clarity.</li>
                <li>Use visible focus styling.</li>
                <li>Keep spacing on the token scale.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
