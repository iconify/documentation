import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';

export function inlineDemo() {
	return (
		<div>
			<p>
				Block:
				<InlineIcon icon="mdi:home" inline={false} />
				<InlineIcon icon="emojione-v1:bird" style={{ verticalAlign: 0 }} />
				<Icon icon="uim:scenery" />
			</p>
			<p>
				Inline:
				<Icon icon="mdi:home" inline={true} />
				<Icon icon="emojione-v1:bird" style={{ verticalAlign: '-0.125em' }} />
				<InlineIcon icon="uim:scenery" />
			</p>
		</div>
	);
}
