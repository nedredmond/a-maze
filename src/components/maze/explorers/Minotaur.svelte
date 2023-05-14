<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Cell, Direction } from '../../../types';
	import Actor from './ActorTemplate.svelte';
	import { minotaurLastDirection, minotaurPosition } from './actorStores';
	import { RelativeDirection, updateForDirection } from './utils';
	import { moveDirection } from '../../../stores';

	export const dispatch = createEventDispatcher();

	export let cell: Cell;
	$: move($moveDirection);
	export const move = (e: Direction | null) => {
		if (!e) return;
		const straight = $minotaurLastDirection;
		// order of preference: left, straight, right back
		const left = RelativeDirection.left[straight];
		const right = RelativeDirection.right[straight];
		const back = RelativeDirection.back[straight];
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
			case cell[right]:
				$minotaurPosition = updateForDirection(position, right);
				$minotaurLastDirection = right;
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
