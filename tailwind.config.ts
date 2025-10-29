// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
        colors: {
        navy: "#1E2A4A",
        gold: "#D4AF37",
        "light-navy": "#2C3A5A",
        "off-white": "#F8F9FA",
        "medium-gray": "#6C757D",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
