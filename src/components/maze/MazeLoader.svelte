<script lang="ts">
	import { dimensions, isTextMode, textMazeInput } from '../../stores';
	import { onMount } from 'svelte';
	import Maze from './Maze.svelte';
	import type { MazeInput, Maze as MazeOutput } from '../../types';
	import { debounce } from './utils/debounce';
	import Placeholder from './Placeholder.svelte';

	let Worker: typeof import('./utils/maze.worker?worker');
	onMount(async () => {
		Worker = await import('./utils/maze.worker?worker');
	});
	const buildMaze = (input: MazeInput): Promise<MazeOutput> =>
		new Promise<MazeOutput>((resolve, reject) => {
			const brickRoad = new Worker.default();
			brickRoad.onmessage = ({ data }) => (resolve(data), brickRoad.terminate());
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
			<Maze {maze} />
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
</style>
