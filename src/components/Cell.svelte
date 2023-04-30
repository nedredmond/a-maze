<script>
	export let n = false,
		s = false,
		e = false,
		w = false;

	const borderStyle = '5px solid black';
	const style = `
        border-top: 5px solid ${n ? 'transparent' : 'black'};
        border-right: ${e ? 'none' : borderStyle};
        border-bottom: ${s ? 'none' : borderStyle};
        border-left: ${w ? 'none' : borderStyle};
    `;
</script>

<div {style} />

<style>
	div {
		height: 75px;
		width: 75px;
	}
</style>
