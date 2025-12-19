import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta "Ousada Moderna" - Cores Exatas do Guia Estratégico
        navy: {
          50: '#e8ebf1',
          100: '#c5cce0',
          200: '#9faace',
          300: '#7989bc',
          400: '#5c70ae',
          500: '#3f57a0',
          600: '#374d91',
          700: '#2d407d',
          800: '#243469',
          900: '#1B2A4E', // Azul Marinho Principal - COR EXATA DO GUIA
          950: '#111a31',
        },
        rose: {
          50: '#fef7fb',
          100: '#fdeef6',
          200: '#fcdcee',
          300: '#fac1e0',
          400: '#F9A8D4', // Rosa Principal - COR EXATA DO GUIA
          500: '#f472b6',
          600: '#ec4899',
          700: '#db2777',
          800: '#be185d',
          900: '#9d174d',
        },
        gold: {
          50: '#fdfbf3',
          100: '#faf5e1',
          200: '#f4e8bc',
          300: '#ecd88d',
          400: '#e2c45c',
          500: '#D4AF37', // Dourado Principal - COR EXATA DO GUIA
          600: '#b8922a',
          700: '#997424',
          800: '#7d5d23',
          900: '#684d21',
        },
        whatsapp: '#25D366',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
        },
      },
    },
  },
  plugins: [],
}

export default config
