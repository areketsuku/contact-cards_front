import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    extends: ["eslint:recommended"],
    languageOptions: { globals: globals.browser },
    ignores: [
      "node_modules/**",
      "dist/**",
      ".github/**",
      "frontend/workflows/**",
      "backend/workflows/**"
    ]
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: ["plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    extends: ["plugin:react/recommended"],
    plugins: ["react", "react-hooks"],
    rules: {
      "react/display-name": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  },
  {
    files: ["**/*.json"],
    extends: ["json/recommended"],
  },
]);
