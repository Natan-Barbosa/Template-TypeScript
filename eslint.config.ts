import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,ts,mts,cts}"],
    languageOptions: { globals: globals.browser },
    rules: {
      "prefer-const": "error",
      "no-const-assign": "error",
      "no-unused-vars": "warn",
      camelcase: "error",
      "default-case": "warn",
      "no-console": "warn",
      "no-empty": "error",
      "no-empty-function": "error",
      "no-var": "error",
      "no-undef": "off",
    },
  },
]);
