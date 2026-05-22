"use client";

import { useEffect, useMemo, useState } from "react";

import { LabNav } from "@/components/LabNav";
import { MetricsDisplay } from "@/components/MetricsDisplay";
import { ObserverNotes } from "@/components/ObserverNotes";
import { TaskCard } from "@/components/TaskCard";
import {
  moderatorScript,
  nielsenHeuristics,
  observerNotes,
  recordingPlaceholders,
  sessionTasks,
} from "@/data/testingData";

function formatClock(date: Date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

export default function ConductPage() {
  const [taskIndex, setTaskIndex] = useState(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [durationSeconds, setDurationSeconds] = useState(0);
  const [status, setStatus] = useState("Idle");
  const [clicks, setClicks] = useState(0);
  const [errors, setErrors] = useState(0);
  const [path, setPath] = useState<string[]>([]);

  const currentTask = sessionTasks[taskIndex];
  const currentPathHints = currentTask.pathHint;

  useEffect(() => {
    if (!startTime || endTime) {
      return;
    }

    const interval = window.setInterval(() => {
      setDurationSeconds(Math.floor((Date.now() - startTime.getTime()) / 1000));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [startTime, endTime]);

  const resetForTask = (index: number) => {
    setTaskIndex(index);
    setStartTime(null);
    setEndTime(null);
    setDurationSeconds(0);
    setStatus("Idle");
    setClicks(0);
    setErrors(0);
    setPath([]);
  };

  const nextPathStep = useMemo(() => currentPathHints[path.length], [currentPathHints, path.length]);

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
              <div className="row g-4 mt-1">
                <div className="col-lg-7">
                  <div className="small text-danger fw-semibold mb-2">Moderator script</div>
                  <div className="d-grid gap-2">
                    {moderatorScript.map((line) => (
                      <div key={line} className="border rounded-4 p-3 bg-light">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="small text-danger fw-semibold mb-2">Task selector</div>
                  <div className="d-flex flex-wrap gap-2">
                    {sessionTasks.map((task, index) => (
                      <button
                        key={task.id}
                        type="button"
                        className={`btn ${index === taskIndex ? "btn-danger" : "btn-outline-danger"}`}
                        onClick={() => resetForTask(index)}
                      >
                        {task.title}
                      </button>
                    ))}
                  </div>
                  <div className="small text-muted mt-3">
                    The plan calls for one task at a time, so this simulator focuses the moderator on a single active scenario.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <TaskCard
            title={currentTask.title}
            scenario={currentTask.scenario}
            targetTime={currentTask.targetTime}
            status={status}
            onStart={() => {
              const now = new Date();
              setStartTime(now);
              setEndTime(null);
              setDurationSeconds(0);
              setStatus("Timing");
            }}
            onComplete={() => {
              const now = new Date();
              if (startTime) {
                setDurationSeconds(Math.floor((now.getTime() - startTime.getTime()) / 1000));
              }
              setEndTime(now);
              setStatus("Completed");
            }}
            onFail={() => {
              const now = new Date();
              if (startTime) {
                setDurationSeconds(Math.floor((now.getTime() - startTime.getTime()) / 1000));
              }
              setEndTime(now);
              setStatus("Failed");
            }}
            onClickCapture={() => setClicks((value) => value + 1)}
            onPathAdvance={() => {
              if (nextPathStep) {
                setPath((steps) => [...steps, nextPathStep]);
              }
            }}
            onErrorCapture={() => setErrors((value) => value + 1)}
          />
        </div>

        <div className="col-lg-6">
          <MetricsDisplay
            startTime={startTime ? formatClock(startTime) : null}
            endTime={endTime ? formatClock(endTime) : null}
            durationSeconds={durationSeconds}
            status={status}
            clicks={clicks}
            path={path}
            errors={errors}
          />
        </div>

        <div className="col-lg-7">
          <ObserverNotes heuristics={nielsenHeuristics} initialNotes={observerNotes} />
        </div>

        <div className="col-lg-5">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold mb-3">Video recording simulation</h2>
              <div className="d-grid gap-3">
                {recordingPlaceholders.map((item) => (
                  <div key={item} className="recording-placeholder">
                    <div className="small text-danger fw-semibold">Placeholder feed</div>
                    <div>{item}</div>
                  </div>
                ))}
              </div>
              <div className="small text-muted mt-3">
                In a live test this would be captured with Zoom, Loom, OBS, or a mobile camera setup.
              </div>
              <div className="border rounded-4 p-3 bg-light mt-4">
                <div className="small text-danger fw-semibold mb-2">Current task risks</div>
                <ul className="mb-0 ps-3">
                  {currentTask.knownErrors.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
