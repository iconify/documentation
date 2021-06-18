<template>
	<div>
		<p>
			Block:
			<Icon icon="mdi:home" />
			<Icon icon="emojione-v1:bird" style="vertical-align: 0" />
			<Icon icon="uim:scenery" :inline="false" />
		</p>
		<p>
			Inline:
			<Icon icon="mdi:home" :inline="true" />
			<Icon icon="emojione-v1:bird" :style="{ verticalAlign: '-0.125em' }" />
			<Icon icon="uim:scenery" :inline="true" />
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
