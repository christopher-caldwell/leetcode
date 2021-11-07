const prettier = require('rc')('./prettier')

module.exports = {
  root: true,
  env: {
    jest: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: ['*.d.ts'],
  rules: {
    '@typescript-eslint/no-explicit-any': 2,
    'prettier/prettier': ['error', prettier],
    'import/no-extraneous-dependencies': 'off',
  },
}