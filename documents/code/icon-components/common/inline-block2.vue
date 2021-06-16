<template>
	<div>
		<p>
			Block:
			<InlineIcon :icon="icons.home" :inline="false" />
			<InlineIcon :icon="icons.bird" style="vertical-align: 0" />
			<Icon :icon="icons.scenery" />
		</p>
		<p>
			Inline:
			<Icon :icon="icons.home" :inline="true" />
			<Icon :icon="icons.bird" :style="{verticalAlign: '-0.125em'}" />
			<InlineIcon :icon="icons.scenery" />
		</p>
	</div>
</template>

<script>
// npm install --save-dev @iconify/vue@2 @iconify-icons/mdi @iconify-icons/emojione-v1 @iconify-icons/uim
import { Icon, InlineIcon } from '@iconify/vue';
import homeIcon from '@iconify-icons/mdi/home';
import birdIcon from '@iconify-icons/emojione-v1/bird';
import sceneryIcon from '@iconify-icons/uim/scenery';

export default {
	components: {
		Icon,
		InlineIcon,
	},
	data() {
		return {
			icons: {
				home: homeIcon,
				bird: birdIcon,
				scenery: sceneryIcon,
			},
		};
	},
};
</script>
