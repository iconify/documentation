import React from 'react';

// npm install --save-dev @iconify/react @iconify/icons-bi @iconify/icons-bx @iconify/icons-noto
import { InlineIcon } from '@iconify/react';
import bellFill from '@iconify/icons-bi/bell-fill';
import stopwatchIcon from '@iconify/icons-bi/stopwatch';
import bxHome from '@iconify/icons-bx/bx-home';
import paintbrushIcon from '@iconify/icons-noto/paintbrush';

export function colorDemo() {
	return (
		<div>
			<div className="light-blue-block">
				All icons inside this div are light blue, including a bell icon{' '}
				<InlineIcon icon={bellFill} /> and stopwatch icon{' '}
				<InlineIcon icon={stopwatchIcon} />
			</div>
			<div className="orange-block">
				This text and icon are orange: <InlineIcon icon={bellFill} />
			</div>
			<div>
				Red home icons (shows different ways to change color):{' '}
				<InlineIcon className="red-icon" icon={bxHome} />{' '}
				<InlineIcon style={{ color: 'red' }} icon={bxHome} />{' '}
				<InlineIcon color="red" icon={bxHome} />
			</div>
			<div>
				Icon with palette: <InlineIcon icon={paintbrushIcon} />
			</div>
		</div>
	);
}
