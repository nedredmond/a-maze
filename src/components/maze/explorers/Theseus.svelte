<script lang="ts">
	import Actor from './ActorTemplate.svelte';
	import { moveDirection } from '../../../stores';
	import { getExpression, restingExpression } from './utils';
	import type { Cell, Direction } from '../../../types';
	import { createEventDispatcher } from 'svelte';
	import { theseusPosition } from './actorStores';

	export const dispatch = createEventDispatcher();
	export let escaped = false;
	export let gameOver = false;

	let idle = false;
	const resetExpression = () => restingExpression({ idle, escaped, gameOver });

	let theseus = resetExpression();
	const init = (_: HTMLDivElement) => {
		if (escaped || gameOver) return;
		setTimeout(() => {
			idle = true;
			theseus = resetExpression();
		}, 5000);
	};

	let bumpedH = false;
	let bumpedV = false;
	let bumpedTimeout = 0;
	const onBump = (direction: Direction) => {
		const h = direction === 'left' || direction === 'right';
		if (h && bumpedH) return;
		if (!h && bumpedV) return;
		if (h) bumpedH = true;
		else bumpedV = true;
		theseus = getExpression('oops');
		bumpedTimeout++;
		const tId = bumpedTimeout;
		setTimeout(() => {
			if (tId === bumpedTimeout) {
				bumpedH = false;
				bumpedV = false;
			}
			theseus = resetExpression();
		}, 500);
	};
	const getClass = (h: boolean, v: boolean) => {
		const classes = [];
		if (h) classes.push('bumpedH');
		if (v) classes.push('bumpedV');
		return classes.join(' ');
	};

	export let cell: Cell;
	$: move($moveDirection);
	const move = (direction: Direction | null) => {
		if (gameOver || escaped) return;
		switch (true) {
			case !direction:
				return;
			case direction === 'top' && cell.top:
				$theseusPosition.y--;
				break;
			case direction === 'bottom' && cell.bottom:
				$theseusPosition.y++;
				break;
			case direction === 'left' && cell.left:
				$theseusPosition.x--;
				break;
			case direction === 'right' && cell.right:
				$theseusPosition.x++;
				break;
			default:
				onBump(direction!);
		}
		dispatch('moved', 'theseus');
	};
</script>

<div use:init class={getClass(bumpedH, bumpedV)}>
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
	div.bumpedH {
		animation: bumpH 0.3s ease-in-out;
	}
	@keyframes bumpH {
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
	div.bumpedV {
		animation: bumpV 0.3s ease-in-out;
	}
	@keyframes bumpV {
		5%,
		95% {
			transform: 0, -1px;
		}

		10%,
		90% {
			transform: translate3d(0, 1px, 0);
		}

		15%,
		50%,
		85% {
			transform: translate3d(0, -2px, 0);
		}

		20%,
		80% {
			transform: translate3d(0, 2px, 0);
		}
	}
</style>
