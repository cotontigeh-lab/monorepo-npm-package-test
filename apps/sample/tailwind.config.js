import { tailwindcssVarsInjector } from "cotontigeh-monorepo-test";

/* eslint-disable */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcssVarsInjector({ activeVars: ["colors", "blur", "boxShadow"] }),
  ],
};
