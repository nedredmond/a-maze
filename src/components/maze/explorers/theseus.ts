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

export const restingExpression = (escaped: boolean) =>
	escaped ? getExpression('escaped') : getExpression('default');
