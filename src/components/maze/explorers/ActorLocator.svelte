<script lang="ts">
	import { theseusIndex, area } from '../../../stores';
	import Theseus from './Theseus.svelte';

	export let index: number;
</script>

{#if $theseusIndex === index}
	<Theseus />
{/if}
<!-- {#if $minotaurIndex === index}
	<Minotaur />
{/if} -->
