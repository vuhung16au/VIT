# Week 03 Demo Plan: User Experience Foundations

## Week Overview

Week 03 dives deep into User Experience (UX) by exploring three critical aspects: cognitive (how users think), social (how users interact with others), and emotional (how users feel). Students build interactive demos that demonstrate attention, memory, learning patterns, and apply A/B testing to measure UX improvements.

## Learning Objectives

- Understand cognitive UX aspects (attention, memory, learning)
- Apply social UX principles (collaboration, communication)
- Design for emotional responses (trust, frustration, delight)
- Implement A/B testing to compare design alternatives
- Measure UX through user testing
- Apply UX principles to doctor booking app

## Demo 1: Cognitive UX - Attention, Memory & Learning (30 mins)

### Objective

Build three mini-demos showing how cognitive psychology principles affect interface design: attention (visual hierarchy), memory (recognition vs recall), and learning (progressive disclosure).

### Prerequisites

- Completed Week 01-02
- Understanding of IxD and problem space
- Doctor booking project

### Implementation Steps

1. **Create Cognitive UX Demo Hub** (3 mins)
   - Create new project or extend Week 01-02 project
   - Create `app/cognitive-ux/page.tsx`:
     ```tsx
     export default function CognitiveUX() {
       return (
         <div className="min-h-screen bg-gray-50 py-12 px-4">
           <div className="max-w-6xl mx-auto">
             <h1 className="text-4xl font-bold text-center mb-4">
               Cognitive UX Principles
             </h1>
             <p className="text-center text-gray-600 mb-12">
               How users think, remember, and learn with your interface
             </p>

             <div className="grid md:grid-cols-3 gap-8">
               <PrincipleCard 
                 title="Attention"
                 description="Visual hierarchy guides user focus"
                 href="/cognitive-ux/attention"
                 icon="👁️"
               />
               <PrincipleCard 
                 title="Memory"
                 description="Recognition over recall"
                 href="/cognitive-ux/memory"
                 icon="🧠"
               />
               <PrincipleCard 
                 title="Learning"
                 description="Progressive disclosure reduces cognitive load"
                 href="/cognitive-ux/learning"
                 icon="📚"
               />
             </div>
           </div>
         </div>
       );
     }

     function PrincipleCard({ title, description, href, icon }: {
       title: string;
       description: string;
       href: string;
       icon: string;
     }) {
       return (
         <a href={href} 
            className="block bg-white p-6 rounded-xl shadow-md hover:shadow-xl 
                       transition-all hover:scale-105">
           <div className="text-5xl mb-4 text-center">{icon}</div>
           <h2 className="text-2xl font-bold mb-2 text-center">{title}</h2>
           <p className="text-gray-600 text-center">{description}</p>
         </a>
       );
     }
     ```

