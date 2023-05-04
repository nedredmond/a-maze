<script lang="ts">
	import { size } from '../store';
	import { onMount } from 'svelte';
	import Cell from '../components/Cell.svelte';

	let BrickRoad: typeof import('../utils/maze.worker?worker');
	onMount(async () => {
		BrickRoad = await import('../utils/maze.worker?worker');
	});
	const getMaze = (size: number): Promise<Cell[]> =>
		new Promise((resolve, reject) => {
			const dm = new BrickRoad.default();
			dm.onmessage = ({ data }) => (resolve(data), dm.terminate());
			dm.onerror = (error) => (reject(error), dm.terminate());
			dm.postMessage([size]);
		});
</script>

{#key $size}
	<div class="maze" style:--maze-size={$size}>
		{#if BrickRoad}
			{#await getMaze($size)}
				{#each { length: $size ** 2 } as _}
					<div class="loading-cell" />
				{/each}
			{:then cells}
				{#each cells as cell}
					<Cell class="cell" {...cell} />
				{/each}
			{:catch error}
				<p>{error}</p>
			{/await}
		{/if}
	</div>
{/key}

<style>
	.loading-cell {
		box-shadow: 0 0 0.5px gray;
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
</style>
