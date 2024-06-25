/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        basicsans: ['var(--font-poppins)'],
        basicthin: ['BasicSans-Thin', 'sans-serif'],
        basicextralight: ['BasicSans-ExtraLight', 'sans-serif'],
        basiclight: ['BasicSans-Light', 'sans-serif'],
        basicregular: ['BasicSans-Regular', 'sans-serif'],
        basicsemibold: ['BasicSans-SemiBold', 'sans-serif'],
        basicbold: ['BasicSans-Bold', 'sans-serif'],
      },
      fontSize: {
        sm: "clamp(0.8rem, 0.25vi + 0.74rem, 0.94rem)",
        base: "clamp(1rem, 0.45vi + 0.89rem, 1.25rem)",
        lg: "clamp(1.25rem, 0.76vi + 1.06rem, 1.67rem)",
        xl: "clamp(1.56rem, 1.2vi + 1.26rem, 2.22rem)",
        "2xl": "clamp(1.95rem, 1.83vi + 1.5rem, 2.96rem)",
        "3xl": "clamp(2.44rem, 2.74vi + 1.76rem, 3.95rem)",
        "4xl": "clamp(3.05rem, 4.02vi + 2.05rem, 5.26rem)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        kin: {
          text: '#908572',
          textdark: '#766850',
          textsecondary: '#FCF2E9'
        },
        primary: {
          main: '#F58136',
          dark: '#B9642D',
        },
        secondary: {
          main: '#73C8AF',
          dark: '#5F9383',
        },
        success: {
          main: '#13DEB9',
          light: '#E6FFFA',
          dark: '#02b3a9',
          contrastText: '#ffffff',
        },
        info: {
          main: '#539BFF',
          light: '#EBF3FE',
          dark: '#1682d4',
          contrastText: '#ffffff',
        },
        error: {
          main: '#FA896B',
          light: '#FDEDE8',
          dark: '#f3704d',
          contrastText: '#ffffff',
        },
        warning: {
          main: '#FFAE1F',
          light: '#FEF5E5',
          dark: '#ae8e59',
          contrastText: '#ffffff',
        },
        grey: {
          100: '#F2F6FA',
          200: '#EAEFF4',
          300: '#DFE5EF',
          400: '#7C8FAC',
          500: '#5A6A85',
          600: '#2A3547',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'),],
};
