<script>
	import Icon from '@iconify/svelte';
</script>

<p>
	Block:
	<Icon icon="mdi:home" />
	<Icon icon="emojione-v1:bird" inline={false} />
	<Icon icon="uim:scenery" style="vertical-align: 0;" />
</p>
<p>
	Inline:
	<Icon icon="mdi:home" inline={true} />
	<Icon icon="emojione-v1:bird" inline={true} />
	<Icon icon="uim:scenery" style="vertical-align: -0.125em;" />
</p>
