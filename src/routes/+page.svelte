<script lang="ts">
	import { onMount } from 'svelte';
	import Complexity from '../components/Complexity.svelte';
	import Cell from '../components/Cell.svelte';
	let DungeonMan: typeof import('../utils/maze.worker?worker');

	const getMaze = (size: number): Promise<Cell[]> =>
		new Promise((resolve, reject) => {
			const dm = new DungeonMan.default();
			dm.onmessage = ({ data }) => (resolve(data), dm.terminate());
			dm.onerror = (error) => (reject(error), dm.terminate());
			dm.postMessage([size]);
		});

	let size: number = 20;

	onMount(async () => {
		DungeonMan = await import('../utils/maze.worker?worker');
	});
</script>

<div class="container">
	<Complexity bind:value={size} />

	{#key size}
		<div class="maze" style="--maze-size: {size}">
			{#if DungeonMan}
				{#await getMaze(size)}
					{#each { length: size ** 2 } as _, i (i)}
						<div class="loading-cell" />
					{/each}
				{:then cells}
					{#each cells as cell, i}
						<Cell class="cell" {...cell} />
					{/each}
				{:catch error}
					<p>{error}</p>
				{/await}
			{/if}
		</div>
	{/key}
</div>

<style>
	.container {
		aspect-ratio: 1/1;
		width: min(95vw, 90vh);
		margin: auto;
	}
	.maze {
		aspect-ratio: 1;
		display: grid;
		grid-template-columns: repeat(var(--maze-size), 1fr);
		gap: 0px;
		border: 1px solid black;
	}
	.maze > :global(:first-child) {
		background: radial-gradient(circle at left top, lime, 5%, transparent);
	}
	.maze > :global(:last-child:not(span)) {
		background: radial-gradient(circle at bottom right, red, 5%, transparent);
	}
	:global(.cell) {
		aspect-ratio: 1;
	}
	.loading-cell {
		box-shadow: 0 0 0.5px gray;
	}
</style>
