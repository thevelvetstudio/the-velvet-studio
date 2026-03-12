/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#800020", // Velvet Burgundy
        "primary-light": "#A52A2A",
        "secondary": "#1a0505", // Dark Red/Black
        "accent": "#FFD700", // Gold
        "background-light": "#f8f5f5",
        "background-dark": "#050202",
        "card-dark": "#0f0404",
      },
      fontFamily: {
        "display": ["Montserrat", "sans-serif"],
        "body": ["Poppins", "sans-serif"],
        "serif": ["Playfair Display", "serif"],
        "brand": ["Cinzel", "serif"],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFD700 0%, #FDB931 100%)',
        'velvet-gradient': 'linear-gradient(135deg, #800020 0%, #4a0010 100%)',
      },
      animation: {
        'pulse-gold': 'pulse-gold 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scaleIn': 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slideUp': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
        'shimmer': 'shimmer 1.5s infinite',
      },
      keyframes: {
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 215, 0, 0.4)' },
          '50%': { boxShadow: '0 0 20px 2px rgba(255, 215, 0, 0.6)' },
        },
        'scaleIn': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slideUp': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
