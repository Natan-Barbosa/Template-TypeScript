import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,ts,mts,cts}"],
    plugins: { js },
    extends: [
      "js/recommended",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    languageOptions: { globals: globals.browser },
    rules: {
      "prefer-const": "error",
      "no-const-assign": "error",
      "no-duplicate-imports": "error",
      "no-unused-vars": "warn",
      camelcase: "error",
      "default-case": "warn",
      "no-console": "warn",
      "no-empty": "error",
      "no-empty-function": "error",
      "no-var": "error",
    },
  },
]);
