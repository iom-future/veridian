/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          primary:  '#0EA5E9',
          light:    '#38BDF8',
          dark:     '#0284C7',
          glow:     'rgba(14,165,233,0.12)',
          border:   'rgba(14,165,233,0.25)',
        },
        blue: {
          primary:  '#00C9A7',
          light:    '#00E8C2',
          dark:     '#009E85',
          accent:   '#00D4FF',
          glow:     'rgba(0,201,167,0.12)',
          border:   'rgba(0,201,167,0.25)',
        },
        bg: {
          primary:   '#F8FAFC',
          secondary: '#F1F5F9',
          card:      '#FFFFFF',
          hover:     '#E2E8F0',
          dark:      '#060C18',
        },
        text: {
          primary: '#0F172A',
          muted:   '#475569',
          dim:     '#94A3B8',
          dark:    '#E8F0FF',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter:    ['Inter', 'sans-serif'],
      },
      boxShadow: {
        teal:   '0 0 40px rgba(56,189,248,0.12)',
        tealLg: '0 0 80px rgba(56,189,248,0.18)',
        blue:   '0 0 40px rgba(0,201,167,0.12)',
        blueLg: '0 0 80px rgba(0,201,167,0.18)',
      },
      borderRadius: {
        none: '0px',
      },
    },
  },
  plugins: [],
}
