<script lang="ts">
	import Controls from '../components/controls/Controls.svelte';
	import Maze from '../components/maze/Maze.svelte';
	import { orientation } from '../store';
</script>

<svelte:head>
	<title>A Maze</title>
</svelte:head>

<div class="container" style:--page-orientation={$orientation}>
	<Controls />
	<Maze />
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
		max-width: 550px;
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
