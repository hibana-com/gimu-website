# CLAUDE.md

This file provides guidance to Claude Code when working with the Gimu landing page.

## Project Overview

Marketing landing page for Gimu - a habit tracking app with social accountability features.

**Tech Stack:**
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Related Projects

- **Mobile App (Flutter)**: `~/work/exmo` - The main Gimu mobile application
- **Shared Guidelines**: `~/shared-gimu-guidelines` - Brand colors, design tokens, typography

When implementing UI, reference the shared brand guidelines to ensure visual consistency with the mobile app.

## Project Structure

```
app/
  layout.tsx        # Root layout with metadata, fonts
  page.tsx          # Homepage
  globals.css       # Global styles, Tailwind imports
components/
  ui/               # Reusable UI components (Button, Card, etc.)
  sections/         # Page sections (Hero, Features, Testimonials, etc.)
public/
  images/           # Static images, app screenshots
  icons/            # SVG icons
lib/
  utils.ts          # Utility functions
```

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Design Guidelines

### Brand Alignment
This landing page must visually align with the Gimu mobile app. Key brand elements:

- **Primary Color**: `#2B9EB3` (Community Teal)
- **Secondary Color**: `#4A90D9` (Connection Blue)
- **Accent Color**: `#E8A838` (Achievement Orange)
- **Font**: Inter (use `next/font` for optimization)

See `~/shared-gimu-guidelines/.claude/rules/brand-guidelines.md` for complete color system.

### Page Sections (Typical)
1. **Hero** - App value proposition, app store badges, hero image/mockup
2. **Features** - Key features with icons and descriptions
3. **Social Proof** - How the social accountability works
4. **Testimonials** - User quotes (when available)
5. **CTA** - Download call-to-action
6. **Footer** - Links, legal, social

### SEO Requirements
- Proper meta tags and Open Graph data
- Semantic HTML structure
- Fast Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- Sitemap and robots.txt

## Code Style

### TypeScript
- Strict mode enabled
- Prefer `interface` over `type` for object shapes
- Use proper typing, avoid `any`

### Components
- Use functional components with TypeScript
- Prefer named exports
- Keep components small and focused
- Use `cn()` utility for conditional classNames

### Tailwind
- Use the extended Gimu color palette (see `tailwind.config.ts`)
- Mobile-first responsive design
- Prefer Tailwind classes over custom CSS
- Use `@apply` sparingly

### File Naming
- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Pages: `page.tsx` (Next.js convention)

## Performance

- Use `next/image` for all images with proper sizing
- Implement lazy loading for below-fold content
- Minimize client-side JavaScript
- Use static generation (SSG) where possible

## Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Color contrast ratio 4.5:1 minimum
- Alt text for all images
