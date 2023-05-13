<script lang="ts">
	import { theseusIndex, minotaurIndex } from './actorStores';
	import Theseus from './Theseus.svelte';
	import Minotaur from './Minotaur.svelte';
	import type { Cell } from '../../../types';

	export let index: number;
	export let cell: Cell;
	export let minotaur: Minotaur;
</script>

{#if $theseusIndex === index}
	<Theseus {cell} dead={$theseusIndex === $minotaurIndex} on:move />
{/if}
{#if $minotaurIndex === index && $theseusIndex !== index}
	<Minotaur {cell} bind:this={minotaur} />
{/if}
