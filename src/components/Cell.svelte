<script>
	export let top = false,
		bottom = false,
		right = false,
		left = false,
		borderWidth = 2;

	const style = `
		border-top: ${top ? 'none;' : borderWidth + 'px solid black;'}
		border-right: ${right ? 'none;' : borderWidth + 'px solid black;'}
		border-bottom: ${bottom ? 'none;' : borderWidth + 'px solid black;'}
		border-left: ${left ? 'none;' : borderWidth + 'px solid black;'}
	`;
</script>

<div {style} class={$$props.class} />

<style>
	div {
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
</style>
