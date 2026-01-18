# Celton Semiconductors Website

## Project Overview
**Company**: Celton Semiconductors
**Tagline**: "Architecting the Future"
**Version**: v0.0.2
**Location**: `D:\users\r!\celton-website`

## Brand Identity

### The Celton Triad
Three platforms forming one unified ecosystem:

1. **Cognorus.ai** - Cognitive Learning Platform
   - AI-powered personalized semiconductor education
   - Tagline: "Adaptive • Yours"

2. **Nexarus.ai** - Design Platform
   - AI-assisted chip design from concept to GDS
   - Tagline: "Designed to Flow"

3. **Helorus.ai** - Chip Development
   - Internal chip development for power electronics
   - Tagline: "Power • Perfected"

### Brand Positioning
- **Tone**: Premium & Refined (Apple-like elegance)
- **Focus**: Company and products (not individual leadership)
- **Geography**: Global company (location de-emphasized)
- **Differentiator**: AI integrated at every level

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom theme
- **Animations**: Framer Motion
- **Fonts**: Inter (Google Fonts)

## Color Palette

```css
black: #000000          /* Primary background */
dark: #0a0a0f           /* Secondary background */
accent: #007aff         /* Primary accent (Apple blue) */
light: #f5f5f7          /* Primary text */
silver: #86868b         /* Secondary text */
gray: #a1a1a6           /* Muted text */
```

## Page Structure

```
/                   # Homepage - Hero only (no scrolling)
/products           # The Celton Triad - All three products
/about              # Company vision, philosophy, values
/contact            # Contact form, email addresses
/careers            # (Future) Job listings
/privacy            # (Future) Privacy policy
/terms              # (Future) Terms of service
```

## Running the Project

```bash
cd d:\users\r!\celton-website
npm install
npm run dev
```

Access at: http://localhost:3000

## Key Design Decisions

1. **No scrolling on homepage** - Each section is a separate page
2. **Apple-inspired aesthetics** - Minimal, premium, elegant
3. **Dark mode first** - Sophisticated tech feel
4. **Subtle animations** - Framer Motion for reveals
5. **Responsive** - Mobile-first design approach

## Content Highlights

### Hero Section
- "Architected intelligence into silicon."
- "From the atom up. From inception forward."
- CTA: "Explore The Triad"

### Product Positioning
- Cognorus: Learn semiconductors the way you think
- Nexarus: From concept to silicon. In hours.
- Helorus: Silicon that thinks ahead

## Git Repository

**Repository**: https://github.com/yummifreak-maker/celton-website
**Branch**: main

## Changelog

### v0.0.2 (Current)
- Restructured site: Each section is now a separate page (no scrolling)
- Created /products page for The Celton Triad
- Fixed hero: "intelligence" moved to second line
- Reduced word repetition across pages
- Updated navigation: Home, The Celton Triad, About, Contact
- Changed tagline to "Architecting the Future"

### v0.0.1
- Updated branding: "Architecting Intelligence" tagline
- Changed "Convergence" to "Triad" throughout
- Added animated circuit lines, floating particles, pulsing orbs
- Product taglines: Cognorus "Adaptive • Yours", Nexarus "Designed to Flow", Helorus "Power • Perfected"

### v0.0.0
- Initial project structure with Next.js 14, TypeScript, TailwindCSS
- Premium dark theme with Celton color palette
- Homepage, About page, Contact page
- Framer Motion animations, responsive design

---

**Last Updated**: v0.0.2
