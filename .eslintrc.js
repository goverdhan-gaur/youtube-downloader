module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  rules   : {
    'curly': 'error',
    'quotes': ['error', 'single'],
    'jsx-a11y/alt-text'                  : 0,
    'max-len'                            : ['error', { 'code' : 120 }],
    'react/jsx-max-props-per-line'       : [1, { 'maximum' : 1, 'when' : 'multiline' }],
    'react/jsx-closing-bracket-location' : [2, 'tag-aligned'],
    // suppress errors for missing 'import React' in files
    'no-unused-vars': ['error', { 'vars': 'local', 'args' : 'none' }],
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }], //should add ".ts" if typescript project
 
  },
  settings : {
    'import/resolver' : {
      node : {
        extensions : ['.js', '.jsx', '.ts', '.tsx']
      },
      alias : {
        map : [
          ['@', './src'],
          ['@/*', './src/*']
        ],
      },
    },
  },
};