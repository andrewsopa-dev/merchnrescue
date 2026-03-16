# Merch & Rescue Style System

This project uses a custom design system built on top of Tailwind CSS to enforce a "military-modern" aesthetic.

## Design Tokens

### Colors
These tokens are available as CSS variables and Tailwind utilities (e.g., `bg-brand-black`, `text-coyote`).

| Token Name           | Hex       | Tailwind Class       | Usage                                      |
| -------------------- | --------- | -------------------- | ------------------------------------------ |
| `--color-brand-black`| `#0a0c0b` | `bg-brand-black`     | Main background, deeply dark green/black   |
| `--color-brand-teal` | `#1a7f7f` | `text-brand-teal`    | Primary brand color, actions, highlights   |
| `--color-coyote`     | `#81613e` | `text-coyote`        | Secondary accents, pricing, subheads       |
| `--color-od-green`   | `#4b5320` | `bg-od-green`        | Background accents, camo patterns          |
| `--color-alert-red`  | `#cd1313` | `bg-alert-red`       | Critical alerts, small detail accents      |
| `--color-sand`       | `#d5cbb2` | `text-sand`          | Alternative light text, muted accents      |

### Typography

**Headings: Oswald**
- Variable: `--font-oswald`
- Tailwind Utility: `font-display`
- Usage: Section headers, big numbers, buttons, nav links. Always mostly uppercase.

**Body: Inter / System UI**
- Variable: `--font-inter`
- Tailwind Utility: `font-sans` (default)
- Usage: Paragraphs, descriptions, lists.

## Component Patterns

### Buttons
Buttons should generally be substantial.
- **Primary**: `bg-brand-teal text-white rounded-none uppercase font-display tracking-widest`
- **Secondary**: `bg-white/5 border border-white/10 rounded-none uppercase font-display`

### Section Headings
Use the `SectionHeading` component.
- **Kicker**: `text-brand-teal font-display uppercase tracking-widest`
- **Title**: `font-display uppercase font-black`

### Cards
- **Background**: Transparent or very subtle `bg-brand-teal/5` or `bg-white/5`.
- **Border**: `border-white/10`.
- **Shape**: `rounded-none` preferred for that "industrial/crate" feel, or very small `rounded-sm`.

## General Vibe
- **"Contractor Grade"**: Avoid rounded, soft, friendly startup vibes. Think shipping crates, tactical gear, HUD displays.
- **No Emojis**: Use Lucide icons or simple geometric shapes.
