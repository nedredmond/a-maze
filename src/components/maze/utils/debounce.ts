/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
	func: F,
	waitFor: number,
) => {
	let timeout: NodeJS.Timeout | number = 0;

	console.log('test');

	const debounced = (...args: Parameters<F>) =>
		new Promise((resolve) => {
			clearTimeout(timeout);
			timeout = setTimeout(() => resolve(func(...args)), waitFor);
		});

	console.log('sup');

	return debounced as (...args: Parameters<F>) => ReturnType<F>;
};
