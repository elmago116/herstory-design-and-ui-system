// Root Tailwind entry. The theme itself lives in src/ui/tailwind.config.cjs,
// copied verbatim from the Subframe sync — never edit the token layer here.
const shared = require("./src/ui/tailwind.config.cjs");

module.exports = {
  ...shared,
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  safelist: [],
};
