<script>
	// npm install --save-dev @iconify/svelte @iconify-icons/bi
	import Icon from '@iconify/svelte';
	import check2Circle from '@iconify-icons/bi/check2-circle';
</script>

<p>
	No flip:
	<Icon icon={check2Circle} />
</p>
<p>
	Horizontal flip:
	<Icon icon={check2Circle} hFlip={true} />
</p>
<p>
	Vertical flip:
	<Icon icon={check2Circle} vFlip={true} />
</p>
<p>
	Both (or 180° rotation):
	<Icon icon={check2Circle} hFlip={true} vFlip={true} />
</p>
