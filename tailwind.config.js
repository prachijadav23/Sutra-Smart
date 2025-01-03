/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          navy: {
            900: '#0A192F',
            800: '#112240',
            700: '#1A365D',
          },
          midnight: {
            900: '#020617',
            800: '#0F172A',
            700: '#1E293B',
          },
          accent: {
            cyan: '#64FFDA',
            blue: '#57CBE6',
          }
        }
      },
    },
    plugins: [],
  };