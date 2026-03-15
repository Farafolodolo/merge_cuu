/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          purple: '#8B5CF6',
          blue: '#1D4ED8',
          cyan: '#06B6D4',
        },
      },
      fontFamily: {
        mono: ['Roboto Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'cyber-radial': 'radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, rgba(6,182,212,0.05) 50%, transparent 70%)',
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(139, 92, 246, 0.6)',
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.6)',
        'neon-blue': '0 0 20px rgba(29, 78, 216, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #8B5CF6, 0 0 20px #8B5CF6' },
          '100%': { textShadow: '0 0 20px #06B6D4, 0 0 40px #06B6D4' },
        },
      },
    },
  },
  plugins: [],
}
