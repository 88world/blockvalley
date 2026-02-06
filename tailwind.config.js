export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bv: {
          primary: '#F1F5F9',   // Light Slate (for headings on dark bg)
          secondary: '#94A3B8', // Slate 400
          cta: '#0EA5E9',       // Sky 500 (Bright Blue)
          background: '#ffffff', // Dark Slate
          text: '#E2E8F0',      // Light Slate for body text
        }
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-fast': 'spin 3s linear infinite',
        'spin-medium': 'spin 6s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
