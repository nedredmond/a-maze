<script lang="ts">
	import { minotaurIndex, theseusIndex } from '../../../stores';
	import Theseus from './Theseus.svelte';
	import Minotaur from './Minotaur.svelte';

	export let index: number;
</script>

{#if $theseusIndex === index}
	<Theseus />
{/if}
{#if $minotaurIndex === index}
	<Minotaur />
{/if}
