<script lang="ts">
	import Complexity from '../components/Complexity.svelte';
	import Maze from '../components/Maze.svelte';
</script>

<svelte:head>
	<title>A Maze</title>
</svelte:head>

<div class="container">
	<Complexity />
	<Maze />
</div>

<style>
	.container {
		width: min(95vw, 90vh);
		height: auto;
		box-sizing: border-box;
		aspect-ratio: 1/1;
		margin: auto;
	}
</style>
