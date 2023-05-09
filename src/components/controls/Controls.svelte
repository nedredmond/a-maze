<script lang="ts">
	import {
		dimensions,
		isTextMode,
		text,
		shareURL,
		isExplorerMode,
		minotaurPosition,
		minotaurStartingPosition,
		controlsDisabled,
	} from '../../stores';
	import { MAX_SIZE, MIN_SIZE, clampDimensions } from './utils';
	import IconButton from './IconButton.svelte';
	import TextModeSvg from './svg/TextModeSVG.svelte';
	import PrintSvg from './svg/PrintSVG.svelte';
	import RefreshSvg from './svg/RefreshSVG.svelte';
	import CopySvg from './svg/CopySVG.svelte';
	import TorchSvg from './svg/TorchSVG.svelte';

	const handleCopyShareURL = () => navigator.clipboard.writeText($shareURL);
	const handlePrint = () => window.print();
	const handleRegenerate = () => {
		$dimensions = $isTextMode ? { ...$dimensions } : clampDimensions($dimensions);
		if ($isExplorerMode) {
			$minotaurPosition = $minotaurStartingPosition;
		}
	};

	const handleToggleTextMode = () => {
		$isTextMode = !$isTextMode;
		handleRegenerate();
	};
	const handleToggleExplorerMode = () => {
		$isExplorerMode = !$isExplorerMode;
		if ($isExplorerMode) {
			$minotaurPosition = $minotaurStartingPosition;
		}
	};
	const toggleText = (on: boolean, mode: string) => `${on ? 'Exit' : 'Enter'} ${mode} Mode`;
</script>

<div id="controls" class="controls outer">
	<div class="row">
		{#if $isTextMode}
			<label for="text">Enter maze text: </label>
		{:else if $isExplorerMode}
			<span>Escape the maze and avoid the minotaur!</span>
		{:else}
			<span>
				Maze dimensions:
				<span class="dimensions">
					<output for="width">{$dimensions.width}</output>
					×
					<output for="height">{$dimensions.height}</output>
				</span>
			</span>
		{/if}
		<div class="buttons">
			<IconButton
				fn={handleToggleExplorerMode}
				role="switch"
				aria-checked={$isExplorerMode}
				class={'button' + ($isExplorerMode ? ' active' : '')}
				title={toggleText($isExplorerMode, 'Explorer')}
			>
				<TorchSvg />
			</IconButton>
			<IconButton
				fn={handleToggleTextMode}
				role="switch"
				aria-checked={$isTextMode}
				class={'button' + ($isTextMode ? ' active' : '')}
				title={toggleText($isTextMode, 'Text')}
			>
				<TextModeSvg />
			</IconButton>
			{#if $isTextMode}
				<IconButton fn={handleCopyShareURL} title="Copy Link to Text Maze">
					<CopySvg />
				</IconButton>
			{/if}
			<IconButton fn={handlePrint} title="Print or Download Maze">
				<PrintSvg />
			</IconButton>
			<IconButton fn={handleRegenerate} title="Regenerate Maze">
				<RefreshSvg />
			</IconButton>
		</div>
	</div>
	{#if !$isExplorerMode}
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
					aria-disabled={$controlsDisabled}
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
					aria-disabled={$controlsDisabled}
				/>
			</div>
		{/if}
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
		height: fit-content;
	}
	.row {
		display: flex;
		align-items: stretch;
		gap: 1em;
		justify-content: space-between;
	}
	.buttons {
		display: flex;
		align-items: stretch;
		gap: 1.25em;
		justify-content: flex-end;
		flex-wrap: wrap;
	}
	.dimensions {
		white-space: nowrap;
	}
</style>
