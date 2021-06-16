<template>
	<div>
		<p>
			Test icon
			<IconifyIcon icon="handshake" :inline="true" rotate="90deg" />with text around
			it
		</p>
		<p>
			Test icon
			<IconifyIcon icon="handshake" :inline="true" :style="{ transform: 'rotate(90deg)' }" />with text around it
		</p>
	</div>
</template>

<script>
// npm install --save-dev @iconify/vue@1 @iconify-icons/fa-regular
import IconifyIcon from '@iconify/vue';
import handshakeIcon from '@iconify-icons/fa-regular/handshake';

IconifyIcon.addIcon('handshake', handshakeIcon);

export default {
	components: {
		IconifyIcon,
	},
};
</script>
