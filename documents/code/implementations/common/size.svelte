<script>
	// npm install --save-dev @iconify/svelte @iconify/icons-cil
	import Icon from '@iconify/svelte';
	import locomotiveIcon from '@iconify/icons-cil/locomotive';
	import paperPlane from '@iconify/icons-cil/paper-plane';
	import truckIcon from '@iconify/icons-cil/truck';
</script>

<style>
	/* 
		Cannot target component in CSS, target SVG 
		instead using Svelte's :global() function 
	*/
	div :global(svg) {
		font-size: 24px;
		line-height: 1em;
	}

	/*
		Must use :global() because Svelte cannot assign style to a
		component by class name, it can only work with standard HTML tags.
	*/
	div :global(.big-icon) {
		font-size: 72px;
	}
</style>

<div>
	<Icon icon={locomotiveIcon} />
	<Icon icon={paperPlane} style="font-size: 36px" />
	<Icon icon={truckIcon} class="big-icon" />
</div>
