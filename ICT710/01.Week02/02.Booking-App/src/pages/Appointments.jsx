import { useState, useEffect } from 'react';

export default function Appointments() {
  const [email, setEmail] = useState('');
  const [submitEmail, setSubmitEmail] = useState('');
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!submitEmail) {
      setList([]);
      return;
    }
    setLoading(true);
    fetch(`/api/appointments?email=${encodeURIComponent(submitEmail)}`)
      .then((res) => res.json())
      .then((data) => setList(Array.isArray(data) ? data : []))
      .catch(() => setList([]))
      .finally(() => setLoading(false));
  }, [submitEmail]);

  const handleCancel = async (id) => {
    if (!confirm('Cancel this appointment?')) return;
    const res = await fetch(`/api/appointments/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'cancelled' }),
    });
    if (res.ok) setSubmitEmail((e) => e);
  };

  const upcoming = list.filter((a) => a.status === 'scheduled' && new Date(a.date) >= new Date());
  const past = list.filter((a) => a.status !== 'scheduled' || new Date(a.date) < new Date());

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">My appointments</h1>
      <p className="text-gray-600 mb-4">Enter your email to view and manage appointments.</p>
      <div className="flex gap-2 mb-6">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 border rounded-lg px-3 py-2 min-h-touch"
        />
        <button
          type="button"
          onClick={() => setSubmitEmail(email.trim())}
          className="min-h-touch px-4 rounded-lg bg-primary-600 text-white font-medium"
        >
          View
        </button>
      </div>

      {loading && <p className="text-gray-500">Loading…</p>}

      {!loading && submitEmail && (
        <>
          <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Upcoming</h2>
          {upcoming.length === 0 ? (
            <p className="text-gray-500">No upcoming appointments.</p>
          ) : (
            <ul className="space-y-3 mb-6">
              {upcoming.map((a) => (
                <li
                  key={a._id}
                  className="border rounded-lg p-4 bg-white flex flex-wrap items-center justify-between gap-2"
                >
                  <div>
                    <p className="font-medium">{a.doctorId?.name ?? 'Doctor'}</p>
                    <p className="text-sm text-gray-600">{a.reason}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(a.date).toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'short' })}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-sm text-primary-600 font-medium">Join video</span>
                    <button
                      type="button"
                      onClick={() => handleCancel(a._id)}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Cancel
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Past</h2>
          {past.length === 0 ? (
            <p className="text-gray-500">No past appointments.</p>
          ) : (
            <ul className="space-y-3">
              {past.map((a) => (
                <li key={a._id} className="border rounded-lg p-4 bg-gray-50">
                  <p className="font-medium">{a.doctorId?.name ?? 'Doctor'}</p>
                  <p className="text-sm text-gray-600">{a.reason}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(a.date).toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'short' })} — {a.status}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
