<template>
	<div>
		<p>
			Block:
			<Icon :icon="icons.image" />
			<Icon :icon="icons.account" />
		</p>
		<p>
			Inline:
			<InlineIcon :icon="icons.image" />
			<InlineIcon :icon="icons.account" />
		</p>
	</div>
</template>

<script>
// npm install --save-dev @iconify/vue@2 @iconify-icons/mdi @iconify-icons/line-md
import { Icon, InlineIcon } from '@iconify/vue';
import imageTwotone from '@iconify-icons/line-md/image-twotone';
import accountBoxOutline from '@iconify-icons/mdi/account-box-outline';

export default {
	components: {
		Icon,
		InlineIcon,
	},
	data() {
		return {
			icons: {
				image: imageTwotone,
				account: accountBoxOutline,
			},
		};
	},
};
</script>
