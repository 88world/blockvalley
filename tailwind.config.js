export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bv: {
          primary: '#0F172A',   // Slate 900 (for headings)
          secondary: '#64748B', // Slate 400 (for secondary text)
          cta: '#0EA5E9',       // Sky 500 (Bright Blue)
          background: '#ffffff', // White background
          text: '#1E293B',      // Slate 800 for body text
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
