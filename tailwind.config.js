/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF8F1',
        cream: '#F5EFE0',
        sage: {
          50: '#F0F4ED',
          100: '#DCE6D5',
          200: '#B9CBB0',
          300: '#94AE86',
          400: '#7A9569',
          500: '#5E7A4D',
          600: '#4A633C',
          700: '#3A4E30',
          800: '#2D3B26',
          900: '#1F2A1A',
        },
        forest: {
          50: '#E8EFE5',
          100: '#C5D5BE',
          200: '#9BB58F',
          300: '#729560',
          400: '#557A42',
          500: '#3E5E2F',
          600: '#304A24',
          700: '#243820',
          800: '#1A2818',
          900: '#101C10',
        },
        earth: {
          50: '#F7F3EC',
          100: '#EAE0D0',
          200: '#D4C2A4',
          300: '#BFA379',
          400: '#A88A56',
          500: '#8E7340',
          600: '#735C33',
          700: '#5A4828',
          800: '#41351E',
          900: '#2A2313',
        },
        clay: '#C77B5C',
        terracotta: '#A85A3E',
        ink: '#2A2520',
        muted: '#6B6359',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.35rem, 7.5vw, 5.5rem)', { lineHeight: '0.96', letterSpacing: '-0.02em' }],
        'display': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'section': ['clamp(1.6rem, 3.5vw, 2.8rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        'wide-lg': '0.15em',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
