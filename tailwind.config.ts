import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1f2528",
        muted: "#667075",
        paper: "#fbf8f1",
        pearl: "#f4f1eb",
        clay: "#c94f39",
        sun: "#f2b84b",
        ocean: "#167f86",
        leaf: "#5d8f4e",
        plum: "#7b4d77",
      },
      fontFamily: {
        heading: ["Manrope", "Inter", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(31, 37, 40, 0.12)",
      },
      borderRadius: {
        brand: "8px",
      },
    },
  },
  plugins: [],
} satisfies Config;
