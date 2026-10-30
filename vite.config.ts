import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit, type Config } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

// Emulated web worker does not work in vite dev on Firefox
process.env.BROWSER = 'chromium';

const dev = process.argv.includes('dev');

type Base = NonNullable<Config['paths']>['base'];
const isBase = (value?: string): value is Base =>
	value === undefined || value === '' || value.startsWith('/');
if (!isBase(process.env.BASE_PATH)) {
	throw new Error(
		`BASE_PATH must be empty or start with "/" and not end with "/", got "${process.env.BASE_PATH}"`,
	);
}

export default defineConfig({
	plugins: [
		sveltekit({
			// Consult https://kit.svelte.dev/docs/integrations#preprocessors
			// for more information about preprocessors
			preprocess: vitePreprocess(),

			// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
			// If your environment is not supported or you settled on a specific environment, switch out the adapter.
			// See https://kit.svelte.dev/docs/adapters for more information about adapters.
			adapter: adapter(),
			paths: { base: dev ? '' : process.env.BASE_PATH },
		}),
	],
	define: { 'import.meta.vitest': 'undefined' },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		includeSource: ['src/**/*.{js,ts}'],
	},
});
