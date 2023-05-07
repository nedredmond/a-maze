import type { Cell } from '../../../types';

type LetterRow = [Cell, Cell, Cell, Cell, Cell];
type LetterMatrix = [LetterRow, LetterRow, LetterRow, LetterRow, LetterRow];

/*
 * Matches any character that is not a letter or space.
 */
export const reAlphabet = /[^a-zA-Z\s]/g;

const strokeCell: Cell = {
	top: true,
	bottom: true,
	right: true,
	left: true,
	fill: 'black',
	x: 0,
	y: 0,
};
const fillCell: Cell = {
	top: true,
	bottom: true,
	right: true,
	left: true,
	fill: 'white',
	x: 0,
	y: 0,
};

/*
 * Map of letters to a corresponding 5x5 matrix.
 */
export const Alphabet: { [key: string]: LetterMatrix } = {
	A: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ ...strokeCell, x: 1, y: 0 },
			{ ...strokeCell, x: 2, y: 0 },
			{ ...strokeCell, x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ ...strokeCell, x: 0, y: 1 },
			{ ...fillCell, top: false, bottom: false, left: false, x: 1, y: 1 },
			{ ...fillCell, top: false, bottom: false, x: 2, y: 1 },
			{ ...fillCell, top: false, bottom: false, right: false, x: 3, y: 1 },
			{ ...strokeCell, x: 4, y: 1 },
		],
		[
			{ ...strokeCell, x: 0, y: 2 },
			{ ...strokeCell, x: 1, y: 2 },
			{ ...strokeCell, x: 2, y: 2 },
			{ ...strokeCell, x: 3, y: 2 },
			{ ...strokeCell, x: 4, y: 2 },
		],
		[
			{ ...strokeCell, x: 0, y: 3 },
			{ x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ x: 3, y: 3 },
			{ ...strokeCell, x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ x: 1, y: 4 },
			{ x: 2, y: 4 },
			{ x: 3, y: 4 },
			{ ...strokeCell, x: 4, y: 4 },
		],
	],
	B: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ ...strokeCell, x: 1, y: 0 },
			{ ...strokeCell, x: 2, y: 0 },
			{ ...strokeCell, x: 3, y: 0 },
			{ x: 4, y: 0 },
		],
		[
			{ ...strokeCell, x: 0, y: 1 },
			{ ...fillCell, top: false, bottom: false, left: false, x: 1, y: 1 },
			{ ...fillCell, top: false, bottom: false, x: 2, y: 1 },
			{ ...fillCell, top: false, bottom: false, right: false, x: 3, y: 1 },
			{ ...strokeCell, x: 4, y: 1 },
		],
		[
			{ ...strokeCell, x: 0, y: 2 },
			{ ...strokeCell, x: 1, y: 2 },
			{ ...strokeCell, x: 2, y: 2 },
			{ ...strokeCell, x: 3, y: 2 },
			{ x: 4, y: 2 },
		],
		[
			{ ...strokeCell, x: 0, y: 3 },
			{ ...fillCell, top: false, bottom: false, left: false, x: 1, y: 3 },
			{ ...fillCell, top: false, bottom: false, x: 2, y: 3 },
			{ ...fillCell, top: false, bottom: false, right: false, x: 3, y: 3 },
			{ ...strokeCell, x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ ...strokeCell, x: 1, y: 4 },
			{ ...strokeCell, x: 2, y: 4 },
			{ ...strokeCell, x: 3, y: 4 },
			{ x: 4, y: 4 },
		],
	],
	C: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ ...strokeCell, x: 1, y: 0 },
			{ ...strokeCell, x: 2, y: 0 },
			{ ...strokeCell, x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ ...strokeCell, x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ x: 3, y: 1 },
			{ x: 4, y: 1 },
		],
		[
			{ ...strokeCell, x: 0, y: 2 },
			{ x: 1, y: 2 },
			{ x: 2, y: 2 },
			{ x: 3, y: 2 },
			{ x: 4, y: 2 },
		],
		[
			{ ...strokeCell, x: 0, y: 3 },
			{ x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ x: 3, y: 3 },
			{ x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ ...strokeCell, x: 1, y: 4 },
			{ ...strokeCell, x: 2, y: 4 },
			{ ...strokeCell, x: 3, y: 4 },
			{ ...strokeCell, x: 4, y: 4 },
		],
	],
	D: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ ...strokeCell, x: 1, y: 0 },
			{ ...strokeCell, x: 2, y: 0 },
			{ ...strokeCell, x: 3, y: 0 },
			{ x: 4, y: 0 },
		],
		[
			{ ...strokeCell, x: 0, y: 1 },
			{ ...fillCell, top: false, left: false, x: 1, y: 1 },
			{ ...fillCell, top: false, x: 2, y: 1 },
			{ ...fillCell, top: false, right: false, x: 3, y: 1 },
			{ ...strokeCell, x: 4, y: 1 },
		],
		[
			{ ...strokeCell, x: 0, y: 2 },
			{ ...fillCell, left: false, x: 1, y: 2 },
			{ ...fillCell, x: 2, y: 2 },
			{ ...fillCell, right: false, x: 3, y: 2 },
			{ ...strokeCell, x: 4, y: 2 },
		],
		[
			{ ...strokeCell, x: 0, y: 3 },
			{ ...fillCell, bottom: false, left: false, x: 1, y: 3 },
			{ ...fillCell, bottom: false, x: 2, y: 3 },
			{ ...fillCell, bottom: false, right: false, x: 3, y: 3 },
			{ ...strokeCell, x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ ...strokeCell, x: 1, y: 4 },
			{ ...strokeCell, x: 2, y: 4 },
			{ ...strokeCell, x: 3, y: 4 },
			{ x: 4, y: 4 },
		],
	],
	E: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ ...strokeCell, x: 1, y: 0 },
			{ ...strokeCell, x: 2, y: 0 },
			{ ...strokeCell, x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ ...strokeCell, x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ x: 3, y: 1 },
			{ x: 4, y: 1 },
		],
		[
			{ ...strokeCell, x: 0, y: 2 },
			{ ...strokeCell, x: 1, y: 2 },
			{ ...strokeCell, x: 2, y: 2 },
			{ x: 3, y: 2 },
			{ x: 4, y: 2 },
		],
		[
			{ ...strokeCell, x: 0, y: 3 },
			{ x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ x: 3, y: 3 },
			{ x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ ...strokeCell, x: 1, y: 4 },
			{ ...strokeCell, x: 2, y: 4 },
			{ ...strokeCell, x: 3, y: 4 },
			{ ...strokeCell, x: 4, y: 4 },
		],
	],
	F: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ ...strokeCell, x: 1, y: 0 },
			{ ...strokeCell, x: 2, y: 0 },
			{ ...strokeCell, x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ ...strokeCell, x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ x: 3, y: 1 },
			{ x: 4, y: 1 },
		],
		[
			{ ...strokeCell, x: 0, y: 2 },
			{ ...strokeCell, x: 1, y: 2 },
			{ ...strokeCell, x: 2, y: 2 },
			{ x: 3, y: 2 },
			{ x: 4, y: 2 },
		],
		[
			{ ...strokeCell, x: 0, y: 3 },
			{ x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ x: 3, y: 3 },
			{ x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ x: 1, y: 4 },
			{ x: 2, y: 4 },
			{ x: 3, y: 4 },
			{ x: 4, y: 4 },
		],
	],
	G: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ ...strokeCell, x: 1, y: 0 },
			{ ...strokeCell, x: 2, y: 0 },
			{ ...strokeCell, x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ ...strokeCell, x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ x: 3, y: 1 },
			{ x: 4, y: 1 },
		],
		[
			{ ...strokeCell, x: 0, y: 2 },
			{ x: 1, y: 2 },
			{ ...strokeCell, x: 2, y: 2 },
			{ ...strokeCell, x: 3, y: 2 },
			{ ...strokeCell, x: 4, y: 2 },
		],
		[
			{ ...strokeCell, x: 0, y: 3 },
			{ x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ x: 3, y: 3 },
			{ ...strokeCell, x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ ...strokeCell, x: 1, y: 4 },
			{ ...strokeCell, x: 2, y: 4 },
			{ ...strokeCell, x: 3, y: 4 },
			{ ...strokeCell, x: 4, y: 4 },
		],
	],
	H: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 2, y: 0 },
			{ x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ ...strokeCell, x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ x: 3, y: 1 },
			{ ...strokeCell, x: 4, y: 1 },
		],
		[
			{ ...strokeCell, x: 0, y: 2 },
			{ ...strokeCell, x: 1, y: 2 },
			{ ...strokeCell, x: 2, y: 2 },
			{ ...strokeCell, x: 3, y: 2 },
			{ ...strokeCell, x: 4, y: 2 },
		],
		[
			{ ...strokeCell, x: 0, y: 3 },
			{ x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ x: 3, y: 3 },
			{ ...strokeCell, x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ x: 1, y: 4 },
			{ x: 2, y: 4 },
			{ x: 3, y: 4 },
			{ ...strokeCell, x: 4, y: 4 },
		],
	],
	I: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ ...strokeCell, x: 1, y: 0 },
			{ ...strokeCell, x: 2, y: 0 },
			{ ...strokeCell, x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ ...strokeCell, x: 2, y: 1 },
			{ x: 3, y: 1 },
			{ x: 4, y: 1 },
		],
		[
			{ x: 0, y: 2 },
			{ x: 1, y: 2 },
			{ ...strokeCell, x: 2, y: 2 },
			{ x: 3, y: 2 },
			{ x: 4, y: 2 },
		],
		[
			{ x: 0, y: 3 },
			{ x: 1, y: 3 },
			{ ...strokeCell, x: 2, y: 3 },
			{ x: 3, y: 3 },
			{ x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ ...strokeCell, x: 1, y: 4 },
			{ ...strokeCell, x: 2, y: 4 },
			{ ...strokeCell, x: 3, y: 4 },
			{ ...strokeCell, x: 4, y: 4 },
		],
	],
	J: [
		[
			{ x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 2, y: 0 },
			{ x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ x: 3, y: 1 },
			{ ...strokeCell, x: 4, y: 1 },
		],
		[
			{ x: 0, y: 2 },
			{ x: 1, y: 2 },
			{ x: 2, y: 2 },
			{ x: 3, y: 2 },
			{ ...strokeCell, x: 4, y: 2 },
		],
		[
			{ ...strokeCell, x: 0, y: 3 },
			{ x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ x: 3, y: 3 },
			{ ...strokeCell, x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ ...strokeCell, x: 1, y: 4 },
			{ ...strokeCell, x: 2, y: 4 },
			{ ...strokeCell, x: 3, y: 4 },
			{ ...strokeCell, x: 4, y: 4 },
		],
	],
	K: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 2, y: 0 },
			{ x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ ...strokeCell, x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ ...strokeCell, x: 3, y: 1 },
			{ x: 4, y: 1 },
		],
		[
			{ ...strokeCell, x: 0, y: 2 },
			{ ...strokeCell, x: 1, y: 2 },
			{ ...strokeCell, x: 2, y: 2 },
			{ x: 3, y: 2 },
			{ x: 4, y: 2 },
		],
		[
			{ ...strokeCell, x: 0, y: 3 },
			{ x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ ...strokeCell, x: 3, y: 3 },
			{ x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ x: 1, y: 4 },
			{ x: 2, y: 4 },
			{ x: 3, y: 4 },
			{ ...strokeCell, x: 4, y: 4 },
		],
	],
	L: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 2, y: 0 },
			{ x: 3, y: 0 },
			{ x: 4, y: 0 },
		],
		[
			{ ...strokeCell, x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ x: 3, y: 1 },
			{ x: 4, y: 1 },
		],
		[
			{ ...strokeCell, x: 0, y: 2 },
			{ x: 1, y: 2 },
			{ x: 2, y: 2 },
			{ x: 3, y: 2 },
			{ x: 4, y: 2 },
		],
		[
			{ ...strokeCell, x: 0, y: 3 },
			{ x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ x: 3, y: 3 },
			{ x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ ...strokeCell, x: 1, y: 4 },
			{ ...strokeCell, x: 2, y: 4 },
			{ ...strokeCell, x: 3, y: 4 },
			{ ...strokeCell, x: 4, y: 4 },
		],
	],
	M: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 2, y: 0 },
			{ x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ ...strokeCell, x: 0, y: 1 },
			{ ...strokeCell, x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ ...strokeCell, x: 3, y: 1 },
			{ ...strokeCell, x: 4, y: 1 },
		],
		[
			{ ...strokeCell, x: 0, y: 2 },
			{ x: 1, y: 2 },
			{ ...strokeCell, x: 2, y: 2 },
			{ x: 3, y: 2 },
			{ ...strokeCell, x: 4, y: 2 },
		],
		[
			{ ...strokeCell, x: 0, y: 3 },
			{ x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ x: 3, y: 3 },
			{ ...strokeCell, x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ x: 1, y: 4 },
			{ x: 2, y: 4 },
			{ x: 3, y: 4 },
			{ ...strokeCell, x: 4, y: 4 },
		],
	],
	N: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 2, y: 0 },
			{ x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ ...strokeCell, x: 0, y: 1 },
			{ ...strokeCell, x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ x: 3, y: 1 },
			{ ...strokeCell, x: 4, y: 1 },
		],
		[
			{ ...strokeCell, x: 0, y: 2 },
			{ x: 1, y: 2 },
			{ ...strokeCell, x: 2, y: 2 },
			{ x: 3, y: 2 },
			{ ...strokeCell, x: 4, y: 2 },
		],
		[
			{ ...strokeCell, x: 0, y: 3 },
			{ x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ ...strokeCell, x: 3, y: 3 },
			{ ...strokeCell, x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ x: 1, y: 4 },
			{ x: 2, y: 4 },
			{ x: 3, y: 4 },
			{ ...strokeCell, x: 4, y: 4 },
		],
	],
	O: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ ...strokeCell, x: 1, y: 0 },
			{ ...strokeCell, x: 2, y: 0 },
			{ ...strokeCell, x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ ...strokeCell, x: 0, y: 1 },
			{ ...fillCell, top: false, left: false, x: 1, y: 1 },
			{ ...fillCell, top: false, x: 2, y: 1 },
			{ ...fillCell, top: false, right: false, x: 3, y: 1 },
			{ ...strokeCell, x: 4, y: 1 },
		],
		[
			{ ...strokeCell, x: 0, y: 2 },
			{ ...fillCell, left: false, x: 1, y: 2 },
			{ ...fillCell, x: 2, y: 2 },
			{ ...fillCell, right: false, x: 3, y: 2 },
			{ ...strokeCell, x: 4, y: 2 },
		],
		[
			{ ...strokeCell, x: 0, y: 3 },
			{ ...fillCell, bottom: false, left: false, x: 1, y: 3 },
			{ ...fillCell, bottom: false, x: 2, y: 3 },
			{ ...fillCell, bottom: false, right: false, x: 3, y: 3 },
			{ ...strokeCell, x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ ...strokeCell, x: 1, y: 4 },
			{ ...strokeCell, x: 2, y: 4 },
			{ ...strokeCell, x: 3, y: 4 },
			{ ...strokeCell, x: 4, y: 4 },
		],
	],
	P: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ ...strokeCell, x: 1, y: 0 },
			{ ...strokeCell, x: 2, y: 0 },
			{ ...strokeCell, x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ ...strokeCell, x: 0, y: 1 },
			{ ...fillCell, top: false, bottom: false, left: false, x: 1, y: 1 },
			{ ...fillCell, top: false, bottom: false, x: 2, y: 1 },
			{ ...fillCell, top: false, bottom: false, right: false, x: 3, y: 1 },
			{ ...strokeCell, x: 4, y: 1 },
		],
		[
			{ ...strokeCell, x: 0, y: 2 },
			{ ...strokeCell, x: 1, y: 2 },
			{ ...strokeCell, x: 2, y: 2 },
			{ ...strokeCell, x: 3, y: 2 },
			{ ...strokeCell, x: 4, y: 2 },
		],
		[
			{ ...strokeCell, x: 0, y: 3 },
			{ x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ x: 3, y: 3 },
			{ x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ x: 1, y: 4 },
			{ x: 2, y: 4 },
			{ x: 3, y: 4 },
			{ x: 4, y: 4 },
		],
	],
	Q: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ ...strokeCell, x: 1, y: 0 },
			{ ...strokeCell, x: 2, y: 0 },
			{ ...strokeCell, x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ ...strokeCell, x: 0, y: 1 },
			{ ...fillCell, top: false, left: false, x: 1, y: 1 },
			{ ...fillCell, top: false, x: 2, y: 1 },
			{ ...fillCell, top: false, right: false, x: 3, y: 1 },
			{ ...strokeCell, x: 4, y: 1 },
		],
		[
			{ ...strokeCell, x: 0, y: 2 },
			{ ...fillCell, bottom: false, left: false, x: 1, y: 2 },
			{ ...fillCell, bottom: false, x: 2, y: 2 },
			{ ...fillCell, bottom: false, right: false, x: 3, y: 2 },
			{ ...strokeCell, x: 4, y: 2 },
		],
		[
			{ ...strokeCell, x: 0, y: 3 },
			{ ...strokeCell, x: 1, y: 3 },
			{ ...strokeCell, x: 2, y: 3 },
			{ ...strokeCell, x: 3, y: 3 },
			{ ...strokeCell, x: 4, y: 3 },
		],
		[
			{ x: 0, y: 4 },
			{ x: 1, y: 4 },
			{ x: 2, y: 4 },
			{ x: 3, y: 4 },
			{ ...strokeCell, x: 4, y: 4 },
		],
	],
	R: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ ...strokeCell, x: 1, y: 0 },
			{ ...strokeCell, x: 2, y: 0 },
			{ ...strokeCell, x: 3, y: 0 },
			{ x: 4, y: 0 },
		],
		[
			{ ...strokeCell, x: 0, y: 1 },
			{ ...fillCell, top: false, bottom: false, left: false, x: 1, y: 1 },
			{ ...fillCell, top: false, bottom: false, x: 2, y: 1 },
			{ ...fillCell, top: false, bottom: false, right: false, x: 3, y: 1 },
			{ ...strokeCell, x: 4, y: 1 },
		],
		[
			{ ...strokeCell, x: 0, y: 2 },
			{ ...strokeCell, x: 1, y: 2 },
			{ ...strokeCell, x: 2, y: 2 },
			{ ...strokeCell, x: 3, y: 2 },
			{ ...strokeCell, x: 4, y: 2 },
		],
		[
			{ ...strokeCell, x: 0, y: 3 },
			{ x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ ...strokeCell, x: 3, y: 3 },
			{ x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ x: 1, y: 4 },
			{ x: 2, y: 4 },
			{ x: 3, y: 4 },
			{ ...strokeCell, x: 4, y: 4 },
		],
	],
	S: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ ...strokeCell, x: 1, y: 0 },
			{ ...strokeCell, x: 2, y: 0 },
			{ ...strokeCell, x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ ...strokeCell, x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ x: 3, y: 1 },
			{ x: 4, y: 1 },
		],
		[
			{ ...strokeCell, x: 0, y: 2 },
			{ ...strokeCell, x: 1, y: 2 },
			{ ...strokeCell, x: 2, y: 2 },
			{ ...strokeCell, x: 3, y: 2 },
			{ ...strokeCell, x: 4, y: 2 },
		],
		[
			{ x: 0, y: 3 },
			{ x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ x: 3, y: 3 },
			{ ...strokeCell, x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ ...strokeCell, x: 1, y: 4 },
			{ ...strokeCell, x: 2, y: 4 },
			{ ...strokeCell, x: 3, y: 4 },
			{ ...strokeCell, x: 4, y: 4 },
		],
	],
	T: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ ...strokeCell, x: 1, y: 0 },
			{ ...strokeCell, x: 2, y: 0 },
			{ ...strokeCell, x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ ...strokeCell, x: 2, y: 1 },
			{ x: 3, y: 1 },
			{ x: 4, y: 1 },
		],
		[
			{ x: 0, y: 2 },
			{ x: 1, y: 2 },
			{ ...strokeCell, x: 2, y: 2 },
			{ x: 3, y: 2 },
			{ x: 4, y: 2 },
		],
		[
			{ x: 0, y: 3 },
			{ x: 1, y: 3 },
			{ ...strokeCell, x: 2, y: 3 },
			{ x: 3, y: 3 },
			{ x: 4, y: 3 },
		],
		[
			{ x: 0, y: 4 },
			{ x: 1, y: 4 },
			{ ...strokeCell, x: 2, y: 4 },
			{ x: 3, y: 4 },
			{ x: 4, y: 4 },
		],
	],
	U: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 2, y: 0 },
			{ x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ ...strokeCell, x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ x: 3, y: 1 },
			{ ...strokeCell, x: 4, y: 1 },
		],
		[
			{ ...strokeCell, x: 0, y: 2 },
			{ x: 1, y: 2 },
			{ x: 2, y: 2 },
			{ x: 3, y: 2 },
			{ ...strokeCell, x: 4, y: 2 },
		],
		[
			{ ...strokeCell, x: 0, y: 3 },
			{ x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ x: 3, y: 3 },
			{ ...strokeCell, x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ ...strokeCell, x: 1, y: 4 },
			{ ...strokeCell, x: 2, y: 4 },
			{ ...strokeCell, x: 3, y: 4 },
			{ ...strokeCell, x: 4, y: 4 },
		],
	],
	V: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 2, y: 0 },
			{ x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ ...strokeCell, x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ x: 3, y: 1 },
			{ ...strokeCell, x: 4, y: 1 },
		],
		[
			{ ...strokeCell, x: 0, y: 2 },
			{ x: 1, y: 2 },
			{ x: 2, y: 2 },
			{ x: 3, y: 2 },
			{ ...strokeCell, x: 4, y: 2 },
		],
		[
			{ x: 0, y: 3 },
			{ ...strokeCell, x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ ...strokeCell, x: 3, y: 3 },
			{ x: 4, y: 3 },
		],
		[
			{ x: 0, y: 4 },
			{ x: 1, y: 4 },
			{ ...strokeCell, x: 2, y: 4 },
			{ x: 3, y: 4 },
			{ x: 4, y: 4 },
		],
	],
	W: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 2, y: 0 },
			{ x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ ...strokeCell, x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ x: 3, y: 1 },
			{ ...strokeCell, x: 4, y: 1 },
		],
		[
			{ ...strokeCell, x: 0, y: 2 },
			{ x: 1, y: 2 },
			{ ...strokeCell, x: 2, y: 2 },
			{ x: 3, y: 2 },
			{ ...strokeCell, x: 4, y: 2 },
		],
		[
			{ ...strokeCell, x: 0, y: 3 },
			{ ...strokeCell, x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ ...strokeCell, x: 3, y: 3 },
			{ ...strokeCell, x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ x: 1, y: 4 },
			{ x: 2, y: 4 },
			{ x: 3, y: 4 },
			{ ...strokeCell, x: 4, y: 4 },
		],
	],
	X: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 2, y: 0 },
			{ x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ x: 0, y: 1 },
			{ ...strokeCell, x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ ...strokeCell, x: 3, y: 1 },
			{ x: 4, y: 1 },
		],
		[
			{ x: 0, y: 2 },
			{ x: 1, y: 2 },
			{ ...strokeCell, x: 2, y: 2 },
			{ x: 3, y: 2 },
			{ x: 4, y: 2 },
		],
		[
			{ x: 0, y: 3 },
			{ ...strokeCell, x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ ...strokeCell, x: 3, y: 3 },
			{ x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ x: 1, y: 4 },
			{ x: 2, y: 4 },
			{ x: 3, y: 4 },
			{ ...strokeCell, x: 4, y: 4 },
		],
	],
	Y: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 2, y: 0 },
			{ x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ x: 0, y: 1 },
			{ ...strokeCell, x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ ...strokeCell, x: 3, y: 1 },
			{ x: 4, y: 1 },
		],
		[
			{ x: 0, y: 2 },
			{ x: 1, y: 2 },
			{ ...strokeCell, x: 2, y: 2 },
			{ x: 3, y: 2 },
			{ x: 4, y: 2 },
		],
		[
			{ x: 0, y: 3 },
			{ x: 1, y: 3 },
			{ ...strokeCell, x: 2, y: 3 },
			{ x: 3, y: 3 },
			{ x: 4, y: 3 },
		],
		[
			{ x: 0, y: 4 },
			{ x: 1, y: 4 },
			{ ...strokeCell, x: 2, y: 4 },
			{ x: 3, y: 4 },
			{ x: 4, y: 4 },
		],
	],
	Z: [
		[
			{ ...strokeCell, x: 0, y: 0 },
			{ ...strokeCell, x: 1, y: 0 },
			{ ...strokeCell, x: 2, y: 0 },
			{ ...strokeCell, x: 3, y: 0 },
			{ ...strokeCell, x: 4, y: 0 },
		],
		[
			{ x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ ...strokeCell, x: 3, y: 1 },
			{ x: 4, y: 1 },
		],
		[
			{ x: 0, y: 2 },
			{ x: 1, y: 2 },
			{ ...strokeCell, x: 2, y: 2 },
			{ x: 3, y: 2 },
			{ x: 4, y: 2 },
		],
		[
			{ x: 0, y: 3 },
			{ ...strokeCell, x: 1, y: 3 },
			{ x: 2, y: 3 },
			{ x: 3, y: 3 },
			{ x: 4, y: 3 },
		],
		[
			{ ...strokeCell, x: 0, y: 4 },
			{ ...strokeCell, x: 1, y: 4 },
			{ ...strokeCell, x: 2, y: 4 },
			{ ...strokeCell, x: 3, y: 4 },
			{ ...strokeCell, x: 4, y: 4 },
		],
	],
	' ': [
		[
			{ fill: null, x: 0, y: 0 },
			{ fill: null, x: 1, y: 0 },
			{ fill: null, x: 2, y: 0 },
			{ fill: null, x: 3, y: 0 },
			{ fill: null, x: 4, y: 0 },
		],
		[
			{ fill: null, x: 0, y: 1 },
			{ fill: null, x: 1, y: 1 },
			{ fill: null, x: 2, y: 1 },
			{ fill: null, x: 3, y: 1 },
			{ fill: null, x: 4, y: 1 },
		],
		[
			{ fill: null, x: 0, y: 2 },
			{ fill: null, x: 1, y: 2 },
			{ fill: null, x: 2, y: 2 },
			{ fill: null, x: 3, y: 2 },
			{ fill: null, x: 4, y: 2 },
		],
		[
			{ fill: null, x: 0, y: 3 },
			{ fill: null, x: 1, y: 3 },
			{ fill: null, x: 2, y: 3 },
			{ fill: null, x: 3, y: 3 },
			{ fill: null, x: 4, y: 3 },
		],
		[
			{ fill: null, x: 0, y: 4 },
			{ fill: null, x: 1, y: 4 },
			{ fill: null, x: 2, y: 4 },
			{ fill: null, x: 3, y: 4 },
			{ fill: null, x: 4, y: 4 },
		],
	],
};