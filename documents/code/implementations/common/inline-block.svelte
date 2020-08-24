<script>
	// npm install --save-dev @iconify/svelte @iconify-icons/mdi @iconify-icons/line-md
	import Icon from '@iconify/svelte';
	import imageTwotone from '@iconify-icons/line-md/image-twotone';
	import accountBoxOutline from '@iconify-icons/mdi/account-box-outline';
</script>

<p>
	Block:
	<!--
	Adding class to first icon to trigger animations used by line-md icon set.
	SVG framework automatically adds classes based on icon prefix,
	but components do not because they handle raw icon data. 
	-->
	<Icon icon={imageTwotone} class="iconify--line-md" />
	<Icon icon={accountBoxOutline} />
</p>
<p>
	Inline:
	<Icon icon={imageTwotone} class="iconify--line-md" inline={true} />
	<Icon icon={accountBoxOutline} inline={true} />
</p>
