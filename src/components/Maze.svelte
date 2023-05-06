<script lang="ts">
	import { size } from '../store';
	import { onMount } from 'svelte';
	import Cell from '../components/Cell.svelte';
	import Gate from './Gate.svelte';

	// this is an Earthbound reference
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
				{#each cells as cell, i}
					{#if i === 0}
						<Cell {...cell}>
							<div class="egress entrance">
								<Gate />
							</div>
						</Cell>
					{:else if i === cells.length - 1}
						<Cell {...cell}>
							<div class="egress exit">
								<Gate />
							</div>
						</Cell>
					{:else}
						<Cell {...cell} />
					{/if}
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
	.egress {
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
