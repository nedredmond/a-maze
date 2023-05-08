<svelte:options immutable />

<script lang="ts">
	import type { Maze } from '../../types';
	import Cell from './Cell.svelte';
	import Gate from './svg/Gate.svelte';

	export let maze: Maze;
</script>

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

<style>
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
