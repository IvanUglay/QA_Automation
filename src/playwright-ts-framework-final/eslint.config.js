
import playwright from 'eslint-plugin-playwright';

export default [
  {
    files: ['**/*.ts'],
    ignores: [
      'node_modules/**',
      'dist/**',
      'playwright-report/**',
      'html-report/**'
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      playwright
    },
    rules: {
      'semi': ['error', 'always'],
      'no-unused-vars': 'warn',
      'no-console': 'off',
      ...playwright.configs.recommended.rules
    }
  }
];
