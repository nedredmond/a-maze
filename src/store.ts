import { derived, writable } from 'svelte/store';
import type { Dimensions } from './types';

export const dimensions = writable({ height: 20, width: 20 });
export const area = derived(
	dimensions,
	($dimensions: Dimensions) => $dimensions.height * $dimensions.width,
);
