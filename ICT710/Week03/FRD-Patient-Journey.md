# Overview

Create a demo for the doctor booking application that illustrates the holistic patient journey, from feeling unwell to receiving care. 

The demo should highlight key IxD/UX concepts such as 
- cognitive load reduction, 
- social interaction facilitation, 
- and emotional design. 
  
  
Use specific UI elements to demonstrate how the application supports users through each stage of their healthcare experience.

### Demo Title: "The Patient Journey"

**Scenario:** A user is feeling unwell, needs to find a specialist, book a remote appointment, and conduct a video consultation.

---

### Scene 1: Understanding User Experience (The Holistic Journey)

* **The Demo Action:** Walk the students through the entire application flow, from the initial onboarding screen to the post-consultation prescription download.
* **The IxD/UX Concept:** Emphasize that UX is not just the booking button; it is the entire ecosystem of the interaction.
* **UI Highlight:** Show a "Journey Map" dashboard. Instead of just a booking screen, the home page displays the user's current status (e.g., "Step 1: Find a Doctor" ➔ "Step 2: Video Consult" ➔ "Step 3: Get Medicine"). This illustrates that the app understands the user's overarching goal (getting better), not just the technical task (booking a time slot).

### Scene 2: Cognitive Aspects (Reducing Mental Effort)

* 
**The Demo Action:** Show the "Specialist Search & Booking" interface.


* **The IxD/UX Concept:** Focus on minimizing cognitive load (memory, attention, and learning). Sick users have depleted mental energy.
* **UI Highlight:** * **Recognition over Recall:** Instead of a blank search bar requiring the user to type complex medical terms (e.g., "Otolaryngologist"), use large, clear icons for "Ear, Nose, & Throat," "Heart," or "General Physician."
* **Progressive Disclosure:** Break the booking form into bite-sized steps. Ask for symptoms first, then date, then payment, rather than presenting one massive, overwhelming web form.



### Scene 3: Social Interaction (Facilitating Human Connection)

* 
**The Demo Action:** Demonstrate the "Waiting Room" and the "Online Video Consultation" screen.


* **The IxD/UX Concept:** Show how digital interfaces mediate human-to-human relationships, compensating for the lack of physical presence.
* **UI Highlight:** * **Remote Conversation:** Incorporate a live "Doctor is reviewing your notes..." typing indicator in the waiting room chat to provide social presence before the call starts.
* **Co-presence:** During the video call, include a split-screen feature where the doctor can bring up a medical diagram or x-ray, and both the doctor and patient can point to it simultaneously using their cursors/fingers.



### Scene 4: Emotional Interaction (Designing for Trust and Calm)

* **The Demo Action:** Show an "Error" screen (e.g., a failed payment or dropped connection) and the "Doctor Profile" screen.
* **The IxD/UX Concept:** Medical apps inherently trigger anxiety and vulnerability. The interface must actively manage the user's emotional state.
* **UI Highlight:**
* **Aesthetics:** Use a calming color palette (soft blues, greens, and plenty of whitespace) rather than alarming reds or stark, clinical blacks.
* **Empathetic Microcopy:** If the video call drops, the error message shouldn't say *"Error 404: Connection Terminated."* It should read, *"We lost connection, but don't worry! Dr. Smith is waiting for you. Reconnect here."*
* **Humanizing the System:** The doctor's profile should feature a warm, smiling headshot and a short, welcoming bio to build emotional trust before the physical interaction begins.

Build screens to showcase the ideas above. 

The number of the screens in this workflow should be 4 or less.

Techstack: 
- Tailwind CSS latest 
- Next.js latest 

Save your response to 

02.Week03/patient-journey

Include: 
- README.md: Overview of the project
- QUICKSTART.md: How to build and run the project 
- docs/Key-Takeaways.md: for students learning UI/UX, IxD 

Focus on:
- The frontend, 
- Showcasing the UI/UX, IxD 

Do NOT:
- Implement the backend logic

You can use dummy data. 


# implement new pages for the app patient-journey

link these page from the index.html (home page) to explain

key takeaways
how the key concepts are illustrated in this design, including:

- Understanding user experience
- Cognitive Aspects
- Social Interaction
- Emotional Interaction