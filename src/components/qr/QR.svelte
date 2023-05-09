<svelte:options immutable />

<script lang="ts">
	import { shareURL } from '../../stores';
	import QRCode from 'qrcode';
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let updateQrCode: (text: string) => void;

	onMount(() => {
		updateQrCode = (text: string) => QRCode.toCanvas(canvas, text);
	});

	$: {
		updateQrCode instanceof Function && updateQrCode($shareURL);
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
