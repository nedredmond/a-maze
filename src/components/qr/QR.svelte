<script lang="ts">
	import { page } from '$app/state';
	import QRCode from 'qrcode';
	import { buildShareUrl } from '../utils';
	import { isTextMode, text } from '../../stores';

	let canvas = $state<HTMLCanvasElement>();

	const shareUrl = $derived(buildShareUrl(page.url, $isTextMode, $text));
	$effect(() => {
		if (canvas) QRCode.toCanvas(canvas, shareUrl);
	});
</script>

<canvas bind:this={canvas} id="qrcode" width={32} height={32}></canvas>

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
