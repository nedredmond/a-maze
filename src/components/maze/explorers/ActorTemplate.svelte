<script lang="ts">
	import { crossfadeTransition } from './transitions';

	export let actor = '😶';
	const [send, receive] = crossfadeTransition;

	export let key: string;
</script>

<svg viewBox="0 0 24 24" width="100%" height="100%" in:receive={{ key }} out:send={{ key }}>
	<text y="55%" x="50%" dominant-baseline="middle" text-anchor="middle">{actor}</text>
</svg>

<style>
	svg {
		position: absolute;
	}
	*:focus {
		outline: none;
	}
</style>
