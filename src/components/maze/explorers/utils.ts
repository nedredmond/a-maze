import type { Position, Direction, Cell } from '../../../types';

export const updatePosition = (
	position: Position,
	cell: Cell,
	direction?: Direction,
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
	default: ['😃', '🙂', '😀', '😄'],
	dead: ['😵', '🤕', '😵‍💫', '😭'],
	escaped: ['😎', '🏆', '🥳', '😜'],
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
	gameOver,
}: {
	idle: boolean;
	escaped: boolean;
	gameOver: boolean;
}) => {
	switch (true) {
		case gameOver:
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
export const Left: { [key in Direction]: Direction } = {
	top: 'left',
	bottom: 'right',
	left: 'bottom',
	right: 'top',
} as const;
export const Back: { [key in Direction]: Direction } = {
	top: 'bottom',
	bottom: 'top',
	left: 'right',
	right: 'left',
} as const;
export const updateForDirection = (position: Position, direction: Direction): Position => {
	switch (direction) {
		case 'top':
			position.y--;
			break;
		case 'bottom':
			position.y++;
			break;
		case 'left':
			position.x--;
			break;
		case 'right':
			position.x++;
			break;
	}
	return position;
};
