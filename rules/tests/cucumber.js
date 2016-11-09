module.exports = {
  plugins: [
    'cucumber'
  ],

  rules: {
    'no-invalid-this': 'off',
    'cucumber/async-then': 'error',
    'func-names': 'off',
    'new-cap': [
      'error',
      {
        capIsNewExceptions: [
          'Before',
          'After',
          'Given',
          'When',
          'Then'
        ]
      }
    ]
  }
};
