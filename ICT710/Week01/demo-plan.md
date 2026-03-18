# Week 01 Demo Plan: Introduction to Interaction Design

## Week Overview

Week 01 introduces Interaction Design (IxD) fundamentals - the difference between UI, UX, and IxD, and demonstrates these concepts through building a simple doctor booking interface. Students will create their first interactive prototype while learning IxD components (motion, space, time) and understanding the importance of user-centered thinking.

## Learning Objectives

- Understand the difference between UI, UX, and Interaction Design
- Identify components of IxD (motion, space, layout, time, sound)
- Recognize good vs bad design through real-world examples
- Create a basic interactive interface using Next.js and Tailwind CSS
- Apply fundamental IxD principles to a healthcare booking scenario
- Use AI coding tools (GitHub Copilot) effectively

## Demo 1: Building Your First Interactive Interface (30 mins)

### Objective

Create a simple doctor booking homepage that demonstrates basic IxD principles: clear navigation, visual feedback, and intuitive layout.

### Prerequisites

- Completed Week 00 setup
- Next.js 16 project ready
- Tailwind CSS configured
- VS Code with GitHub Copilot

### Implementation Steps

1. **Create New Project for Doctor Booking App** (3 mins)
   - Open terminal, navigate to ICT710-demos folder
   - Create new Next.js project:
     ```bash
     npx create-next-app@latest doctor-booking --typescript --tailwind --app --no-src-dir
     cd doctor-booking
     npm run dev
     ```
   - Open http://localhost:3000
   - Open project in VS Code: `code .`

2. **Design the Homepage Layout** (8 mins)
   - Edit `app/page.tsx` - create homepage structure:
     ```tsx
     export default function Home() {
       return (
         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
           {/* Header */}
           <header className="bg-white shadow-sm">
             <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
               <h1 className="text-2xl font-bold text-blue-600">HealthCare+</h1>
               <div className="space-x-4">
                 <a href="#" className="text-gray-600 hover:text-blue-600">Find Doctors</a>
                 <a href="#" className="text-gray-600 hover:text-blue-600">My Bookings</a>
                 <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                   Sign In
                 </button>
               </div>
             </nav>
           </header>

           {/* Hero Section */}
           <main className="max-w-7xl mx-auto px-4 py-16">
             <div className="text-center mb-12">
               <h2 className="text-5xl font-bold text-gray-900 mb-4">
                 Book Your Doctor Appointment Online
               </h2>
               <p className="text-xl text-gray-600 mb-8">
                 Quick, safe, and convenient healthcare at your fingertips
               </p>
               <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-transform">
                 Book Appointment Now
               </button>
             </div>

             {/* Feature Cards */}
             <div className="grid md:grid-cols-3 gap-8 mt-16">
               <FeatureCard 
                 title="Video Consultation"
                 description="Connect with doctors via video call from home"
                 icon="🎥"
               />
               <FeatureCard 
                 title="In-Person Visit"
                 description="Schedule face-to-face appointments"
                 icon="🏥"
               />
               <FeatureCard 
                 title="Specialist Booking"
                 description="Find and book specialist doctors easily"
                 icon="👨‍⚕️"
               />
             </div>
           </main>
         </div>
       );
     }

     function FeatureCard({ title, description, icon }: {
       title: string;
       description: string;
       icon: string;
     }) {
       return (
         <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer">
           <div className="text-4xl mb-4">{icon}</div>
           <h3 className="text-xl font-semibold mb-2">{title}</h3>
           <p className="text-gray-600">{description}</p>
         </div>
       );
     }
     ```
   - Save file, view at http://localhost:3000

3. **Add Interactive Button States** (5 mins)
   - Demonstrate IxD principle: **Visual Feedback**
   - Update "Book Appointment" button to show interaction:
     ```tsx
     <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold 
                        hover:bg-blue-700 hover:scale-105 active:scale-95 
                        transition-all duration-200 shadow-lg hover:shadow-xl">
       Book Appointment Now
     </button>
     ```
   - Explain each class:
     - `hover:bg-blue-700`: Changes color on hover (visual feedback)
     - `hover:scale-105`: Slightly enlarges button (motion design)
     - `active:scale-95`: Button "presses down" when clicked (time/response)
     - `transition-all duration-200`: Smooth animation (motion design)
     - `shadow-lg hover:shadow-xl`: Shadow depth increases (space/depth)

