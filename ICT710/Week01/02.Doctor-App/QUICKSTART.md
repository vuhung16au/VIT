# Quick Start Guide

This app includes the Week 01 homepage demo for Interaction Design, including the new `DoctorSearch` component and updated navigation flow.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. Navigate to the project directory:
```bash
cd Week01/02.Doctor-App
```

2. Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
02.Doctor-App/
├── src/
│   ├── components/     # Shared components (Navigation, Footer, DoctorSearch)
│   ├── pages/          # Page components (Home, Doctors, Booking, etc.)
│   ├── App.jsx         # Main routing component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles and Tailwind CSS
├── public/             # Static assets
├── index.html          # HTML entry point
└── package.json        # Dependencies and scripts
```

## Key Features

- **Week 01 Demo Homepage**: Hero section with prominent CTAs and animated interaction states
- **Doctor Search Preview**: Type a doctor name or condition and see live feedback instantly
- **Video Consultations**: Book online appointments with doctors
- **Doctor Search**: Find doctors by name or specialty
- **Multi-step Booking**: Easy appointment booking process
- **Medical Records**: View appointment history and prescriptions
- **Responsive Design**: Works on all devices

## Demo Flow

1. Open the homepage.
2. Hover and click `Book Appointment Now` to see the interaction feedback.
3. Use the homepage search card and observe the live preview update.
4. Continue to the doctor listing, booking flow, and records pages.

## Technology Stack

- React 18.2.0
- Vite 5.1.0
- Tailwind CSS 3.4.1
- React Router DOM 6.22.0
