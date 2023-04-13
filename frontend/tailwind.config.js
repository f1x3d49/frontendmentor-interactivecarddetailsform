/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        desktop: "url('/src/images/bg-main-desktop.png')",
        mobile: "url('/src/images/bg-main-mobile.png')",
      }),
      colors: {
        gradient1: "hsl(var(--color-gradient1) / <alpha-value>)",
        gradient2: "hsl(var(--color-gradient2) / <alpha-value>)",
        sred: "hsl(var(--color-red) / <alpha-value>)",
        swhite: "hsl(var(--color-white) / <alpha-value>)",
        lgviolet: "hsl(var(--color-lgviolet) / <alpha-value>)",
        dgviolet: "hsl(var(--color-dgviolet) / <alpha-value>)",
        vdviolet: "hsl(var(--color-vdviolet) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
