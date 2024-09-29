/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths as necessary
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#7070e2',
      },
    },
  },
  plugins: [],
};
