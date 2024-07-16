/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        skin: {
          base1: "var(--primary-color)",
          base2: "var(--secondary-color)",
          base3: "var(--btn-glass)",
          base4: "var(--btn-border)",
        },
      },
      zIndex: {
        Infinity: "999999999999",
        bottomest: "-1",
        t2: "2",
      },
      height: {
        v20: "20vh",
      },
    },
  },
  plugins: [],
};
