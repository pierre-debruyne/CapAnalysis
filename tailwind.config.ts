import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx,mdx,js,jsx}", "./src/**/*.{ts,tsx,mdx,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
      serif: ["var(--font-playfair)", ...defaultTheme.fontFamily.serif],
    },
    extend: {},
  },
} satisfies Config;