/* eslint-disable @typescript-eslint/no-explicit-any */
export const debouncePromise = <F extends (...args: Parameters<F>) => ReturnType<F>>(
	func: F,
	waitFor: number,
) => {
	let timeout: NodeJS.Timeout | number = 0;

	const debounced = (...args: Parameters<F>) =>
		new Promise((resolve) => {
			clearTimeout(timeout);
			timeout = setTimeout(() => resolve(func(...args)), waitFor);
		});

	return debounced as (...args: Parameters<F>) => ReturnType<F>;
};

export const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
	func: F,
	waitFor: number,
) => {
	let timeout: NodeJS.Timeout | number = 0;

	const debounced = (...args: Parameters<F>) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), waitFor);
	};

	return debounced as (...args: Parameters<F>) => ReturnType<F>;
};
