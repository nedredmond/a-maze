import type { page } from '$app/state';

export const buildShareUrl = (url: (typeof page)['url'], textMode: boolean, text: string) => {
	const base = url.origin + url.pathname;
	return textMode ? `${base}?text=${encodeURIComponent(text)}` : base;
};
