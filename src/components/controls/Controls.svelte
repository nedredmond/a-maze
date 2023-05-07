<script lang="ts">
	import { dimensions, isTextMode, text } from '../../store';
	import { MAX_SIZE, MIN_SIZE, clampDimensions } from './utils';
	import TextModeSvg from './svg/TextModeSVG.svelte';
	import PrintSvg from './svg/PrintSVG.svelte';
	import RefreshSvg from './svg/RefreshSVG.svelte';

	const refresh = () => {
		if ($isTextMode) {
			$text = $text + '';
		} else {
			$dimensions = clampDimensions($dimensions);
		}
	};
	const toggleTextMode = () => {
		$isTextMode = !$isTextMode;
		refresh();
	};
	const textModeToggleLabel = (inTextMode: boolean) =>
		(inTextMode ? 'Exit' : 'Enter') + ' Text Mode';
</script>

<div id="controls" class="controls outer">
	<div class="row">
		{#if $isTextMode}
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
				aria-checked={$isTextMode}
				class={'button' + ($isTextMode ? ' active' : '')}
				aria-label={textModeToggleLabel($isTextMode)}
				title={textModeToggleLabel($isTextMode)}
			>
				<TextModeSvg />
			</button>
			<button
				on:click={() => window.print()}
				class={'button'}
				aria-label={'Print or Download Maze'}
				title={'Print or Download Maze'}
			>
				<PrintSvg />
			</button>
			<button
				on:click={refresh}
				class="button"
				aria-label="Regenerate Maze"
				title="Regenerate Maze"
			>
				<RefreshSvg />
			</button>
		</div>
	</div>
	{#if $isTextMode}
		<textarea bind:value={$text} rows="2" cols="30" aria-label="maze text" id="text" />
	{:else}
		<div class="controls">
			<input
				type="range"
				name="width"
				id="width"
				min={MIN_SIZE}
				max={MAX_SIZE}
				step="1"
				bind:value={$dimensions.width}
				class="slider"
				aria-label="width"
			/>
			<input
				type="range"
				name="height"
				id="height"
				min={MIN_SIZE}
				max={MAX_SIZE}
				step="1"
				bind:value={$dimensions.height}
				class="slider"
				aria-label="height"
			/>
		</div>
	{/if}
</div>

<style>
	@media print {
		#controls {
			display: none !important;
		}
	}
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
	.active {
		color: blueviolet;
	}
</style>
