import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          60: "#703BF7",
          65: "#8254F8",
          70: "#946CF9",
          75: "#A685FA",
          90: "#DBCEFD",
          95: "#EDE7FE",
          97: "#F4F0FE",
          99: "#FBFAFF",
        },
        white: {
          90: "#E4E4E7",
          95: "#F1F1F3",
          97: "#F7F7F8",
          99: "#FCFCFD",
        },
        gray: {
          8: "#141414",
          10: "#1A1A1A",
          15: "#262626",
          20: "#333333",
          30: "#4D4D4D",
          40: "#666666",
          50: "#808080",
          60: "#999999",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
