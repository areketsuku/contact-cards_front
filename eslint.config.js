import { defineConfig } from "eslint/config";

export default defineConfig({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/display-name": "off",
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    ".github/",
    "frontend/workflows/",
    "backend/workflows/",
  ],
});
