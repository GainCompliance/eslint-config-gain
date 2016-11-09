module.exports = {
  extends: [
    'plugin:react/recommended',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y'
  ],
  rules: {
    'import/prefer-default-export': 'error',
    'jsx-quotes': 'error',
    'no-extra-parens': 'off',
    'react/display-name': 'error',
    'react/no-is-mounted': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-stateless-function': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
    'react/jsx-key': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-bind': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error'
  }
};
