import { derived, writable, type Writable } from 'svelte/store';
import { getLines, getTextMazeDimensions } from './components/maze/utils/maze';
import type { Dimensions, TextMazeInput } from './types';
import { page } from '$app/stores';

export const dimensions = writable<Dimensions>({ height: 20, width: 20 });
export const area = derived(
	dimensions,
	($dimensions: Dimensions) => $dimensions.height * $dimensions.width,
);
export const orientation = derived<Writable<Dimensions>, 'portrait' | 'landscape'>(
	dimensions,
	($dimensions: Dimensions) => ($dimensions.height > $dimensions.width ? 'portrait' : 'landscape'),
);

export const isTextMode = writable(false);
export const text = writable(`Hello\nworld!`);

export const textMazeInput = derived<Writable<string>, TextMazeInput>(text, ($text: string) => {
	const lines = getLines($text);
	const textMazeDimensions = getTextMazeDimensions(lines);
	isTextMode.subscribe((mode) => mode && dimensions.set(textMazeDimensions));
	return {
		lines,
		dimensions: textMazeDimensions,
	};
});

export const shareURL = derived([page, isTextMode, text], ([$page, $textMode, $text]) => {
	const url = $page.url.origin + $page.url.pathname;
	return $textMode ? `${url}?text=${encodeURIComponent($text)}` : url;
});