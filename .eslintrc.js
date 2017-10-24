module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  rules: {},
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  plugins: ['react'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  rules: {
    'no-console': [
      'warn',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],
    'react/jsx-uses-vars': 1,
    'react/prop-types': 0,
    'react/prefer-stateless-function': 2,
    'import/extensions': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'import/prefer-default-export': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};