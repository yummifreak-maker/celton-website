# Celton Semiconductors Website

## Project Overview
**Company**: Celton Semiconductors
**Tagline**: "Intelligence at the Core"
**Version**: v0.0.0
**Location**: `D:\users\r!\celton-website`

## Brand Identity

### The Celton Convergence
Three intelligent platforms forming one unified ecosystem:

1. **Cognorus.ai** - Cognitive Learning Platform
   - AI-powered personalized semiconductor education
   - Target: Students, fresh graduates, career switchers, VLSI professionals
   - Markets: India, USA, Middle East, Europe, UK, Southeast Asia

2. **Nexarus.ai** - Design Intelligence Platform
   - AI-assisted chip design from concept to GDS
   - Target: Product companies, design houses, universities
   - Features: Natural language to RTL, automated verification, AI-optimized PD

3. **Helorus.ai** - Intelligent Chip Development
   - Internal chip development for power electronics
   - AI-driven performance optimization
   - Focus: Energy-efficient silicon solutions

### Brand Positioning
- **Tone**: Premium & Refined (Apple-like elegance)
- **Focus**: Company and products (not individual leadership)
- **Geography**: Global company (location de-emphasized)
- **Differentiator**: AI integrated at every level, not as an afterthought

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom Celton theme
- **Animations**: Framer Motion
- **Fonts**: Inter (Google Fonts)

## Color Palette

```css
celton-black: #0a0a0a    /* Primary background */
celton-dark: #141414     /* Secondary background */
celton-gray: #1d1d1f     /* Card backgrounds */
celton-silver: #86868b   /* Secondary text */
celton-light: #f5f5f7    /* Primary text */
celton-white: #fbfbfd    /* Bright elements */
celton-accent: #2997ff   /* Cognorus/Primary accent */
celton-gold: #c9a962     /* Nexarus accent */
```

## Logo Files

Place in `public/` folder:
- `logo-celton.png` - Company logo
- `logo-cognorus.png` - Cognorus.ai product logo
- `logo-nexarus.png` - Nexarus.ai product logo
- `logo-helorus.png` - Helorus.ai product logo

## Page Structure

```
/                   # Homepage - Hero, Convergence, Product sections
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

1. **Apple-inspired aesthetics**: Minimal, premium, elegant
2. **Dark mode first**: Sophisticated tech feel
3. **Subtle animations**: Framer Motion for scroll reveals
4. **Responsive**: Mobile-first design approach
5. **Performance**: Next.js Image optimization, minimal dependencies

## Content Highlights

### Hero Section
"Intelligence at the Core"
"Where VLSI and AI converge to create chips that learn, adapt, and optimize in real time."

### Product Positioning
- Cognorus: "Learn" - Democratizing semiconductor education
- Nexarus: "Design" - From idea to GDS intelligently
- Helorus: "Build" - Silicon that thinks ahead

### Key Messages
- "Unlike others who treat AI as an afterthought, Celton integrates intelligence at every level"
- "Three platforms. One unified intelligence."
- "The future of semiconductor is intelligent."

## Status

All products currently marked as "Coming Soon" / "In Development"

## Git Repository

**Repository**: https://github.com/yummifreak-maker/celton-website
**Branch**: main

## Changelog

### v0.0.0 (Initial Release)
- Created project structure with Next.js 14, TypeScript, TailwindCSS
- Implemented premium dark theme with Celton color palette
- Built homepage with hero section, The Celton Convergence, product deep-dives
- Created About page with company vision, philosophy, and values
- Created Contact page with form and contact information
- Added Framer Motion animations for scroll reveals
- Responsive design for all screen sizes
- Logo integration points for all four brand logos

---

**Last Updated**: v0.0.0
**Next Steps**: Add careers page, implement form submission, add product-specific pages
