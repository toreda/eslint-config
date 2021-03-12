module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		// Allows for the parsing of modern ECMAScript features
		ecmaVersion: 2020,
		// Allows for the use of imports
		sourceType: "module",
		ecmaFeatures: {},
	},
	settings: {},
	extends: [
		// Uses the recommended rules from the @typescript-eslint/eslint-plugin
		"plugin:@typescript-eslint/recommended",
		// plugin-prettier and eslint-config-prettier. This will display prettier
		// errors as ESLint errors. Make sure this is always the last configuration in the extends array.
		"plugin:prettier/recommended",
	],
	rules: {
		"@typescript-eslint/explicit-function-return-type": "error",
		"@typescript-eslint/ban-ts-comment": "warn",
		"@typescript-eslint/no-empty-interface": "warn",
		"@typescript-eslint/no-explicit-any": "warn",
		"@typescript-eslint/no-var-requires": "warn",
		"@typescript-eslint/internal/no-typescript-default-import": "off",
		"@typescript-eslint/no-inferrable-types": "off",
		"max-len": ["warn", { code: 110 }],
	},
	overrides: [
		{
			files: ["*.spec.ts"],
			rules: {
				"@typescript-eslint/explicit-function-return-type": 0,
				"@typescript-eslint/no-empty-function": 0,
				"@typescript-eslint/no-explicit-any": 0,
				"@typescript-eslint/no-non-null-assertion": 0,
			},
		},
		{
			files: ['./*.ts'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 0,
				'@typescript-eslint/no-explicit-any': 0,
				'@typescript-eslint/no-var-requires': 0
			}
		}
		{
			files: ["*.js"],
			rules: {
				"@typescript-eslint/explicit-function-return-type": 0,
				"@typescript-eslint/no-var-requires": 0,
			},
		},
	],
};
