import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit, type Config } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vitest/config';

// Emulated web worker does not work in vite dev on Firefox
process.env.BROWSER = 'chromium';

const dev = process.argv.includes('dev');

type Base = NonNullable<Config['paths']>['base'];
const isBase = (value?: string): value is Base =>
	value === undefined || value === '' || (value.startsWith('/') && !value.endsWith('/'));
if (!isBase(process.env.BASE_PATH)) {
	throw new Error(
		`BASE_PATH must be empty or start with "/" and not end with "/", got "${process.env.BASE_PATH}"`,
	);
}

const base = dev ? '' : (process.env.BASE_PATH ?? '');
const prefix = `${base}/`;

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: vitePreprocess(),
			adapter: adapter(),
			paths: { base },
		}),
		SvelteKitPWA({
			base: prefix,
			scope: prefix,
			manifest: {
				name: 'A Maze',
				short_name: 'A Maze',
				start_url: prefix,
				scope: prefix,
				icons: [
					{ src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
					{ src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
					{ src: 'maskable-icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
				],
			},
		})
			.flat()
			.map((plugin) =>
				plugin?.name === 'vite-plugin-pwa:pwa-assets'
					? { ...plugin, transformIndexHtml: undefined }
					: plugin,
			),
	],
	define: { 'import.meta.vitest': 'undefined' },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		includeSource: ['src/**/*.{js,ts}'],
	},
});
