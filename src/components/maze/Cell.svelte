<svelte:options immutable />

<script lang="ts">
	import type { Fill } from '../../types';
	import GateSvg from './svg/GateSVG.svelte';

	// false means there is a border
	export let top = false,
		bottom = false,
		right = false,
		left = false,
		fill: Fill = null,
		visited: false,
		x: null,
		y: null;

	export let egress: 'entrance' | 'exit' | null = null;

	const borderWidth = 1;

	const style = `
		border-top: ${top ? 'none;' : borderWidth + 'px solid ' + 'var(--foreground)' + ';'}
		border-right: ${right ? 'none;' : borderWidth + 'px solid ' + 'var(--foreground)' + ';'}
		border-bottom: ${bottom ? 'none;' : borderWidth + 'px solid ' + 'var(--foreground)' + ';'}
		border-left: ${left ? 'none;' : borderWidth + 'px solid ' + 'var(--foreground)' + ';'}
		background-color: ${fill ?? 'none'};
	`;
</script>

<div {style} class={'cell'}>
	{#if egress}
		<div class="portal {egress}">
			<GateSvg />
		</div>
	{/if}
	<slot />
</div>

<style>
	.cell {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-webkit-print-color-adjust: exact !important;
		aspect-ratio: 1;
		box-sizing: border-box;
		position: relative;
		print-color-adjust: exact !important;
	}
	.portal {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: var(--background);
	}
	.entrance {
		right: 75%;
	}
	.exit {
		left: 75%;
	}
</style>
