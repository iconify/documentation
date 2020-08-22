<script>
	// npm install --save-dev @iconify/svelte @iconify-icons/fa-regular
	import Icon from '@iconify/svelte';
	import handshakeIcon from '@iconify-icons/fa-regular/handshake';
</script>

<style>
	/* 
		Align icon to bottom of text, like in icon fonts.

		Cannot target component in CSS, target SVG 
		instead using Svelte's :global() function 
	*/
	p :global(svg) {
		vertical-align: -0.125em;
	}
</style>

<p>
	Test icon
	<Icon icon={handshakeIcon} rotate="90deg" />
	with text around it
</p>
<p>
	Test icon
	<Icon icon={handshakeIcon} style="transform: rotate(90deg);" />
	with text around it
</p>
