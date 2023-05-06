<script lang="ts">
	import { height, width } from '../store';
</script>

Maze dimensions: <output for="width">{$width}</output>×<output for="height">{$height}</output>
<input
	type="range"
	name="width"
	id="width"
	min="5"
	max="75"
	step="1"
	bind:value={$width}
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
	bind:value={$height}
	class="slider"
	aria-label="height"
/>

<style>
	.slider {
		width: 100%;
	}
</style>
