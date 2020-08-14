import React from 'react';
import { Icon, InlineIcon } from '@iconify/react-with-api';

export function inlineDemo() {
	return (
		<div>
			<p>
				Block:
				<Icon icon="mdi:home" inline={false} />
				<Icon icon="emojione-v1:bird" inline={false} />
				<InlineIcon icon="uim:scenery" />
			</p>
			<p>
				Inline:
				<Icon icon="mdi:home" inline={true} />
				<Icon icon="emojione-v1:bird" inline={true} />
				<InlineIcon icon="uim:scenery" />
			</p>
		</div>
	);
}
