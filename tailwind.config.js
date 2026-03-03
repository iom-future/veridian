/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          primary:  '#38BDF8',
          light:    '#7DD3FC',
          dark:     '#0EA5E9',
          glow:     'rgba(56,189,248,0.12)',
          border:   'rgba(56,189,248,0.25)',
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
          primary:   '#060C18',
          secondary: '#0A1220',
          card:      '#0D1628',
          hover:     '#111E35',
        },
        text: {
          primary: '#E8F0FF',
          muted:   '#6B7FA3',
          dim:     '#3D4F6B',
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
