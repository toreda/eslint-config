module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		// Allows for the parsing of modern ECMAScript features
		ecmaVersion: 2020,
		// Allows for the use of imports
		sourceType: "module",
		ecmaFeatures: {}
	},
	settings: {},
	extends: [
		// Uses the recommended rules from the @typescript-eslint/eslint-plugin
		"plugin:@typescript-eslint/recommended",
		// Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier,
		"prettier/@typescript-eslint",
		// plugin-prettier and eslint-config-prettier. This will display prettier
		// errors as ESLint errors. Make sure this is always the last configuration in the extends array.
		"plugin:prettier/recommended"
	],
	rules: {
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/internal/no-typescript-default-import': 'off',
		'@typescript-eslint/no-var-requires': 'warn',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-empty-interface': 'warn',
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/ban-ts-comment': 'warn',
		'max-len': ['warn', {'code': 110}]
	},
	overrides: [
		{
			files: ['*.spec.ts'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 0,
				'@typescript-eslint/no-empty-function': 0,
				'@typescript-eslint/no-explicit-any': 0
			}
		}
	]
};
