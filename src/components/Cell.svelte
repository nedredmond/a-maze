<script>
	export let top = false,
		bottom = false,
		right = false,
		left = false;

	const borderColor = 'black';
	const borderWidth = 1;

	const style = `
		border-top: ${top ? 'none;' : borderWidth + 'px solid ' + borderColor + ';'}
		border-right: ${right ? 'none;' : borderWidth + 'px solid ' + borderColor + ';'}
		border-bottom: ${bottom ? 'none;' : borderWidth + 'px solid ' + borderColor + ';'}
		border-left: ${left ? 'none;' : borderWidth + 'px solid ' + borderColor + ';'}
	`;
</script>

<div {style} class={$$props.class}>
	<slot />
</div>

<style>
	div {
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		overflow: hidden;
	}
</style>
