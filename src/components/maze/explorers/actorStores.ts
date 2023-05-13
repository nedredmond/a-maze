import { derived, get, writable } from 'svelte/store';
import type { Direction, Position } from '../../../types';
import { dimensions } from '../../../stores';

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
export const minotaurLastDirection = writable<Direction>(null);
