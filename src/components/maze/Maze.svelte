<script lang="ts">
	import { width, height } from '../../store';
	import { onMount } from 'svelte';
	import Cell from './Cell.svelte';
	import Gate from './Gate.svelte';

	let BrickRoad: typeof import('./utils/maze.worker?worker');
	onMount(async () => {
		BrickRoad = await import('./utils/maze.worker?worker');
	});

	const getMaze = (width: number, height: number): Promise<Cell[]> =>
		new Promise((resolve, reject) => {
			const dm = new BrickRoad.default();
			dm.onmessage = ({ data }) => (resolve(data), dm.terminate());
			dm.onerror = (error) => (reject(error), dm.terminate());
			dm.postMessage({ width, height });
		});
</script>

{#key $width * $height}
	<div class="maze" style:--maze-size={$width}>
		{#if BrickRoad}
			{#await getMaze($width, $height)}
				{#each { length: $width * $height } as _}
					<div class="loading-cell" />
				{/each}
			{:then cells}
				{#each cells as cell, i}
					{#if i === 0}
						<Cell {...cell}>
							<div class="portal entrance">
								<Gate />
							</div>
						</Cell>
					{:else if i === cells.length - 1}
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
{/key}

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
