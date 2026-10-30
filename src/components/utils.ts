export const buildShareUrl = (url: URL, textMode: boolean, text: string) => {
	const base = url.origin + url.pathname;
	return textMode ? `${base}?text=${encodeURIComponent(text)}` : base;
};
