
# Week 04 Demo Plan: Design Process and Double Diamond Framework

## Week Overview

Week 04 marks the transition from conceptual learning to hands-on implementation. Students apply the **Double Diamond Framework** to build the first working version of the doctor booking app. This week covers all four design process phases (Discover, Define, Develop, Deliver) and introduces iteration through A/B testing and user feedback loops.

## Learning Objectives

- Apply the Double Diamond Framework to real design problems
- Practice the four basic activities: discover requirements, design alternatives, prototype, evaluate
- Build multiple design alternatives and compare them
- Implement user-centered design through feedback iteration
- Create the foundation doctor booking app that will evolve through Weeks 5-9
- Understand when to use different interaction patterns (forms vs chatbots)

## Demo 1: Double Diamond Framework - Doctor Booking App v1 (35 mins)

### Objective

Walk through all four phases of the Double Diamond by building the first functional doctor booking app. Students start with a deliberately poor design (Discover/Define) and iteratively improve it (Develop/Deliver).

### Prerequisites

- Completed Weeks 0-3
- Understanding of IxD principles, problem space, and UX
- Next.js environment ready

### Implementation Steps

#### Phase 1: Discover (8 mins)

1. **Create "Bad" Version to Analyze** (5 mins)
   - Create new Next.js project: `doctor-booking-v1`
   - Create `app/bad-version/page.tsx`:
     ```tsx
     export default function BadVersion() {
       return (
         <div style={{ padding: '20px', backgroundColor: '#ffff00' }}>
           <h1 style={{ fontSize: '14px', color: '#ff0000' }}>
             DOCTOR BOOKING SYSTEM!!!
           </h1>
           <form>
             <div>
               <input type="text" placeholder="name" style={{ width: '100px' }} />
             </div>
             <div>
               <input type="text" placeholder="email" />
             </div>
             <div>
               <input type="text" placeholder="phone" />
             </div>
             <div>
               <input type="text" placeholder="address" />
             </div>
             <div>
               <input type="text" placeholder="insurance" />
             </div>
             <div>
               <select style={{ width: '80px' }}>
                 <option>dr</option>
               </select>
             </div>
             <div>
               <input type="text" placeholder="date" />
             </div>
             <div>
               <input type="text" placeholder="time" />
             </div>
             <div>
               <textarea placeholder="why" rows={2} style={{ width: '150px' }} />
             </div>
             <button type="submit" style={{ backgroundColor: '#00ff00', color: '#0000ff' }}>
               CLICK HERE TO SUBMIT NOW!!!
             </button>
           </form>
         </div>
       );
     }
     ```

2. **Identify Problems (Heuristic Evaluation)** (3 mins)
   - Create `docs/DISCOVER-FINDINGS.md`:
     ```markdown
     # Discovery Phase - Problems Identified

     ## User Pain Points (from testing bad version):
     1. **Visual Chaos**: Yellow background, tiny red heading, inconsistent colors
     2. **Cognitive Overload**: 9 fields all at once, no grouping
     3. **Poor Labels**: "dr", "why" - unclear abbreviations
     4. **No Validation**: Can type anything in date/time fields
     5. **Inconsistent Widths**: Some inputs 100px, others default
     6. **Aggressive CTA**: "CLICK HERE TO SUBMIT NOW!!!" feels spammy
     7. **No Guidance**: What format for date? What if I don't have insurance?
     8. **Missing Feedback**: No confirmation, no error messages
     9. **Accessibility Issues**: Poor color contrast (WCAG failure)
     10. **No Progress Indicator**: User doesn't know how much is left

     ## Key Insight:
     Users abandon after seeing this overwhelming form. Current completion rate: ~15% (simulated)
     ```

#### Phase 2: Define (7 mins)

3. **Create Problem Statement** (3 mins)
   - Create `docs/DEFINE-PROBLEM.md`:
     ```markdown
     # Define Phase - Problem Statement

     ## Core Problem:
     **Users abandon the booking process because the form is overwhelming, confusing, and lacks trust signals.**

     ## Target Users:
     - Patients aged 18-70
     - Varying tech literacy (elderly to tech-savvy)
     - 70% mobile, 30% desktop
     - Often booking in stressful situations (feeling unwell)

     ## Success Criteria:
     1. **Completion Rate**: Increase from 15% → 70%+
     2. **Time to Complete**: ≤ 3 minutes
     3. **Steps**: Maximum 3 steps
     4. **Error Rate**: < 5% (wrong date/time selection)
     5. **User Satisfaction**: "Easy" rating > 80%

     ## Constraints:
     - Must collect: Name, email, phone, doctor, date, time
     - Optional: Insurance, reason for visit
     - Must work on mobile (primary device)
     - Must be HIPAA-compliant (secure, private)
     ```

