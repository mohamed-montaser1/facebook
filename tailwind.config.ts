import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        ml: "992px",
      },
      colors: {
        cgray: "#e4e6eb",
      },
    },
    fontFamily: {
      sans: [
        "Segoe UI Historic",
        "Segoe UI",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
  },
  plugins: [],
};
export default config;
