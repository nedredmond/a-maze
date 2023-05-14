<script lang="ts">
	import {
		dimensions,
		isTextMode,
		text,
		shareURL,
		isExplorerMode,
		controlsDisabled,
		mazeRef,
	} from '../../stores';
	import {
		minotaurPosition,
		minotaurStartingPosition,
		theseusPosition,
		stopGame,
		minotaurDisabled,
	} from '../maze/explorers/actorStores';
	import { MAX_SIZE, MIN_SIZE, clampDimensions } from './utils';
	import IconButton from './IconButton.svelte';
	import TextModeSvg from './svg/TextModeSVG.svelte';
	import PrintSvg from './svg/PrintSVG.svelte';
	import RefreshSvg from './svg/RefreshSVG.svelte';
	import CopySvg from './svg/CopySVG.svelte';
	import MapSvg from './svg/MapSVG.svelte';

	const resetExplorerMode = () => {
		$minotaurPosition = $minotaurStartingPosition;
		$theseusPosition = { x: 0, y: 0 };
		$minotaurDisabled = false;
		$mazeRef?.focus();
	};
	const handleToggleExplorerMode = () => {
		$isExplorerMode = !$isExplorerMode;
		resetExplorerMode();
	};
	const disableMinotaur = () => (($minotaurDisabled = true), $mazeRef?.focus());

	const handleCopyShareURL = () => navigator.clipboard.writeText($shareURL);
	const handlePrint = () => window.print();
	const handleRegenerate = () => {
		if ($isExplorerMode) resetExplorerMode();
		$dimensions = $isTextMode ? { ...$dimensions } : clampDimensions($dimensions);
	};

	const handleToggleTextMode = () => {
		$isTextMode = !$isTextMode;
		handleRegenerate();
	};
	const toggleText = (on: boolean, mode: string) => `${on ? 'Exit' : 'Enter'} ${mode} Mode`;
</script>

<div id="controls" class="controls outer">
	<div class="row">
		{#if $isExplorerMode}
			<div style="display:flex;flex-direction:column;align-items:flex-start">
				{#if $stopGame}
					<span>Game over!</span>
				{:else}
					<span>Escape the maze{$minotaurDisabled ? '' : ' and avoid the minotaur'}!</span>
				{/if}
				<button
					class="link-button"
					on:click={disableMinotaur}
					style={$stopGame || $minotaurDisabled ? 'visibility: hidden' : ''}
					>Don't have a cowman (i.e., turn off minotaur)</button
				>
			</div>
		{:else if $isTextMode}
			<label for="text">Enter maze text: </label>
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
		<nav class="buttons">
			<IconButton
				fn={handleToggleExplorerMode}
				role="switch"
				aria-checked={$isExplorerMode}
				title={toggleText($isExplorerMode, 'Explorer')}
				active={$isExplorerMode}
			>
				<MapSvg />
			</IconButton>
			<IconButton
				fn={handleToggleTextMode}
				role="switch"
				aria-checked={$isTextMode}
				title={toggleText($isTextMode, 'Text')}
				active={$isTextMode}
				disabled={$isExplorerMode}
			>
				<TextModeSvg />
			</IconButton>
			{#if $isTextMode}
				<IconButton
					fn={handleCopyShareURL}
					title="Copy Link to Text Maze"
					disabled={$isExplorerMode}
				>
					<CopySvg />
				</IconButton>
			{/if}
			<IconButton fn={handlePrint} title="Print or Download Maze" disabled={$isExplorerMode}>
				<PrintSvg />
			</IconButton>
			<IconButton
				fn={handleRegenerate}
				title={$isExplorerMode ? 'Try Again?' : 'Regenerate Maze'}
				disabled={$isExplorerMode && !$stopGame}
			>
				<RefreshSvg />
			</IconButton>
		</nav>
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
	.link-button {
		background: none;
		border: none;
		color: blueviolet;
		cursor: pointer;
		font-size: inherit;
		padding: 0;
		text-decoration: underline;
		font-size: x-small;
	}
</style>
