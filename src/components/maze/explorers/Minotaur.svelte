<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Directions, type Cell, type Direction } from '../../../types';
	import Actor from './ActorTemplate.svelte';
	import { minotaurLastDirection, minotaurPosition } from './actorStores';
	import { Back, Left, updateForDirection } from './utils';
	import { moveDirection } from '../../../stores';

	export const dispatch = createEventDispatcher();

	export let cell: Cell;
	$: move($moveDirection);
	export const move = (e: Direction | null) => {
		if (!e) return;
		const straight = $minotaurLastDirection;
		const left = Left[straight];
		const back = Back[straight];
		var [other] = [...Directions].filter((item) => {
			return ![straight, left, back].includes(item);
		});
		const position = { ...$minotaurPosition };
		switch (true) {
			case cell[left]:
				$minotaurPosition = updateForDirection(position, left);
				$minotaurLastDirection = left;
				break;
			case cell[straight]:
				$minotaurPosition = updateForDirection(position, straight);
				$minotaurLastDirection = straight;
				break;
			case cell[other]:
				$minotaurPosition = updateForDirection(position, other);
				$minotaurLastDirection = other;
				break;
			case cell[back]:
				$minotaurPosition = updateForDirection(position, back);
				$minotaurLastDirection = back;
				break;
		}
		dispatch('moved', 'minotaur');
	};
</script>

<Actor actor="🐮" key="minotaur" />
