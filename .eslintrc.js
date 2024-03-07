module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['src/**/*.test.ts'],
  rules: {
    'no-undef': 0,
  },
};
