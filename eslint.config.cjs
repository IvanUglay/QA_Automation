const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: ["error", 2],
      "no-unused-vars": ["warn"],
      "no-console": ["warn"],
      "no-var": ["error"],
      "prefer-const": ["error"]
    },
  },
];
