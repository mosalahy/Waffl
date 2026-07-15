# Reps Field SaaS (Demo scaffold)

This repository contains a minimal Next.js (TypeScript) scaffold for a field reps management SaaS demo.

What it includes
- Arabic RTL layout (sidebar + topbar)
- Live Map page using Google Maps JS API (reads NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
- Mock API routes for reps, gps, and territories (seeded with your areas)
- Branch: demo/field-tracking

Quick start locally
1. Install dependencies: npm install
2. Set Google Maps API key locally:
   - create a file `.env.local` with:
     NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_KEY_HERE
3. Run dev:
   npm run dev
4. Visit http://localhost:3000

Deploy to Vercel
1. Push this repository to GitHub (already on branch `demo/field-tracking`).
2. Import the repo into Vercel (https://vercel.com/new).
3. In Vercel project settings > Environment Variables add:
   - NEXT_PUBLIC_GOOGLE_MAPS_API_KEY (value: your Google Maps JS API key)
4. Deploy. After successful deploy you'll get a Vercel URL to test.

Notes
- The project uses a placeholder for backend logic (Next API routes). For production replace with a real backend (NestJS/Prisma) and PostGIS for geospatial queries.
- Do not commit your API keys to the repo.
