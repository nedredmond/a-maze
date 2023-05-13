<script lang="ts">
	import Actor from './ActorTemplate.svelte';
	import type { Cell } from '../../../types';
	import {minotaurLastDirection, minotaurPosition} from './actorStores';
	import { Left } from './utils';

	export let cell: Cell;
	export const move = () => {
		console.log('minotaur always turns left');
		if ($minotaurLastDirection) {
			const nextDirection = Left[$minotaurLastDirection];
			console.log('nextDirection', nextDirection);
		}
	};
</script>

<Actor actor="🐮" key="minotaur" />
