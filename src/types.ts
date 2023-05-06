export type Cell = {
	top?: boolean;
	bottom?: boolean;
	right?: boolean;
	left?: boolean;
	x: number;
	y: number;
	visited?: boolean;
};

export type Grid = Cell[][];

export interface Dimensions {
	height: number;
	width: number;
}
