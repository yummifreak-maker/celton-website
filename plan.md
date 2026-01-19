# Celton Website Development Plan

## Version: v0.0.4

## Project Status: Logo Update & Vercel Deployment

### Completed (v0.0.4)
- [x] Updated logo from `logo-celton.png` to `celton-logo.png` across all pages
- [x] Added `vercel.json` configuration for deployment
- [x] Deployed to Vercel production: https://celton-website.vercel.app

### Completed (v0.0.3)
- [x] Removed About page completely
- [x] Updated Careers page labels (DeepTech → AI & Intelligence, Experiential Learning → Product Design)

### Completed (v0.0.1)
- [x] Updated logo to new red brain/circuit design with "Architecting Intelligence"
- [x] Changed nav "The Celton Triad" to "Innovations"
- [x] Updated hero text: "Introducing the Celton Triad" (normal case)
- [x] Fixed 'g' cutoff in "Engineered" with tracking-[1px]
- [x] Made logo bigger (h-16, 280px width)
- [x] Shortened description to two lines
- [x] Changed "deep technology" to "deeptech"
- [x] Updated tagline: "The future. Built now."
- [x] Widened layout containers to max-w-[1800px] with 4% padding
- [x] Added Careers page with job listings
- [x] Added Privacy Policy page
- [x] Added Terms of Service page

### Completed (v0.0.0)
- [x] Project structure setup (Next.js 14, TypeScript, TailwindCSS)
- [x] Premium dark theme with Celton color palette
- [x] Homepage with full-screen hero section (no scrolling)
- [x] Products page (The Celton Triad)
- [x] About page with vision, philosophy, and values
- [x] Contact page with form and contact information
- [x] Framer Motion animations
- [x] Responsive design (mobile-first)

### Pending (Future Versions)

#### v0.1.0 - Content Enhancement
- [ ] Individual product landing pages (/cognorus, /nexarus, /helorus)
- [ ] Blog/News section
- [ ] Team/Leadership section on About page
- [ ] More detailed job descriptions on Careers page

#### v0.2.0 - Functionality
- [ ] Contact form backend integration
- [ ] Email subscription/waitlist for products
- [ ] Analytics integration (Google Analytics, Mixpanel)
- [ ] SEO optimization (meta tags, Open Graph, sitemap)

#### v0.3.0 - Enhancement
- [ ] Light/dark mode toggle
- [ ] Internationalization (i18n) for global markets
- [ ] Performance optimization (lazy loading, image optimization)
- [ ] Accessibility improvements (WCAG compliance)

#### v1.0.0 - Production Ready
- [ ] Full content review and finalization
- [ ] Security audit
- [ ] Performance benchmarking
- [ ] Production deployment (Vercel/AWS)
- [ ] Domain configuration (celton.ai)

## Architecture

```
celton-website/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Homepage (Hero only)
│   │   ├── products/page.tsx # The Celton Triad (Innovations)
│   │   ├── about/page.tsx    # About page
│   │   ├── contact/page.tsx  # Contact page
│   │   ├── careers/page.tsx  # Careers page
│   │   ├── privacy/page.tsx  # Privacy policy
│   │   ├── terms/page.tsx    # Terms of service
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   └── components/           # Reusable components (future)
├── public/
│   ├── celton-logo.png       # Company logo
│   ├── logo-cognorus.png     # Cognorus product logo
│   ├── logo-nexarus.png      # Nexarus product logo
│   └── logo-helorus.png      # Helorus product logo
├── CLAUDE.md                 # Project documentation
├── plan.md                   # This file
└── package.json
```

## Design Decisions

1. **No scrolling on homepage**: Full-screen hero, each section is a separate page
2. **Framework**: Next.js 14 for performance, SEO, and modern React features
3. **Styling**: TailwindCSS for rapid development and consistent design
4. **Animations**: Framer Motion for smooth, professional animations
5. **Theme**: Dark-first design reflecting premium tech positioning
6. **Typography**: Inter font family for clean, modern readability
7. **Wide layout**: max-w-[1800px] containers with 4% padding for better screen utilization

## Brand Guidelines

- **Primary Color**: #007aff (Apple blue) - Used for accents and CTAs
- **Tone**: Premium, refined, Apple-like elegance
- **Copy Style**: Concise, impactful, benefit-focused
- **Tagline**: "Architecting Intelligence"
- **Hero Tagline**: "The future. Built now."

## Notes

- All products marked as "Coming Soon" until launch dates confirmed
- Contact emails are placeholders (hello@celton.ai, partners@celton.ai, careers@celton.ai)
- Social media links are placeholders pending account creation
- Logo updated to red brain/circuit design with "ARCHITECTING INTELLIGENCE" text
