<script lang="ts">
	import { size } from '../store';
</script>

<label for="complexity">Maze complexity: {$size}×{$size}</label>
<input
	type="range"
	name="complexity"
	id="complexity"
	min="5"
	max="75"
	step="1"
	bind:value={$size}
	class="slider"
/>
<output for="complexity" />

<style>
	.slider {
		width: 100%;
	}
</style>
