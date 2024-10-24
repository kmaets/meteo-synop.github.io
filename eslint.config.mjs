import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

import reactThreePlugin from '@react-three/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
	{
		languageOptions: {
			parser: tsParser,
			parserOptions: {
                project: "./tsconfig.json",
                sourceType: "module",
                ecmaVersion: 2022
            }
		},
		files: ['src/**/*.ts', 'src/**/*.tsx'],
		// ignores: ['dist', 'src/**/*.ts'],
		plugins: {
			'react-refresh': reactRefreshPlugin,
			'react-hooks': reactHooksPlugin,
			'@react-three': reactThreePlugin,
			'@typescript-eslint': tsPlugin,
			'@stylistic': stylistic,
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
			...reactThreePlugin.configs.recommended.rules,
			...reactHooksPlugin.configs.recommended.rules,
			...stylistic.configs['recommended-flat'].rules,
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			'@stylistic/no-tabs': ['error', { allowIndentationTabs: true }],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/semi': ['error', 'always'],
			'@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-line'}], // "none"|"literal"|"single-child"|"non-jsx"
			'@stylistic/jsx-quotes': ['error', 'prefer-single'],
			'@stylistic/jsx-curly-newline': ['error', 'consistent'],
			"@stylistic/jsx-indent-props": ['error', 'tab']
		},
	}
];