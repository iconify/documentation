import type { ExtendedIconifyIcon } from '@iconify/types';
import { icons } from '@iconify-json/codicon';
import { parseIconSet } from '@iconify/utils/lib/icon-set/parse';

// Count icons by parsing them
let count = 0;
parseIconSet(
	icons,
	(iconName, iconData) => {
		if (!iconData || (iconData as ExtendedIconifyIcon).hidden) {
			// Invalid or hidden
			return;
		}
		count++;
	},
	{
		// List only icon variations instead of all aliases
		aliases: 'variations',
	}
);

console.log(`Found ${count} icons`);
