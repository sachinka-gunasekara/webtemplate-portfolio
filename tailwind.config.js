/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060813', // Deepest midnight navy
          900: '#0A0E1A', // Base canvas
          850: '#0F1526', // Elevated layer
          800: '#161F36', // Subtle container
          700: '#1E293B',
        },
        accent: {
          DEFAULT: '#38BDF8', // Restrained electric cyan
          hover: '#0EA5E9',
          glow: 'rgba(56, 189, 248, 0.25)',
          soft: 'rgba(56, 189, 248, 0.08)',
          text: '#7DD3FC',
        },
        slate: {
          muted: '#94A3B8',
          subtle: '#64748B',
          light: '#F8FAFC',
        },
        glass: {
          surface: 'rgba(15, 23, 42, 0.65)',
          card: 'rgba(15, 23, 42, 0.55)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.18)',
          highlight: 'rgba(255, 255, 255, 0.05)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glass-sm': '0 4px 16px 0 rgba(0, 0, 0, 0.3)',
        'glass-md': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-lg': '0 12px 48px 0 rgba(0, 0, 0, 0.45)',
        'glow-cyan': '0 0 25px -5px rgba(56, 189, 248, 0.25)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
