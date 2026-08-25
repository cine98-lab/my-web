---
name: Coral Tree Design System
colors:
  surface: '#fff8f4'
  surface-dim: '#e1d8d2'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2eb'
  surface-container: '#f5ece5'
  surface-container-high: '#f0e7df'
  surface-container-highest: '#eae1da'
  on-surface: '#1f1b17'
  on-surface-variant: '#3c4949'
  inverse-surface: '#34302b'
  inverse-on-surface: '#f8efe8'
  outline: '#6c7a79'
  outline-variant: '#bbc9c8'
  surface-tint: '#006a6a'
  primary: '#006a6a'
  on-primary: '#ffffff'
  primary-container: '#2bb8b8'
  on-primary-container: '#004344'
  inverse-primary: '#58d9d9'
  secondary: '#8d4c49'
  on-secondary: '#ffffff'
  secondary-container: '#ffaba7'
  on-secondary-container: '#7a3d3b'
  tertiary: '#675d4d'
  on-tertiary: '#ffffff'
  tertiary-container: '#b2a592'
  on-tertiary-container: '#443b2d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#78f6f5'
  primary-fixed-dim: '#58d9d9'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f50'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3af'
  on-secondary-fixed: '#390a0b'
  on-secondary-fixed-variant: '#703533'
  tertiary-fixed: '#f0e0cc'
  tertiary-fixed-dim: '#d3c4b1'
  on-tertiary-fixed: '#221a0e'
  on-tertiary-fixed-variant: '#4f4537'
  background: '#fff8f4'
  on-background: '#1f1b17'
  surface-variant: '#eae1da'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '300'
    lineHeight: 24px
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: auto
---

## Brand & Style
The design system is built upon the narrative of a "living postcard"—a digital space that captures the lingering warmth of travel memories. It targets travelers and dreamers who seek a respite from aggressive, commercial interfaces. 

The aesthetic blends **Minimalism** with **Tactile/Skeuomorphic** elements to evoke the feeling of physical stationery and natural textures. High-quality whitespace mimics the margins of a travel journal, while subtle grain textures and organic layering create an approachable, human-centric atmosphere. The interface should feel like a slow afternoon in a coastal cafe: breezy, intentional, and nostalgic.

## Colors
The palette is derived from the natural landscape of Northern Okinawa.
- **Emerald Blue (#2BB8B8):** The primary brand color representing the deep, clear waters. Used for primary actions and key brand moments.
- **Coral Pink (#F4A29E):** The secondary color, providing warmth and accenting highlights. It evokes the soft glow of sun-kissed coral.
- **Sand Beige (#E8D9C5):** The tertiary surface color, used for backgrounds and containers to reduce eye strain and provide a parchment-like feel.
- **Deep Earth (#4A4540):** The neutral color used for typography and iconography, chosen over pure black to maintain a softer, organic contrast.

## Typography
This design system employs a sophisticated pairing of an authoritative, warm serif for storytelling and a clean, contemporary sans-serif for legibility.

- **Headlines:** Uses `notoSerif` to provide a literary, "postcard" aesthetic. It should be used for titles, quotes, and storytelling headers.
- **Body & Labels:** Uses `beVietnamPro` (acting as a high-quality alternative to GMarketSans for global compatibility while maintaining the clean, geometric structure). Use Weight 300 for long-form reading and 500/700 for emphasis.
- **Mobile Scaling:** For mobile devices, `display-lg` should scale down to 32px and `headline-lg` to 24px to ensure readability without overwhelming the viewport.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop (max-width 1200px) to simulate the bounded edges of a postcard or a photo album. 

- **Desktop:** 12-column grid with 24px gutters. Center-aligned with generous outer margins.
- **Mobile:** 4-column fluid grid with 16px side margins.
- **Rhythm:** Use the 8px base unit for all internal component spacing. Larger "Traveler’s Margins" (48px+) should be used between sections to emphasize the feeling of calm and space.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Ambient Shadows** rather than sharp borders.

- **Surfaces:** Use the Sand Beige for the base background. Elevated cards use a pure white (#FFFFFF) with a very soft, diffused shadow (Blur: 20px, Y: 4px, Opacity: 5%, Color: Deep Earth).
- **Interactive States:** Buttons and interactive elements should use a slight "press" effect (lowering the elevation) to mimic the tactile feel of physical buttons or paper.
- **Layering:** Elements can slightly overlap (e.g., a photo edge over a text box) to create a scrapbooked, hand-curated appearance.

## Shapes
The shape language is organic and soft, reflecting water-worn sea glass and smooth coral. 

- **Standard Radius:** 0.5rem (8px) for buttons and input fields.
- **Container Radius:** 1rem (16px) for cards and modals to give them a friendly, modern feel.
- **Image Treatment:** Photos should always have a minimum 8px corner radius or a "deckle edge" effect for specific editorial sections to reinforce the travel-journal theme.

## Components
- **Buttons:** Primary buttons use Emerald Blue with white text. Secondary buttons use a ghost style with a Coral Pink border. Padding should be generous (12px 24px) to ensure a comfortable touch target.
- **Cards:** Cards should feature a 1px border in a slightly darker shade of Sand Beige (#DFD1BF) rather than a harsh shadow, keeping the interface light.
- **Input Fields:** Use a subtle background fill (Sand Beige at 50% opacity) with a bottom-only border for a more elegant, stationery-inspired look.
- **Chips/Tags:** Use rounded-pill shapes in Coral Pink with 10% opacity for categories like "Tea," "Okinawa," or "Sunset."
- **Iconography:** Use a custom set of 1.5pt line icons. Icons should have slightly rounded terminals (caps) to match the typography's warmth. Focus on travel-specific metaphors (Compass, Palm Tree, Steaming Mug, Polaroid Frame).
- **Navigation:** A clean, centered top-navigation bar that disappears on scroll and reappears when scrolling up, maximizing the focus on visual content.