<script lang="ts">
	import { dimensions, isTextMode, textMazeInput } from '../../store';
	import { onMount } from 'svelte';
	import Cell from './Cell.svelte';
	import Gate from './svg/Gate.svelte';
	import type { MazeInput, Maze } from '../../types';
	import { debounce } from './utils/debounce';
	import Placeholder from './Placeholder.svelte';

	let Worker: typeof import('./utils/maze.worker?worker');
	onMount(async () => {
		Worker = await import('./utils/maze.worker?worker');
	});
	const buildMaze = (input: MazeInput): Promise<Maze> =>
		new Promise<Maze>((resolve, reject) => {
			console.log('here');
			const brickRoad = new Worker.default();
			brickRoad.onmessage = ({ data }) => (
				console.log({ data }), resolve(data), brickRoad.terminate()
			);
			brickRoad.onerror = (error) => (reject(error), brickRoad.terminate());
			brickRoad.postMessage(input);
		});

	const getMaze = debounce<typeof buildMaze>(buildMaze, 100);
</script>

<div id="maze" class="maze" style:--maze-size={$dimensions.width}>
	{#if Worker}
		{#await getMaze($isTextMode ? $textMazeInput : $dimensions)}
			<Placeholder />
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
	{:else}
		<Placeholder />
	{/if}
</div>

<style>
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
