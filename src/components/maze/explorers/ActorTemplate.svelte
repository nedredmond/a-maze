<script lang="ts">
	import { crossfadeTransition } from './transitions';

	export let actor = '😶';
	const [send, receive] = crossfadeTransition;

	export let key: string;
</script>

<svg
	viewBox="0 0 24 24"
	width="100%"
	height="100%"
	in:receive|global={{ key }}
	out:send|global={{ key }}
>
	<text
		x="50%"
		y="50%"
		dy="0.35em"
		font-family="'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', 'Twemoji Mozilla', sans-serif"
		text-anchor="middle">{actor}</text
	>
</svg>

<style>
	svg {
		position: absolute;
	}
	*:focus {
		outline: none;
	}
</style>
