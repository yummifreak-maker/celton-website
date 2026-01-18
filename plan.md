# Celton Website Development Plan

## Version: v0.0.2

## Project Status: Restructured Release

### Completed (v0.0.2)
- [x] Restructured site - each section is now a separate page
- [x] Created /products page for The Celton Triad
- [x] Homepage: Hero section only (no scrolling)
- [x] Fixed hero: "Architected / intelligence / into silicon."
- [x] Reduced repetition of "intelligence" across pages
- [x] Updated navigation: Home, The Celton Triad, About, Contact
- [x] Changed tagline to "Architecting the Future"
- [x] Consistent navigation across all pages

### Completed (v0.0.1)
- [x] Updated branding to "Architecting Intelligence"
- [x] Changed "Convergence" to "Triad" throughout site
- [x] Added animated circuit lines and floating particles
- [x] Added pulsing orb backgrounds
- [x] Product taglines: Cognorus "Adaptive • Yours", Nexarus "Designed to Flow", Helorus "Power • Perfected"

### Completed (v0.0.0)
- [x] Project structure setup (Next.js 14, TypeScript, TailwindCSS)
- [x] Premium dark theme with Celton color palette
- [x] Homepage with hero section
- [x] About page with vision, philosophy, and values
- [x] Contact page with form and contact information
- [x] Framer Motion animations
- [x] Responsive design (mobile-first)

### Pending (Future Versions)

#### v0.1.0 - Content Enhancement
- [ ] Careers page with job listings
- [ ] Individual product landing pages (/cognorus, /nexarus, /helorus)
- [ ] Privacy policy page
- [ ] Terms of service page
- [ ] Blog/News section

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
│   │   ├── products/page.tsx # The Celton Triad
│   │   ├── about/page.tsx    # About page
│   │   ├── contact/page.tsx  # Contact page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   └── components/           # Reusable components (future)
├── public/
│   ├── logo-celton.png       # Company logo
│   ├── logo-cognorus.png     # Cognorus product logo
│   ├── logo-nexarus.png      # Nexarus product logo
│   └── logo-helorus.png      # Helorus product logo
├── CLAUDE.md                 # Project documentation
├── plan.md                   # This file
└── package.json
```

## Design Decisions

1. **No scrolling on homepage**: Each section is a separate page
2. **Framework**: Next.js 14 for performance, SEO, and modern React features
3. **Styling**: TailwindCSS for rapid development and consistent design
4. **Animations**: Framer Motion for smooth, professional animations
5. **Theme**: Dark-first design reflecting premium tech positioning
6. **Typography**: Inter font family for clean, modern readability

## Brand Guidelines

- **Primary Color**: #007aff (Apple blue) - Used for accents and CTAs
- **Tone**: Premium, refined, Apple-like elegance
- **Copy Style**: Concise, impactful, benefit-focused
- **Tagline**: "Architecting the Future"

## Notes

- All products marked as "Coming Soon" until launch dates confirmed
- Contact emails are placeholders (hello@celton.ai, partners@celton.ai, careers@celton.ai)
- Social media links are placeholders pending account creation
