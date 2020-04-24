module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended', 'prettier', 'plugin:vue/essential'],
	plugins: ['vue'],
	rules: {
		'no-unused-vars': 'error',
		semi: 'off',
		'comma-dangle': 'off',
		'no-plusplus': 'off',
		'max-len': [
			'error',
			300,
			{
				code: 80,
				ignoreUrls: true,
				tabWidth: 4,
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
		'prefer-destructuring': 'off',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-restricted-imports': [
			'error',
			{
				paths: ['fs'],
				patterns: ['eslint/*'],
			},
		],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
	},
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			vue: true,
		},
	},
}
