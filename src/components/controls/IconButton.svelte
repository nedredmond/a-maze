<script lang="ts">
	export let fn: () => void,
		role = 'button',
		title: string,
		disabled = false,
		active = false;
</script>

<button
	tabindex="0"
	on:click={disabled ? () => false : fn}
	class={'button' + (disabled ? ' disabled' : '') + (active ? ' active' : '')}
	{role}
	{title}
	aria-label={title}
	aria-disabled={disabled}
	{...$$props}
>
	<slot />
</button>

<style>
	.button {
		display: flex;
		width: 24px;
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
	.disabled {
		color: gray;
		cursor: not-allowed;
	}
</style>
