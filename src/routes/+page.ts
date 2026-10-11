export const ssr = false;
import { isTextMode, text } from '../stores.js';
import type { PageLoad } from './$types.js';

export const load: PageLoad = ({ url }) => {
	const textParam = url.searchParams.get('text');
	if (textParam) {
		isTextMode.set(true);
		text.set(decodeURI(textParam));
	}
}
