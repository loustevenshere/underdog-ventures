# Underdog Ventures LLC Website

A static Next.js website for Underdog Ventures LLC, providing superior door-to-door transportation services.

## Features

- Static site generation with Next.js Pages Router
- Responsive design with Tailwind CSS
- Mobile-friendly layout
- SEO optimized with proper meta tags
- Contact information with clickable phone and email links
- Service descriptions and policies

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

1. Build the static site:
   ```bash
   npm run build
   ```

2. The static files will be generated in the `/out` folder.

3. To preview the production build locally:
   ```bash
   npm run start
   ```

## Deployment

### AWS Amplify

1. Connect your repository to AWS Amplify
2. Set the build command to: `npm run build`
3. Set the output directory to: `out`
4. Deploy!

The site is configured for static export and will work perfectly with AWS Amplify or any static hosting service.

## Project Structure

```
├── pages/
│   ├── _app.tsx          # App wrapper with global styles
│   └── index.tsx         # Homepage
├── styles/
│   └── globals.css       # Global styles with Tailwind
├── next.config.js        # Next.js configuration for static export
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Dependencies and scripts
```

## Technologies Used

- Next.js 14 (Pages Router)
- React 18
- TypeScript
- Tailwind CSS
- Static Site Generation
