import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    rules: {
      indent: ["error", 2],
      "no-unused-vars": "off",
      "space-before-function-paren": ["error", "always"],
      "space-in-parens": ["error", "never"],
    },
  },
  {
    ignores: ["**/protos/**", "**/generated/**", "**/coverage/**", "**/dist/**", "**/build/**", "**/drizzle**"],
  },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
];
