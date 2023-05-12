<script lang="ts">
	import Actor from './ActorTemplate.svelte';
	import { theseusPosition, grid, theseusIndex, area } from '../../../stores';
	import { getExpression, restingExpression } from './theseus';

	function init(el: HTMLDivElement) {
		el.focus();
		console.log({ $theseusIndex, $area });
	}

	const escaped = $theseusIndex === $area - 1;
	let theseus = restingExpression(escaped);

	let bumped = false;
	let timeoutId = 0;
	const onBump = () => {
		bumped = !bumped;
		theseus = getExpression('oops');
		timeoutId++;
		const tId = timeoutId;
		setTimeout(() => {
			// cancel timeout if new was set
			if (tId === timeoutId) bumped = false;
			theseus = restingExpression(escaped);
		}, 500);
	};

	$: cell = $grid[$theseusPosition.y][$theseusPosition.x];

	const onKeyDown = ({ key }: KeyboardEvent) => {
		console.log({ cell });
		switch (true) {
			case 'ArrowUp' === key && cell.top:
				$theseusPosition.y--;
				break;
			case 'ArrowDown' === key && cell.bottom:
				$theseusPosition.y++;
				break;
			case 'ArrowLeft' === key && cell.left:
				$theseusPosition.x--;
				break;
			case 'ArrowRight' === key && cell.right:
				$theseusPosition.x++;
				break;
			default:
				return onBump();
		}
	};
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div use:init tabindex="0" on:keydown|preventDefault={onKeyDown} class={bumped ? 'bumped' : ''}>
	<Actor actor={theseus} key="theseus" />
</div>

<style>
	div {
		width: 100%;
		height: 100%;
	}
	div:focus {
		outline: none;
	}
	div.bumped {
		animation: bump 0.3s ease-in-out;
	}
	@keyframes bump {
		5%,
		95% {
			transform: translate3d(-1px, 0, 0);
		}

		10%,
		90% {
			transform: translate3d(1px, 0, 0);
		}

		15%,
		50%,
		85% {
			transform: translate3d(-2px, 0, 0);
		}

		20%,
		80% {
			transform: translate3d(2px, 0, 0);
		}
	}
</style>
