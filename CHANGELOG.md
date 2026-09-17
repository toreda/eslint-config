# Changelog

All notable changes to `@toreda/eslint-config` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [4.0.0] - 2026-09-16

### Changed
- **BREAKING:** Requires ESLint 10+. Peer dependency on `eslint` raised to `^10.0.0`. For ESLint 9, use `3.1.x`.
- **BREAKING:** Requires Node.js `^20.19.0 || ^22.13.0 || >=24`, matching ESLint 10's supported range.
- **BREAKING:** Replaced the deprecated core `max-len` rule, which ESLint removes in v11, with `@stylistic/max-len` from `@stylistic/eslint-plugin`. Options are unchanged. Consumers that override `max-len` must now override `@stylistic/max-len` instead.
- Peer dependency on `typescript-eslint` raised to `^8.58.0`, the first release that supports both ESLint 10 and TypeScript 6.
- Peer dependencies raised to `eslint-config-prettier >=10.1.0`, `eslint-plugin-prettier ^5.5.6`, and `prettier ^3.8.0`.
- Replaced deprecated `@typescript-eslint/no-empty-interface` (removed in typescript-eslint v9) with its successor `@typescript-eslint/no-empty-object-type` at `warn`. Previously both rules fired on an empty interface, producing an error and a warning; empty object types now produce a single warning.

### Added
- Peer dependency on `@stylistic/eslint-plugin ^5.10.0`. Consumers must install it alongside the other peer dependencies.
- Peer dependency on `typescript >=6.0.0 <7.0.0`. TypeScript was previously an undeclared transitive requirement of `typescript-eslint`.

### Removed
- `@typescript-eslint/internal/no-typescript-default-import` rule entry. It belongs to typescript-eslint's private internal plugin and was never available to consumers.
- Support for ESLint 9.

## [3.1.0] - 2026-05-09

### Changed
- `index.js` now relies on `typescript-eslint`'s bundled parser and plugin registration instead of importing `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` directly. Explicit `languageOptions` and `plugins` blocks were removed.
- `package.json` cleanup: reformatted, added `sideEffects: false`, removed empty `scripts`, and simplified the Node engine range.

### Removed
- Peer dependencies on `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`. They are provided transitively by `typescript-eslint`.

## [3.0.0] - 2026-05-09

### Changed
- **BREAKING:** Migrated configuration from legacy `.eslintrc` format to ESLint 9+ flat config. The export is now an array of config objects instead of a single object with `extends`/`overrides`.
- `parser` and `parserOptions` are now nested under `languageOptions`.
- Plugins (`@typescript-eslint`, `prettier`) are now imported directly and registered under `plugins` rather than referenced by string.
- Former `overrides` entries are now separate config objects with `files` globs. Single-segment globs (`*.spec.ts`, `*.js`) were widened to `**/*.spec.ts` and `**/*.js` so they continue to match nested files under flat config semantics.
- Replaced deprecated `@typescript-eslint/no-var-requires` rule with its successor `@typescript-eslint/no-require-imports` (required by `@typescript-eslint` v8).

### Added
- Peer dependencies on `eslint ^9.0.0`, `prettier ^3.0.0`, `typescript-eslint ^8.0.0`, `@typescript-eslint/parser ^8.0.0`, `@typescript-eslint/eslint-plugin ^8.0.0`, `eslint-plugin-prettier ^5.2.1`, and `eslint-config-prettier ^9.1.0`. Consumers must install these alongside `@toreda/eslint-config`.

### Removed
- Support for ESLint 8 and earlier. Consumers must use ESLint 9+ and an `eslint.config.js` (flat config) entry point.

## [2.2.0]

### Changed
- Added additional keyword to package metadata.
- Added missing LICENSE file and README formatting fixes.
- Updated recommended workspace plugins.
- Added exceptions for unused variables (`argsIgnorePattern`/`varsIgnorePattern` matching `^_`).

## [2.1.0]

### Changed
- Removed `max-len` rule from `*.spec.ts` test files.
- Added rule exceptions for `.ts` files outside `src/`.
- Added rule exceptions for `.js` files.

## [2.0.0]

### Changed
- **BREAKING:** Major version bump for compatibility with the latest ESLint at the time. Configuration changes were not backwards compatible with previous versions.
- Removed `prettier/@typescript-eslint` from `extends` — merged into `prettier` as of `eslint-config-prettier` 8.0.0.
- Removed trailing commas from configuration.
- Loosened typing rules inside Jest test files; additional exceptions inside tests.

## [1.0.1]

### Changed
- Version bump for republish. No configuration changes.

## [1.0.0]

### Added
- Initial release of `@toreda/eslint-config` with the legacy `.eslintrc` configuration format.
- TypeScript parsing via `@typescript-eslint/parser`.
- Extends `plugin:@typescript-eslint/recommended` and `plugin:prettier/recommended`.

[Unreleased]: https://github.com/toreda/eslint-config/compare/v4.0.0...HEAD
[4.0.0]: https://github.com/toreda/eslint-config/compare/v3.1.0...v4.0.0
[3.1.0]: https://github.com/toreda/eslint-config/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/toreda/eslint-config/compare/8010ece...v3.0.0
[2.2.0]: https://github.com/toreda/eslint-config/compare/599e7e2...8010ece
[2.1.0]: https://github.com/toreda/eslint-config/compare/f1d23f6...599e7e2
[2.0.0]: https://github.com/toreda/eslint-config/compare/683d042...f1d23f6
[1.0.1]: https://github.com/toreda/eslint-config/compare/0637971...683d042
[1.0.0]: https://github.com/toreda/eslint-config/commit/0637971
