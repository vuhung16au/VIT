# Personal Portfolio Website - Quick Start Guide

## Overview

This is a modern personal portfolio website built with React and Tailwind CSS. It features a responsive design, dark/light theme toggle, and smooth scrolling navigation.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Bun** (version 1.0 or higher)

You can check if it's installed by running:

```bash
bun --version
```

## Installation

1. **Navigate to the project directory:**

```bash
cd ICT710/00.Week01/01.Create-Personal-Website
```

2. **Install dependencies:**

```bash
bun install
```

This will install all the required packages including:
- React
- Vite (build tool)
- Tailwind CSS
- React Icons

## Running the Development Server

To start the development server and view the website locally:

```bash
bun run dev
```

The website will be available at `http://localhost:5173` (or another port if 5173 is in use).

The development server includes:
- Hot Module Replacement (HMR) - changes are reflected instantly
- Fast Refresh - preserves component state while editing

## Building for Production

To create an optimized production build:

```bash
bun run build
```

The built files will be in the `dist` folder, ready to deploy to any static hosting service.

## Preview Production Build

To preview the production build locally:

```bash
bun run preview
```

## Project Structure

```
01.Create-Personal-Website/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # Navigation bar with theme toggle
│   │   ├── Home.jsx          # Hero section
│   │   ├── About.jsx         # About Me section
│   │   ├── Projects.jsx      # Projects showcase
│   │   └── Contact.jsx       # Contact form and social links
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles and Tailwind imports
├── index.html                # HTML template
├── package.json              # Project dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── postcss.config.js         # PostCSS configuration
```

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between dark and light modes (default is dark)
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Elements**: Hover effects and animations
- **Modern UI**: Clean design with gradient accents
- **Contact Form**: Functional form for user inquiries
- **Social Media Links**: Quick access to GitHub, LinkedIn, Twitter, and Email

## Customization

### Update Personal Information

1. **Home Section** (`src/components/Home.jsx`):
   - Update your name and title
   - Modify the introduction text

2. **About Section** (`src/components/About.jsx`):
   - Add your background and experience
   - Update the skills and technologies list

3. **Projects Section** (`src/components/Projects.jsx`):
   - Replace project data with your actual projects
   - Update images, descriptions, and links

4. **Contact Section** (`src/components/Contact.jsx`):
   - Update email address
   - Add your social media profile links

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    light: '#6366f1',  // Indigo
    DEFAULT: '#4f46e5',
    dark: '#4338ca',
  },
  accent: {
    light: '#06b6d4',  // Cyan
    DEFAULT: '#0891b2',
    dark: '#0e7490',
  },
}
```

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port. Check the terminal output for the actual URL.

### Dependencies Issues

If you encounter issues with dependencies, try:

```bash
# Delete node_modules and bun.lockb
rm -rf node_modules bun.lockb

# Reinstall dependencies
bun install
```

### Build Errors

Make sure all dependencies are properly installed and you're using a compatible Node.js version (16+).

## Deployment

This website can be deployed to various platforms:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Cloudflare Pages**: Connect your Git repository

## Support

For issues or questions:
1. Check the console for error messages
2. Ensure all dependencies are installed
3. Verify Node.js version compatibility
4. Review the project structure and file paths

## License

This project is open source and available for personal and educational use.
