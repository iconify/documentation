<script>
	// npm install --save-dev @iconify/svelte @iconify-icons/mdi @iconify-icons/emojione-v1 @iconify-icons/uim
	import Icon from '@iconify/svelte';
	import homeIcon from '@iconify-icons/mdi/home';
	import birdIcon from '@iconify-icons/emojione-v1/bird';
	import sceneryIcon from '@iconify-icons/uim/scenery';
</script>

<p>
	Block:
	<Icon icon={homeIcon} />
	<Icon icon={birdIcon} inline={false} />
	<Icon icon={sceneryIcon} style="vertical-align: 0;" />
</p>
<p>
	Inline:
	<Icon icon={homeIcon} inline={true} />
	<Icon icon={birdIcon} inline={true} />
	<Icon icon={sceneryIcon} style="vertical-align: -0.125em;" />
</p>
