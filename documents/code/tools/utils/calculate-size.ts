import { icons } from '@iconify-json/fa-regular';
import { getIconData } from '@iconify/utils/lib/icon-set/get-icon';
import { calculateSize } from '@iconify/utils/lib/svg/size';

// Get 384 x 512 icon
const iconData = getIconData(icons, 'bookmark', true);
if (!iconData) {
	throw new Error('Icon is missing');
}

// Calculate width when height is set
const calculateWidth = (height: number | string) => {
	const width = calculateSize(height, iconData.width / iconData.height);
	console.log(`For height="${height}", width value is "${width}"`);
};
calculateWidth('1em');
calculateWidth(24);
calculateWidth('calc(1em + 8px)');
calculateWidth('3.25rem');

// Calculate height when width is set
const calculateHeight = (width: number | string) => {
	const height = calculateSize(width, iconData.height / iconData.width);
	console.log(`For width="${width}", height value is "${height}"`);
};
calculateHeight('2em');
calculateHeight(20);
