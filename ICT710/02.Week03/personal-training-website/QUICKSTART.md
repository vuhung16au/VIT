# QUICKSTART

Welcome to the Personal Training Website. This file provides a quick overview of the site's features and how users will navigate it.

## Overview

The website is designed to be fully responsive (optimized for mobile, tablet, and desktop view) with an energetic color scheme (shades of blue, green, and orange). It acts as the digital storefront for the business.

## Site Navigation

The website features a **Floating Navigation Menu** that stays accessible as users scroll, making it simple to jump between main sections:

1. **Home (`/`)**: 
   - Welcoming Hero section
   - Unique Selling Points (USPs)
   - Call-To-Action to explore services

2. **Services (`/services`)**: 
   - Outlines offerings: PT Sessions, Group Fitness, Online Coaching
   - "Book Now" buttons linking to the Google Form booking flow

3. **Testimonials (`/testimonials`)**: 
   - Static client success stories designed to build trust
   
4. **Contact (`/contact`)**: 
   - Mock contact form
   - Business location and social media links

## Booking Flow

For the first phase, there is no complex calendar integration. Instead:
- Visitors click "Book Now" buttons across various sections (e.g., Services, Home).
- The button opens an external (or embedded) Google Form.
- The business owner receives the booking request via Google Forms and manages the schedule manually.
- This keeps the system lightweight, with the option to integrate tools like Calendly or custom APIs in future phases.

## Multilingual Support

The foundation for English and Hindi language support is set within the routing structure. Visitors can view content targeted to their preferred language. (Implementation details depend on the approach chosen, e.g., Next.js i18n routing).
