<template>
	<div>
		<div class="light-blue-block">
			All icons inside this div are light blue, including a bell icon
			<IconifyIcon :icon="icons.bellFill" :inline="true" />and stopwatch icon
			<IconifyIcon :icon="icons.stopwatch" :inline="true" />
		</div>
		<div class="orange-block">
			This text and icon are orange:
			<IconifyIcon :icon="icons.bellFill" :inline="true" />
		</div>
		<div>
			Red home icons (shows different ways to change color):
			<IconifyIcon class="red-icon" :icon="icons.bxHome" :inline="true" />
			<IconifyIcon :style="{ color: 'red' }" :icon="icons.bxHome" :inline="true" />
			<IconifyIcon color="red" :icon="icons.bxHome" :inline="true" />
		</div>
		<div>
			Icon with palette:
			<IconifyIcon :icon="icons.paintbrush" :inline="true" />
		</div>
	</div>
</template>

<script>
// npm install --save-dev @iconify/vue@1 @iconify-icons/bi @iconify-icons/bx @iconify-icons/noto
import IconifyIcon from '@iconify/vue';
import bellFill from '@iconify-icons/bi/bell-fill';
import stopwatchIcon from '@iconify-icons/bi/stopwatch';
import bxHome from '@iconify-icons/bx/bx-home';
import paintbrushIcon from '@iconify-icons/noto/paintbrush';

export default {
	components: {
		IconifyIcon,
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
