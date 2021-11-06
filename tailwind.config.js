module.exports = {
  purge: {
    enabled: true,
    content: ["./**/*.liquid", "./css/*.css"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "Arial", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
