// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Important for Tailwind to find your classes
    ],
    theme: {
      extend: { // Use extend to add to Tailwind's defaults
        colors: {
          // Define your palettes here for Tailwind utility classes
          violet: {
            50: '#f7f2ff', 100: '#efe8ff', 200: '#e1d4ff', 300: '#ccb1ff',
            400: '#b485ff', 500: '#9747FF', 600: '#9330f7', 700: '#851ee3',
            800: '#6f18bf', 900: '#5b169c', 950: '#390b6a',
          },
          baltic: {
            50: '#f7f7f8', 100: '#efeef0', 200: '#dbd8df', 300: '#b9b7c2',
            400: '#948fa1', 500: '#777285', 600: '#615c6d', 700: '#4f4b59',
            800: '#43404c', 900: '#3b3941', 950: '#28262C',
          },
          alto: {
            50: '#f8f8f8', 100: '#f0f0f0', 200: '#dedddd', 300: '#d1d0d0',
            400: '#b6b3b3', 500: '#9b9898', 600: '#828080', 700: '#6c6969',
            800: '#5b5959', 900: '#4f4d4d', 950: '#282727',
          },
          // Your semantic names (can reference the palettes above)
          'primary': '#9747FF', // or 'violet.500' if you prefer referencing
          'secondary': '#FFFFFF',
          'brand-button': '#28262C', // or 'baltic.950'
          'text-on-primary': '#FFFFFF',
          'text-on-button': '#FFFFFF',
          'text-default': '#28262C',
        },
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
        },
        borderRadius: { // Example if you need custom border radius values for utilities
          '4xl': '2rem',
        }
      },
    },
    plugins: [],
  }