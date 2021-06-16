<template>
	<div>
		<p>No flip: <InlineIcon icon="demo" /></p>
		<p>Horizontal flip: <InlineIcon icon="demo" flip="horizontal" /></p>
		<p>Vertical flip: <InlineIcon icon="demo" flip="vertical" /></p>
		<p>
			Both (or 180° rotation):
			<InlineIcon icon="demo" flip="horizontal,vertical" />
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
