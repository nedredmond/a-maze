export const ssr = false;
import { isTextMode, text } from '../stores.js';

export function load({ url }) {
	const textParam = url.searchParams.get('text');
	if (textParam) {
		isTextMode.set(true);
		text.set(decodeURI(textParam));
	}
}
