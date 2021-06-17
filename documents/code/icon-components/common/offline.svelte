<script>
	import Icon, { addIcon, addCollection } from '@iconify/svelte/dist/offline';
	import bellFill from '@iconify/icons-bi/bell-fill';

	// Set alias for icon data
	addIcon('bell', bellFill);
</script>

<div>
	<div>
		Icon referenced by name: <Icon icon="bell" inline={true} />
	</div>
	<div>
		Icon referenced by object: <Icon icon={bellFill} inline={true} />
	</div>
</div>