# Celton Semiconductors Website

## Project Overview
**Company**: Celton Semiconductors
**Tagline**: "Architecting Intelligence"
**Version**: v0.0.4
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
/products           # The Celton Triad - All three products (Innovations)
/about              # Company vision, philosophy, values
/contact            # Contact form, email addresses
/careers            # Job listings and company culture
/privacy            # Privacy policy
/terms              # Terms of service
```

## Running the Project

```bash
cd d:\users\r!\celton-website
npm install
npm run dev
```

Access at: http://localhost:3000

## Key Design Decisions

1. **No scrolling on homepage** - Full-screen hero, each section is a separate page
2. **Apple-inspired aesthetics** - Minimal, premium, elegant
3. **Dark mode first** - Sophisticated tech feel
4. **Subtle animations** - Framer Motion for reveals
5. **Responsive** - Mobile-first design approach
6. **Wide layout** - max-w-[1800px] for better screen utilization

## Content Highlights

### Hero Section
- "Introducing the Celton Triad"
- "Intelligence. Engineered into silicon."
- Description: AI, deeptech, and VLSI convergence
- CTA: "Discover The Triad" / "Collaborate with Us"
- Tagline: "The future. Built now."

### Navigation
- Logo (Celton with brain/circuit icon)
- Innovations (links to /products)
- About
- Careers
- Contact

### Product Positioning
- Cognorus: Learn semiconductors the way you think
- Nexarus: From concept to silicon. In hours.
- Helorus: Silicon that thinks ahead

## Git Repository

**Repository**: https://github.com/yummifreak-maker/celton-website
**Branch**: v0.0.7a

## Deployment

**Live URL**: https://celton-website.vercel.app
**Platform**: Vercel

## Changelog

### v0.0.4 (Current)
- Updated logo from `logo-celton.png` to `celton-logo.png` across all pages
- Added `vercel.json` configuration for deployment
- Deployed to Vercel production: https://celton-website.vercel.app

### v0.0.3
- Removed About page completely
- Updated Careers page labels (DeepTech → AI & Intelligence, Experiential Learning → Product Design)

### v0.0.1
- Updated logo to new red brain/circuit design with "Architecting Intelligence"
- Changed nav "The Celton Triad" to "Innovations"
- Updated hero text: "Introducing the Celton Triad" (normal case, not uppercase)
- Fixed 'g' cutoff in "Engineered" with tracking-[1px]
- Made logo bigger (h-16, 280px width)
- Shortened description to two lines
- Changed "deep technology" to "deeptech"
- Updated tagline: "The future. Built now."
- Widened layout containers to max-w-[1800px] with 4% padding
- Added Careers page with job listings
- Added Privacy Policy page
- Added Terms of Service page

### v0.0.0
- Initial project structure with Next.js 14, TypeScript, TailwindCSS
- Premium dark theme with Celton color palette
- Homepage with full-screen hero section
- Products page (The Celton Triad)
- About page with vision, philosophy, values
- Contact page with form
- Framer Motion animations
- Responsive design

---

**Last Updated**: v0.0.4
