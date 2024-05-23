/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ['Pretendard'],
      },
      fontSize: {
        26: '1.625rem',
        24: '1.5rem',
        22: '1.375rem',
        20: '1.25rem',
        16: '1rem',
        14: '0.875rem',
        13: '0.8125rem',
        12: '0.75rem',
        11: '0.6875rem',
        10: '0.625rem',
      },
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
