# Week 02 Demo Plan: Problem Space and Conceptualization

## Week Overview

Week 02 focuses on understanding the problem space before jumping into solutions. Students learn to ask the right questions (Who? What? When? Where? Why?), explore different interaction types (instructing, conversing, manipulating, exploring), and create their first conceptual design for the doctor booking app.

## Learning Objectives

- Apply the 5W framework to understand problem space
- Identify and compare different interaction types
- Create conceptual models before coding
- Design user flows for healthcare booking scenarios
- Understand the difference between conceptual design and physical design
- Practice "think first, code later" approach

## Demo 1: Exploring Interaction Types (25 mins)

### Objective

Build four mini-apps demonstrating different interaction types: Instructing, Conversing, Manipulating, and Exploring. Students see how the same task (booking a doctor) can have wildly different interaction patterns.

### Prerequisites

- Completed Week 01
- Doctor booking project from Week 01
- Basic understanding of IxD principles

### Implementation Steps

1. **Create Interaction Types Showcase** (3 mins)
   - In `doctor-booking` project from Week 01
   - Create `app/interaction-types/page.tsx`:
     ```tsx
     export default function InteractionTypes() {
       return (
         <div className="min-h-screen bg-gray-50 py-12 px-4">
           <div className="max-w-6xl mx-auto">
             <h1 className="text-4xl font-bold text-center mb-4">
               Four Ways to Book a Doctor
             </h1>
             <p className="text-center text-gray-600 mb-12">
               Same task, different interaction types
             </p>

             <div className="grid md:grid-cols-2 gap-8">
               {/* Links to each type */}
               <TypeCard 
                 type="Instructing"
                 description="Command-based interaction (CLI style)"
                 href="/interaction-types/instructing"
                 color="blue"
               />
               <TypeCard 
                 type="Conversing"
                 description="Natural language chatbot"
                 href="/interaction-types/conversing"
                 color="green"
               />
               <TypeCard 
                 type="Manipulating"
                 description="Direct manipulation (drag & drop calendar)"
                 href="/interaction-types/manipulating"
                 color="purple"
               />
               <TypeCard 
                 type="Exploring"
                 description="Browse and discover doctors"
                 href="/interaction-types/exploring"
                 color="orange"
               />
             </div>
           </div>
         </div>
       );
     }

     function TypeCard({ type, description, href, color }: {
       type: string;
       description: string;
       href: string;
       color: string;
     }) {
       const colorClasses = {
         blue: 'border-blue-500 hover:bg-blue-50',
         green: 'border-green-500 hover:bg-green-50',
         purple: 'border-purple-500 hover:bg-purple-50',
         orange: 'border-orange-500 hover:bg-orange-50'
       };

       return (
         <a href={href} 
            className={`block p-6 bg-white rounded-xl border-l-4 ${colorClasses[color as keyof typeof colorClasses]} 
                        shadow-md hover:shadow-lg transition-all`}>
           <h2 className="text-2xl font-bold mb-2">{type}</h2>
           <p className="text-gray-600">{description}</p>
         </a>
       );
     }
     ```

2. **Type 1: Instructing (Command-Based)** (5 mins)
   - Create `app/interaction-types/instructing/page.tsx`:
     ```tsx
     'use client';
     import { useState } from 'react';

     export default function Instructing() {
       const [commands, setCommands] = useState<string[]>([]);
       const [input, setInput] = useState('');

       const handleCommand = (cmd: string) => {
         setCommands([...commands, `> ${cmd}`, processCommand(cmd)]);
         setInput('');
       };

       const processCommand = (cmd: string) => {
         const lower = cmd.toLowerCase();
         
         if (lower.includes('book') || lower.includes('appointment')) {
           return '✓ Booking appointment... Type "list doctors" to see available doctors.';
         } else if (lower.includes('list doctors')) {
           return '✓ Available: Dr. Smith (Cardiology), Dr. Jones (Pediatrics)';
         } else if (lower.includes('help')) {
           return 'Commands: book appointment, list doctors, select doctor [name]';
         } else {
           return '✗ Unknown command. Type "help" for commands.';
         }
       };

       return (
         <div className="min-h-screen bg-black text-green-400 font-mono p-8">
           <div className="max-w-4xl mx-auto">
             <h1 className="text-2xl mb-4">INSTRUCTING: Command Line Interface</h1>
             <p className="mb-6 text-green-500">
               Type commands to book appointment (try: "help", "list doctors", "book appointment")
             </p>

             {/* Terminal Output */}
             <div className="bg-gray-900 p-4 rounded-lg mb-4 h-64 overflow-y-auto">
               <p className="mb-2">HealthCare+ CLI v1.0</p>
               {commands.map((cmd, i) => (
                 <p key={i} className="mb-1">{cmd}</p>
               ))}
             </div>

             {/* Command Input */}
             <div className="flex">
               <span className="mr-2">$</span>
               <input 
                 type="text"
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 onKeyDown={(e) => e.key === 'Enter' && handleCommand(input)}
                 className="flex-1 bg-transparent border-none outline-none"
                 placeholder="Type command..."
                 autoFocus
               />
             </div>

             <div className="mt-8 text-sm">
               <h3 className="font-bold mb-2">Characteristics:</h3>
               <ul className="list-disc ml-6 space-y-1 text-green-500">
                 <li>Efficient for expert users</li>
                 <li>Requires learning commands</li>
                 <li>Precise but not beginner-friendly</li>
                 <li>No visual guidance</li>
               </ul>
             </div>
           </div>
         </div>
       );
     }
     ```

