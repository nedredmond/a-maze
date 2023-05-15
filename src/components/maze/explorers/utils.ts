import { get } from 'svelte/store';
import type { Position, Direction, Cell } from '../../../types';
import { theseusPosition } from './actorStores';

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
	oops: ['😗', '😕', '😖', '😤'],
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
export const RelativeDirection = {
	left: {
		top: 'left',
		bottom: 'right',
		left: 'bottom',
		right: 'top',
	},
	right: {
		top: 'right',
		bottom: 'left',
		left: 'top',
		right: 'bottom',
	},
	back: {
		top: 'bottom',
		bottom: 'top',
		left: 'right',
		right: 'left',
	},
} as const;
export const updateForDirection = (nextPosition: Position, direction: Direction): Position => {
	const orignalPosition = { ...nextPosition };
	switch (direction) {
		case 'top':
			nextPosition.y--;
			break;
		case 'bottom':
			nextPosition.y++;
			break;
		case 'left':
			nextPosition.x--;
			break;
		case 'right':
			nextPosition.x++;
			break;
	}
	const tPos = get(theseusPosition);
	if (nextPosition.x === tPos.x && nextPosition.y === tPos.y) return orignalPosition;
	return nextPosition;
};
