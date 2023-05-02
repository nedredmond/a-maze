<script lang="ts">
	export let value: number;
</script>

<label for="complexity">Maze complexity: {value}×{value}</label>
<input
	type="range"
	name="complexity"
	id="complexity"
	min="5"
	max="75"
	step="1"
	bind:value
	class="slider"
/>
<output for="complexity" />

<style>
	.slider {
		width: 100%;
	}
</style>
