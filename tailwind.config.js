/** @type {import('tailwindcss').Config} */
const brandPrimary = process.env.RML_PRIMARY_COLOR || '#1B2A4A';
const brandAccent = process.env.RML_ACCENT_COLOR || '#C1622B';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary, #1B2A4A)',
          50: '#eef1f6',
          100: '#d6dce8',
          200: '#aab6cf',
          300: '#7d8eb6',
          400: '#556a9d',
          500: '#374f80',
          600: '#283c66',
          700: '#1B2A4A',
          800: '#15203a',
          900: '#101830',
        },
        accent: {
          DEFAULT: 'var(--color-accent, #C1622B)',
          50: '#fbf0ea',
          100: '#f5d9c9',
          200: '#eab39a',
          300: '#df8d6b',
          400: '#d1774a',
          500: '#C1622B',
          600: '#a55225',
          700: '#844220',
          800: '#68331c',
          900: '#50271a',
        },
        canvas: '#FAF7F2',
        ink: {
          DEFAULT: '#1F2328',
          soft: '#3a3f47',
          muted: '#6b7280',
        },
        line: '#e6dfd4',
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // modular scale 1.25, base 16/18
        xs: ['0.8rem', { lineHeight: '1.6' }],
        sm: ['0.9rem', { lineHeight: '1.6' }],
        base: ['1.125rem', { lineHeight: '1.7' }],
        lg: ['1.375rem', { lineHeight: '1.5' }],
        xl: ['1.75rem', { lineHeight: '1.3' }],
        '2xl': ['2.25rem', { lineHeight: '1.2' }],
        '3xl': ['2.75rem', { lineHeight: '1.15' }],
        '4xl': ['3.5rem', { lineHeight: '1.1' }],
      },
      maxWidth: {
        content: '1280px',
        prose: '720px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(27,42,74,0.04), 0 4px 16px rgba(27,42,74,0.06)',
        cardhover: '0 4px 8px rgba(27,42,74,0.08), 0 12px 32px rgba(27,42,74,0.12)',
      },
      borderRadius: {
        card: '0.75rem',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'rise-in': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out both',
        'rise-in': 'rise-in 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};
