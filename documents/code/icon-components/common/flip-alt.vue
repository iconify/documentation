<template>
	<div>
		<p>No flip: <InlineIcon icon="demo" /></p>
		<p>Horizontal flip: <InlineIcon icon="demo" :horizontalFlip="true" /></p>
		<p>Vertical flip: <InlineIcon icon="demo" :verticalFlip="true" /></p>
		<p>
			Both (or 180° rotation):
			<InlineIcon icon="demo" :horizontalFlip="true" :verticalFlip="true" />
		</p>
	</div>
</template>

<script>
// npm install --save-dev @iconify/vue@2 @iconify-icons/bi
import { InlineIcon, addIcon } from '@iconify/vue';
import check2Circle from '@iconify-icons/bi/check2-circle';

addIcon('demo', check2Circle);

export default {
	components: {
		InlineIcon,
	},
};
</script>
