import type { Position, Direction, Cell } from '../../../types';

export const updatePosition = (
	position: Position,
	direction: Direction,
	cell: Cell,
): Position | undefined => {
	switch (true) {
		case !direction:
			return;
		case direction === 'top' && cell.top:
			position.y--;
			return position;
		case direction === 'bottom' && cell.bottom:
			position.y++;
			return position;
		case direction === 'left' && cell.left:
			position.x--;
			return position;
		case direction === 'right' && cell.right:
			position.x++;
			return position;
	}
};

// theseus
export const moods = {
	default: ['😃', '🙂', '😀'],
	dead: ['😵', '💀'],
	escaped: ['😎', '🏆', '🥳'],
	oops: ['😗', '🫤', '😖', '😤'],
	idle: ['😪', '😴', '😑', '🙃'],
};
export const getExpression = (mood: keyof typeof moods) => {
	const theseusState = moods[mood];
	return theseusState[Math.floor(Math.random() * theseusState.length)];
};
export const restingExpression = ({
	idle,
	escaped,
	dead,
}: {
	idle: boolean;
	escaped: boolean;
	dead: boolean;
}) => {
	switch (true) {
		case dead:
			return getExpression('dead');
		case escaped:
			return getExpression('escaped');
		case idle:
			return getExpression('idle');
		default:
			return getExpression('default');
	}
};
export const KeyDirection: { [key: string]: Direction } = {
	ArrowUp: 'top',
	ArrowDown: 'bottom',
	ArrowLeft: 'left',
	ArrowRight: 'right',
} as const;

// minotaur
export const Left: { [key in Exclude<Direction, null>]: Direction } = {
	top: 'left',
	bottom: 'right',
	left: 'bottom',
	right: 'top',
} as const;
