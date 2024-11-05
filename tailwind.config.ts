import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#ffff80',
        pink: '#ff80bf',
        purple: '#9580ff',
        red: '#ff9580',
        orange: '#ffca80',
        green: '#8aff80',
        cyan: '#80ffea',
        primary: '#f2f2f2',
        secondary: '#8f9ba8',
        background: '#08070b',
        hover: '#212024',
        command: 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        code: ["var(--font-code)", "monospace"],
        heading: ["var(--font-heading)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
