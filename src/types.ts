export const Directions = ['top', 'right', 'bottom', 'left'] as const;
export type Direction = (typeof Directions)[number];

export type Walls = {
	[direction in Direction]?: boolean;
};

export type Cell = {
	x: number;
	y: number;
	visited?: boolean;
	fill?: Fill;
} & Walls;

export type Grid = Cell[][];

export type Maze = {
	dimensions: Dimensions;
	grid: Grid;
	cells: Cell[];
};

export interface Dimensions {
	height: number;
	width: number;
}

export interface Position {
	x: number;
	y: number;
}

export type MazeInput = Dimensions | TextMazeInput;

export type TextMazeInput = {
	lines: string[];
	dimensions: Dimensions;
};

export type Fill = 'black' | 'white' | null;
