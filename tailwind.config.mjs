/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
        },
        surface: {
          100: "var(--color-surface-100)",
          200: "var(--color-surface-200)",
          300: "var(--color-surface-300)",
          400: "var(--color-surface-400)",
          500: "var(--color-surface-500)",
          600: "var(--color-surface-600)",
        },
        "surface-mixed": {
          100: "var(--color-surface-mixed-100)",
          200: "var(--color-surface-mixed-200)",
          300: "var(--color-surface-mixed-300)",
          400: "var(--color-surface-mixed-400)",
          500: "var(--color-surface-mixed-500)",
          600: "var(--color-surface-mixed-600)",
        },
      },
    },
  },
  plugins: [],
}
