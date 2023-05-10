<script lang="ts">
	import Actor from './ActorTemplate.svelte';
	import { theseusPosition, grid } from '../../../stores';

	function init(el: HTMLDivElement) {
		el.focus();
		console.log('focused');
	}

	$: cell = $grid[$theseusPosition.y][$theseusPosition.x];

	const onKeyDown = (e: KeyboardEvent) => {
		console.log({ cell });
		switch (e.key) {
			case 'ArrowUp':
				if (cell.top) {
					$theseusPosition.y--;
				}
				console.log('up');
				break;
			case 'ArrowDown':
				if (cell.bottom) {
					$theseusPosition.y++;
				}
				console.log('down');
				break;
			case 'ArrowLeft':
				if (cell.left) {
					$theseusPosition.x--;
				}
				console.log('left');
				break;
			case 'ArrowRight':
				if (cell.right) {
					$theseusPosition.x++;
				}
				console.log('right');
				break;
		}
	};
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div use:init tabindex="0" on:keydown|preventDefault={onKeyDown}>
	<Actor actor="😃" />
</div>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>
