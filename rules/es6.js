module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'shared-node-browser': true
  },

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      classes: true
    }
  },

  plugins: ['filenames'],

  extends: [
    'eslint:recommended',
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict'
  ],

  rules: {
    'no-console': 'error',
    'comma-dangle': ['error', 'never'],
    'max-len': ['error', 120],
    'one-var': ['error', {uninitialized: 'always', initialized: 'never'}],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'filenames/match-regex': ['error', '^[a-z0-9\\-\\.]+$'],
    'new-cap': ['error', {capIsNewExceptions: ['Map', 'List']}],
    yoda: ['error', 'always'],
    'handle-callback-err': 'error',
    'object-curly-spacing': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'global-require': 'off',
    'no-underscore-dangle': ['error', {allow: ['_links', '_embedded']}],
    'no-unused-vars': ['error', {ignoreRestSiblings: true}]
  }
};
