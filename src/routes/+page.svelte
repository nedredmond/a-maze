<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	import Controls from '../components/controls/Controls.svelte';
	import Qr from '../components/qr/QR.svelte';
	import Maze from '../components/maze/MazeLoader.svelte';
	import { isExplorerMode, orientation, moveDirection, text, isTextMode } from '../stores';
	import { stopGame } from '../components/maze/explorers/actorStores';

	import { useSwipe, type SwipeCustomEvent } from 'svelte-gestures';

	afterNavigate(({ shallow, type }) => {
		if (shallow && type === 'goto') return;

		const textParam = $page.url.searchParams.get('text');
		if (textParam) {
			$isTextMode = true;
			$text = textParam;
		}
	});

	const onSwipe = (e: SwipeCustomEvent) => ($moveDirection = e.detail.direction);

	$: allowInput = !$stopGame && $isExplorerMode;
</script>

<!-- @migration-task could not auto-migrate `$app/stores` to `$app/state`: legacy reactive statement (`$:`); migrate manually -->
<svelte:head><title>A Maze</title></svelte:head>

<div
	class="container"
	style:--page-orientation={$orientation}
	{...useSwipe((e) => allowInput && onSwipe(e))}
>
	<Controls />
	<Maze />
	<Qr />
</div>

<style>
	:root {
		--background: white;
		--foreground: black;
		--accent: blueviolet;
	}
	@media (prefers-color-scheme: dark) {
		:global(body) {
			--background: black;
			--foreground: white;
			--accent: mediumorchid;
		}
	}
	:global(body) {
		font-family: sans-serif;
		accent-color: var(--accent);
		background: var(--background);
		color: var(--foreground);
	}
	@media print {
		@page {
			size: var(--page-orientation);
		}
		.container {
			max-width: unset !important;
		}
	}
	.container {
		width: 90vw;
		max-width: 666px;
		height: 90vh;
		box-sizing: border-box;
		margin: auto;
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}
</style>
