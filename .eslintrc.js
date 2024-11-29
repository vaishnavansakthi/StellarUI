/* eslint-disable no-undef */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows the parsing of modern ECMAScript features
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Ensures Prettier is run with ESLint
  ],
  rules: {
    'react/prop-types': 'off', // Since we're using TypeScript, PropTypes aren't necessary
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Optional rule to allow inferred types
    '@typescript-eslint/no-explicit-any': 'warn', // Warn about usage of `any`
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 100,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the version of React
    },
  },
};
