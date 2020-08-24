<template>
	<div>
		<p>
			Block:
			<Icon :icon="icons.home" />
			<Icon :icon="icons.bird" />
			<Icon :icon="icons.scenery" />
		</p>
		<p>
			Inline:
			<Icon :icon="icons.home" :inline="true" />
			<Icon :icon="icons.bird" :inline="true" />
			<Icon :icon="icons.scenery" style="vertical-align: -0.125em" />
		</p>
	</div>
</template>

<script>
// npm install --save-dev @iconify/vue@1 @iconify-icons/mdi @iconify-icons/emojione-v1 @iconify-icons/uim
import Icon from '@iconify/vue';
import homeIcon from '@iconify-icons/mdi/home';
import birdIcon from '@iconify-icons/emojione-v1/bird';
import sceneryIcon from '@iconify-icons/uim/scenery';

export default {
	components: {
		Icon,
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
