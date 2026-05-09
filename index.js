const tseslint = require('typescript-eslint');
const prettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [
	...tseslint.configs.recommended,
	prettierRecommended,
	{
		rules: {
			'@typescript-eslint/ban-ts-comment': 'warn',
			'@typescript-eslint/explicit-function-return-type': 'error',
			'@typescript-eslint/internal/no-typescript-default-import': 'off',
			'@typescript-eslint/no-empty-interface': 'warn',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-inferrable-types': 'off',
			'@typescript-eslint/no-namespace': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{argsIgnorePattern: '^_', varsIgnorePattern: '^_'},
			],
			'@typescript-eslint/no-require-imports': 'warn',
			'@typescript-eslint/prefer-namespace-keyword': 'error',
			'max-len': [
				'warn',
				{
					code: 110,
					ignoreStrings: true,
					ignoreTemplateLiterals: true,
					ignoreComments: true,
				},
			],
		},
	},
	{
		files: ['**/*.spec.ts'],
		rules: {
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'max-len': 'off',
		},
	},
	{
		files: ['*.ts'],
		rules: {
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-require-imports': 'off',
		},
	},
	{
		files: ['**/*.js'],
		rules: {
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/no-require-imports': 'off',
		},
	},
];
