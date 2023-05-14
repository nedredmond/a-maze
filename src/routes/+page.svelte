<script lang="ts">
	import Controls from '../components/controls/Controls.svelte';
	import Qr from '../components/qr/QR.svelte';
	import Maze from '../components/maze/MazeLoader.svelte';
	import { isExplorerMode, orientation, moveDirection } from '../stores';
	import { stopGame } from '../components/maze/explorers/actorStores';

	import { swipe } from 'svelte-gestures';
	import type { Direction } from '../types';

	const onSwipe = (
		e: CustomEvent<{
			direction: Direction;
		}>,
	) => ($moveDirection = e.detail.direction);

	$: allowInput = !$stopGame && $isExplorerMode;
</script>

<svelte:head>
	<title>A Maze</title>
</svelte:head>

<div
	class="container"
	style:--page-orientation={$orientation}
	use:swipe
	on:swipe={(e) => allowInput && onSwipe(e)}
>
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
		height: 90vh;
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
