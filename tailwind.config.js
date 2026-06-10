/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#f0fdfb',
          100: '#e6f9f7',
          200: '#d9f6f2',
          300: '#b1ece5',
          400: '#86dfd5',
          500: '#00c4be',
          600: '#019692',
          700: '#01726f',
          800: '#004240',
          900: '#002625',
        },
        dark: {
          DEFAULT: '#0a2538',
          alt:    '#0d333c',
        },
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(106deg, rgba(100,100,100,0.8) 0%, rgba(0,38,37,0.8) 100%)',
        'card-benefit-1': 'linear-gradient(219deg, rgba(1,150,146,0.8) 0%, rgba(10,37,56,0.2) 72%)',
        'card-benefit-2': 'linear-gradient(141deg, rgba(1,150,146,0.8) 0%, rgba(10,37,56,0.2) 72%)',
        'card-benefit-3': 'linear-gradient(219deg, rgba(1,150,146,0.8) 0%, rgba(10,37,56,0.2) 72%)',
        'card-benefit-4': 'linear-gradient(140deg, rgba(1,150,146,0.8) 0%, rgba(10,37,56,0.2) 71%)',
        'process-block': 'linear-gradient(7deg, rgba(1,150,146,0.8) 23%, rgba(10,37,56,0.2) 90%)',
        'contact-bg':    'linear-gradient(180deg, #e6f9f7 0%, #b1ece5 100%)',
        'project-overlay': 'linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(13,51,60,0.85))',
      },
      boxShadow: {
        'cta':    '0px 2px 8px 0px rgba(1,116,103,0.5)',
        'badge':  '0px 2px 8px 0px rgba(217,246,242,0.15)',
        'step':   '0px 4px 8px 0px rgba(0,66,64,0.15)',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
