module.exports = {
  purge: [
    "./templates/**/*.liquid",
    "./snippets/**/*.liquid",
    "./sections/**/*.liquid",
    "./layout/**/*.liquid",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
