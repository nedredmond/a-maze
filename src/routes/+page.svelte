<script lang="ts">
	import { onMount } from 'svelte';
	import Cell from '../components/Cell.svelte';
	let DungeonMan: typeof import('../utils/maze.worker?worker');

	const getMaze = (size: number): Promise<Cell[]> =>
		new Promise((resolve, reject) => {
			const dm = new DungeonMan.default();
			dm.onmessage = ({ data }) => (resolve(data), dm.terminate());
			dm.onerror = (error) => (reject(error), dm.terminate());
			dm.postMessage([size]);
		});
	let size = 20;

	onMount(async () => {
		DungeonMan = await import('../utils/maze.worker?worker');
	});
</script>

<div class="container">
	<label for="complexity">Maze complexity: {size}x{size}</label>
	<input
		type="range"
		name="complexity"
		id="complexity"
		min="5"
		max="75"
		step="1"
		bind:value={size}
		class="slider"
	/>
	<output for="complexity" />

	{#key size}
		<div class="maze" style="--maze-size: {size}">
			{#if DungeonMan}
				{#await getMaze(size) then cells}
					{#each cells as cell, i}
						<Cell class="cell" {...cell}>
							<!-- {#if i === 0}
								<span class="start">S</span>
							{:else if i === cells.length - 1}
								<span class="end">E</span>
							{/if} -->
						</Cell>
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
		width: min(90vw, 90vh);
	}
	.maze {
		aspect-ratio: 1;
		display: grid;
		grid-template-columns: repeat(var(--maze-size), 1fr);
		gap: 0px;
		border: 1px solid black;
	}
	.maze > :global(:first-child) {
		background-color: greenyellow;
	}
	.maze > :global(:last-child:not(span)) {
		background-color: red;
	}
	:global(.cell) {
		aspect-ratio: 1;
	}
	.slider {
		width: 100%;
	}
</style>
