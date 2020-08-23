<template>
	<div>
		<p>No rotation: <InlineIcon icon="demo" /></p>
		<p>90° rotation: <InlineIcon icon="demo" rotate="90deg" /></p>
		<p>180° rotation: <InlineIcon icon="demo" rotate="180deg" /></p>
		<p>270° rotation: <InlineIcon icon="demo" :rotate="3" /></p>
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
