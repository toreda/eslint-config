module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		// Allows for the parsing of modern ECMAScript features
		ecmaVersion: 2020,
		// Allows for the use of imports
		sourceType: 'module',
		ecmaFeatures: {},
	},
	settings: {},
	extends: [
		// Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'plugin:@typescript-eslint/recommended',
		// plugin-prettier and eslint-config-prettier. This will display prettier
		// errors as ESLint errors. Make sure this is always the last configuration in the extends array.
		'plugin:prettier/recommended',
	],
	rules: {
		'@typescript-eslint/ban-ts-comment': 'warn',
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/internal/no-typescript-default-import': 'off',
		'@typescript-eslint/no-empty-interface': 'warn',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_', varsIgnorePattern: '^_'}],
		'@typescript-eslint/no-var-requires': 'warn',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'max-len': ['warn', {code: 110, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreComments: true}],
	},
	overrides: [
		{
			files: ['*.spec.ts'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/no-empty-function': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/no-non-null-assertion': 'off',
				'max-len': 'off',
			},
		},
		{
			files: ['./*.ts'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
};
