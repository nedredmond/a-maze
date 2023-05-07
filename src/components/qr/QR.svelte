<script lang="ts">
	import { text, isTextMode } from '../../store';
	import QRCode from 'qrcode';
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let updateQrCode: (text: string) => void;

	const baseUrl = 'nedredmond.github.io/a-maze';

	onMount(() => {
		updateQrCode = (text: string) => QRCode.toCanvas(canvas, text);
	});

	$: {
		if (updateQrCode instanceof Function) {
			const url = $isTextMode ? baseUrl + '?text=' + encodeURI($text) : baseUrl;
			updateQrCode(url);
		}
	}
</script>

<canvas bind:this={canvas} id="qrcode" width={32} height={32} />

<style>
	@media print {
		#qrcode {
			display: block !important;
			width: 2cm;
			height: 2cm;
			margin: auto;
		}
	}
	#qrcode {
		display: none;
	}
</style>
