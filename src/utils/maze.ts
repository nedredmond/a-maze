type Cell = {
	n?: boolean;
	s?: boolean;
	e?: boolean;
	w?: boolean;
	x: number;
	y: number;
	visited?: boolean;
};

type Grid = Cell[][];

export type Maze = {
	width: number;
	height: number;
	grid: Grid;
};

export const generateMaze = (width: number, height: number): Maze => {
	const maze = initializeMaze(width, height);

	const stack: Cell[] = [];
	maze.grid[0][0].visited = true;
	stack.push(maze.grid[0][0]);
	while (stack.length > 0) {
		const current = stack.pop()!;
		const neighbors = getUnvisitedNeighbors(maze, current);
		if (neighbors.length > 0) {
			stack.push(current);
			const next = neighbors[Math.floor(Math.random() * neighbors.length)];
			maze.grid = removeWall([...maze.grid], current, next);
			stack.push(next);
		}
	}
	return maze;
};

function initializeMaze(width: number, height: number): Maze {
	const grid = new Array<Cell[]>(height);
	for (let i = 0; i < height; i++) {
		grid[i] = new Array<Cell>(width);
		for (let j = 0; j < width; j++) {
			grid[i][j] = { x: j, y: i };
			console.log({ x: j, y: i });
		}
	}
	return {
		width,
		height,
		grid,
	};
}

function getUnvisitedNeighbors(
	{ grid, height, width }: Readonly<Maze>,
	{ x, y }: Readonly<Cell>,
): Cell[] {
	const neighbors: Cell[] = [];
	const north = y > 0 ? grid[y - 1][x] : undefined;
	const south = y < height - 1 ? grid[y + 1][x] : undefined;
	const east = x < width - 1 ? grid[y][x + 1] : undefined;
	const west = x > 0 ? grid[y][x - 1] : undefined;
	if (north && !north.visited) neighbors.push(north);
	if (south && !south.visited) neighbors.push(south);
	if (east && !east.visited) neighbors.push(east);
	if (west && !west.visited) neighbors.push(west);
	return neighbors;
}

const removeWall = (grid: Readonly<Grid>, current: Readonly<Cell>, next: Readonly<Cell>): Grid => {
	const updatedGrid = [...grid];
	const { x, y } = current;
	if (next.x === x - 1) {
		updatedGrid[y][x].w = true;
		updatedGrid[next.y][next.x].e = true;
	}
	if (next.x === x + 1) {
		updatedGrid[y][x].e = true;
		updatedGrid[next.y][next.x].w = true;
	}
	if (next.y === y - 1) {
		updatedGrid[y][x].n = true;
		updatedGrid[next.y][next.x].s = true;
	}
	if (next.y === y + 1) {
		updatedGrid[y][x].s = true;
		updatedGrid[next.y][next.x].n = true;
	}
	updatedGrid[next.y][next.x].visited = true;

	return updatedGrid;
};

if (import.meta.vitest) {
	const { describe, test, expect } = import.meta.vitest;
	test('initializeMaze', () => {
		const maze = initializeMaze(4, 2);
		expect(maze.width).toBe(4);
		expect(maze.height).toBe(2);
		expect(maze.grid.length).toBe(2);
		expect(maze.grid[0].length).toBe(4);
	});
	describe(`getNeighbors`, () => {
		test('with none visited', () => {
			const grid = initializeMaze(5, 5).grid;
			const cell = { x: 1, y: 1 };
			const neighbors = getUnvisitedNeighbors({ grid: grid, height: 5, width: 5 }, cell);
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
			const grid = initializeMaze(5, 5).grid;
			grid[0][1].visited = true;
			grid[1][0].visited = true;
			const cell = { x: 1, y: 1 };
			const neighbors = getUnvisitedNeighbors({ grid: grid, height: 5, width: 5 }, cell);
			const expected = [
				{ x: 1, y: 2 },
				{ x: 2, y: 1 },
			];
			expect(neighbors).toEqual(expected);
		});
	});
	describe(`removeWall`, () => {
		test('with x-1', () => {
			const grid = initializeMaze(5, 5).grid;
			const cell = { x: 1, y: 1 };
			const next = { x: 0, y: 1 };
			const newGrid = removeWall(grid, cell, next);
			expect(newGrid[1][1].w).toBe(true);
			expect(newGrid[1][0].e).toBe(true);
			expect(newGrid[1][0].visited).toBeTruthy();
			expect(newGrid[1][1].visited).toBeFalsy();
		});
		test('with x+1', () => {
			const grid = initializeMaze(3, 3).grid;
			const cell = { x: 1, y: 1 };
			const next = { x: 2, y: 1 };
			const newGrid = removeWall(grid, cell, next);
			expect(newGrid[1][1].e).toBe(true);
			expect(newGrid[1][2].w).toBe(true);
			expect(newGrid[1][2].visited).toBeTruthy();
			expect(newGrid[1][1].visited).toBeFalsy();
		});
	});
	test('generateMaze', () => {
		const maze = generateMaze(5, 5);
		expect(maze.width).toBe(5);
		expect(maze.height).toBe(5);
		expect(maze.grid.length).toBe(5);
		expect(maze.grid[0].length).toBe(5);
	});
}
