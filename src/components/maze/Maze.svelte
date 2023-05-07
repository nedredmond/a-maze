<script lang="ts">
	import { dimensions, area, isTextMode, textMazeInput } from '../../store';
	import { onMount } from 'svelte';
	import Cell from './Cell.svelte';
	import Gate from './svg/Gate.svelte';
	import type { MazeInput, Maze } from '../../types';

	let BrickRoad: typeof import('./utils/maze.worker?worker');
	onMount(async () => {
		BrickRoad = await import('./utils/maze.worker?worker');
	});

	const getMaze = (input: MazeInput): Promise<Maze> => {
		return new Promise((resolve, reject) => {
			const dm = new BrickRoad.default();
			dm.onmessage = ({ data }) => (resolve(data), dm.terminate());
			dm.onerror = (error) => (reject(error), dm.terminate());
			dm.postMessage(input);
		});
	};
</script>

<div id="maze" class="maze" style:--maze-size={$dimensions.width}>
	{#if BrickRoad}
		{#await getMaze($isTextMode ? $textMazeInput : $dimensions)}
			{#each { length: $area } as _}
				<div class="loading-cell" />
			{/each}
		{:then maze}
			{#each maze.cells as cell, i}
				{#if i === 0}
					<Cell {...cell}>
						<div class="portal entrance">
							<Gate />
						</div>
					</Cell>
				{:else if i === maze.cells.length - 1}
					<Cell {...cell}>
						<div class="portal exit">
							<Gate />
						</div>
					</Cell>
				{:else}
					<Cell {...cell} />
				{/if}
			{/each}
		{:catch e}
			<p>{e.message}</p>
		{/await}
	{/if}
</div>

<style>
	.loading-cell {
		aspect-ratio: 1;
		box-shadow: 0 0 0.5px gray;
	}
	.maze {
		display: grid;
		grid-template-columns: repeat(var(--maze-size), 1fr);
		gap: 0px;
		border: 1px solid black;
	}
	.portal {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: white;
	}
	.entrance {
		right: 75%;
	}
	.exit {
		left: 75%;
	}
</style>
