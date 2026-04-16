# Personal Training Website

This is a modern, responsive website built for a personal training business. It features an energetic design with a vibrant color palette, tailored to showcase services, client testimonials, and simple online booking via Google Forms.

## Demo

[https://personal-training-website-rho.vercel.app](https://personal-training-website-rho.vercel.app)

## Technology Stack

- **React / Next.js (App Router)**: The core framework for optimal performance and SEO.
- **Tailwind CSS**: For rapid UI development with utility classes.
- **Vercel**: Recommended platform for effortless deployment and hosting.

## Prerequisites

- Node.js (Version 18 or above recommended)
- `npm` (Node Package Manager)

## Getting Started

1. Clone or download the repository to your local machine.
2. Open a terminal and navigate to the project root directory: `cd personal-training-website`
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Next.js App Router files including pages, layouts, and global styles (`globals.css`).
- `components/`: Reusable React components like the floating navigation, footer, buttons, and cards.
- `public/`: Static assets such as images or icons.

## Deployment

This project is deployed on Vercel: [https://personal-training-website-rho.vercel.app](https://personal-training-website-rho.vercel.app)

### Deploy to Vercel

```bash
# From the project directory
vercel --yes

# For production deployment
vercel --prod
```

The project includes a `vercel.json` configuration file for optimal deployment settings.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
