<script lang="ts">
	export let fn: () => void,
		role = 'button',
		title: string;
</script>

<button tabindex="0" on:click={fn} class="button" {role} {title} aria-label={title} {...$$props}>
	<slot />
</button>

<style>
	.button {
		display: flex;
		width: 1.125em;
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
	.button:focus {
		outline: 1px solid blueviolet;
	}
	.active {
		color: blueviolet;
	}
</style>
