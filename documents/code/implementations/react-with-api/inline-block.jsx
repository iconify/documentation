import React from 'react';
import { Icon, InlineIcon } from '@iconify/react-with-api';

export function inlineDemo() {
	return (
		<div>
			<p>
				Block:
				<Icon icon="line-md:image-twotone" />
				<Icon icon="mdi:account-box-outline" />
			</p>
			<p>
				Inline:
				<InlineIcon icon="line-md:image-twotone" />
				<InlineIcon icon="mdi:account-box-outline" />
			</p>
		</div>
	);
}
