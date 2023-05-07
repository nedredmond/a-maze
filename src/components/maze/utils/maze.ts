import type { Cell, Dimensions, Grid, Maze, MazeInput, TextMazeInput } from '../../../types';
import { Alphabet, reAlphabet } from './alphabet';

const PADDING = 3;
const LETTER_GAP = 1;
const LINE_GAP = 2;

export const generateMaze = (input: MazeInput): Maze => {
	let maze: Maze;
	if ('lines' in input) {
		maze = initializeMazeFromText(input);
	} else {
		maze = initializeMaze(input);
	}

	const stack: Cell[] = [];
	maze.grid[0][0].visited = true;
	stack.push(maze.grid[0][0]);
	while (stack.length > 0) {
		const current = stack.pop()!;
		const neighbors = getUnvisitedNeighbors(maze, current);
		if (neighbors.length > 0) {
			stack.push(current);
			const next = getNext(neighbors);
			removeWall(maze.grid, current, next); // in-place for performance
			stack.push(next);
		}
	}
	return {
		...maze,
		cells: maze.grid.flat(),
	};
};

function initializeMaze(dimensions: Dimensions): Maze {
	const { height, width } = dimensions;

	const grid = new Array<Cell[]>(height);
	for (let i = 0; i < height; i++) {
		grid[i] = new Array<Cell>(width);
		for (let j = 0; j < width; j++) {
			grid[i][j] = { x: j, y: i };
		}
	}
	return {
		dimensions,
		grid,
		cells: grid.flat(),
	};
}

function initializeMazeFromText({ dimensions, lines }: TextMazeInput): Maze {
	const grid = initializeMaze(dimensions).grid;

	const yStart = PADDING;
	const xStart = PADDING;

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const y = yStart + i * 5 + i * LINE_GAP;
		for (let j = 0; j < line.length; j++) {
			const letter = Alphabet[line[j]];
			const x = xStart + j * 5 + j * LETTER_GAP;
			for (let k = 0; k < letter.length; k++) {
				for (let l = 0; l < letter[k].length; l++) {
					const current = grid[y + k][x + l];
					grid[y + k][x + l] = { ...letter[k][l], ...current };
				}
			}
		}
	}

	return {
		dimensions,
		grid,
		cells: grid.flat(),
	};
}

export const getLines = (input: string): string[] =>
	input.replace(reAlphabet, '').toUpperCase().split('\n');

export const getTextMazeDimensions = (lines: string[]): Dimensions => {
	const longestLineLength = lines.reduce((acc, line) => Math.max(acc, line.length), 0);

	// get height from number of lines
	const height = lines.length * 5 + PADDING * 2 + LINE_GAP * (lines.length - 1);
	// get width from longest line
	const width = longestLineLength * 5 + PADDING * 2 + LETTER_GAP * (longestLineLength - 1);

	return { width, height };
};

function getUnvisitedNeighbors(
	{ grid, dimensions: { height, width } }: Readonly<Maze>,
	{ x, y }: Readonly<Cell>,
): Cell[] {
	const neighbors: Cell[] = [];
	const north = y > 0 ? grid[y - 1][x] : undefined;
	const south = y < height - 1 ? grid[y + 1][x] : undefined;
	const east = x < width - 1 ? grid[y][x + 1] : undefined;
	const west = x > 0 ? grid[y][x - 1] : undefined;
	if (isVisitable(north)) neighbors.push(north!);
	if (isVisitable(south)) neighbors.push(south!);
	if (isVisitable(east)) neighbors.push(east!);
	if (isVisitable(west)) neighbors.push(west!);
	return neighbors;
}

const isVisitable = (cell: Cell | undefined): boolean => !!cell && !cell.visited && !cell.fill;

const getNext = (neighbors: Cell[]): Cell =>
	neighbors[Math.floor(Math.random() * neighbors.length)];

const removeWall = (grid: Grid, current: Readonly<Cell>, next: Readonly<Cell>) => {
	const { x, y } = current;
	if (next.x === x - 1) {
		grid[y][x].left = true;
		grid[next.y][next.x].right = true;
	}
	if (next.x === x + 1) {
		grid[y][x].right = true;
		grid[next.y][next.x].left = true;
	}
	if (next.y === y - 1) {
		grid[y][x].top = true;
		grid[next.y][next.x].bottom = true;
	}
	if (next.y === y + 1) {
		grid[y][x].bottom = true;
		grid[next.y][next.x].top = true;
	}
	grid[next.y][next.x].visited = true;
};

if (import.meta.vitest) {
	const { describe, test, expect } = import.meta.vitest;
	test('initializeMaze', () => {
		const maze = initializeMaze({ width: 4, height: 2 });
		expect(maze.dimensions.width).toBe(4);
		expect(maze.dimensions.height).toBe(2);
		expect(maze.grid.length).toBe(2);
		expect(maze.grid[0].length).toBe(4);
	});
	describe(`getNeighbors`, () => {
		test('with none visited', () => {
			const grid = initializeMaze({ width: 5, height: 5 }).grid;
			const cell = { x: 1, y: 1 };
			const neighbors = getUnvisitedNeighbors(
				{ grid: grid, dimensions: { height: 5, width: 5 }, cells: [] },
				cell,
			);
			const expected = [
				{ x: 1, y: 0 },
				{ x: 1, y: 2 },
				{ x: 0, y: 1 },
				{ x: 2, y: 1 },
			];
			const sortFunc = (a: Cell, b: Cell) => {
				if (a.x === b.x) {
					return a.y - b.y;
				}
				return a.x - b.x;
			};
			expect(neighbors.sort(sortFunc)).toEqual(expected.sort(sortFunc));
		});
		test('with some visited', () => {
			const grid = initializeMaze({ width: 5, height: 5 }).grid;
			grid[0][1].visited = true;
			grid[1][0].visited = true;
			const cell = { x: 1, y: 1 };
			const neighbors = getUnvisitedNeighbors(
				{ grid: grid, dimensions: { height: 5, width: 5 }, cells: [] },
				cell,
			);
			const expected = [
				{ x: 1, y: 2 },
				{ x: 2, y: 1 },
			];
			expect(neighbors).toEqual(expected);
		});
	});
	describe(`removeWall`, () => {
		test('with x-1', () => {
			const grid = initializeMaze({ width: 5, height: 5 }).grid;
			const cell = { x: 1, y: 1 };
			const next = { x: 0, y: 1 };
			removeWall(grid, cell, next);
			expect(grid[1][1].left).toBe(true);
			expect(grid[1][0].right).toBe(true);
			expect(grid[1][0].visited).toBeTruthy();
			expect(grid[1][1].visited).toBeFalsy();
		});
		test('with x+1', () => {
			const grid = initializeMaze({ width: 3, height: 3 }).grid;
			const cell = { x: 1, y: 1 };
			const next = { x: 2, y: 1 };
			removeWall(grid, cell, next);
			expect(grid[1][1].right).toBe(true);
			expect(grid[1][2].left).toBe(true);
			expect(grid[1][2].visited).toBeTruthy();
			expect(grid[1][1].visited).toBeFalsy();
		});
	});
	test('generateMaze', () => {
		const maze = generateMaze({ width: 5, height: 5 });
		expect(maze.dimensions.width).toBe(5);
		expect(maze.dimensions.height).toBe(5);
		expect(maze.grid.length).toBe(5);
		expect(maze.grid[0].length).toBe(5);
	});
}
