<script lang="ts">
	import { dimensions } from '../../store';
	import Refresh from './Refresh.svelte';

	const handleClick = () => {
		$dimensions = { ...$dimensions };
	};
</script>

<div class="controls">
	<div class="row">
		<span>
			Maze dimensions: <output for="width">{$dimensions.width}</output>×<output for="height"
				>{$dimensions.height}</output
			>
		</span>
		<div class="row">
			<button on:click={handleClick} class="button"> <Refresh /> </button>
		</div>
	</div>
	<input
		type="range"
		name="width"
		id="width"
		min="5"
		max="75"
		step="1"
		bind:value={$dimensions.width}
		class="slider"
		aria-label="width"
	/>
	<input
		type="range"
		name="height"
		id="height"
		min="5"
		max="75"
		step="1"
		bind:value={$dimensions.height}
		class="slider"
		aria-label="height"
	/>
</div>

<style>
	.controls {
		display: flex;
		flex-direction: column;
		gap: 0.125em;
	}
	.row {
		display: flex;
		align-items: stretch;
		justify-content: space-between;
	}
	.button {
		display: flex;
		width: 1.125em;
		margin: auto;
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
</style>
