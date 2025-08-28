import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        "serif-sc": ["Playfair Display SC", "serif"],
        minion: ["Minion Pro", "serif"],
      },
      colors: {
        dark: "#292929",   // dark background
        beige: "#e9d7c8",  // light beige accent
        brown: "#806863",  // earthy brown secondary
      },
    },
  },
} satisfies Config;