<script lang="ts">
	import type { Cell as CellType } from '../../types';
	import Cell from './Cell.svelte';
	import GateSvg from './svg/GateSVG.svelte';

	export let cell: CellType;
	export let egress: 'entrance' | 'exit';
</script>

<Cell {...cell}>
	<div class="portal {egress}">
		<GateSvg />
	</div>
    <slot />
</Cell>

<style>
	.portal {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: white;
	}
	.entrance {
		right: 75%;
	}
	.exit {
		left: 75%;
	}
</style>
