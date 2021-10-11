import { icons } from '@iconify-json/codicon';
import { getIconData } from '@iconify/utils/lib/icon-set/get-icon';
import { iconToSVG } from '@iconify/utils/lib/svg/build';
import { defaults } from '@iconify/utils/lib/customisations';
import { replaceIDs } from '@iconify/utils/lib/svg/id';

const iconName = 'debug-console';

// Get content for icon
const iconData = getIconData(icons, iconName, true);
if (!iconData) {
	throw new Error(`Icon "${iconName}" is missing`);
}

// Use it to render icon
const renderData = iconToSVG(iconData, {
	...defaults,
	height: 'auto',
});

// Generate attributes for SVG element
const svgAttributes: Record<string, string> = {
	'xmlns': 'http://www.w3.org/2000/svg',
	'xmlns:xlink': 'http://www.w3.org/1999/xlink',
	...renderData.attributes,
};
if (renderData.inline) {
	svgAttributes.style = 'vertical-align: -0.125em;';
}
const svgAttributesStr = Object.keys(svgAttributes)
	.map(
		(attr) =>
			// No need to check attributes for special characters, such as quotes,
			// they cannot contain anything that needs escaping.
			`${attr}="${svgAttributes[attr as keyof typeof svgAttributes]}"`
	)
	.join(' ');

// Generate SVG
const svg = `<svg ${svgAttributesStr}>${replaceIDs(renderData.body)}</svg>`;

// Log SVG
console.log(svg);
