import { useMemo, useState } from 'react';

function getBotResponse(userInput, time) {
  const lower = userInput.toLowerCase();

  if (lower.includes('book') || lower.includes('appointment')) {
    return {
      text: 'Great. What specialty do you need: Cardiology, Pediatrics, or Dermatology?',
      sender: 'bot',
      time,
    };
  }
  if (lower.includes('cardio')) {
    return {
      text: 'Dr. Sarah Smith is available. Would you like Monday at 2 PM or Wednesday at 10 AM?',
      sender: 'bot',
      time,
    };
  }
  if (lower.includes('monday')) {
    return {
      text: '✓ Booked. Dr. Smith on Monday at 2 PM. Confirmation sent to your email.',
      sender: 'bot',
      time,
    };
  }
  return {
    text: 'I can help you book appointments. Say "book appointment" to get started.',
    sender: 'bot',
    time,
  };
}

export default function Conversing() {
  const [messages, setMessages] = useState([
    {
      text: "Hi. I'm your HealthCare+ assistant. How can I help you today?",
      sender: 'bot',
      time: '10:00 AM',
    },
  ]);
  const [input, setInput] = useState('');

  const quickPrompts = useMemo(
    () => ['book appointment', 'cardiology', 'Monday at 2 PM'],
    [],
  );

  const handleSend = (messageText = input) => {
    if (!messageText.trim()) return;

    const now = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const userMsg = { text: messageText, sender: 'user', time: now };
    setMessages((current) => [...current, userMsg, getBotResponse(messageText, now)]);
    setInput('');
  };

  return (
    <div className="min-h-screen rounded-[2rem] bg-gradient-to-br from-green-50 via-white to-blue-50 px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
          CONVERSING: Chatbot Interface
        </h1>

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="h-96 space-y-4 overflow-y-auto p-6">
            {messages.map((msg, index) => (
              <div
                key={`${msg.time}-${index}`}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs rounded-2xl px-4 py-3 ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p>{msg.text}</p>
                  <p
                    className={`mt-1 text-xs ${
                      msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handleSend(prompt)}
                  className="rounded-full bg-green-100 px-3 py-1.5 text-sm font-medium text-green-800 transition-colors hover:bg-green-200"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => event.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              />
              <button
                type="button"
                onClick={() => handleSend()}
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-5 text-sm shadow-md">
          <h2 className="mb-2 font-bold text-gray-900">Characteristics</h2>
          <ul className="ml-5 list-disc space-y-2 text-gray-700">
            <li>Natural language feels conversational</li>
            <li>Flexible input with guided replies</li>
            <li>Good for simple tasks and support flows</li>
            <li>Can become slower if the task is complex</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
