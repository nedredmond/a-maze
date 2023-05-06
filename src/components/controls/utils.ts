import type { Dimensions } from '../../types';

export const MAX_SIZE = 75;
export const MIN_SIZE = 5;

export const clamp = (value: number, min: number, max: number) =>
	Math.min(Math.max(value, min), max);

export const clampDimensions = (dimensions: Dimensions) => ({
	height: clamp(dimensions.height, MIN_SIZE, MAX_SIZE),
	width: clamp(dimensions.width, MIN_SIZE, MAX_SIZE),
});
