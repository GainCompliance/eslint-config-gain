# Shared ESLint Rules

[![npm](https://img.shields.io/npm/v/@gaincompliance/eslint-config-gain.svg?maxAge=2592000)](https://www.npmjs.com/package/@gaincompliance/eslint-config-gain)
[![license](https://img.shields.io/github/license/GainCompliance/eslint-config-gain.svg)](LICENSE)
[![Build Status](https://img.shields.io/travis/GainCompliance/eslint-config-gain/master.svg?style=flat)](https://travis-ci.org/GainCompliance/eslint-config-gain)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![greenkeeper badge](https://badges.greenkeeper.io/GainCompliance/eslint-config-gain.svg)


## Installation
```
$ npm i @gaincompliance/eslint-config-gain -D
```

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
