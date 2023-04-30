import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'import.meta.vitest': 'undefined',
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}', 'src/utils/**/*.{js,ts}'],
	},
});
