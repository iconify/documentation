<template>
	<div>
		<IconifyIcon :icon="icons.locomotive" />
		<IconifyIcon :icon="icons.paperPlane" :style="{ fontSize: '36px' }" />
		<IconifyIcon :icon="icons.truck" class="big-icon" />
	</div>
</template>

<script>
// npm install --save-dev @iconify/vue@1 @iconify-icons/cil
import IconifyIcon from '@iconify/vue';
import locomotiveIcon from '@iconify-icons/cil/locomotive';
import paperPlane from '@iconify-icons/cil/paper-plane';
import truckIcon from '@iconify-icons/cil/truck';

export default {
	components: {
		IconifyIcon,
	},
	data() {
		return {
			icons: {
				locomotive: locomotiveIcon,
				paperPlane: paperPlane,
				truck: truckIcon,
			},
		};
	},
};
</script>
