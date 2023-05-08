<script lang="ts">
	import { dimensions, isTextMode, text, shareURL } from '../../stores';
	import { MAX_SIZE, MIN_SIZE, clampDimensions } from './utils';
	import IconButton from './IconButton.svelte';
	import TextModeSvg from './svg/TextModeSVG.svelte';
	import PrintSvg from './svg/PrintSVG.svelte';
	import RefreshSvg from './svg/RefreshSVG.svelte';
	import CopySvg from './svg/CopySVG.svelte';

	const handleCopyShareURL = () => navigator.clipboard.writeText($shareURL);
	const handlePrint = () => window.print();
	const handleRegenerate = () =>
		($dimensions = $isTextMode ? { ...$dimensions } : clampDimensions($dimensions));
	const handleToggleTextMode = () => {
		$isTextMode = !$isTextMode;
		handleRegenerate();
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
			{#if $isTextMode}
				<IconButton fn={handleCopyShareURL} title="Copy Link to Text Maze">
					<CopySvg />
				</IconButton>
			{/if}
			<IconButton
				fn={handleToggleTextMode}
				role="switch"
				aria-checked={$isTextMode}
				class={'button' + ($isTextMode ? ' active' : '')}
				title={textModeToggleLabel($isTextMode)}
			>
				<TextModeSvg />
			</IconButton>
			<IconButton fn={handlePrint} title="Print or Download Maze">
				<PrintSvg />
			</IconButton>
			<IconButton fn={handleRegenerate} title="Regenerate Maze">
				<RefreshSvg />
			</IconButton>
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
</style>
