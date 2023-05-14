<svelte:options immutable />

<script lang="ts">
	import {
		theseusIndex,
		minotaurIndex,
		stopGame,
		caughtByMinotaur,
		minotaurDisabled,
	} from './actorStores';
	import Theseus from './Theseus.svelte';
	import Minotaur from './Minotaur.svelte';
	import type { Cell } from '../../../types';
	import { area } from '../../../stores';

	export let index: number;
	export let cell: Cell;

	$: gameOver = $caughtByMinotaur && !$minotaurDisabled;
	$: escaped = $theseusIndex === $area - 1;
	$: $stopGame = gameOver || escaped;

	$: showMinotaur = !$minotaurDisabled && !escaped && !(index === $theseusIndex);
</script>

{#if $theseusIndex === index}
	<Theseus {cell} {gameOver} {escaped} on:moved />
{/if}
{#if $minotaurIndex === index && showMinotaur}
	<Minotaur {cell} on:moved />
{/if}
