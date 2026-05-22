"use client";

import { useState } from "react";

export function InviteButton() {
  const [sent, setSent] = useState(false);

  return (
    <button type="button" className="btn btn-danger" onClick={() => setSent(true)}>
      {sent ? "Invites queued" : "Send automated invites"}
    </button>
  );
}
