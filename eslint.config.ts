import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default defineConfig(
	globalIgnores(['.svelte-kit/', 'build/', 'node_modules/']),
	js.configs.recommended,
	ts.configs.recommended,
	svelte.configs.recommended,
	prettier,
	svelte.configs.prettier,
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
	},
	{
		files: ['**/*.svelte'],
		languageOptions: { parserOptions: { parser: ts.parser } },
	},
	{
		rules: {
			'no-console': ['warn', {}],
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
		},
	},
);
