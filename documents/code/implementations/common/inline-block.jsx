import React from 'react';

// npm install --save-dev @iconify/react @iconify/icons-mdi @iconify/icons-line-md
import { Icon, InlineIcon } from '@iconify/react';
import imageTwotone from '@iconify/icons-line-md/image-twotone';
import accountBoxOutline from '@iconify/icons-mdi/account-box-outline';

export function inlineDemo() {
	return (
		<div>
			<p>
				Block:
				<Icon icon={imageTwotone} />
				<Icon icon={accountBoxOutline} />
			</p>
			<p>
				Inline:
				<InlineIcon icon={imageTwotone} />
				<InlineIcon icon={accountBoxOutline} />
			</p>
		</div>
	);
}
