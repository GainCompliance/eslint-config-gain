# Shared ESLint Rules

[![Build Status](https://img.shields.io/travis/GainCompliance/eslint-config-gain/master.svg?style=flat)](https://travis-ci.org/GainCompliance/eslint-config-gain)

## Usage

Extend the rulesets contained in this config to stay in sync with our conventions. Override any conflicting rules in
your local config, but consider contributing them back to this config if we should align to that rule, too.

### Base
In your base `.eslintrc`, extend the `es6.js` ruleset:

```
extends: '@gaincompliance/gain/rules/es6'
```

### Extension
Since ESLint traverses the file system looking for `.eslintrc` files in each directory, you can add additional config
files where you use a specific convention beyond the base.

### Tests

#### Base
```
extends: '@gaincompliance/gain/rules/tests/base'
```

#### Mocha
```
extends: '@gaincompliance/gain/rules/tests/mocha'
```

#### Cucumber
```
extends: '@gaincompliance/gain/rules/tests/cucumber'
```
