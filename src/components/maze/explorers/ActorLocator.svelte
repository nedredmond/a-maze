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
</script>

{#if $theseusIndex === index}
	<Theseus {cell} {gameOver} {escaped} on:moved />
{/if}
{#if !$minotaurDisabled && $minotaurIndex === index && !($theseusIndex === index)}
	<Minotaur {cell} on:moved />
{/if}
