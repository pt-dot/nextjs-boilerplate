module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: {
        greedy: [/gap-/, /grid-cols-/, /col-span-/],
      },
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      head: ['Montserrat', 'sans-serif'],
      body: ['Roboto Mono', 'monospace'],
    },
    extend: {
      colors: {
        primary: {
          50: '#fee4ff',
          100: '#ffb5f3',
          200: '#fa86e5',
          300: '#f656d3',
          400: '#f226bf',
          500: '#d90d9f',
          600: '#a90686',
          700: '#790269',
          800: '#4b0045',
          900: '#1d001d',
        },
      },
      transitionProperty: {
        height: 'height',
        'max-height': 'max-height',
        width: 'width',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // import tailwind forms
  ],
};
