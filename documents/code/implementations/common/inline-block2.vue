<template>
	<div>
		<p>
			Block:
			<Icon :icon="icons.home" :inline="false" />
			<Icon :icon="icons.bird" :inline="false" />
			<InlineIcon :icon="icons.scenery" />
		</p>
		<p>
			Inline:
			<Icon :icon="icons.home" :inline="true" />
			<Icon :icon="icons.bird" :inline="true" />
			<InlineIcon :icon="icons.scenery" />
		</p>
	</div>
</template>

<script>
// npm install --save-dev @iconify-icons/mdi @iconify-icons/emojione-v1 @iconify-icons/uim
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
