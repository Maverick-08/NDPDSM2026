import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        mono: ['"Geist Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
};

export default config;
