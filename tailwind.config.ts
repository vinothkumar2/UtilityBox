import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { brand: "#6758e8" }, boxShadow: { soft: "0 12px 40px rgba(25, 28, 45, 0.06)" } } },
  plugins: []
};
export default config;
