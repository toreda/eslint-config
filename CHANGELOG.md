# Changelog

All notable changes to `@toreda/eslint-config` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

## [1.0.0]

### Added
- Initial release of `@toreda/eslint-config` with the legacy `.eslintrc` configuration format.
- TypeScript parsing via `@typescript-eslint/parser`.
- Extends `plugin:@typescript-eslint/recommended` and `plugin:prettier/recommended`.

[Unreleased]: https://github.com/toreda/eslint-config/compare/v3.0.0...HEAD
[3.0.0]: https://github.com/toreda/eslint-config/compare/v2.2.0...v3.0.0
[2.2.0]: https://github.com/toreda/eslint-config/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/toreda/eslint-config/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/toreda/eslint-config/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/toreda/eslint-config/releases/tag/v1.0.0
