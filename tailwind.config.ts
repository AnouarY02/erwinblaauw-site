import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Donkerblauw / antraciet basis
        navy: {
          50: '#f2f6fb',
          100: '#e3ebf5',
          200: '#c3d4e8',
          300: '#92b0d3',
          400: '#5a85b7',
          500: '#3a669c',
          600: '#2b4f7e',
          700: '#243f66',
          800: '#1c3252',
          900: '#152539',
          950: '#0d1826',
        },
        charcoal: {
          700: '#2c3238',
          800: '#1f242a',
          900: '#14181c',
        },
        // Warme accentkleur: koper/oranje
        copper: {
          50: '#fdf6ef',
          100: '#fae8d7',
          200: '#f4cdae',
          300: '#ecab7c',
          400: '#e2854c',
          500: '#d96c2c',
          600: '#c25520',
          700: '#a0421d',
          800: '#80361e',
          900: '#682f1c',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        content: '76rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(13,24,38,0.04), 0 8px 24px -8px rgba(13,24,38,0.12)',
        'card-hover': '0 2px 4px rgba(13,24,38,0.06), 0 16px 40px -12px rgba(13,24,38,0.22)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
}

export default config
