<template>
	<div>
		<p>
			Block:
			<Icon icon="line-md:image-twotone" />
			<Icon icon="mdi:account-box-outline" />
		</p>
		<p>
			Inline:
			<Icon icon="line-md:image-twotone" :inline="true" />
			<Icon icon="mdi:account-box-outline" :inline="true" />
		</p>
	</div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
	components: {
		Icon,
	},
};
</script>
