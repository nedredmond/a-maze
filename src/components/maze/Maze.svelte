<svelte:options immutable />

<script lang="ts">
	import { isExplorerMode } from '../../stores';
	import type { Maze } from '../../types';
	import Cell from './Cell.svelte';
	import Gate from './Gate.svelte';
	import ActorLocator from './explorers/ActorLocator.svelte';

	export let maze: Maze;
</script>

{#each maze.cells as cell, index}
	{#if index === 0}
		<Gate {cell} egress="entrance">
			{#if $isExplorerMode}
				<ActorLocator {index} />
			{/if}
		</Gate>
	{:else if index === maze.cells.length - 1}
		<Gate {cell} egress="exit">
			{#if $isExplorerMode}
				<ActorLocator {index} />
			{/if}
		</Gate>
	{:else}
		<Cell {...cell}>
			{#if $isExplorerMode}
				<ActorLocator {index} />
			{/if}
		</Cell>
	{/if}
{/each}
