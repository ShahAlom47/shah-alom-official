/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import tailwindcssAnimate from 'tailwindcss-animate';
import daisyui from 'daisyui';

const config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: '#ff014f',
        blackDeep: '#16181c',
        blackMid: '#1c1b1b',
        blackLight: '#212428',
        grayLight: '#c4cfde',
        grayDeep: '#6e7b8c',
        inputBg: "#1d232a",
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [
    tailwindcssAnimate,
    daisyui,
    plugin(function ({ addComponents }) {
      addComponents({
        '.primary-hover': {
          padding: '0.2rem 1rem',
		  borderRadius:"3px",
          fontWeight: '500',
          textTransform: 'uppercase',
          backgroundImage: 'linear-gradient(to bottom left , #17191b, #313131)',
          backgroundSize: '150% 100%',
          backgroundPosition: 'left',
          transition: 'all 0.7s ease-in-out',
          boxShadow: '-1px 2px 8px rgba(216, 216, 216, 0.39)',
        },
        '.primary-hover:hover': {
          backgroundImage: 'linear-gradient(to top right , #1f1f1f, #41454c)',
          boxShadow: '1px -2px 8px rgba(107, 105, 105, 0.39)',
        },
      });
    }),
  ],
};

export default config;
