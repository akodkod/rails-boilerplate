import js from "@eslint/js"
import stylistic from "@stylistic/eslint-plugin"
import eslintComments from "eslint-plugin-eslint-comments"
import importPlugin from "eslint-plugin-import"
import importNewlines from "eslint-plugin-import-newlines"
import unusedImports from "eslint-plugin-unused-imports"
import globals from "globals"
import ts from "typescript-eslint"

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    plugins: {
      "@stylistic": stylistic,
      "import": importPlugin,
      "import-newlines": importNewlines,
      "unused-imports": unusedImports,
      "eslint-comments": eslintComments,
    },
    rules: {
      "no-alert": "error",
      "no-console": "error",
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/jsx-quotes": ["error", "prefer-double"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/semi": ["error", "never"],
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/space-before-function-paren": [
        "error",
        {
          asyncArrow: "always",
          anonymous: "never",
          named: "never",
        },
      ],
      "@stylistic/type-annotation-spacing": [
        "error",
        {
          before: false,
          after: true,
          overrides: {
            arrow: {
              before: true,
              after: true,
            },
          },
        },
      ],
      "@stylistic/member-delimiter-style": [
        "error",
        {
          multiline: {
            delimiter: "none",
          },
        },
      ],
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          "vars": "all",
          "varsIgnorePattern": "^_",
          "args": "after-used",
          "argsIgnorePattern": "^_",
        },
      ],
      "import/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "never",
        },
      ],
      "import-newlines/enforce": [
        "error",
        128,
      ],
      "eslint-comments/disable-enable-pair": "error",
      "eslint-comments/no-aggregating-enable": "error",
      "eslint-comments/no-duplicate-disable": "error",
      "eslint-comments/no-unlimited-disable": "error",
      "eslint-comments/no-unused-enable": "error",
      "eslint-comments/require-description": "error",
    },
  },
]
