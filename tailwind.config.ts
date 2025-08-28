import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{ts,tsx,mdx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        "serif-sc": ["Playfair Display SC", "serif"],
        minion: ["Minion Pro", "serif"],
      },
    },
  },
} satisfies Config;