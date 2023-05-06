<script lang="ts">
	import { dimensions, textMode, text } from '../../store';
	import Refresh from './Refresh.svelte';
	import TextMode from './TextMode.svelte';

	const refresh = () => {
		$dimensions = { ...$dimensions };
		$text = $text;
	};
	const toggleTextMode = () => {
		$textMode = !$textMode;
	};
	const getStatus = (value: boolean) => (value ? 'On' : 'Off');
</script>

<div class="controls outer">
	<div class="row">
		{#if $textMode}
			<label for="text">Enter maze text: </label>
		{:else}
			<span>
				Maze dimensions:
				<output for="width">{$dimensions.width}</output>
				×
				<output for="height">{$dimensions.height}</output>
			</span>
		{/if}
		<div class="row">
			<button
				on:click={toggleTextMode}
				role="switch"
				aria-checked={$textMode}
				class="button"
				aria-label={'Turn ' + getStatus(!$textMode) + ' Text Mode'}
				title={'Turn ' + getStatus(!$textMode) + ' Text Mode'}
			>
				<TextMode />
			</button>
			<button
				on:click={refresh}
				class="button"
				aria-label="Regenerate Maze"
				title="Regenerate Maze"
			>
				<Refresh />
			</button>
		</div>
	</div>
	{#if $textMode}
		<textarea bind:value={$text} rows="2" cols="30" aria-label="maze text" id="text" />
	{:else}
		<div class="controls">
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
	{/if}
</div>

<style>
	.controls {
		display: flex;
		flex-direction: column;
		gap: 0.125em;
		justify-content: space-between;
	}
	.outer {
		height: 69px;
	}
	.row {
		display: flex;
		align-items: stretch;
		justify-content: space-between;
		gap: 1em;
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
