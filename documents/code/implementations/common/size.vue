<template>
	<div>
		<Icon :icon="icons.locomotive" />
		<Icon :icon="icons.paperPlane" :style="{ fontSize: '36px' }" />
		<Icon :icon="icons.truck" class="big-icon" />
	</div>
</template>

<script>
// npm install --save-dev @iconify/vue@2 @iconify-icons/cil
import { Icon } from '@iconify/vue';
import locomotiveIcon from '@iconify-icons/cil/locomotive';
import paperPlane from '@iconify-icons/cil/paper-plane';
import truckIcon from '@iconify-icons/cil/truck';

export default {
	components: {
		Icon,
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
