<script lang="ts">
	import Controls from '../components/Controls.svelte';
	import Maze from '../components/maze/Maze.svelte';
</script>

<svelte:head>
	<title>A Maze</title>
</svelte:head>

<div class="container">
	<Controls />
	<Maze />
</div>

<style>
	.container {
		width: 90vw;
		max-width: 550px;
		box-sizing: border-box;
		margin: auto;
	}
</style>
