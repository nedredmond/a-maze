const directions = ['top', 'right', 'bottom', 'left', null] as const;
export type Direction = (typeof directions)[number];

export type Cell = {
	top?: boolean;
	bottom?: boolean;
	right?: boolean;
	left?: boolean;
	x: number;
	y: number;
	visited?: boolean;
	fill?: Fill;
};

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
