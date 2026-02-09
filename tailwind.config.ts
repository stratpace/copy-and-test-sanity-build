import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B1C2D',
          800: '#12263A',
          700: '#1B3A57',
        },
        gold: {
          600: '#C9A24D',
        },
        background: '#F8FAFC',
        muted: '#F1F5F9',
        border: '#E2E8F0',
        body: '#1F2937',
        'muted-text': '#64748B',
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [typography],
};
export default config;