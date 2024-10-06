import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "bright-turquoise": "#00DAE8",
        "cod-gray": "#1D1D1D",
        "dove-gray": "#666666",
        "mine-shaft": "#2D2D2D",
        "silver-chalice": "#A8A8A8",
        alto: "#D1D1D1",
        carnation: "#F8594E",
        emperor: "#545454",
        firefly: "#12303B",
      },
      fontFamily: {
        sans: ["var(--font-articulat-cf)", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, addUtilities }) {
      addVariant("slider-thumb", [
        "&::-webkit-slider-thumb",
        "&::-moz-range-thumb",
      ]);
      addUtilities({
        ".slider": {
          "@apply slider-thumb:h-3 slider-thumb:w-3 slider-thumb:cursor-pointer slider-thumb:appearance-none slider-thumb:rounded-full slider-thumb:bg-white":
            {},
        },
      });
    }),
  ],
};
export default config;
