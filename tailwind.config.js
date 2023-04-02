/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rubikLight: 'Rubik-Light',
        rubikRegular: 'Rubik-Regular',
        rubikBold: 'Rubik-Bold',
        rubikSemiBold: 'Rubik-SemiBold',
        rubikBlack: 'Rubik-Black',
        rubikItalic: 'Rubik-Italic',
        rubikMedium: 'Rubik-Medium',
        rubikExtraBold: 'Rubik-ExtraBold',
        rubikExtraBoldItalic: 'Rubik-ExtraBoldItalic',
        rubikLightItalic: 'Rubik-LightItalic',
        rubikMediumItalic: 'Rubik-MediumItalic',
        rubikSemiBoldItalic: 'Rubik-SemiBoldItalic',
        rubikBoldItalic: 'Rubik-BoldItalic',
        rubikBlackItalic: 'Rubik-BlackItalic',
      },
      colors: {
        primary: '#F77658',
        secondary: '#30244F',
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
