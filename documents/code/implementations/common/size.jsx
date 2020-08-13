import React from 'react';

// npm install --save-dev @iconify/react @iconify/icons-cil
import { Icon } from '@iconify/react';
import locomotiveIcon from '@iconify/icons-cil/locomotive';
import paperPlane from '@iconify/icons-cil/paper-plane';
import truckIcon from '@iconify/icons-cil/truck';

export function sizeDemo() {
	return (
		<div>
			<Icon icon={locomotiveIcon} />
			<Icon icon={paperPlane} style={{ fontSize: '36px' }} />
			<Icon icon={truckIcon} className="big-icon" />
		</div>
	);
}