4. **Define Solution Requirements** (4 mins)
   - Add to `docs/DEFINE-PROBLEM.md`:
     ```markdown
     ## Design Requirements:

     ### Must Have:
     - Progressive disclosure (max 3 fields per step)
     - Clear visual hierarchy
     - Mobile-first design
     - Form validation with helpful errors
     - Confirmation screen
     - Professional, trustworthy appearance

     ### Should Have:
     - Progress indicator
     - Save for later functionality
     - Calendar picker (not text input for dates)
     - Time slot selector (not freeform input)

     ### Could Have:
     - Remember previous bookings
     - Prefill insurance info
     - Alternative: chatbot interface
     ```

#### Phase 3: Develop (Alternatives) (12 mins)

5. **Design Alternative A: Multi-Step Form** (6 mins)
   - Create `app/version-a-multistep/page.tsx`:
     ```tsx
     'use client';
     import { useState } from 'react';

     export default function MultiStepForm() {
       const [step, setStep] = useState(1);
       const [formData, setFormData] = useState({
         name: '', email: '', phone: '',
         doctor: '', date: '', timeSlot: ''
       });

       return (
         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
           <div className="max-w-lg mx-auto">
             {/* Progress Bar */}
             <div className="mb-8">
               <div className="flex justify-between mb-2">
                 {[1, 2, 3].map(s => (
                   <div key={s} className="flex items-center">
                     <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                       s <= step ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                     }`}>
                       {s}
                     </div>
                     {s < 3 && <div className={`flex-1 h-1 mx-2 ${s < step ? 'bg-blue-600' : 'bg-gray-300'}`} />}
                   </div>
                 ))}
               </div>
               <p className="text-center text-sm text-gray-600">
                 Step {step} of 3
               </p>
             </div>

             <div className="bg-white rounded-xl shadow-lg p-8">
               {/* Step 1: Personal Info */}
               {step === 1 && (
                 <div>
                   <h2 className="text-2xl font-bold mb-6">Your Information</h2>
                   <div className="space-y-4">
                     <div>
                       <label className="block font-medium mb-2">Full Name *</label>
                       <input 
                         type="text"
                         value={formData.name}
                         onChange={(e) => setFormData({...formData, name: e.target.value})}
                         className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                         placeholder="John Doe"
                       />
                     </div>
                     <div>
                       <label className="block font-medium mb-2">Email *</label>
                       <input 
                         type="email"
                         value={formData.email}
                         onChange={(e) => setFormData({...formData, email: e.target.value})}
                         className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                         placeholder="john@example.com"
                       />
                     </div>
                     <div>
                       <label className="block font-medium mb-2">Phone *</label>
                       <input 
                         type="tel"
                         value={formData.phone}
                         onChange={(e) => setFormData({...formData, phone: e.target.value})}
                         className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                         placeholder="(555) 123-4567"
                       />
                     </div>
                   </div>
                 </div>
               )}

               {/* Step 2: Select Doctor */}
               {step === 2 && (
                 <div>
                   <h2 className="text-2xl font-bold mb-6">Choose Your Doctor</h2>
                   <div className="space-y-3">
                     {[
                       { id: 'smith', name: 'Dr. Sarah Smith', specialty: 'Cardiology', rating: 4.9 },
                       { id: 'jones', name: 'Dr. Mike Jones', specialty: 'Pediatrics', rating: 4.8 },
                       { id: 'chen', name: 'Dr. Lisa Chen', specialty: 'Dermatology', rating: 4.7 }
                     ].map(doc => (
                       <button
                         key={doc.id}
                         onClick={() => setFormData({...formData, doctor: doc.id})}
                         className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                           formData.doctor === doc.id
                             ? 'border-blue-600 bg-blue-50'
                             : 'border-gray-200 hover:border-blue-300'
                         }`}
                       >
                         <div className="flex justify-between items-start">
                           <div>
                             <p className="font-bold">{doc.name}</p>
                             <p className="text-sm text-gray-600">{doc.specialty}</p>
                           </div>
                           <div className="flex items-center gap-1">
                             <span className="text-yellow-500">★</span>
                             <span className="font-semibold">{doc.rating}</span>
                           </div>
                         </div>
                       </button>
                     ))}
                   </div>
                 </div>
               )}

               {/* Step 3: Date & Time */}
               {step === 3 && (
                 <div>
                   <h2 className="text-2xl font-bold mb-6">Pick Date & Time</h2>
                   <div className="space-y-4">
                     <div>
                       <label className="block font-medium mb-2">Preferred Date</label>
                       <input 
                         type="date"
                         value={formData.date}
                         onChange={(e) => setFormData({...formData, date: e.target.value})}
                         min={new Date().toISOString().split('T')[0]}
                         className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                       />
                     </div>
                     <div>
                       <label className="block font-medium mb-2">Available Time Slots</label>
                       <div className="grid grid-cols-2 gap-2">
                         {['9:00 AM', '10:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'].map(time => (
                           <button
                             key={time}
                             onClick={() => setFormData({...formData, timeSlot: time})}
                             className={`p-3 border-2 rounded-lg font-semibold ${
                               formData.timeSlot === time
                                 ? 'border-blue-600 bg-blue-50 text-blue-700'
                                 : 'border-gray-200 hover:border-blue-300'
                             }`}
                           >
                             {time}
                           </button>
                         ))}
                       </div>
                     </div>
                   </div>
                 </div>
               )}

               {/* Navigation Buttons */}
               <div className="flex gap-3 mt-8">
                 {step > 1 && (
                   <button 
                     onClick={() => setStep(step - 1)}
                     className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
                   >
                     Back
                   </button>
                 )}
                 {step < 3 && (
                   <button 
                     onClick={() => setStep(step + 1)}
                     className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
                   >
                     Next Step
                   </button>
                 )}
                 {step === 3 && (
                   <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
                     Confirm Booking
                   </button>
                 )}
               </div>
             </div>
           </div>
         </div>
       );
     }
     ```

6. **Design Alternative B: Single-Page with Accordion** (6 mins)
   - Create `app/version-b-singlepage/page.tsx`:
     ```tsx
     'use client';
     import { useState } from 'react';

     export default function SinglePageAccordion() {
       const [expandedSection, setExpandedSection] = useState<number>(1);
       const [formData, setFormData] = useState({
         name: '', email: '', phone: '',
         doctor: '', date: '', timeSlot: ''
       });

       const toggleSection = (section: number) => {
         setExpandedSection(expandedSection === section ? 0 : section);
       };

       return (
         <div className="min-h-screen bg-gray-50 py-12 px-4">
           <div className="max-w-2xl mx-auto">
             <h1 className="text-3xl font-bold mb-8">Book Your Appointment</h1>

             <div className="space-y-4">
               {/* Section 1: Personal Info */}
               <div className="bg-white rounded-xl shadow-md overflow-hidden">
                 <button 
                   onClick={() => toggleSection(1)}
                   className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50"
                 >
                   <div>
                     <h3 className="text-lg font-bold">1. Your Information</h3>
                     {formData.name && (
                       <p className="text-sm text-gray-600 mt-1">
                         {formData.name} • {formData.email}
                       </p>
                     )}
                   </div>
                   <span className="text-2xl">{expandedSection === 1 ? '−' : '+'}</span>
                 </button>
                 
                 {expandedSection === 1 && (
                   <div className="px-6 pb-6 space-y-4 border-t">
                     <div className="pt-4">
                       <label className="block font-medium mb-2">Full Name *</label>
                       <input 
                         type="text"
                         value={formData.name}
                         onChange={(e) => setFormData({...formData, name: e.target.value})}
                         className="w-full px-4 py-3 border rounded-lg"
                       />
                     </div>
                     <div>
                       <label className="block font-medium mb-2">Email *</label>
                       <input 
                         type="email"
                         value={formData.email}
                         onChange={(e) => setFormData({...formData, email: e.target.value})}
                         className="w-full px-4 py-3 border rounded-lg"
                       />
                     </div>
                     <div>
                       <label className="block font-medium mb-2">Phone *</label>
                       <input 
                         type="tel"
                         value={formData.phone}
                         onChange={(e) => setFormData({...formData, phone: e.target.value})}
                         className="w-full px-4 py-3 border rounded-lg"
                       />
                     </div>
                   </div>
                 )}
               </div>

               {/* Section 2: Doctor */}
               <div className="bg-white rounded-xl shadow-md overflow-hidden">
                 <button 
                   onClick={() => toggleSection(2)}
                   className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50"
                 >
                   <div>
                     <h3 className="text-lg font-bold">2. Choose Doctor</h3>
                     {formData.doctor && (
                       <p className="text-sm text-gray-600 mt-1">Selected: {formData.doctor}</p>
                     )}
                   </div>
                   <span className="text-2xl">{expandedSection === 2 ? '−' : '+'}</span>
                 </button>
                 
                 {expandedSection === 2 && (
                   <div className="px-6 pb-6 border-t pt-4 space-y-2">
                     {['Dr. Sarah Smith - Cardiology', 'Dr. Mike Jones - Pediatrics', 'Dr. Lisa Chen - Dermatology'].map(doc => (
                       <button
                         key={doc}
                         onClick={() => setFormData({...formData, doctor: doc})}
                         className={`w-full p-3 border-2 rounded-lg text-left ${
                           formData.doctor === doc ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
                         }`}
                       >
                         {doc}
                       </button>
                     ))}
                   </div>
                 )}
               </div>

               {/* Section 3: Date & Time */}
               <div className="bg-white rounded-xl shadow-md overflow-hidden">
                 <button 
                   onClick={() => toggleSection(3)}
                   className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50"
                 >
                   <div>
                     <h3 className="text-lg font-bold">3. Date & Time</h3>
                     {formData.date && formData.timeSlot && (
                       <p className="text-sm text-gray-600 mt-1">
                         {formData.date} at {formData.timeSlot}
                       </p>
                     )}
                   </div>
                   <span className="text-2xl">{expandedSection === 3 ? '−' : '+'}</span>
                 </button>
                 
                 {expandedSection === 3 && (
                   <div className="px-6 pb-6 border-t pt-4 space-y-4">
                     <div>
                       <label className="block font-medium mb-2">Date</label>
                       <input 
                         type="date"
                         value={formData.date}
                         onChange={(e) => setFormData({...formData, date: e.target.value})}
                         className="w-full px-4 py-3 border rounded-lg"
                       />
                     </div>
                     <div>
                       <label className="block font-medium mb-2">Time Slot</label>
                       <div className="grid grid-cols-3 gap-2">
                         {['9:00 AM', '10:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'].map(time => (
                           <button
                             key={time}
                             onClick={() => setFormData({...formData, timeSlot: time})}
                             className={`p-2 border-2 rounded-lg text-sm ${
                               formData.timeSlot === time ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
                             }`}
                           >
                             {time}
                           </button>
                         ))}
                       </div>
                     </div>
                   </div>
                 )}
               </div>
             </div>

             <button className="w-full mt-6 bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700">
               Confirm Booking
             </button>
           </div>
         </div>
       );
     }
     ```

#### Phase 4: Deliver (8 mins)

7. **Create Comparison Page** (4 mins)
   - Create `app/page.tsx` (homepage showing all versions):
     ```tsx
     export default function Home() {
       return (
         <div className="min-h-screen bg-gray-50 py-12 px-4">
           <div className="max-w-6xl mx-auto">
             <h1 className="text-4xl font-bold text-center mb-4">
               Doctor Booking App - Design Iterations
             </h1>
             <p className="text-center text-gray-600 mb-12">
               Double Diamond Framework Applied
             </p>

             <div className="grid md:grid-cols-3 gap-8">
               <VersionCard 
                 title="Bad Version"
                 description="Discover Phase: Problems identified"
                 href="/bad-version"
                 color="red"
                 metrics="15% completion rate"
               />
               <VersionCard 
                 title="Version A: Multi-Step"
                 description="Develop Phase: Progressive disclosure"
                 href="/version-a-multistep"
                 color="blue"
                 metrics="72% completion rate (predicted)"
               />
               <VersionCard 
                 title="Version B: Single-Page"
                 description="Develop Phase: Accordion sections"
                 href="/version-b-singlepage"
                 color="green"
                 metrics="68% completion rate (predicted)"
               />
             </div>

             <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
               <h2 className="text-2xl font-bold mb-6">Double Diamond Process</h2>
               <div className="grid md:grid-cols-4 gap-6">
                 <PhaseCard phase="Discover" description="Analyzed bad version, found 10 problems" />
                 <PhaseCard phase="Define" description="Problem: 15% completion, too overwhelming" />
                 <PhaseCard phase="Develop" description="Created 2 alternative designs" />
                 <PhaseCard phase="Deliver" description="Testing both versions with users" />
               </div>
             </div>
           </div>
         </div>
       );
     }

     function VersionCard({ title, description, href, color, metrics }: {
       title: string;
       description: string;
       href: string;
       color: string;
       metrics: string;
     }) {
       const colorClasses = {
         red: 'border-red-500 hover:bg-red-50',
         blue: 'border-blue-500 hover:bg-blue-50',
         green: 'border-green-500 hover:bg-green-50'
       };

       return (
         <a href={href} 
            className={`block bg-white p-6 rounded-xl border-l-4 ${colorClasses[color as keyof typeof colorClasses]} 
                        shadow-md hover:shadow-xl transition-all`}>
           <h3 className="text-xl font-bold mb-2">{title}</h3>
           <p className="text-gray-600 mb-4">{description}</p>
           <p className="text-sm font-semibold text-gray-700">{metrics}</p>
         </a>
       );
     }

     function PhaseCard({ phase, description }: { phase: string; description: string }) {
       return (
         <div className="text-center">
           <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
             <span className="text-2xl font-bold text-blue-600">
               {phase === 'Discover' ? '🔍' : phase === 'Define' ? '🎯' : phase === 'Develop' ? '💡' : '🚀'}
             </span>
           </div>
           <h4 className="font-bold mb-1">{phase}</h4>
           <p className="text-sm text-gray-600">{description}</p>
         </div>
       );
     }
     ```

8. **Document Design Decisions** (4 mins)
   - Create `docs/DELIVER-DECISIONS.md`:
     ```markdown
     # Deliver Phase - Design Decisions

     ## Versions Comparison:

     ### Version A: Multi-Step Form
     **Pros**:
     - Clear progress (users see Step 1 of 3)
     - One task at a time (low cognitive load)
     - Mobile-friendly (less scrolling)

     **Cons**:
     - More clicks (3 "Next" buttons)
     - Can't see all info at once
     - Harder to go back and edit

     **Best For**: Mobile users, low-tech-literacy users

     ### Version B: Single-Page Accordion
     **Pros**:
     - See all sections at once (overview)
     - Easy to edit previous sections
     - Faster for desktop users

     **Cons**:
     - More scrolling on mobile
     - Can feel overwhelming (3 sections visible)
     - Unclear what's required until you open sections

     **Best For**: Desktop users, tech-savvy users

     ## Recommended Next Step:
     **A/B Test** both versions with real users:
     - Track completion rate
     - Measure time to complete
     - Gather qualitative feedback

     ## Iteration Plan:
     - Week 5: Add form validation
     - Week 6: Add confirmation screen
     - Week 7: Integrate with backend
     - Week 8: Add user accounts
     - Week 9: Optimize based on analytics
     ```

### Key Teaching Points

1. **Double Diamond is Iterative**: We start with bad design → analyze → improve → test → repeat

2. **All Four Phases Matter**:
   - Discover: Without analyzing problems, we'd repeat mistakes
   - Define: Clear problem statement guides design
   - Develop: Multiple alternatives prevent tunnel vision
   - Deliver: Testing reveals which design actually works

3. **User-Centered Design**: Design decisions based on user needs (mobile-first, cognitive load), not aesthetics

## Demo 2: A/B Testing and Metrics (20 mins)

### Objective

Implement basic A/B testing infrastructure to compare the two designs from Demo 1 and simulate measuring their performance.

### Implementation Steps

1. **Create A/B Testing Dashboard** (12 mins)
   - Create `app/ab-test/page.tsx`:
     ```tsx
     'use client';
     import { useState, useEffect } from 'react';
     import { useRouter } from 'next/navigation';

     type Metrics = {
       versionA: { views: number; completions: number; avgTime: number };
       versionB: { views: number; completions: number; avgTime: number };
     };

     export default function ABTestDashboard() {
       const router = useRouter();
       const [metrics, setMetrics] = useState<Metrics>({
         versionA: { views: 247, completions: 178, avgTime: 142 },
         versionB: { views: 253, completions: 172, avgTime: 156 }
       });

       const calcRate = (completions: number, views: number) => 
         ((completions / views) * 100).toFixed(1);

       const startTest = (version: 'A' | 'B') => {
         // In real implementation, this would track the user session
         const route = version === 'A' ? '/version-a-multistep' : '/version-b-singlepage';
         router.push(route);
       };

       return (
         <div className="min-h-screen bg-gray-50 py-12 px-4">
           <div className="max-w-6xl mx-auto">
             <h1 className="text-4xl font-bold mb-4">A/B Test Dashboard</h1>
             <p className="text-gray-600 mb-12">
               Testing: Multi-Step Form vs. Single-Page Accordion
             </p>

             {/* Metrics Comparison */}
             <div className="grid md:grid-cols-2 gap-8 mb-8">
               {/* Version A */}
               <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                 <div className="flex justify-between items-start mb-6">
                   <div>
                     <h2 className="text-2xl font-bold mb-1">Version A</h2>
                     <p className="text-gray-600">Multi-Step Form</p>
                   </div>
                   <button 
                     onClick={() => startTest('A')}
                     className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                   >
                     Test It
                   </button>
                 </div>

                 <div className="space-y-4">
                   <Metric 
                     label="Completion Rate"
                     value={`${calcRate(metrics.versionA.completions, metrics.versionA.views)}%`}
                     subtext={`${metrics.versionA.completions}/${metrics.versionA.views} completed`}
                     color="blue"
                   />
                   <Metric 
                     label="Avg. Time to Complete"
                     value={`${metrics.versionA.avgTime}s`}
                     subtext="2 minutes 22 seconds"
                     color="blue"
                   />
                   <Metric 
                     label="Drop-off Point"
                     value="Step 2"
                     subtext="12% abandon after Step 1"
                     color="blue"
                   />
                 </div>
               </div>

               {/* Version B */}
               <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
                 <div className="flex justify-between items-start mb-6">
                   <div>
                     <h2 className="text-2xl font-bold mb-1">Version B</h2>
                     <p className="text-gray-600">Single-Page Accordion</p>
                   </div>
                   <button 
                     onClick={() => startTest('B')}
                     className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                   >
                     Test It
                   </button>
                 </div>

                 <div className="space-y-4">
                   <Metric 
                     label="Completion Rate"
                     value={`${calcRate(metrics.versionB.completions, metrics.versionB.views)}%`}
                     subtext={`${metrics.versionB.completions}/${metrics.versionB.views} completed`}
                     color="green"
                   />
                   <Metric 
                     label="Avg. Time to Complete"
                     value={`${metrics.versionB.avgTime}s`}
                     subtext="2 minutes 36 seconds"
                     color="green"
                   />
                   <Metric 
                     label="Drop-off Point"
                     value="Section 3"
                     subtext="15% abandon at date/time"
                     color="green"
                   />
                 </div>
               </div>
             </div>

             {/* Winner Analysis */}
             <div className="bg-white p-8 rounded-xl shadow-lg">
               <h2 className="text-2xl font-bold mb-6">Statistical Analysis</h2>
               
               <div className="grid md:grid-cols-3 gap-6 mb-6">
                 <AnalysisCard 
                   title="Winner"
                   value="Version A"
                   detail="+4.0% completion rate"
                   winner
                 />
                 <AnalysisCard 
                   title="Confidence Level"
                   value="95%"
                   detail="Statistically significant"
                 />
                 <AnalysisCard 
                   title="Sample Size"
                   value="500 users"
                   detail="Adequate for decision"
                 />
               </div>

               <div className="bg-blue-50 p-6 rounded-lg">
                 <h3 className="font-bold mb-3">Recommendation:</h3>
                 <p className="text-gray-700 mb-3">
                   <strong>Implement Version A (Multi-Step)</strong> for production. Higher completion rate (72.1% vs 68.0%) 
                   and faster completion time make it the winner.
                 </p>
                 <p className="text-gray-600 text-sm">
                   <strong>Next iteration:</strong> Combine best features - use multi-step flow from Version A, 
                   but add "Edit" links to previous steps (inspired by Version B's accordion).
                 </p>
               </div>
             </div>

             {/* What We Measure */}
             <div className="mt-8 bg-white p-8 rounded-xl shadow-lg">
               <h3 className="text-xl font-bold mb-4">Key Metrics in A/B Testing:</h3>
               <div className="grid md:grid-cols-2 gap-6">
                 <div>
                   <h4 className="font-semibold mb-2">Quantitative Metrics:</h4>
                   <ul className="space-y-1 text-gray-700 text-sm">
                     <li>• <strong>Completion Rate:</strong> % who finish booking</li>
                     <li>• <strong>Time to Complete:</strong> How long it takes</li>
                     <li>• <strong>Drop-off Points:</strong> Where users abandon</li>
                     <li>• <strong>Error Rate:</strong> Invalid form submissions</li>
                     <li>• <strong>Return Rate:</strong> Users who come back</li>
                   </ul>
                 </div>
                 <div>
                   <h4 className="font-semibold mb-2">Qualitative Feedback:</h4>
                   <ul className="space-y-1 text-gray-700 text-sm">
                     <li>• <strong>User Interviews:</strong> "Why did you stop?"</li>
                     <li>• <strong>Surveys:</strong> "How easy was this? (1-5)"</li>
                     <li>• <strong>Session Recordings:</strong> Watch user behavior</li>
                     <li>• <strong>Heatmaps:</strong> Where do users click?</li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
         </div>
       );
     }

     function Metric({ label, value, subtext, color }: {
       label: string;
       value: string;
       subtext: string;
       color: 'blue' | 'green';
     }) {
       return (
         <div>
           <p className="text-sm text-gray-600 mb-1">{label}</p>
           <p className={`text-3xl font-bold ${color === 'blue' ? 'text-blue-600' : 'text-green-600'}`}>
             {value}
           </p>
           <p className="text-xs text-gray-500">{subtext}</p>
         </div>
       );
     }

     function AnalysisCard({ title, value, detail, winner }: {
       title: string;
       value: string;
       detail: string;
       winner?: boolean;
     }) {
       return (
         <div className={`p-4 rounded-lg ${winner ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
           <p className="text-sm text-gray-600 mb-1">{title}</p>
           <p className={`text-2xl font-bold mb-1 ${winner ? 'text-green-700' : 'text-gray-900'}`}>
             {value}
           </p>
           <p className="text-xs text-gray-600">{detail}</p>
         </div>
       );
     }
     ```

2. **Add Analytics Tracking (Concept Demo)** (8 mins)
   - Create `app/components/AnalyticsTracker.tsx`:
     ```tsx
     'use client';
     import { useEffect } from 'react';

     export function AnalyticsTracker({ 
       eventName, 
       version 
     }: { 
       eventName: string; 
       version: 'A' | 'B'; 
     }) {
       useEffect(() => {
         // In real implementation, this would send to analytics service
         console.log(`📊 Event: ${eventName}, Version: ${version}, Time: ${new Date().toISOString()}`);
         
         // Example: Track to Google Analytics
         // window.gtag('event', eventName, { version, timestamp: Date.now() });
         
         // Example: Track to custom backend
         // fetch('/api/analytics', {
         //   method: 'POST',
         //   body: JSON.stringify({ event: eventName, version, timestamp: Date.now() })
         // });
       }, [eventName, version]);

       return null; // This component doesn't render anything
     }

     // Usage example:
     // <AnalyticsTracker eventName="form_step_1_complete" version="A" />
     ```

   - Update `app/version-a-multistep/page.tsx` to add tracking (show students how):
     ```tsx
     import { AnalyticsTracker } from '../components/AnalyticsTracker';

     // Add in component:
     {step === 1 && (
       <>
         <AnalyticsTracker eventName="view_step_1" version="A" />
         {/* ...existing Step 1 content... */}
       </>
     )}

     // Add when user clicks "Next":
     onClick={() => {
       setStep(step + 1);
       // Track progression
       console.log(`User completed step ${step}`);
     }}
     ```

### Key Teaching Points

1. **A/B Testing Essentials**:
   - Test ONE variable (multi-step vs single-page)
   - Need sufficient sample size (500+ users)
   - Statistical significance matters (95% confidence)

2. **Metrics Drive Decisions**:
   - Don't design based on opinions
   - Let data guide iteration
   - Combine quantitative + qualitative

3. **Iteration is Continuous**:
   - Winner becomes new baseline
   - Next A/B test: Add features to winning version
   - Always be improving

## Student Exercise: Apply Double Diamond to Your Portfolio (10 mins)

### Guided Activity

**Scenario**: Your Week 01 portfolio website needs improvement.

**Task**: Apply Double Diamond to redesign your portfolio homepage.

1. **Discover** (2 mins):
   - List 3 problems with your current portfolio
   - Example: "No clear CTA", "Projects buried below fold", "Loads slowly"

2. **Define** (2 mins):
   - Write problem statement: "Visitors leave without seeing my work because..."
   - Success criteria: "Visitor sees 3 projects within 5 seconds"

3. **Develop** (4 mins):
   - Sketch 2 alternative layouts (paper or Figma)
   - Alternative A: Grid of project cards
   - Alternative B: Full-screen hero with featured project

4. **Deliver** (2 mins):
   - Pick one alternative to implement
   - Explain why (based on your problem statement)

### Deliverable

- Brief design document:
  - Discover findings (3 problems)
  - Define (problem statement + success criteria)
  - Develop (2 alternatives described or sketched)
  - Deliver (chosen design + rationale)

### Success Criteria

- All 4 Diamond phases documented
- Design choices justified by problem analysis
- At least 2 alternatives considered
- Demonstrates iterative thinking

## Project Structure

```
Week04/doctor-booking-v1/
├── README.md
├── QUICKSTART.md
├── docs/
│   ├── DISCOVER-FINDINGS.md       # Problems with bad version
│   ├── DEFINE-PROBLEM.md          # Problem statement & requirements
│   └── DELIVER-DECISIONS.md       # Design comparison & rationale
├── app/
│   ├── page.tsx                   # Homepage (version comparison)
│   ├── bad-version/page.tsx       # Deliberately poor design
│   ├── version-a-multistep/page.tsx  # Progressive disclosure
│   ├── version-b-singlepage/page.tsx # Accordion approach
│   ├── ab-test/page.tsx           # A/B testing dashboard
│   └── components/
│       └── AnalyticsTracker.tsx   # Event tracking component
└── public/
```

## AI Agent Implementation Notes

### For Cursor/Codex Implementation

1. **Component Creation Order**:
   ```
   Step 1: Create bad-version (deliberately poor design)
   Step 2: Document problems in DISCOVER-FINDINGS.md
   Step 3: Create problem statement in DEFINE-PROBLEM.md
   Step 4: Build version-a-multistep (progressive 3-step form)
   Step 5: Build version-b-singlepage (accordion sections)
   Step 6: Create homepage comparison page
   Step 7: Build A/B test dashboard
   Step 8: Add AnalyticsTracker component
   Step 9: Document decisions in DELIVER-DECISIONS.md
   ```

2. **Acceptance Criteria**:
   - Bad version demonstrates 10 UX problems clearly
   - Version A has functional 3-step form with progress indicator
   - Version B has functional accordion with expand/collapse
   - Homepage shows all 3 versions with links
   - A/B dashboard displays metrics comparison
   - Analytics tracker logs events to console
   - All versions are responsive (mobile + desktop)
   - Documentation explains each design decision

3. **Key Interactions to Test**:
   - Bad version: Form is frustrating to use (test it!)
   - Version A: Click through all 3 steps, use Back button
   - Version B: Open/close accordion sections
   - Homepage: Navigate between versions
   - A/B dashboard: Click "Test It" buttons

4. **Teaching Moments**:
   - Show bad version first → students experience the pain
   - Compare versions side-by-side → discuss trade-offs
   - A/B dashboard → emphasize data-driven decisions
   - Ask: "Which version do YOU prefer? Now let's see what data says."

5. **Double Diamond Application**:
   - **Discover**: Heuristic evaluation of bad design
   - **Define**: Clear problem statement with measurable goals
   - **Develop**: Multiple alternatives (not just one solution)
   - **Deliver**: Choose based on testing, not assumptions

6. **Connection to Future Weeks**:
   - Week 5: Add form validation to winning version
   - Week 6: Add backend integration
   - Week 7: Add user accounts and saved bookings
   - Week 8: Optimize performance
   - Week 9: Final testing and deployment

---

**Estimated Total Time**: 65 minutes (35 + 20 + 10)

**Tech Stack**: Next.js 16, TypeScript, Tailwind CSS 4.2

**Focus**: Double Diamond methodology applied hands-on. Students learn design is iterative - discover problems, define clearly, develop alternatives, deliver based on testing.

**Key Outcome**: Students complete their first full design process from problem discovery to tested solution. They understand why we don't just "code the first idea" - iteration and testing are essential.

**Continuity**: This doctor booking app becomes the foundation for Weeks 5-9, where students will progressively enhance it with validation, backend, authentication, optimization, and comprehensive testing.
