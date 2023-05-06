import { derived, writable } from 'svelte/store';
import { getLines, getTextMazeDimensions } from './components/maze/utils/maze';
import type { Dimensions } from './types';

export const dimensions = writable({ height: 20, width: 20 });
export const area = derived(
	dimensions,
	($dimensions: Dimensions) => $dimensions.height * $dimensions.width,
);

export const textMode = writable(false);
export const text = writable('Hello world!');

export const textMazeInput = derived(text, ($text: string) => {
	const lines = getLines($text);
	const textMazeDimensions = getTextMazeDimensions(lines);
	dimensions.set(textMazeDimensions);
	return {
		lines,
		dimensions: textMazeDimensions,
	};
});
