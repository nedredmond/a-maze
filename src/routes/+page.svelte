<script lang="ts">
	import Controls from '../components/controls/Controls.svelte';
	import Qr from '../components/qr/QR.svelte';
	import Maze from '../components/maze/MazeLoader.svelte';
	import { orientation, swipeDirection } from '../stores';

	import { swipe } from 'svelte-gestures';
	import type { Direction } from '../types';

	const swipeHandler = (
		e: CustomEvent<{
			direction: Direction;
			target: EventTarget;
		}>,
	) => ($swipeDirection = e.detail.direction);
</script>

<svelte:head>
	<title>A Maze</title>
</svelte:head>

<div class="container" style:--page-orientation={$orientation} use:swipe on:swipe={swipeHandler}>
	<Controls />
	<Maze />
	<Qr />
</div>

<style>
	@media print {
		@page {
			size: var(--page-orientation);
		}
		.container {
			max-width: unset !important;
		}
	}
	.container {
		width: 90vw;
		max-width: 666px;
		box-sizing: border-box;
		margin: auto;
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}
	:global(body) {
		font-family: sans-serif;
		accent-color: blueviolet;
	}
</style>
