/**
 * ─────────────────────────────────────────────────────────────────────────────
 * BRAND CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Single file to edit when adapting the theme for a new client.
 *
 * Colors flow into  → src/styles/theme.css  (CSS custom properties)
 * Fonts flow into   → astro.config.mjs      (Astro 6 built-in font optimizer)
 * Meta flows into   → src/layouts/BaseLayout.astro
 *
 * Color format: use hex (#1a1a2e) or CSS color values.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  // ── Site Identity ──────────────────────────────────────────────────────────
  name: "Premier Decorative Materials",
  tagline: "Interior Decoration Materials Specialist",
  description:
    "We are committed to the continuous development of good practices and the advancement of eco-friendly green products in Myanmar.",
  url: "https://www.premiermaterials.com",
  locale: "en_US",

  // ── Fonts ──────────────────────────────────────────────────────────────────
  // To swap fonts: change the `name` values here AND update astro.config.mjs
  // to match (both must stay in sync so Astro can optimise the correct files).
  fonts: {
    body: "Inter",
    display: "Oswald",
  },

  // ── Colour Palette ─────────────────────────────────────────────────────────
  // These values are written to CSS custom properties in theme.css.
  // Tailwind v4 @theme picks them up automatically.
  colors: {
    primary: "#2D2A7B",
    primaryLight: "#9B99C5",
    primaryFg: "#F5F1F3",

    accent: "#E03942",
    accentFg: "#F5F1F3",

    background: "#F5F1F3",
    surface: "#F8FAFC",
    border: "#E2E8F0",

    text: "#2D2A7B",
    textMuted: "#475569",

    dark: "#0F172A",
    darkSurface: "#1E293B",
  },

  // ── Border radius ──────────────────────────────────────────────────────────
  radius: {
    sm: "0.375rem",
    md: "0.625rem",
    lg: "1rem",
    full: "9999px",
  },
} as const;

export type Brand = typeof brand;
