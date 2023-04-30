<script>
	import Cell from '../components/Cell.svelte';
	import { generateMaze } from '../utils/maze';
	const mazeSize = 50;
</script>

<div class="container" style="--maze-size: {mazeSize}">
	{#each generateMaze(mazeSize, mazeSize).grid as row}
		{#each row as cell}
			<Cell class="cell" {...cell} />
		{/each}
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(var(--maze-size), 1fr);
		gap: 0px;
		border: 2px solid black;
	}
	.container > :global(:first-child) {
		background-color: greenyellow;
	}
	.container > :global(:last-child) {
		background-color: red;
	}
	:global(.cell) {
		aspect-ratio: 1;
	}
</style>
