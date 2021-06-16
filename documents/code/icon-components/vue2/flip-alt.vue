<template>
	<div>
		<p>
			No flip:
			<IconifyIcon icon="demo" :inline="true" />
		</p>
		<p>
			Horizontal flip:
			<IconifyIcon icon="demo" :inline="true" :horizontalFlip="true" />
		</p>
		<p>
			Vertical flip:
			<IconifyIcon icon="demo" :inline="true" :verticalFlip="true" />
		</p>
		<p>
			Both (or 180° rotation):
			<IconifyIcon icon="demo" :inline="true" :horizontalFlip="true" :verticalFlip="true" />
		</p>
	</div>
</template>

<script>
// npm install --save-dev @iconify/vue@1 @iconify-icons/bi
import IconifyIcon from '@iconify/vue';
import check2Circle from '@iconify-icons/bi/check2-circle';

IconifyIcon.addIcon('demo', check2Circle);

export default {
	components: {
		IconifyIcon,
	},
};
</script>
