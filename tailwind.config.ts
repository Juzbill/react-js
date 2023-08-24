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
        primary: "#1e2129",
        textPrimary: "#8e95a5",
      },
      boxShadow: {
        "3xl": "0 14px 27px #16181e",
      },
    },
  },
  plugins: [],
};
export default config;
