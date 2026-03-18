type FeedbackAnnotationsProps = {
  notes: string[];
};

export function FeedbackAnnotations({ notes }: FeedbackAnnotationsProps) {
  return (
    <div className="row g-3">
      {notes.map((note, index) => (
        <div key={note} className="col-md-4">
          <div
            className="rounded-4 p-3 shadow-sm h-100"
            style={{
              backgroundColor: index % 3 === 0 ? "#fff3cd" : index % 3 === 1 ? "#d1ecf1" : "#f8d7da",
            }}
          >
            <div className="small text-uppercase fw-semibold mb-2">Feedback note</div>
            <div>{note}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
