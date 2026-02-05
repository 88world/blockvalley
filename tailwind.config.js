export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bv: {
          primary: '#0F172A',   // Slate 900
          secondary: '#334155', // Slate 700
          cta: '#0369A1',       // Sky 700 (Strong Blue)
          background: '#F8FAFC', // Slate 50
          text: '#020617',      // Slate 950
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
