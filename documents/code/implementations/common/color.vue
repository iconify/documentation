<template>
	<div>
		<div class="light-blue-block">
			All icons inside this div are light blue, including a bell icon
			<InlineIcon :icon="icons.bellFill" />
			and stopwatch icon
			<InlineIcon :icon="icons.stopwatch" />
		</div>
		<div class="orange-block">
			This text and icon are orange: <InlineIcon :icon="icons.bellFill" />
		</div>
		<div>
			Red home icons (shows different ways to change color):
			<InlineIcon class="red-icon" :icon="icons.bxHome" />
			<InlineIcon :style="{ color: 'red' }" :icon="icons.bxHome" />
			<InlineIcon color="red" :icon="icons.bxHome" />
		</div>
		<div>Icon with palette: <InlineIcon :icon="icons.paintbrush" /></div>
	</div>
</template>

<script>
// npm install --save-dev @iconify/vue@2 @iconify-icons/bi @iconify-icons/bx @iconify-icons/noto
import { InlineIcon } from '@iconify/vue';
import bellFill from '@iconify-icons/bi/bell-fill';
import stopwatchIcon from '@iconify-icons/bi/stopwatch';
import bxHome from '@iconify-icons/bx/bx-home';
import paintbrushIcon from '@iconify-icons/noto/paintbrush';

export default {
	components: {
		InlineIcon,
	},
	data() {
		return {
			icons: {
				bellFill: bellFill,
				stopwatch: stopwatchIcon,
				bxHome: bxHome,
				paintbrush: paintbrushIcon,
			},
		};
	},
};
</script>
