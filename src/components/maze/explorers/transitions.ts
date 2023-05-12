import { quintOut } from 'svelte/easing';
import { crossfade } from 'svelte/transition';

export const crossfadeTransition = crossfade({
	duration: (d) => Math.sqrt(d * 1000),
	fallback(node) {
		const style = getComputedStyle(node);
		const transform = style.transform === 'none' ? '' : style.transform;

		return {
			duration: 600,
			easing: quintOut,
			css: (t) => `
                transform: ${transform} scale(${t});
                opacity: ${t}
            `,
		};
	},
});
