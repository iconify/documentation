<template>
	<div>
		<p>
			No rotation:
			<IconifyIcon icon="demo" :inline="true" />
		</p>
		<p>
			90° rotation:
			<IconifyIcon icon="demo" :inline="true" rotate="90deg" />
		</p>
		<p>
			180° rotation:
			<IconifyIcon icon="demo" :inline="true" rotate="180deg" />
		</p>
		<p>
			270° rotation:
			<IconifyIcon icon="demo" :inline="true" :rotate="3" />
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
