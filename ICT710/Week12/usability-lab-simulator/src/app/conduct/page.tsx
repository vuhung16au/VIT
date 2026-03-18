import { LabNav } from "@/components/LabNav";
import { ObserverNotes } from "@/components/ObserverNotes";
import { TaskCard } from "@/components/TaskCard";
import { observerNotes, sessionTasks } from "@/data/testingData";

export default function ConductPage() {
  return (
    <main className="container py-4 py-md-5">
      <div className="row g-4">
        <div className="col-12">
          <LabNav currentPath="/conduct" />
        </div>
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold">Session moderation interface</h1>
              <p className="text-muted mb-0">
                &quot;We&apos;re testing the interface, not you. Please think aloud as you work through the tasks.&quot;
              </p>
            </div>
          </div>
        </div>
        {sessionTasks.map((task) => (
          <div key={task.title} className="col-lg-4">
            <TaskCard title={task.title} scenario={task.scenario} />
          </div>
        ))}
        <div className="col-lg-7">
          <ObserverNotes />
        </div>
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold mb-3">Example observations</h2>
              <ul className="mb-0">
                {observerNotes.map((note) => (
                  <li key={note} className="mb-2">{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