4. **Create Doctor Search Component** (8 mins)
   - Create `app/components/DoctorSearch.tsx`:
     ```tsx
     'use client';
     import { useState } from 'react';

     export default function DoctorSearch() {
       const [searchQuery, setSearchQuery] = useState('');
       const [specialty, setSpecialty] = useState('');

       return (
         <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
           <h3 className="text-2xl font-bold mb-6">Find Your Doctor</h3>
           
           <div className="space-y-4">
             {/* Search Input */}
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">
                 Doctor Name or Condition
               </label>
               <input 
                 type="text"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 placeholder="Search for doctor or medical condition..."
                 className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                            focus:ring-2 focus:ring-blue-500 focus:border-transparent
                            transition-all"
               />
             </div>

             {/* Specialty Dropdown */}
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">
                 Specialty
               </label>
               <select 
                 value={specialty}
                 onChange={(e) => setSpecialty(e.target.value)}
                 className="w-full px-4 py-3 border border-gray-300 rounded-lg
                            focus:ring-2 focus:ring-blue-500 focus:border-transparent"
               >
                 <option value="">All Specialties</option>
                 <option value="cardiology">Cardiology</option>
                 <option value="dermatology">Dermatology</option>
                 <option value="pediatrics">Pediatrics</option>
                 <option value="orthopedics">Orthopedics</option>
               </select>
             </div>

             {/* Search Button */}
             <button className="w-full bg-blue-600 text-white py-3 rounded-lg
                                hover:bg-blue-700 transition-colors font-semibold">
               Search Doctors
             </button>

             {/* Search Results Preview */}
             {searchQuery && (
               <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                 <p className="text-sm text-blue-800">
                   Searching for: <strong>{searchQuery}</strong>
                   {specialty && <> in <strong>{specialty}</strong></>}
                 </p>
               </div>
             )}
           </div>
         </div>
       );
     }
     ```
   
   - Import in `app/page.tsx` (add below Feature Cards):
     ```tsx
     import DoctorSearch from './components/DoctorSearch';
     
     // Add in main section:
     <div className="mt-16">
       <DoctorSearch />
     </div>
     ```

5. **Demonstrate IxD Principles in Action** (6 mins)
   - **Component 1: Motion Design**
     - Hover over buttons → smooth color change and scale
     - Click button → press animation
   
   - **Component 2: Visual Feedback** 
     - Type in search box → border changes color (focus state)
     - Text appears in preview box as you type
   
   - **Component 3: Space & Layout**
     - Card shadows create depth hierarchy
     - White space around elements improves readability
     - Grid layout organizes feature cards
   
   - **Component 4: Time (Responsiveness)**
     - Instant feedback when typing (no delay)
     - Smooth transitions (200ms duration)
     - Form updates live as user interacts

### Code Structure

```
Week01/doctor-booking/
├── app/
│   ├── page.tsx                 # Homepage with hero section
│   ├── components/
│   │   └── DoctorSearch.tsx    # Interactive search component
│   └── layout.tsx              # Root layout
├── public/
├── README.md
└── package.json
```

### Key Teaching Points

1. **IxD ≠ Just UI**: IxD includes behavior, feedback, and user flow, not just visual design

2. **Components of IxD Demonstrated**:
   - **Motion**: Button hover effects, scale transitions
   - **Space**: Card shadows, padding, margins create visual hierarchy
   - **Time**: Instant feedback, transition durations
   - **Visual Feedback**: Focus states, hover states, live search preview

3. **User-Centered Thinking**:
   - Clear CTA (Call-to-Action): "Book Appointment Now"
   - Searchable by doctor name OR condition (flexible)
   - Live preview shows what you're searching
   - Familiar patterns (search box, dropdown)

4. **Good Design Principles Applied**:
   - Consistency: All buttons have same blue color
   - Feedback: Every interaction has visual response
   - Simplicity: Homepage shows only essential info
   - Accessibility: Focus states for keyboard navigation

