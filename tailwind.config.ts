import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: false,
  corePlugins: {
    preflight: false,
  },
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: "#00001a",
  //       secondary:"#0166ff",
  //       textPrimary: "#aeceff",
  //       bg:"#f2f6ff"
  //     },
  //     boxShadow: {
  //       "3xl": "0 14px 27px #16181e",
  //     },  
  //   },
  // },
  plugins: [],
};
export default config;

