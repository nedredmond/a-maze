<script lang="ts">
	import Actor from './ActorTemplate.svelte';

	function init(el: HTMLDivElement) {
		el.focus();
		console.log('focused');
	}
</script>

<div use:init tabindex="0">
	<Actor actor="😃" />
</div>

<style>
	div {
		width: 100%;
		height: 100%;
	}
	div:focus {
		background-color: blue;
	}
</style>