3. **Type 2: Conversing (Chatbot)** (5 mins)
   - Create `app/interaction-types/conversing/page.tsx`:
     ```tsx
     'use client';
     import { useState } from 'react';

     type Message = {
       text: string;
       sender: 'user' | 'bot';
       time: string;
     };

     export default function Conversing() {
       const [messages, setMessages] = useState<Message[]>([
         { text: 'Hi! I\'m your HealthCare+ assistant. How can I help you today?', sender: 'bot', time: '10:00 AM' }
       ]);
       const [input, setInput] = useState('');

       const handleSend = () => {
         if (!input.trim()) return;

         const now = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
         const userMsg: Message = { text: input, sender: 'user', time: now };
         setMessages([...messages, userMsg, getBotResponse(input, now)]);
         setInput('');
       };

       const getBotResponse = (userInput: string, time: string): Message => {
         const lower = userInput.toLowerCase();
         
         if (lower.includes('book') || lower.includes('appointment')) {
           return { text: 'Great! What specialty do you need? Cardiology, Pediatrics, or Dermatology?', sender: 'bot', time };
         } else if (lower.includes('cardio')) {
           return { text: 'Dr. Sarah Smith is available. Would you like Monday at 2 PM or Wednesday at 10 AM?', sender: 'bot', time };
         } else if (lower.includes('monday')) {
           return { text: '✓ Booked! Dr. Smith on Monday at 2 PM. Confirmation sent to your email.', sender: 'bot', time };
         } else {
           return { text: 'I can help you book appointments! Just say "book appointment" to get started.', sender: 'bot', time };
         }
       };

       return (
         <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
           <div className="max-w-2xl mx-auto">
             <h1 className="text-3xl font-bold text-center mb-8">
               CONVERSING: Chatbot Interface
             </h1>

             {/* Chat Window */}
             <div className="bg-white rounded-xl shadow-lg overflow-hidden">
               {/* Messages */}
               <div className="h-96 overflow-y-auto p-6 space-y-4">
                 {messages.map((msg, i) => (
                   <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                     <div className={`max-w-xs px-4 py-2 rounded-lg ${
                       msg.sender === 'user' 
                         ? 'bg-blue-600 text-white' 
                         : 'bg-gray-200 text-gray-800'
                     }`}>
                       <p>{msg.text}</p>
                       <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-blue-200' : 'text-gray-500'}`}>
                         {msg.time}
                       </p>
                     </div>
                   </div>
                 ))}
               </div>

               {/* Input */}
               <div className="border-t p-4 flex gap-2">
                 <input 
                   type="text"
                   value={input}
                   onChange={(e) => setInput(e.target.value)}
                   onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                   placeholder="Type your message..."
                   className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                 />
                 <button 
                   onClick={handleSend}
                   className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                 >
                   Send
                 </button>
               </div>
             </div>

             <div className="mt-6 text-sm bg-white p-4 rounded-lg">
               <h3 className="font-bold mb-2">Characteristics:</h3>
               <ul className="list-disc ml-6 space-y-1 text-gray-700">
                 <li>Natural language (feels like talking to a human)</li>
                 <li>Flexible input (many ways to ask)</li>
                 <li>Guided conversation flow</li>
                 <li>Good for simple tasks, can be frustrating for complex ones</li>
               </ul>
             </div>
           </div>
         </div>
       );
     }
     ```

4. **Type 3: Manipulating (Drag & Drop Calendar)** (6 mins)
   - Create `app/interaction-types/manipulating/page.tsx`:
     ```tsx
     'use client';
     import { useState } from 'react';

     type Slot = {
       id: string;
       doctor: string;
       time: string;
       available: boolean;
     };

     export default function Manipulating() {
       const [slots, setSlots] = useState<Slot[]>([
         { id: '1', doctor: 'Dr. Smith', time: 'Mon 2 PM', available: true },
         { id: '2', doctor: 'Dr. Smith', time: 'Mon 3 PM', available: true },
         { id: '3', doctor: 'Dr. Jones', time: 'Tue 10 AM', available: true },
         { id: '4', doctor: 'Dr. Jones', time: 'Tue 11 AM', available: true },
       ]);
       const [booked, setBooked] = useState<Slot | null>(null);

       const handleBook = (slot: Slot) => {
         setBooked(slot);
         setSlots(slots.map(s => s.id === slot.id ? { ...s, available: false } : s));
       };

       return (
         <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
           <div className="max-w-4xl mx-auto">
             <h1 className="text-3xl font-bold text-center mb-8">
               MANIPULATING: Direct Manipulation Calendar
             </h1>

             {booked && (
               <div className="bg-green-100 border border-green-400 p-4 rounded-lg mb-6">
                 <p className="text-green-800">
                   ✓ Booked: {booked.doctor} on {booked.time}
                 </p>
               </div>
             )}

             {/* Calendar Grid */}
             <div className="bg-white rounded-xl shadow-lg p-8">
               <div className="grid grid-cols-2 gap-6">
                 {['Dr. Smith', 'Dr. Jones'].map(doctor => (
                   <div key={doctor}>
                     <h3 className="font-bold text-lg mb-4">{doctor}</h3>
                     <div className="space-y-3">
                       {slots
                         .filter(s => s.doctor === doctor)
                         .map(slot => (
                           <button
                             key={slot.id}
                             onClick={() => slot.available && handleBook(slot)}
                             disabled={!slot.available}
                             className={`w-full p-4 rounded-lg border-2 transition-all ${
                               slot.available
                                 ? 'border-purple-300 hover:border-purple-600 hover:shadow-lg cursor-pointer hover:scale-105'
                                 : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                             }`}
                           >
                             <p className="font-semibold">{slot.time}</p>
                             <p className="text-sm">{slot.available ? 'Available' : 'Booked'}</p>
                           </button>
                         ))}
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             <div className="mt-6 text-sm bg-white p-4 rounded-lg">
               <h3 className="font-bold mb-2">Characteristics:</h3>
               <ul className="list-disc ml-6 space-y-1 text-gray-700">
                 <li>Visual representation of data (calendar)</li>
                 <li>Direct manipulation (click to book)</li>
                 <li>Immediate feedback (slot becomes unavailable)</li>
                 <li>What You See Is What You Get (WYSIWYG)</li>
               </ul>
             </div>
           </div>
         </div>
       );
     }
     ```

5. **Type 4: Exploring (Browse & Discover)** (6 mins)
   - Create `app/interaction-types/exploring/page.tsx`:
     ```tsx
     'use client';
     import { useState } from 'react';

     type Doctor = {
       id: string;
       name: string;
       specialty: string;
       rating: number;
       image: string;
       bio: string;
     };

     const doctors: Doctor[] = [
       { id: '1', name: 'Dr. Sarah Smith', specialty: 'Cardiology', rating: 4.8, image: '👩‍⚕️', bio: '15 years experience in heart health' },
       { id: '2', name: 'Dr. Mike Jones', specialty: 'Pediatrics', rating: 4.9, image: '👨‍⚕️', bio: 'Specialized in child development' },
       { id: '3', name: 'Dr. Lisa Chen', specialty: 'Dermatology', rating: 4.7, image: '👩‍⚕️', bio: 'Expert in skin conditions' },
     ];

     export default function Exploring() {
       const [selected, setSelected] = useState<Doctor | null>(null);

       return (
         <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-12 px-4">
           <div className="max-w-6xl mx-auto">
             <h1 className="text-3xl font-bold text-center mb-8">
               EXPLORING: Browse & Discover Doctors
             </h1>

             <div className="grid md:grid-cols-3 gap-6">
               {doctors.map(doctor => (
                 <div 
                   key={doctor.id}
                   onClick={() => setSelected(doctor)}
                   className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl 
                              transition-all cursor-pointer hover:scale-105"
                 >
                   <div className="text-6xl text-center mb-4">{doctor.image}</div>
                   <h3 className="text-xl font-bold text-center mb-2">{doctor.name}</h3>
                   <p className="text-center text-gray-600 mb-2">{doctor.specialty}</p>
                   <div className="flex justify-center items-center gap-1 mb-3">
                     <span className="text-yellow-500">★</span>
                     <span className="font-semibold">{doctor.rating}</span>
                   </div>
                   <p className="text-sm text-gray-600 text-center">{doctor.bio}</p>
                 </div>
               ))}
             </div>

             {selected && (
               <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                 <div className="bg-white rounded-xl p-8 max-w-md">
                   <h2 className="text-2xl font-bold mb-4">{selected.name}</h2>
                   <p className="text-lg mb-2">{selected.specialty}</p>
                   <p className="text-gray-600 mb-6">{selected.bio}</p>
                   <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700">
                     Book Appointment
                   </button>
                   <button 
                     onClick={() => setSelected(null)}
                     className="w-full mt-2 text-gray-600 hover:text-gray-800"
                   >
                     Close
                   </button>
                 </div>
               </div>
             )}

             <div className="mt-6 text-sm bg-white p-4 rounded-lg">
               <h3 className="font-bold mb-2">Characteristics:</h3>
               <ul className="list-disc ml-6 space-y-1 text-gray-700">
                 <li>Browse without specific goal</li>
                 <li>Rich visual information (photos, ratings)</li>
                 <li>Discovery-oriented (you might find someone unexpected)</li>
                 <li>Good for exploratory tasks, overwhelming if you know exactly what you want</li>
               </ul>
             </div>
           </div>
         </div>
       );
     }
     ```

### Key Teaching Points

1. **Same Task, Different Interactions**:
   - All four interfaces book a doctor
   - Each suits different users and contexts
   - No single "best" interaction type

2. **Interaction Type Characteristics**:
   - **Instructing**: Fast for experts, steep learning curve
   - **Conversing**: Natural, but can be slower
   - **Manipulating**: Visual, intuitive, limited by screen real estate
   - **Exploring**: Discovery-focused, can be overwhelming

3. **Choosing the Right Type**:
   - Consider user expertise
   - Consider task complexity
   - Consider context (mobile vs desktop)

## Demo 2: Problem Space Analysis with 5W Framework (20 mins)

### Objective

Apply the 5W questions (Who? What? When? Where? Why?) to analyze the doctor booking problem space BEFORE designing the solution.

### Implementation Steps

1. **Create Problem Space Worksheet** (5 mins)
   - Create `app/problem-space/page.tsx`:
     ```tsx
     'use client';
     import { useState } from 'react';

     type Answer = {
       who: string;
       what: string;
       when: string;
       where: string;
       why: string;
     };

     export default function ProblemSpace() {
       const [answers, setAnswers] = useState<Answer>({
         who: '',
         what: '',
         when: '',
         where: '',
         why: ''
       });

       const questions = [
         { id: 'who', q: 'Who are the users?', placeholder: 'Patients (age 18-70), different tech literacy levels' },
         { id: 'what', q: 'What are they trying to do?', placeholder: 'Book doctor appointments quickly and easily' },
         { id: 'when', q: 'When do they use this?', placeholder: 'Need urgent care OR routine checkup' },
         { id: 'where', q: 'Where are they using this?', placeholder: 'Mobile (70%), desktop (30%)' },
         { id: 'why', q: 'Why do they need this?', placeholder: 'Current system: phone calls, long wait times' }
       ];

       return (
         <div className="min-h-screen bg-gray-50 py-12 px-4">
           <div className="max-w-4xl mx-auto">
             <h1 className="text-4xl font-bold mb-4">Problem Space Analysis</h1>
             <p className="text-gray-600 mb-8">
               Answer the 5W questions before designing the solution
             </p>

             <div className="space-y-6">
               {questions.map((q) => (
                 <div key={q.id} className="bg-white p-6 rounded-xl shadow-md">
                   <label className="block font-bold text-lg mb-3">{q.q}</label>
                   <textarea
                     value={answers[q.id as keyof Answer]}
                     onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                     placeholder={q.placeholder}
                     rows={3}
                     className="w-full px-4 py-3 border rounded-lg 
                                focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                   />
                 </div>
               ))}
             </div>

             {/* Analysis Summary */}
             {Object.values(answers).every(a => a.length > 0) && (
               <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-xl">
                 <h3 className="font-bold text-xl mb-4">✓ Problem Space Defined</h3>
                 <p className="text-gray-700 mb-4">
                   Based on your analysis, here are key design implications:
                 </p>
                 <ul className="list-disc ml-6 space-y-2 text-gray-700">
                   <li><strong>Mobile-first design</strong> (70% mobile users)</li>
                   <li><strong>Simple, clear UI</strong> (varied tech literacy)</li>
                   <li><strong>Fast booking flow</strong> (urgent care scenarios)</li>
                   <li><strong>Clear visual feedback</strong> (reduce phone call anxiety)</li>
                 </ul>
               </div>
             )}
           </div>
         </div>
       );
     }
     ```

2. **Add Conceptual Model Diagram** (8 mins)
   - Create `app/problem-space/conceptual-model.tsx`:
     ```tsx
     export default function ConceptualModel() {
       return (
         <div className="min-h-screen bg-gray-50 py-12 px-4">
           <div className="max-w-6xl mx-auto">
             <h1 className="text-4xl font-bold mb-8">Conceptual Model</h1>
             
             <div className="bg-white p-8 rounded-xl shadow-lg">
               <h2 className="text-2xl font-bold mb-6">Doctor Booking System - Entities & Relationships</h2>
               
               {/* Entity Boxes */}
               <div className="grid grid-cols-3 gap-8 mb-12">
                 <Entity name="Patient" attributes={['Name', 'Email', 'Phone', 'Medical History']} />
                 <Entity name="Doctor" attributes={['Name', 'Specialty', 'Availability', 'Rating']} />
                 <Entity name="Appointment" attributes={['Date', 'Time', 'Status', 'Notes']} />
               </div>

               {/* Relationships */}
               <div className="border-t pt-8">
                 <h3 className="font-bold text-xl mb-4">Key Relationships:</h3>
                 <ul className="space-y-3">
                   <Relationship from="Patient" to="Doctor" type="searches for" />
                   <Relationship from="Patient" to="Appointment" type="books" />
                   <Relationship from="Doctor" to="Appointment" type="accepts/rejects" />
                   <Relationship from="Appointment" to="Doctor" type="belongs to" />
                 </ul>
               </div>

               {/* User Actions */}
               <div className="border-t pt-8 mt-8">
                 <h3 className="font-bold text-xl mb-4">Core User Actions:</h3>
                 <div className="grid grid-cols-2 gap-4">
                   <Action name="Search Doctors" description="Filter by specialty, availability, rating" />
                   <Action name="View Doctor Profile" description="See bio, reviews, available times" />
                   <Action name="Select Time Slot" description="Choose from available appointments" />
                   <Action name="Confirm Booking" description="Review and finalize appointment" />
                   <Action name="Receive Confirmation" description="Email + SMS confirmation" />
                   <Action name="Manage Booking" description="Cancel, reschedule existing appointments" />
                 </div>
               </div>
             </div>
           </div>
         </div>
       );
     }

     function Entity({ name, attributes }: { name: string; attributes: string[] }) {
       return (
         <div className="border-2 border-blue-500 rounded-lg p-4">
           <h3 className="font-bold text-lg mb-3 text-blue-700">{name}</h3>
           <ul className="text-sm space-y-1">
             {attributes.map(attr => (
               <li key={attr} className="text-gray-700">• {attr}</li>
             ))}
           </ul>
         </div>
       );
     }

     function Relationship({ from, to, type }: { from: string; to: string; type: string }) {
       return (
         <li className="flex items-center gap-3">
           <span className="font-semibold text-blue-600">{from}</span>
           <span className="text-gray-500">→</span>
           <span className="italic">{type}</span>
           <span className="text-gray-500">→</span>
           <span className="font-semibold text-green-600">{to}</span>
         </li>
       );
     }

     function Action({ name, description }: { name: string; description: string }) {
       return (
         <div className="bg-gray-50 p-4 rounded-lg">
           <h4 className="font-semibold mb-1">{name}</h4>
           <p className="text-sm text-gray-600">{description}</p>
         </div>
       );
     }
     ```

3. **Add Navigation Links** (2 mins)
   - Update `app/problem-space/page.tsx` to include link:
     ```tsx
     <div className="mt-6 text-center">
       <a 
         href="/problem-space/conceptual-model"
         className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
       >
         View Conceptual Model →
       </a>
     </div>
     ```

4. **Demonstrate Think-First Approach** (5 mins)
   - Show completed 5W worksheet
   - Show conceptual model diagram
   - Explain: "This is what we do BEFORE any coding"
   - Key insight: Design decisions based on problem analysis

### Key Teaching Points

1. **5W Framework Application**:
   - Who: Patient demographics determine UI complexity
   - What: Task determines interaction type
   - When: Urgency affects flow speed
   - Where: Device determines layout (mobile-first)
   - Why: Pain points guide feature priority

2. **Conceptual vs Physical Design**:
   - Conceptual: Entities, relationships, user actions (abstract)
   - Physical: Buttons, forms, colors (concrete)
   - Always conceptualize first!

3. **Problem-Driven Design**:
   - Don't jump to solutions
   - Understand context first
   - Multiple solutions may emerge from good problem analysis

## Student Exercise: Create Your Own Problem Space Analysis (10 mins)

### Guided Activity

**Scenario**: University course registration system

**Task**: Apply 5W framework and create simple conceptual model

1. **Answer 5W Questions** (5 mins)
   - Who uses the system?
   - What are they trying to accomplish?
   - When do they use it?
   - Where are they using it?
   - Why do they need it?

2. **Sketch Conceptual Model** (5 mins)
   - Identify 3 key entities (e.g., Student, Course, Enrollment)
   - List 3-4 attributes per entity
   - Draw relationships between entities
   - List 5 core user actions

### Deliverable

- Completed 5W worksheet (digital or paper)
- Conceptual model diagram (can be hand-drawn or digital)
- Brief explanation: What design implications emerged?

### Success Criteria

- All 5W questions answered with specifics
- Conceptual model includes entities, attributes, relationships
- Design implications clearly linked to problem analysis
- Demonstrates "think first" approach

## Project Structure

```
Week02/doctor-booking/
├── README.md
├── PROBLEM-ANALYSIS.md            # 5W findings
├── CONCEPTUAL-MODEL.md            # Entities & relationships
├── app/
│   ├── interaction-types/
│   │   ├── page.tsx              # 4 types overview
│   │   ├── instructing/page.tsx  # CLI style
│   │   ├── conversing/page.tsx   # Chatbot
│   │   ├── manipulating/page.tsx # Drag & drop calendar
│   │   └── exploring/page.tsx    # Browse doctors
│   └── problem-space/
│       ├── page.tsx              # 5W worksheet
│       └── conceptual-model.tsx  # Entity diagram
└── public/
```

## AI Agent Implementation Notes

### For Cursor/Codex Implementation

1. **Component Creation Order**:
   ```
   Step 1: Create interaction-types overview page
   Step 2: Build all 4 interaction type demos (instructing, conversing, manipulating, exploring)
   Step 3: Create problem-space 5W worksheet
   Step 4: Build conceptual model visualization
   Step 5: Add navigation between pages
   ```

2. **Acceptance Criteria**:
   - All 4 interaction types functional and demonstrate distinct patterns
   - CLI accepts commands and responds correctly
   - Chatbot maintains conversation flow
   - Calendar allows booking slots (direct manipulation)
   - Explore page shows doctor cards with modal detail view
   - 5W worksheet collects all answers
   - Conceptual model displays entities, attributes, relationships
   - All pages responsive (mobile + desktop)

3. **Key Interactions to Test**:
   - CLI: Type "help", "list doctors", "book appointment"
   - Chatbot: Conversation flow through booking
   - Calendar: Click available slot → becomes unavailable
   - Explore: Click doctor card → modal opens
   - 5W Worksheet: Fill all fields → summary appears
   - Conceptual Model: Shows entity boxes with relationships

4. **Teaching Moments**:
   - After Demo 1: Discuss which interaction type best suits doctor booking
   - After Demo 2: Explain how 5W analysis drives design decisions
   - Compare: "What if we'd coded first without this analysis?"

5. **Common Student Questions**:
   - Q: "Which interaction type is best?"
     - A: Depends on context! Manipulating (calendar) likely best for most users, but exploring good for discovery.
   
   - Q: "Do we always do 5W analysis?"
     - A: Yes! Even for small features. Prevents building wrong thing.

---

**Estimated Total Time**: 55 minutes (25 + 20 + 10)

**Tech Stack**: Next.js 16, TypeScript, Tailwind CSS 4.2

**Focus**: Problem space understanding BEFORE solution design. Students learn that good IxD starts with asking right questions, not coding.

**Key Outcome**: Students understand conceptualization phase is critical. They can analyze problems using 5W framework and create conceptual models before building interfaces.
