/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          primary:  '#00C9A7',
          light:    '#00E8C2',
          dark:     '#009E85',
          glow:     'rgba(0,201,167,0.12)',
          border:   'rgba(0,201,167,0.25)',
        },
        blue: {
          primary:  '#0057FF',
          light:    '#3378FF',
          dark:     '#003FBB',
          accent:   '#00D4FF',
          glow:     'rgba(0,87,255,0.12)',
          border:   'rgba(0,87,255,0.25)',
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
        teal:   '0 0 40px rgba(0,201,167,0.12)',
        tealLg: '0 0 80px rgba(0,201,167,0.18)',
        blue:   '0 0 40px rgba(0,87,255,0.12)',
        blueLg: '0 0 80px rgba(0,87,255,0.18)',
      },
      borderRadius: {
        none: '0px',
      },
    },
  },
  plugins: [],
}
