import React from 'react';
import { Icon, InlineIcon } from '@iconify/react-with-api';

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
				<Icon icon="line-md:image-twotone" className="iconify--line-md" />
				<Icon icon="mdi:account-box-outline" />
			</p>
			<p>
				Inline:
				<InlineIcon icon="line-md:image-twotone" className="iconify--line-md" />
				<InlineIcon icon="mdi:account-box-outline" />
			</p>
		</div>
	);
}
