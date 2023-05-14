<script lang="ts">
	import {
		dimensions,
		isTextMode,
		textMazeInput,
		grid,
		moveDirection,
		isExplorerMode,
		mazeRef,
	} from '../../stores';
	import { onMount } from 'svelte';
	import Maze from './Maze.svelte';
	import type { Direction, MazeInput, Maze as MazeOutput } from '../../types';
	import { debounce, debouncePromise } from './utils/debounce';
	import Placeholder from './Placeholder.svelte';
	import { KeyDirection } from './explorers/utils';
	import { stopGame } from './explorers/actorStores';

	let Worker: typeof import('./utils/maze.worker?worker');
	onMount(async () => {
		Worker = await import('./utils/maze.worker?worker');
	});
	const buildMaze = (input: MazeInput): Promise<MazeOutput> =>
		new Promise<MazeOutput>((resolve, reject) => {
			const brickRoad = new Worker.default();
			brickRoad.onmessage = ({ data }) => (
				grid.set(data.grid), resolve(data), brickRoad.terminate()
			);
			brickRoad.onerror = (error) => (reject(error), brickRoad.terminate());
			brickRoad.postMessage(input);
		});

	const getMaze = debouncePromise<typeof buildMaze>(buildMaze, 100);

	let main: HTMLElement;
	$: {
		if (main && $isExplorerMode) {
			$mazeRef = main;
			main.focus();
		}
	}

	// Debouncing to ensure state can keep pace with user input
	const onKeydown = debounce<({ key }: KeyboardEvent) => Direction>(
		({ key }: KeyboardEvent) => ($moveDirection = KeyDirection[key]),
		100,
	);

	$: allowInput = $isExplorerMode && !$stopGame;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<main
	bind:this={main}
	id="maze"
	class="maze"
	style:--maze-size={$dimensions.width}
	tabindex="0"
	on:keydown|preventDefault={(e) => allowInput && !e.repeat && onKeydown(e)}
>
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
</main>

<style>
	.maze {
		display: grid;
		grid-template-columns: repeat(var(--maze-size), 1fr);
		gap: 0px;
		border: 1px solid black;
	}
</style>
