import { crossfade } from 'svelte/transition';

export const crossfadeTransition = crossfade({
	duration: (d) => Math.sqrt(d * 200),
});
