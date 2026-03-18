type SlotSelectorProps = {
  selectedSlot: string;
  onSelect: (slot: string) => void;
};

const slots = ["Tuesday 10:00 AM", "Tuesday 2:00 PM", "Wednesday 11:30 AM", "Thursday 3:00 PM"];

export function SlotSelector({ selectedSlot, onSelect }: SlotSelectorProps) {
  return (
    <div>
      <div className="small text-uppercase fw-semibold text-primary mb-3">Choose a time slot</div>
      <div className="row g-3">
        {slots.map((slot) => (
          <div key={slot} className="col-md-6">
            <button
              type="button"
              className={`btn w-100 text-start rounded-4 p-3 slot-button ${
                selectedSlot === slot ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => onSelect(slot)}
            >
              <div className="fw-semibold">{slot}</div>
              <div className={`small ${selectedSlot === slot ? "text-white-50" : "text-muted"}`}>
                Visible choices reduce memory load for new users.
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
