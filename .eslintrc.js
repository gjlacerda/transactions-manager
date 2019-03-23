module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: [2, 'never'],
    "react/prop-types": 0,
    "react/jsx-filename-extension": 0,
    "import/prefer-default-export": 0,
    "no-confusing-arrow": 0,
    "no-return-assign": 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  },
};
