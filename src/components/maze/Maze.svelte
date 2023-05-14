<svelte:options immutable />

<script lang="ts">
	import { isExplorerMode, moveDirection } from '../../stores';
	import { minotaurDisabled } from './explorers/actorStores';
	import type { Maze } from '../../types';
	import Cell from './Cell.svelte';
	import ActorLocator from './explorers/ActorLocator.svelte';

	export let maze: Maze;

	const egress = (index: number) => {
		if (index === 0) return 'entrance';
		if (index === maze.cells.length - 1) return 'exit';
		return null;
	};

	const movedActors: { [actor: string]: boolean } = {
		theseus: false,
		minotaur: false,
	};

	/*
	 * When both actors have moved, reset moveDirection
	 **/
	const onMoved = ({ detail }: { detail: string }) => {
		if ($minotaurDisabled) $moveDirection = null;
		movedActors[detail] = true;
		if (movedActors.theseus && movedActors.minotaur) {
			$moveDirection = null;
			movedActors.theseus = false;
			movedActors.minotaur = false;
		}
	};
</script>

{#each maze.cells as cell, index}
	<Cell {...cell} egress={egress(index)}>
		{#if $isExplorerMode}
			<ActorLocator {index} {cell} on:moved={onMoved} />
		{/if}
	</Cell>
{/each}
