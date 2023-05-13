<svelte:options immutable />

<script lang="ts">
	import { isExplorerMode } from '../../stores';
	import type { Maze } from '../../types';
	import Cell from './Cell.svelte';
	import ActorLocator from './explorers/ActorLocator.svelte';
	import type Minotaur from './explorers/Minotaur.svelte';

	export let maze: Maze;
	let minotaur: Minotaur;

	const egress = (index: number) => {
		if (index === 0) return 'entrance';
		if (index === maze.cells.length - 1) return 'exit';
		return null;
	};
</script>

{#each maze.cells as cell, index}
	<Cell {...cell} egress={egress(index)}>
		{#if $isExplorerMode}
			<ActorLocator {index} {cell} bind:minotaur on:move={minotaur.move} />
		{/if}
	</Cell>
{/each}
