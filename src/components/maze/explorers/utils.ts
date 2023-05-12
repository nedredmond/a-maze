import type { Direction } from '../../../types';

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
export const restingExpression = ({ idle, escaped }: { idle: boolean; escaped: boolean }) => {
	if (escaped) return getExpression('escaped');
	if (idle) return getExpression('idle');
	return getExpression('default');
};

export const KeyDirection: { [key: string]: Direction } = {
	ArrowUp: 'top',
	ArrowDown: 'bottom',
	ArrowLeft: 'left',
	ArrowRight: 'right',
} as const;
