<script>
	// npm install --save-dev @iconify/svelte @iconify-icons/bi
	import Icon from '@iconify/svelte';
	import check2Circle from '@iconify-icons/bi/check2-circle';
</script>

<p>
	No rotation:
	<Icon icon={check2Circle} />
</p>
<p>
	90° rotation:
	<Icon icon={check2Circle} rotate="90deg" />
</p>
<p>
	180° rotation:
	<Icon icon={check2Circle} rotate="180deg" />
</p>
<p>
	270° rotation:
	<Icon icon={check2Circle} rotate={3} />
</p>