## Demo 2: Good vs Bad Design Comparison (15 mins)

### Objective

Create two versions of the same booking form - one with good IxD, one deliberately bad - to illustrate IxD principles.

### Implementation Steps

1. **Create Bad Design Example** (5 mins)
   - Create `app/bad-design/page.tsx`:
     ```tsx
     export default function BadDesign() {
       return (
         <div style={{ backgroundColor: 'yellow', padding: '10px' }}>
           <h1 style={{ color: 'red', fontSize: '12px' }}>Doctor Booking</h1>
           <form>
             <input type="text" placeholder="name" style={{ width: '100px' }} />
             <input type="text" placeholder="email" />
             <select>
               <option>dr</option>
             </select>
             <button type="submit" style={{ backgroundColor: 'lime' }}>
               SUBMIT NOW!!!
             </button>
           </form>
         </div>
       );
     }
     ```
   - Visit http://localhost:3000/bad-design
   - Identify problems:
     - ❌ Tiny heading (12px), red on yellow (poor contrast)
     - ❌ No labels on inputs
     - ❌ Inconsistent input widths
     - ❌ Unclear dropdown option ("dr"?)
     - ❌ Shouty button text ("SUBMIT NOW!!!")
     - ❌ No visual hierarchy
     - ❌ No feedback on hover/focus

2. **Create Good Design Example** (7 mins)
   - Create `app/good-design/page.tsx`:
     ```tsx
     'use client';
     import { useState } from 'react';

     export default function GoodDesign() {
       const [formData, setFormData] = useState({
         name: '',
         email: '',
         doctor: ''
       });

       return (
         <div className="min-h-screen bg-gray-50 py-12 px-4">
           <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
             <h1 className="text-3xl font-bold text-gray-900 mb-6">
               Book Your Appointment
             </h1>
             
             <form className="space-y-6">
               {/* Name Input */}
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">
                   Full Name *
                 </label>
                 <input 
                   type="text"
                   required
                   value={formData.name}
                   onChange={(e) => setFormData({...formData, name: e.target.value})}
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg
                              focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                   placeholder="Enter your full name"
                 />
               </div>

               {/* Email Input */}
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">
                   Email Address *
                 </label>
                 <input 
                   type="email"
                   required
                   value={formData.email}
                   onChange={(e) => setFormData({...formData, email: e.target.value})}
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg
                              focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                   placeholder="your.email@example.com"
                 />
               </div>

               {/* Doctor Selection */}
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">
                   Select Doctor *
                 </label>
                 <select 
                   required
                   value={formData.doctor}
                   onChange={(e) => setFormData({...formData, doctor: e.target.value})}
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg
                              focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                 >
                   <option value="">Choose a doctor</option>
                   <option value="dr-smith">Dr. Sarah Smith - Cardiology</option>
                   <option value="dr-jones">Dr. Mike Jones - Pediatrics</option>
                   <option value="dr-chen">Dr. Lisa Chen - Dermatology</option>
                 </select>
               </div>

               {/* Submit Button */}
               <button 
                 type="submit"
                 className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold
                            hover:bg-blue-700 transition-colors"
               >
                 Confirm Booking
               </button>
             </form>
           </div>
         </div>
       );
     }
     ```
   - Visit http://localhost:3000/good-design

3. **Side-by-Side Comparison** (3 mins)
   - Open both URLs in split screen
   - Identify good design features:
     - ✅ Clear, large heading (visual hierarchy)
     - ✅ Labels on all inputs (clarity)
     - ✅ Consistent widths (visual consistency)
     - ✅ Descriptive placeholders (guidance)
     - ✅ Focus states (visual feedback)
     - ✅ Full doctor names + specialty (informativeness)
     - ✅ Clear button text (action-oriented)
     - ✅ Required field indicators (*)
     - ✅ Good contrast ratios (accessibility)

### Key Teaching Points

1. **Visual Hierarchy**: Important elements (heading, button) stand out

2. **Consistency**: All inputs same width, same border style, same focus color

3. **Feedback**: Focus states show which field is active

4. **Clarity**: Labels, placeholders, and descriptive options guide users

