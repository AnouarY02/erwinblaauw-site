import type { Config } from 'tailwindcss'

/**
 * Het palet is donkerblauw (navy) met koper als accent, precies zoals het was.
 * Nieuw is dat de kleuren óók als CSS-variabele in globals.css staan, zodat
 * gradients, overlays en randen overal dezelfde waarden gebruiken.
 */
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
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Typografische schaal met vaste regelhoogte, zodat koppen overal gelijk ogen.
        'display-sm': ['clamp(1.85rem, 1.4rem + 1.9vw, 2.5rem)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2.15rem, 1.5rem + 2.8vw, 3.1rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(2.5rem, 1.5rem + 4.2vw, 4.1rem)', { lineHeight: '1.03', letterSpacing: '-0.03em' }],
      },
      maxWidth: {
        content: '78rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(13,24,38,0.04), 0 10px 30px -12px rgba(13,24,38,0.16)',
        'card-hover': '0 2px 6px rgba(13,24,38,0.07), 0 26px 56px -18px rgba(13,24,38,0.32)',
        soft: '0 18px 48px -24px rgba(13,24,38,0.45)',
        'inset-line': 'inset 0 1px 0 0 rgba(255,255,255,0.08)',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(21,37,57,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(21,37,57,0.055) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22,1,0.36,1)',
      },
    },
  },
  plugins: [],
}

export default config
