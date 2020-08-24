import React from 'react';

// npm install --save-dev @iconify/react @iconify-icons/mdi @iconify-icons/emojione-v1 @iconify-icons/uim
import { Icon, InlineIcon } from '@iconify/react';
import homeIcon from '@iconify-icons/mdi/home';
import birdIcon from '@iconify-icons/emojione-v1/bird';
import sceneryIcon from '@iconify-icons/uim/scenery';

export function inlineDemo() {
	return (
		<div>
			<p>
				Block:
				<InlineIcon icon={homeIcon} inline={false} />
				<InlineIcon icon={birdIcon} style={{ verticalAlign: 0 }} />
				<Icon icon={sceneryIcon} />
			</p>
			<p>
				Inline:
				<Icon icon={homeIcon} inline={true} />
				<Icon icon={birdIcon} style={{ verticalAlign: '-0.125em' }} />
				<InlineIcon icon={sceneryIcon} />
			</p>
		</div>
	);
}