5. **Trust**: Professional appearance builds user confidence

## Student Exercise: Improve an Interface (10 mins)

### Guided Activity

**Task**: Take the bad design and fix 3 specific IxD problems.

1. **Identify Problems** (3 mins)
   - Students list 3 problems with bad design:
     - Problem 1: _______________
     - Problem 2: _______________
     - Problem 3: _______________

2. **Fix the Problems** (5 mins)
   - Fork the bad-design page
   - Apply fixes using Tailwind CSS classes
   - Example fixes:
     ```tsx
     // Fix 1: Add labels
     <label className="block mb-1">Full Name</label>
     <input ... />
     
     // Fix 2: Make inputs consistent width
     <input className="w-full px-4 py-2 border rounded" />
     
     // Fix 3: Add focus states
     <input className="focus:ring-2 focus:ring-blue-500" />
     ```

3. **Share Results** (2 mins)
   - Students show before/after screenshots
   - Class votes: Which fix had biggest impact?

### Deliverable

- Updated page with 3 improvements
- Brief explanation of each fix
- Screenshot comparison (before/after)

### Success Criteria

- At least 3 visible improvements
- Improvements follow IxD principles
- Page is more usable than original

## Project Structure

```
Week01/doctor-booking/
├── README.md                       # Project overview
├── QUICKSTART.md                   # <5 min setup
├── docs/
│   └── Key-Takeaways.md           # IxD principles learned
├── app/
│   ├── page.tsx                   # Good homepage
│   ├── good-design/page.tsx       # Good form example
│   ├── bad-design/page.tsx        # Bad form (for comparison)
│   └── components/
│       └── DoctorSearch.tsx       # Interactive search
└── public/
```

## AI Agent Implementation Notes

### For Cursor/Codex Implementation

1. **Component Creation Order**:
   ```
   Step 1: Create homepage with hero section
   Step 2: Add FeatureCard component
   Step 3: Build DoctorSearch component
   Step 4: Create bad-design example
   Step 5: Create good-design example
   Step 6: Add interactive states (hover, focus, active)
   ```

2. **Acceptance Criteria**:
   - Homepage loads with hero section and 3 feature cards
   - DoctorSearch component shows live search preview
   - All buttons have hover/active states
   - Form inputs have focus states (blue ring)
   - Bad design page demonstrates poor IxD
   - Good design page demonstrates strong IxD
   - Responsive layout works on mobile

3. **Tailwind Classes to Emphasize**:
   - **Spacing**: `p-4`, `px-8`, `py-3`, `space-y-4`, `gap-8`
   - **Colors**: `bg-blue-600`, `text-white`, `hover:bg-blue-700`
   - **Transitions**: `transition-all`, `duration-200`
   - **States**: `hover:`, `focus:`, `active:`
   - **Shadows**: `shadow-md`, `shadow-lg`, `hover:shadow-xl`
   - **Transforms**: `scale-105`, `active:scale-95`

4. **IxD Principles to Highlight**:
   - Motion: Smooth transitions, hover effects
   - Space: Card shadows, padding, white space
   - Time: Instant feedback, 200ms transitions
   - Visual Feedback: Focus rings, hover states
   - Consistency: Same styles across elements
   - Clarity: Labels, placeholders, clear CTAs

5. **Testing Prompts**:
   - Hover over buttons → should change color and/or scale
   - Click button → should show active state
   - Focus input → should show blue ring
   - Type in search → should show live preview
   - Compare bad vs good design → obvious differences
   - Mobile view → should be responsive

6. **GitHub Copilot Tips for Students**:
   - Start typing `function FeatureCard` → Copilot suggests component
   - Type comment `// Add hover effect` → Copilot suggests Tailwind classes
   - Type `className="` → Copilot suggests relevant classes

---

**Estimated Total Time**: 55 minutes (30 + 15 + 10)

**Tech Stack**: Next.js 16, TypeScript, Tailwind CSS 4.2

**Focus**: Introduction to IxD through hands-on coding. Students learn by building and comparing good vs bad design, seeing immediate visual feedback.

**Key Outcome**: Students understand IxD is more than visual design - it's about behavior, feedback, and user experience.
