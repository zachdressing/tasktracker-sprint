const flowbite = require("flowbite-react/tailwind");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'navBack': 'linear-gradient(90deg, #AEE6D9 0%, #3EBE9F 100%)',
      },
      colors: {
        "blueish": "rgba(87, 205, 255, 1)",
        "reddish": "rgb(255,110,110)",
        "purplish": "rgb(213,159,255)",
        "backMain": "rgba(241, 255, 252, 1)",
        "todo": "rgba(174, 230, 217, 1)",
        "inprog": "rgba(111, 223, 196, 1)",
        "completed": "rgba(62, 190, 159, 1)",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;
