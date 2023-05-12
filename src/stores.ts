import { derived, get, writable, type Writable } from 'svelte/store';
import { getLines, getTextMazeDimensions } from './components/maze/utils/maze';
import type { Cell, Dimensions, Direction, Position, TextMazeInput } from './types';
import { page } from '$app/stores';

export const swipeDirection = writable<Direction>(null);

export const grid = writable<Cell[][]>([]);
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

export const isExplorerMode = writable(false);
export const theseusPosition = writable({ x: 0, y: 0 });
export const theseusIndex = derived(
	[theseusPosition, dimensions],
	([$theseusPosition, $dimensions]) => $theseusPosition.y * $dimensions.width + $theseusPosition.x,
);

export const minotaurStartingPosition = derived(dimensions, ($dimensions) => ({
	x: $dimensions.width - 1,
	y: $dimensions.height - 1,
}));
export const minotaurPosition = writable<Position>({
	x: get(dimensions).width - 1,
	y: get(dimensions).height - 1,
});
export const minotaurIndex = derived(
	[minotaurPosition, dimensions],
	([$minotaurPosition, $dimensions]) =>
		$minotaurPosition.y * $dimensions.width + $minotaurPosition.x,
);

export const controlsDisabled = derived(isExplorerMode, ($isExplorerMode) => !$isExplorerMode);
