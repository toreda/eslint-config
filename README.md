
[![Toreda](https://content.toreda.com/logo/toreda-logo.png)](https://www.toreda.com)

# `@toreda/eslint-config`


Toreda's official `eslint-config` for organization-wide TypeScript projects.

&nbsp;

# Installation

## Install with `pnpm`

```bash
$ `pnpm` add @toreda/eslint-config --D
```

## Install with npm
```bash
$ npm add @toreda/eslint-config --save-dev
```

&nbsp;

# Usage

## Using the config

After `@toreda/eslint-config` has been added to project dependencies, create (or open) `eslint.config.js` in your project's root folder.

**Spread `@toreda/eslint-config` into your flat config array:**

```javascript
const toredaConfig = require('@toreda/eslint-config');

module.exports = [
  ...toredaConfig,
  {
    rules: {}
  }
];
```

> Requires ESLint 9 or newer. For ESLint 8 and earlier, use `@toreda/eslint-config@2.x`.

&nbsp;

# More information

See [eslint.org's shareable configs page](https://eslint.org/docs/developer-guide/shareable-configs) for more information.

&nbsp;

# Legal

## License

[MIT](LICENSE) &copy; Toreda, Inc.


## Copyright
Copyright &copy; 2019 - 2026 Toreda, Inc. All Rights Reserved.

https://www.toreda.com
