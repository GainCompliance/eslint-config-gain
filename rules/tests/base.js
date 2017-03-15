module.exports = {
  extends: [
    '../es6.js'
  ],

  rules: {
    'no-undefined': 'off',
    'newline-per-chained-call': ['error', {ignoreChainWithDepth: 4}],
    'no-restricted-syntax': 'off'
  }
};
