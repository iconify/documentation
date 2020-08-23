<template>
	<div>
		<p>
			Test icon <InlineIcon icon="handshake" rotate="90deg" /> with text around
			it
		</p>
		<p>
			Test icon
			<InlineIcon icon="handshake" :style="{ transform: 'rotate(90deg)' }" />
			with text around it
		</p>
	</div>
</template>

<script>
// npm install --save-dev @iconify/vue@2 @iconify-icons/fa-regular
import { InlineIcon, addIcon } from '@iconify/vue';
import handshakeIcon from '@iconify-icons/fa-regular/handshake';

addIcon('handshake', handshakeIcon);

export default {
	components: {
		InlineIcon,
	},
};
</script>
