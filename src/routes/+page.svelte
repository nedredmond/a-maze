<script lang="ts">
	import Controls from '../components/controls/Controls.svelte';
	import Maze from '../components/maze/Maze.svelte';
	import { dimensions } from '../store';
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
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}
	:global(body) {
		font-family: sans-serif;
	}
</style>