2. **Demo 1.1: Attention - Visual Hierarchy** (8 mins)
   - Create `app/cognitive-ux/attention/page.tsx`:
     ```tsx
     export default function Attention() {
       return (
         <div className="min-h-screen bg-gray-50 py-12 px-4">
           <div className="max-w-6xl mx-auto">
             <h1 className="text-3xl font-bold mb-8">Attention: Visual Hierarchy</h1>

             <div className="grid md:grid-cols-2 gap-8">
               {/* Bad: No Hierarchy */}
               <div>
                 <h2 className="text-xl font-bold mb-4 text-red-600">❌ Poor Visual Hierarchy</h2>
                 <div className="bg-white p-6 rounded-xl shadow-md">
                   <p className="text-base mb-2">Book Appointment with Dr. Smith</p>
                   <p className="text-base mb-2">Cardiology Specialist</p>
                   <p className="text-base mb-2">Monday, March 10, 2025</p>
                   <p className="text-base mb-2">2:00 PM - 3:00 PM</p>
                   <p className="text-base mb-2">Video Consultation</p>
                   <p className="text-base mb-4">$150 consultation fee</p>
                   <button className="text-base px-4 py-2 bg-gray-400 text-white">
                     Confirm
                   </button>
                 </div>
                 <p className="text-sm text-gray-600 mt-4">
                   Problem: All text same size. Eye doesn't know where to look first. 
                   Important info (date, doctor name) buried.
                 </p>
               </div>

               {/* Good: Clear Hierarchy */}
               <div>
                 <h2 className="text-xl font-bold mb-4 text-green-600">✓ Strong Visual Hierarchy</h2>
                 <div className="bg-white p-6 rounded-xl shadow-md">
                   <h3 className="text-2xl font-bold mb-1">Dr. Sarah Smith</h3>
                   <p className="text-sm text-gray-500 mb-4">Cardiology Specialist</p>
                   
                   <div className="bg-blue-50 p-4 rounded-lg mb-4">
                     <p className="text-lg font-semibold text-blue-900">Monday, March 10, 2025</p>
                     <p className="text-xl font-bold text-blue-700">2:00 PM - 3:00 PM</p>
                   </div>

                   <div className="flex items-center gap-2 mb-4">
                     <span className="text-sm">🎥 Video Consultation</span>
                     <span className="text-sm text-gray-400">•</span>
                     <span className="text-sm font-semibold">$150</span>
                   </div>

                   <button className="w-full bg-blue-600 text-white text-lg font-semibold py-4 rounded-lg
                                      hover:bg-blue-700 transition-all">
                     Confirm Appointment
                   </button>
                 </div>
                 <p className="text-sm text-gray-600 mt-4">
                   Solution: Largest → Doctor name. Color block → Date/time. 
                   Big button → Primary action. Eye flows naturally top to bottom.
                 </p>
               </div>
             </div>

             <div className="mt-8 bg-white p-6 rounded-xl">
               <h3 className="font-bold text-lg mb-3">Attention Design Principles:</h3>
               <ul className="space-y-2 text-gray-700">
                 <li>✓ <strong>Size:</strong> Larger = more important</li>
                 <li>✓ <strong>Color:</strong> Contrast draws attention</li>
                 <li>✓ <strong>Position:</strong> Top-left gets most attention (F-pattern reading)</li>
                 <li>✓ <strong>White space:</strong> Isolates important elements</li>
                 <li>✓ <strong>Motion:</strong> Animation attracts eye (use sparingly)</li>
               </ul>
             </div>
           </div>
         </div>
       );
     }
     ```

