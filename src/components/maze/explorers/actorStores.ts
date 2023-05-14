import { derived, get, writable } from 'svelte/store';
import type { Direction, Position } from '../../../types';
import { grid, dimensions } from '../../../stores';

export const theseusPosition = writable({ x: 0, y: 0 });
export const theseusIndex = derived(
	[theseusPosition, dimensions],
	([$theseusPosition, $dimensions]) => $theseusPosition.y * $dimensions.width + $theseusPosition.x,
);

export const minotaurDisabled = writable(false);
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
export const minotaurLastDirection = writable<Direction>('top');

export const caughtByMinotaur = derived(
	[minotaurPosition, theseusPosition],
	([$minotaurPosition, $theseusPosition]) => {
		if ($theseusPosition.x === $minotaurPosition.x && $theseusPosition.y === $minotaurPosition.y) {
			return true;
		}
		const { x: mX, y: mY } = $minotaurPosition;
		const { x: tX, y: tY } = $theseusPosition;
		const adjacentCells: { x: number; y: number; direction: Direction }[] = [
			{ x: mX, y: mY - 1, direction: 'top' },
			{ x: mX + 1, y: mY, direction: 'right' },
			{ x: mX, y: mY + 1, direction: 'bottom' },
			{ x: mX - 1, y: mY, direction: 'left' },
		];
		for (const cell of adjacentCells) {
			const { x, y, direction } = cell;
			if (x === tX && y === tY && get(grid)[mY][mX][direction]) {
				return true;
			}
		}
		return false;
	},
);

export const stopGame = writable(false);
