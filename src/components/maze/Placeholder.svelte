<svelte:options immutable />

<script lang="ts">
	import { area } from '../../stores';
</script>

{#each { length: $area } as _}
	<div class="loading-cell" />
{/each}

<style>
	.loading-cell {
		aspect-ratio: 1;
		box-shadow: 0 0 0.5px gray;
	}
</style>
