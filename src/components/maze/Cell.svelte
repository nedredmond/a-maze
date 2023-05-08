<svelte:options immutable/>
<script lang="ts">
	import type { Fill } from '../../types';

	// false means there is a border
	export let top = false,
		bottom = false,
		right = false,
		left = false,
		fill: Fill = null;

	const borderColor = 'black';
	const borderWidth = 1;

	const style = `
		border-top: ${top ? 'none;' : borderWidth + 'px solid ' + borderColor + ';'}
		border-right: ${right ? 'none;' : borderWidth + 'px solid ' + borderColor + ';'}
		border-bottom: ${bottom ? 'none;' : borderWidth + 'px solid ' + borderColor + ';'}
		border-left: ${left ? 'none;' : borderWidth + 'px solid ' + borderColor + ';'}
		background-color: ${fill ?? 'none'};
	`;
</script>

<div {style} class={$$props.class}>
	<slot />
</div>

<style>
	div {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-webkit-print-color-adjust: exact !important;
		aspect-ratio: 1;
		box-sizing: border-box;
		position: relative;
		print-color-adjust: exact !important;
	}
</style>
