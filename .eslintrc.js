module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'plugin:@next/next/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    "next/core-web-vitals"
  ],
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module'
  },
  "settings": {
    "react": {
      "version": "detect"
    },
  },
  "rules": {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off"
  }
};