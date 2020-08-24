import React from 'react';

// npm install --save-dev @iconify/react @iconify-icons/mdi @iconify-icons/line-md
import { Icon, InlineIcon } from '@iconify/react';
import imageTwotone from '@iconify-icons/line-md/image-twotone';
import accountBoxOutline from '@iconify-icons/mdi/account-box-outline';

export function inlineDemo() {
	return (
		<div>
			<p>
				Block:
				{/* 
				Adding class to first icon to trigger animations used by line-md icon set.
				SVG framework automatically adds classes based on icon prefix,
				but components do not because they handle raw icon data. 
				*/}
				<Icon icon={imageTwotone} className="iconify--line-md" />
				<Icon icon={accountBoxOutline} />
			</p>
			<p>
				Inline:
				<InlineIcon icon={imageTwotone} className="iconify--line-md" />
				<InlineIcon icon={accountBoxOutline} />
			</p>
		</div>
	);
}
