
# `@toreda/eslint-config`

![Toreda](https://content.toreda.com/logo/toreda-logo.png)

Toreda's official `eslint-config` for organization-wide TypeScript projects.

## Installation

### Install using yarn

```bash
$ yarn add @toreda/eslint-config --dev
```

### Install using npm
```bash
$ npm add @toreda/eslint-config --save-dev
```

## Usage

### Using the config

After `@toreda/eslint-config` has been added to project dependencies you'll need to open `.eslintrc.js` in your project's root folder.

**Add `"@toreda/eslint-config"` to the extends array:**

```javascript
module.exports = {
  extends: [
    "@toreda/eslint-config"
  ],
  rules: {}
};
```


### More information

See [eslint.org's shareable configs page](https://eslint.org/docs/developer-guide/shareable-configs) for more information.