3. **Demo 1.2: Memory - Recognition vs Recall** (10 mins)
   - Create `app/cognitive-ux/memory/page.tsx`:
     ```tsx
     'use client';
     import { useState } from 'react';

     export default function Memory() {
       const [recallInput, setRecallInput] = useState('');
       const [recognitionSelected, setRecognitionSelected] = useState('');

       return (
         <div className="min-h-screen bg-gray-50 py-12 px-4">
           <div className="max-w-6xl mx-auto">
             <h1 className="text-3xl font-bold mb-8">Memory: Recognition vs Recall</h1>

             <div className="grid md:grid-cols-2 gap-8">
               {/* Recall: Hard */}
               <div>
                 <h2 className="text-xl font-bold mb-4 text-red-600">❌ Recall (Harder)</h2>
                 <div className="bg-white p-6 rounded-xl shadow-md">
                   <label className="block font-semibold mb-3">
                     What specialty was the doctor you saw last month?
                   </label>
                   <input 
                     type="text"
                     value={recallInput}
                     onChange={(e) => setRecallInput(e.target.value)}
                     placeholder="Type the specialty..."
                     className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                   />
                   <p className="text-sm text-gray-600 mt-4">
                     User must remember exact term from memory. Prone to errors.
                   </p>
                 </div>
               </div>

               {/* Recognition: Easy */}
               <div>
                 <h2 className="text-xl font-bold mb-4 text-green-600">✓ Recognition (Easier)</h2>
                 <div className="bg-white p-6 rounded-xl shadow-md">
                   <label className="block font-semibold mb-3">
                     Which doctor did you see last month?
                   </label>
                   <div className="space-y-2">
                     {[
                       { id: 'smith', name: 'Dr. Sarah Smith', specialty: 'Cardiology' },
                       { id: 'jones', name: 'Dr. Mike Jones', specialty: 'Pediatrics' },
                       { id: 'chen', name: 'Dr. Lisa Chen', specialty: 'Dermatology' }
                     ].map(doc => (
                       <button
                         key={doc.id}
                         onClick={() => setRecognitionSelected(doc.id)}
                         className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                           recognitionSelected === doc.id
                             ? 'border-blue-600 bg-blue-50'
                             : 'border-gray-200 hover:border-blue-300'
                         }`}
                       >
                         <p className="font-semibold">{doc.name}</p>
                         <p className="text-sm text-gray-600">{doc.specialty}</p>
                       </button>
                     ))}
                   </div>
                   <p className="text-sm text-gray-600 mt-4">
                     User recognizes from list. Much easier than recalling from scratch.
                   </p>
                 </div>
               </div>
             </div>

             {/* Real-World Example */}
             <div className="mt-8 bg-white p-6 rounded-xl">
               <h3 className="font-bold text-lg mb-4">Apply to Doctor Booking:</h3>
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="border-l-4 border-red-500 pl-4">
                   <p className="font-semibold mb-2">❌ Don't do this:</p>
                   <p className="text-sm text-gray-700">
                     "Enter your preferred appointment time" (requires user to recall format: "2:00 PM"? "14:00"? "2 PM"?)
                   </p>
                 </div>
                 <div className="border-l-4 border-green-500 pl-4">
                   <p className="font-semibold mb-2">✓ Do this instead:</p>
                   <p className="text-sm text-gray-700">
                     Show time slots: [2:00 PM] [2:30 PM] [3:00 PM]. User recognizes and clicks.
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       );
     }
     ```

4. **Demo 1.3: Learning - Progressive Disclosure** (9 mins)
   - Create `app/cognitive-ux/learning/page.tsx`:
     ```tsx
     'use client';
     import { useState } from 'react';

     export default function Learning() {
       const [step, setStep] = useState(1);
       const [formData, setFormData] = useState({
         specialty: '',
         doctor: '',
         date: '',
         time: ''
       });

       return (
         <div className="min-h-screen bg-gray-50 py-12 px-4">
           <div className="max-w-4xl mx-auto">
             <h1 className="text-3xl font-bold mb-8">Learning: Progressive Disclosure</h1>

             <div className="mb-8">
               <h2 className="text-xl font-bold mb-4">Concept: Show information as needed, not all at once</h2>
             </div>

             <div className="grid md:grid-cols-2 gap-8">
               {/* All at Once: Overwhelming */}
               <div>
                 <h3 className="font-bold mb-3 text-red-600">❌ All at Once (Overwhelming)</h3>
                 <div className="bg-white p-6 rounded-xl shadow-md">
                   <div className="space-y-4 opacity-70">
                     <div>
                       <label className="block text-sm mb-1">Specialty</label>
                       <select className="w-full px-3 py-2 border rounded">
                         <option>Choose...</option>
                       </select>
                     </div>
                     <div>
                       <label className="block text-sm mb-1">Doctor</label>
                       <select className="w-full px-3 py-2 border rounded">
                         <option>Choose...</option>
                       </select>
                     </div>
                     <div>
                       <label className="block text-sm mb-1">Date</label>
                       <input type="date" className="w-full px-3 py-2 border rounded" />
                     </div>
                     <div>
                       <label className="block text-sm mb-1">Time</label>
                       <select className="w-full px-3 py-2 border rounded">
                         <option>Choose...</option>
                       </select>
                     </div>
                     <div>
                       <label className="block text-sm mb-1">Consultation Type</label>
                       <select className="w-full px-3 py-2 border rounded">
                         <option>Choose...</option>
                       </select>
                     </div>
                     <div>
                       <label className="block text-sm mb-1">Insurance Provider</label>
                       <input type="text" className="w-full px-3 py-2 border rounded" />
                     </div>
                     <div>
                       <label className="block text-sm mb-1">Reason for Visit</label>
                       <textarea rows={3} className="w-full px-3 py-2 border rounded" />
                     </div>
                   </div>
                   <p className="text-sm text-gray-600 mt-4">
                     7 fields at once = cognitive overload. User gives up.
                   </p>
                 </div>
               </div>

               {/* Progressive: Step by Step */}
               <div>
                 <h3 className="font-bold mb-3 text-green-600">✓ Progressive Disclosure (Manageable)</h3>
                 <div className="bg-white p-6 rounded-xl shadow-md">
                   {/* Progress Indicator */}
                   <div className="flex justify-between mb-6">
                     {[1, 2, 3, 4].map(s => (
                       <div key={s} className="flex items-center">
                         <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                           s <= step ? 'bg-blue-600 text-white' : 'bg-gray-200'
                         }`}>
                           {s}
                         </div>
                         {s < 4 && <div className="w-12 h-1 bg-gray-200 mx-2" />}
                       </div>
                     ))}
                   </div>

                   {/* Step Content */}
                   {step === 1 && (
                     <div>
                       <h4 className="font-bold mb-3">Step 1: What specialty?</h4>
                       <select 
                         value={formData.specialty}
                         onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                         className="w-full px-4 py-3 border rounded-lg"
                       >
                         <option value="">Choose specialty...</option>
                         <option value="cardiology">Cardiology</option>
                         <option value="pediatrics">Pediatrics</option>
                         <option value="dermatology">Dermatology</option>
                       </select>
                     </div>
                   )}

                   {step === 2 && (
                     <div>
                       <h4 className="font-bold mb-3">Step 2: Which doctor?</h4>
                       <div className="space-y-2">
                         <button onClick={() => setFormData({...formData, doctor: 'Dr. Smith'})}
                                 className="w-full p-3 border-2 rounded-lg hover:border-blue-500">
                           Dr. Sarah Smith
                         </button>
                         <button onClick={() => setFormData({...formData, doctor: 'Dr. Jones'})}
                                 className="w-full p-3 border-2 rounded-lg hover:border-blue-500">
                           Dr. Mike Jones
                         </button>
                       </div>
                     </div>
                   )}

                   {step === 3 && (
                     <div>
                       <h4 className="font-bold mb-3">Step 3: Pick a date</h4>
                       <input 
                         type="date"
                         value={formData.date}
                         onChange={(e) => setFormData({...formData, date: e.target.value})}
                         className="w-full px-4 py-3 border rounded-lg"
                       />
                     </div>
                   )}

                   {step === 4 && (
                     <div>
                       <h4 className="font-bold mb-3">Step 4: Select time</h4>
                       <div className="grid grid-cols-2 gap-2">
                         {['9:00 AM', '10:00 AM', '2:00 PM', '3:00 PM'].map(time => (
                           <button 
                             key={time}
                             onClick={() => setFormData({...formData, time})}
                             className="p-3 border-2 rounded-lg hover:border-blue-500"
                           >
                             {time}
                           </button>
                         ))}
                       </div>
                     </div>
                   )}

                   {/* Navigation */}
                   <div className="flex gap-3 mt-6">
                     {step > 1 && (
                       <button 
                         onClick={() => setStep(step - 1)}
                         className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                       >
                         Back
                       </button>
                     )}
                     {step < 4 && (
                       <button 
                         onClick={() => setStep(step + 1)}
                         className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700"
                       >
                         Next
                       </button>
                     )}
                     {step === 4 && (
                       <button className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700">
                         Confirm Booking
                       </button>
                     )}
                   </div>

                   <p className="text-sm text-gray-600 mt-4">
                     One question at a time. User focuses on current step only.
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       );
     }
     ```

### Key Teaching Points

1. **Attention**: Visual hierarchy guides user's eye through information priority
2. **Memory**: Recognition easier than recall - provide options, don't force remembering
3. **Learning**: Progressive disclosure reduces cognitive load - reveal complexity gradually

## Demo 2: Social & Emotional UX (15 mins)

### Objective

Demonstrate how design choices affect trust (emotional) and support collaboration (social) in healthcare apps.

### Implementation Steps

1. **Create Trust Comparison Demo** (8 mins)
   - Create `app/social-emotional/trust.tsx`:
     ```tsx
     export default function Trust() {
       return (
         <div className="min-h-screen bg-gray-50 py-12 px-4">
           <div className="max-w-6xl mx-auto">
             <h1 className="text-3xl font-bold mb-8">Emotional UX: Building Trust</h1>

             <div className="grid md:grid-cols-2 gap-8">
               {/* Low Trust */}
               <div>
                 <h2 className="font-bold mb-4 text-red-600">❌ Low Trust Design</h2>
                 <div className="bg-white p-6 rounded-xl shadow-md">
                   <p className="text-2xl font-bold mb-2">Dr. John</p>
                   <p className="mb-4">Doctor</p>
                   <button className="w-full bg-red-500 text-white py-3 rounded">
                     BOOK NOW!!!
                   </button>
                   <p className="text-xs mt-4 text-gray-400">
                     No reviews. No credentials. No profile photo. 
                     Aggressive CTA. User feels uncertain.
                   </p>
                 </div>
               </div>

               {/* High Trust */}
               <div>
                 <h2 className="font-bold mb-4 text-green-600">✓ High Trust Design</h2>
                 <div className="bg-white p-6 rounded-xl shadow-md">
                   <div className="flex gap-4 mb-4">
                     <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                       👨‍⚕️
                     </div>
                     <div>
                       <h3 className="text-xl font-bold">Dr. John Smith, MD</h3>
                       <p className="text-sm text-gray-600">Board Certified Cardiologist</p>
                       <p className="text-sm text-gray-600">15 years experience</p>
                     </div>
                   </div>

                   <div className="bg-yellow-50 p-3 rounded-lg mb-4">
                     <div className="flex items-center gap-2 mb-1">
                       <span className="text-yellow-500">★★★★★</span>
                       <span className="font-semibold">4.9/5.0</span>
                       <span className="text-sm text-gray-600">(247 reviews)</span>
                     </div>
                     <p className="text-sm text-gray-700">
                       "Very thorough and caring doctor" - Sarah M.
                     </p>
                   </div>

                   <div className="border-t pt-4 mb-4">
                     <p className="text-sm text-gray-700">
                       <strong>Education:</strong> Harvard Medical School<br />
                       <strong>Hospital:</strong> City General Hospital<br />
                       <strong>Languages:</strong> English, Spanish
                     </p>
                   </div>

                   <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                     Schedule Appointment
                   </button>
                   <p className="text-xs mt-2 text-gray-500 text-center">
                     Free cancellation up to 24 hours before
                   </p>

                   <p className="text-xs mt-4 text-gray-400">
                     Profile photo, reviews, credentials, reassuring language. 
                     User feels confident.
                   </p>
                 </div>
               </div>
             </div>

             <div className="mt-8 bg-white p-6 rounded-xl">
               <h3 className="font-bold text-lg mb-3">Trust-Building Elements:</h3>
               <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                 <li>✓ Professional credentials & certifications</li>
                 <li>✓ Real patient reviews with ratings</li>
                 <li>✓ Clear, professional language (no ALL CAPS)</li>
                 <li>✓ Transparent policies (cancellation, fees)</li>
                 <li>✓ Profile photos (humanizes the doctor)</li>
                 <li>✓ Security badges (HIPAA compliant, encrypted)</li>
               </ul>
             </div>
           </div>
         </div>
       );
     }
     ```

2. **Create Social UX - Family Account Sharing** (7 mins)
   - Create `app/social-emotional/social.tsx`:
     ```tsx
     'use client';
     import { useState } from 'react';

     type FamilyMember = {
       id: string;
       name: string;
       relation: string;
       age: number;
     };

     export default function Social() {
       const [members] = useState<FamilyMember[]>([
         { id: '1', name: 'You', relation: 'Self', age: 35 },
         { id: '2', name: 'Sarah', relation: 'Daughter', age: 7 },
         { id: '3', name: 'Mark', relation: 'Son', age: 10 }
       ]);
       const [selectedMember, setSelectedMember] = useState('1');

       return (
         <div className="min-h-screen bg-gray-50 py-12 px-4">
           <div className="max-w-4xl mx-auto">
             <h1 className="text-3xl font-bold mb-8">Social UX: Family Account Management</h1>

             <div className="bg-white p-6 rounded-xl shadow-md">
               <h2 className="text-xl font-bold mb-4">Who are you booking for?</h2>
               
               <div className="grid grid-cols-3 gap-4 mb-6">
                 {members.map(member => (
                   <button
                     key={member.id}
                     onClick={() => setSelectedMember(member.id)}
                     className={`p-4 border-2 rounded-lg text-center transition-all ${
                       selectedMember === member.id
                         ? 'border-blue-600 bg-blue-50'
                         : 'border-gray-200 hover:border-blue-300'
                     }`}
                   >
                     <div className="text-3xl mb-2">
                       {member.relation === 'Self' ? '👤' : member.relation === 'Daughter' ? '👧' : '👦'}
                     </div>
                     <p className="font-semibold">{member.name}</p>
                     <p className="text-sm text-gray-600">{member.relation}</p>
                     <p className="text-xs text-gray-500">Age {member.age}</p>
                   </button>
                 ))}
               </div>

               {selectedMember !== '1' && (
                 <div className="bg-blue-50 p-4 rounded-lg mb-4">
                   <p className="text-sm text-blue-900">
                     ✓ Booking for <strong>{members.find(m => m.id === selectedMember)?.name}</strong>.
                     Confirmation will be sent to your email.
                   </p>
                 </div>
               )}

               <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                 Continue to Doctor Selection
               </button>
             </div>

             <div className="mt-8 bg-white p-6 rounded-xl">
               <h3 className="font-bold text-lg mb-3">Social UX Principles:</h3>
               <ul className="space-y-2 text-gray-700">
                 <li>✓ <strong>Shared access:</strong> Parents can book for children</li>
                 <li>✓ <strong>Clear context:</strong> Always show who you're booking for</li>
                 <li>✓ <strong>Communication:</strong> Notifications go to account owner</li>
                 <li>✓ <strong>Collaboration:</strong> Family members can view/manage appointments</li>
               </ul>
             </div>
           </div>
         </div>
       );
     }
     ```

### Key Teaching Points

1. **Emotional UX (Trust)**:
   - Healthcare requires HIGH trust
   - Design signals: credentials, reviews, professional tone
   - Transparency reduces anxiety

2. **Social UX (Collaboration)**:
   - Healthcare is often family-centered
   - Support booking for others
   - Clear "who" context prevents errors

## Demo 3: A/B Testing - Measure UX Improvements (10 mins)

### Objective

Create two button variants and demonstrate how A/B testing would measure which performs better.

### Implementation Steps

1. **Create A/B Testing Demo** (10 mins)
   - Create `app/ab-testing/page.tsx`:
     ```tsx
     'use client';
     import { useState } from 'react';

     export default function ABTesting() {
       const [clicks, setClicks] = useState({ variantA: 0, variantB: 0 });
       const [userChoice, setUserChoice] = useState<'A' | 'B' | null>(null);

       const handleClick = (variant: 'A' | 'B') => {
         setClicks({ ...clicks, [variant === 'A' ? 'variantA' : 'variantB']: clicks[variant === 'A' ? 'variantA' : 'variantB'] + 1 });
         setUserChoice(variant);
       };

       const totalClicks = clicks.variantA + clicks.variantB;
       const conversionA = totalClicks > 0 ? (clicks.variantA / totalClicks * 100).toFixed(1) : 0;
       const conversionB = totalClicks > 0 ? (clicks.variantB / totalClicks * 100).toFixed(1) : 0;

       return (
         <div className="min-h-screen bg-gray-50 py-12 px-4">
           <div className="max-w-6xl mx-auto">
             <h1 className="text-4xl font-bold text-center mb-4">A/B Testing Demo</h1>
             <p className="text-center text-gray-600 mb-12">
               Test which button design gets more clicks
             </p>

             {/* Results Dashboard */}
             <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
               <h2 className="text-2xl font-bold mb-4">Live Results</h2>
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="bg-blue-50 p-4 rounded-lg">
                   <h3 className="font-bold mb-2">Variant A</h3>
                   <p className="text-3xl font-bold text-blue-600">{conversionA}%</p>
                   <p className="text-sm text-gray-600">{clicks.variantA} clicks</p>
                 </div>
                 <div className="bg-green-50 p-4 rounded-lg">
                   <h3 className="font-bold mb-2">Variant B</h3>
                   <p className="text-3xl font-bold text-green-600">{conversionB}%</p>
                   <p className="text-sm text-gray-600">{clicks.variantB} clicks</p>
                 </div>
               </div>
             </div>

             {/* Variants Side by Side */}
             <div className="grid md:grid-cols-2 gap-8 mb-8">
               {/* Variant A */}
               <div className="bg-white p-8 rounded-xl shadow-md">
                 <h3 className="text-xl font-bold mb-4">Variant A: Generic</h3>
                 <div className="bg-gray-50 p-6 rounded-lg mb-4">
                   <p className="text-gray-700 mb-4">
                     Book an appointment with a doctor
                   </p>
                   <button 
                     onClick={() => handleClick('A')}
                     className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                   >
                     Submit
                   </button>
                 </div>
                 <p className="text-sm text-gray-600">
                   Generic text, neutral color, vague action word
                 </p>
               </div>

               {/* Variant B */}
               <div className="bg-white p-8 rounded-xl shadow-md">
                 <h3 className="text-xl font-bold mb-4">Variant B: Optimized</h3>
                 <div className="bg-gray-50 p-6 rounded-lg mb-4">
                   <p className="text-gray-700 mb-4">
                     Get care from top doctors in 24 hours
                   </p>
                   <button 
                     onClick={() => handleClick('B')}
                     className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg 
                                hover:bg-blue-700 hover:scale-105 transition-all shadow-lg"
                   >
                     Book Your Appointment →
                   </button>
                 </div>
                 <p className="text-sm text-gray-600">
                   Benefit-focused copy, vibrant color, specific action, visual feedback
                 </p>
               </div>
             </div>

             {userChoice && (
               <div className="bg-green-100 border border-green-400 p-4 rounded-lg text-center">
                 <p className="text-green-800">
                   You clicked Variant {userChoice}! In real A/B testing, we'd track thousands of users.
                 </p>
               </div>
             )}

             {/* Explanation */}
             <div className="bg-white p-6 rounded-xl">
               <h3 className="font-bold text-lg mb-3">How A/B Testing Works:</h3>
               <ol className="list-decimal ml-6 space-y-2 text-gray-700">
                 <li>Create two versions (A = control, B = variation)</li>
                 <li>Show each version to 50% of users randomly</li>
                 <li>Measure clicks, bookings, or other goals</li>
                 <li>Statistical analysis determines winner</li>
                 <li>Implement winning version for all users</li>
               </ol>

               <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                 <p className="font-semibold mb-2">What to test:</p>
                 <ul className="text-sm text-gray-700 space-y-1">
                   <li>• Button color, size, text</li>
                   <li>• Headlines and copy</li>
                   <li>• Form length (short vs long)</li>
                   <li>• Page layout</li>
                   <li>• Images vs no images</li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
       );
     }
     ```

### Key Teaching Points

1. **A/B Testing Methodology**:
   - Test ONE variable at a time
   - Need statistically significant sample size
   - Measure actual behavior, not opinions

2. **UX Metrics**:
   - Click-through rate (CTR)
   - Conversion rate (bookings completed)
   - Time to complete task
   - Error rate

## Student Exercise: Design for Emotional Response (10 mins)

### Guided Activity

**Scenario**: User just booked their first appointment. Design a confirmation page.

**Task**: Create two versions - one that creates anxiety, one that creates confidence.

1. **Anxiety-Inducing Version** (3 mins):
   - Minimal information
   - Unclear next steps
   - No reassurance
   - Example: "Submitted. ID: 72634. Check email."

2. **Confidence-Building Version** (5 mins):
   - Clear confirmation message
   - All appointment details visible
   - Next steps clearly outlined
   - Reassuring language
   - Example: checkmark animation, "You're all set!", doctor info, calendar invite download

3. **Compare & Discuss** (2 mins):
   - Which version would you prefer?
   - What specific elements build confidence?

### Deliverable

- Two confirmation page designs (wireframes or code)
- List of 3 differences and their emotional impact

### Success Criteria

- Clear contrast between anxious vs confident versions
- Confident version includes: confirmation, details, next steps
- Student identifies specific UX elements that affect emotion

## Project Structure

```
Week03/cognitive-social-ux/
├── README.md
├── docs/
│   └── Key-Takeaways.md         # Brief IxD, UI, UX lessons from the project
├── app/
│   ├── cognitive-ux/
│   │   ├── page.tsx              # Overview hub
│   │   ├── attention/page.tsx    # Visual hierarchy demo
│   │   ├── memory/page.tsx       # Recognition vs recall
│   │   └── learning/page.tsx     # Progressive disclosure
│   ├── social-emotional/
│   │   ├── trust.tsx             # Trust-building design
│   │   └── social.tsx            # Family account management
│   └── ab-testing/
│       └── page.tsx              # A/B testing simulator
└── public/
```

## AI Agent Implementation Notes

### For Cursor/Codex Implementation

1. **Component Creation Order**:
   ```
   Step 1: Cognitive UX hub page
   Step 2: Attention demo (visual hierarchy)
   Step 3: Memory demo (recognition vs recall)
   Step 4: Learning demo (progressive disclosure)
   Step 5: Trust comparison (emotional UX)
   Step 6: Social UX (family accounts)
   Step 7: A/B testing simulator
   ```

2. **Acceptance Criteria**:
   - Attention demo shows clear visual hierarchy difference
   - Memory demo demonstrates recall vs recognition
   - Learning demo implements 4-step progressive form
   - Trust demo shows low vs high trust designs
   - Social demo allows selecting family members
   - A/B testing tracks clicks for both variants
   - All demos are responsive

3. **Interactive States to Test**:
   - Progressive disclosure: Click through all 4 steps
   - A/B testing: Click both variants, see percentages update
   - Social UX: Select different family members, see context change
   - All hover states work

4. **Teaching Moments**:
   - After attention demo: Ask "Which design do you read faster?"
   - After memory demo: Ask "Would you remember the doctor's specialty?"
   - After learning demo: Ask "Which form feels less overwhelming?"
   - After A/B test: Ask "Why might Variant B perform better?"

5. **Key UX Principles to Emphasize**:
   - Cognitive load: Don't overwhelm users
   - Recognition > Recall: Provide options
   - Progressive disclosure: Reveal complexity gradually
   - Trust: Especially critical in healthcare
   - Social: Support real-world usage patterns (family booking)

---

**Estimated Total Time**: 65 minutes (30 + 15 + 10 + 10)

**Tech Stack**: Next.js 16, TypeScript, Tailwind CSS 4.2

**Focus**: Psychology of UX - how users think (cognitive), feel (emotional), and interact with others (social). Students apply research-backed principles to create better experiences.

**Key Outcome**: Students understand UX is grounded in psychology and can design with cognitive principles, build trust, support social interactions, and measure improvements through A/B testing.
