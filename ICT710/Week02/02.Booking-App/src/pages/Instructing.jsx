import { useMemo, useState } from 'react';

const commandHelp = [
  'help',
  'list doctors',
  'book appointment',
  'select doctor dr. smith',
];

function processCommand(cmd) {
  const lower = cmd.toLowerCase();

  if (lower.includes('book') || lower.includes('appointment')) {
    return '✓ Booking appointment... Type "list doctors" to see available doctors.';
  }
  if (lower.includes('list doctors')) {
    return '✓ Available: Dr. Smith (Cardiology), Dr. Jones (Pediatrics).';
  }
  if (lower.includes('select doctor')) {
    return '✓ Doctor selected. Type "book appointment" to continue.';
  }
  if (lower.includes('help')) {
    return `Commands: ${commandHelp.join(', ')}`;
  }
  return '✗ Unknown command. Type "help" for commands.';
}

export default function Instructing() {
  const [commands, setCommands] = useState(['HealthCare+ CLI v1.0']);
  const [input, setInput] = useState('');

  const hints = useMemo(() => commandHelp.join(' • '), []);

  const handleCommand = () => {
    if (!input.trim()) return;
    setCommands((current) => [...current, `> ${input}`, processCommand(input)]);
    setInput('');
  };

  return (
    <div className="min-h-screen rounded-[2rem] bg-black px-4 py-12 font-mono text-green-400">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-3xl text-white">INSTRUCTING: Command Line Interface</h1>
        <p className="mb-6 text-green-500">
          Type a command to book an appointment. Try {hints}.
        </p>

        <div className="mb-4 h-72 overflow-y-auto rounded-2xl bg-gray-900 p-5 shadow-2xl shadow-black/30">
          {commands.map((cmd, index) => (
            <p key={`${cmd}-${index}`} className="mb-2 break-words">
              {cmd}
            </p>
          ))}
        </div>

        <div className="flex items-center rounded-xl border border-green-700 bg-gray-950 px-4 py-3">
          <span className="mr-3">$</span>
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => event.key === 'Enter' && handleCommand()}
            className="flex-1 bg-transparent text-green-300 placeholder:text-green-700 focus:outline-none"
            placeholder="Type command..."
            autoFocus
          />
          <button
            type="button"
            onClick={handleCommand}
            className="rounded-lg border border-green-600 px-4 py-2 text-sm font-semibold text-green-200 transition-colors hover:bg-green-600/10"
          >
            Run
          </button>
        </div>

        <div className="mt-8 rounded-2xl bg-gray-900 p-5 text-sm text-green-500">
          <h2 className="mb-3 font-bold text-green-300">Characteristics</h2>
          <ul className="ml-5 list-disc space-y-2">
            <li>Efficient for expert users</li>
            <li>Requires learning commands</li>
            <li>Precise but less beginner-friendly</li>
            <li>Minimal visual guidance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
