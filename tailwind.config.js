/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontWeight: {
        regular: '400',
        bold: '700',
        semibold: '600',
        medium: '500',
        extrabold: '800',
      },
      colors: {
        primary: '#b0d174',
        black: '#222222',
        white: '#ffffff',
      },
    },
  },
  mode: 'jit',
  plugins: [],
}
