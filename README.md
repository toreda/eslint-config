
[![Toreda](https://content.toreda.com/logo/toreda-logo.png)](https://www.toreda.com)

# `@toreda/eslint-config`

Standard `eslint-config` for Toreda TypeScript projects.

Flat ESLint config array that extends [`typescript-eslint`](https://typescript-eslint.io/)'s recommended rules and [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)'s recommended config, then layers Toreda's rule choices on top.

&nbsp;

# Requirements

| `@toreda/eslint-config` | ESLint | Node.js | Config format |
|---|---|---|---|
| `4.x` (current) | `10.x` | `^20.19.0 \|\| ^22.13.0 \|\| >=24` | Flat config (`eslint.config.*`) |
| `3.1.x` | `9.x` | `>=20.9.0` | Flat config (`eslint.config.*`) |
| `2.x` | `8.x` and earlier | | Legacy (`.eslintrc`) |

&nbsp;

# Installation

`@toreda/eslint-config` declares its dependencies as peer dependencies, so install them alongside the package.

## Install with npm

```bash
npm install --save-dev @toreda/eslint-config eslint typescript typescript-eslint @stylistic/eslint-plugin eslint-plugin-prettier eslint-config-prettier prettier
```

## Install with pnpm

```bash
pnpm add -D @toreda/eslint-config eslint typescript typescript-eslint @stylistic/eslint-plugin eslint-plugin-prettier eslint-config-prettier prettier
```

## Install with yarn

```bash
yarn add --dev @toreda/eslint-config eslint typescript typescript-eslint @stylistic/eslint-plugin eslint-plugin-prettier eslint-config-prettier prettier
```

## Peer dependencies

| Package | Version |
|---|---|
| `eslint` | `^10.0.0` |
| `typescript` | `>=6.0.0 <7.0.0` |
| `typescript-eslint` | `^8.58.0` |
| `@stylistic/eslint-plugin` | `^5.10.0` |
| `eslint-plugin-prettier` | `^5.5.6` |
| `eslint-config-prettier` | `>=10.1.0` |
| `prettier` | `^3.8.0` |

The `typescript` range covers TypeScript 6. `typescript-eslint` may support a narrower range within it, so check [typescript-eslint's supported TypeScript versions](https://typescript-eslint.io/users/dependency-versions/) before upgrading TypeScript.

&nbsp;

# Usage

## Quick start

Create `eslint.config.js` in your project's root folder and spread `@toreda/eslint-config` into your flat config array:

```javascript
const toredaConfig = require('@toreda/eslint-config');

module.exports = [...toredaConfig];
```

Then run ESLint:

```bash
npx eslint .
```

Add scripts to `package.json` so the whole team runs it the same way:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## ES modules

If your project uses `"type": "module"` or you prefer ESM, name the file `eslint.config.mjs`:

```javascript
import toredaConfig from '@toreda/eslint-config';

export default [...toredaConfig];
```

## TypeScript config file

ESLint 10 can load `eslint.config.ts`. It needs [`jiti`](https://github.com/unjs/jiti) unless your Node.js version has TypeScript type stripping enabled, so install it as a dev dependency:

```bash
npm install --save-dev jiti
```

```typescript
import toredaConfig from '@toreda/eslint-config';
import type {Linter} from 'eslint';

const config: Linter.Config[] = [...toredaConfig];

export default config;
```

## Ignoring files

Add a config object that contains only an `ignores` key. It applies globally.

```javascript
const toredaConfig = require('@toreda/eslint-config');

module.exports = [
  ...toredaConfig,
  {
    ignores: ['dist/**', 'coverage/**', '**/*.generated.ts'],
  },
];
```

`node_modules` is ignored by ESLint automatically.

## Overriding rules

Config objects later in the array win, so place your overrides after the spread. A config object without a `files` key applies to every file.

```javascript
const toredaConfig = require('@toreda/eslint-config');

module.exports = [
  ...toredaConfig,
  {
    rules: {
      // Promote a warning to an error.
      '@typescript-eslint/no-explicit-any': 'error',
      // Raise the line-length limit. Options replace the defaults entirely.
      '@stylistic/max-len': ['warn', {code: 120, ignoreStrings: true, ignoreComments: true}],
      // Turn a rule off.
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
];
```

> An unscoped override also applies to files this config already relaxes, such as `**/*.spec.ts`. Scope the override with `files` if you want to keep those exemptions.

## Adding rules for specific files

Use `files` globs to target a subset of the project. Globs are relative to the directory containing the config file.

```javascript
const toredaConfig = require('@toreda/eslint-config');

module.exports = [
  ...toredaConfig,
  {
    files: ['scripts/**/*.ts'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    files: ['src/**/*.ts'],
    ignores: ['src/**/*.spec.ts'],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'error',
    },
  },
];
```

## Type-aware linting

The base config does not require type information. To add `typescript-eslint`'s type-checked rules, spread them before `@toreda/eslint-config` so Toreda's severities still win, then enable the project service:

```javascript
const toredaConfig = require('@toreda/eslint-config');
const tseslint = require('typescript-eslint');

module.exports = [
  ...tseslint.configs.recommendedTypeChecked,
  ...toredaConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    // Type information is not available for plain JavaScript files.
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    ...tseslint.configs.disableTypeChecked,
  },
];
```

Every linted TypeScript file must be included by a `tsconfig.json` for this to work.

## Prettier

Formatting is enforced through the `prettier/prettier` rule, which reports any difference from Prettier's output as an ESLint error. Prettier reads your project's own configuration, so add a `.prettierrc` (or equivalent) at the project root:

```json
{
  "useTabs": true,
  "singleQuote": true,
  "printWidth": 110,
  "bracketSpacing": false
}
```

Run `eslint . --fix` to apply Prettier's formatting along with any other auto-fixable rules. Keep `printWidth` at or below the `@stylistic/max-len` limit of 110 so the two never disagree.

&nbsp;

# What's included

## Base configs

1. `typescript-eslint` `recommended`, which also registers the TypeScript parser and plugin.
2. `eslint-plugin-prettier` `recommended`, which enables `prettier/prettier` and disables core and Stylistic rules that conflict with Prettier.

## Rules

Applied to all files:

| Rule | Severity | Notes |
|---|---|---|
| `@typescript-eslint/ban-ts-comment` | warn | |
| `@typescript-eslint/explicit-function-return-type` | error | |
| `@typescript-eslint/no-empty-object-type` | warn | |
| `@typescript-eslint/no-explicit-any` | warn | |
| `@typescript-eslint/no-inferrable-types` | off | |
| `@typescript-eslint/no-namespace` | off | |
| `@typescript-eslint/no-unused-vars` | warn | Names starting with `_` are ignored for both variables and arguments. |
| `@typescript-eslint/no-require-imports` | warn | |
| `@typescript-eslint/prefer-namespace-keyword` | error | |
| `@stylistic/max-len` | warn | 110 characters. Strings, template literals, and comments are ignored. |

## File-specific overrides

| Files | Rules turned off |
|---|---|
| `**/*.spec.ts` | `explicit-function-return-type`, `no-empty-function`, `no-explicit-any`, `no-non-null-assertion`, `@stylistic/max-len` |
| `*.ts` in the project root (for example `jest.config.ts`) | `explicit-function-return-type`, `no-explicit-any`, `no-require-imports` |
| `**/*.js` | `explicit-function-return-type`, `no-require-imports` |

&nbsp;

# Upgrading

## From 3.x

- Requires ESLint 10 and Node.js `^20.19.0 || ^22.13.0 || >=24`.
- Install the new peer dependency `@stylistic/eslint-plugin`.
- TypeScript is now a declared peer dependency and must be `6.x`. `typescript-eslint` must be `8.58.0` or newer.
- The core `max-len` rule was replaced by `@stylistic/max-len`. Any override of `max-len` in your config must be renamed.
- `@typescript-eslint/no-empty-interface` was replaced by `@typescript-eslint/no-empty-object-type`.

## From 2.x

Version 3.0.0 moved from legacy `.eslintrc` to flat config. Delete `.eslintrc*`, create `eslint.config.js` as shown above, and then follow the 3.x upgrade notes.

See [CHANGELOG.md](CHANGELOG.md) for the full history.

&nbsp;

# More information

See [ESLint's shareable configs guide](https://eslint.org/docs/latest/extend/shareable-configs) and the [flat config documentation](https://eslint.org/docs/latest/use/configure/configuration-files) for more information.

&nbsp;

# Legal

## License

[MIT](LICENSE) &copy; Toreda, Inc.


## Copyright
Copyright &copy; 2019 - 2026 Toreda, Inc. All Rights Reserved.

https://www.toreda.com
