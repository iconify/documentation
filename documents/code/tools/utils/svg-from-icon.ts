import type { IconifyIcon } from '@iconify/types';
import { fullIcon } from '@iconify/utils/lib/icon';
import { iconToSVG } from '@iconify/utils/lib/svg/build';
import { defaults } from '@iconify/utils/lib/customisations';
// import { replaceIDs } from '@iconify/utils/lib/svg/id';

// Icon data in IconifyIcon format
const data: IconifyIcon = {
	body: '<path d="M16 8.414l-4.5-4.5L4.414 11H6v8h3v-6h5v6h3v-8h1.586L17 9.414V6h-1v2.414zM2 12l9.5-9.5L15 6V5h3v4l3 3h-3v7.998h-5v-6h-3v6H5V12H2z" fill="currentColor"/>',
	width: 24,
	height: 24,
};

// Add optional properties to icon data
const iconData = fullIcon(data);

// Generate data for rendering SVG
// Second parameter is customisations, in this example setting dimensions to icon's viewBox
const renderData = iconToSVG(iconData, { ...defaults, height: 'auto' });

/*

Result of iconToSVG() can be used to either generate HTML code or to use in various components

renderData = {
  attributes: {
    width: '24',
    height: '24',
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 24 24'
  },
  body: '<path d="M16 8.414l-4.5-4.5L4.414 11H6v8h3v-6h5v6h3v-8h1.586L17 9.414V6h-1v2.414zM2 12l9.5-9.5L15 6V5h3v4l3 3h-3v7.998h-5v-6h-3v6H5V12H2z" fill="currentColor"/>'
}

 */

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
const svg = `<svg ${svgAttributesStr}>${renderData.body}</svg>`;

/*

Many icons have elements with unique IDs, such as masks. IDs are meant to be unique.
If generated icon is embedded in HTML, it cannot have IDs that might be present in
another icon. To solve that, replace IDs in content with randomly generated IDs
using replaceIDs():

const svg = `<svg ${svgAttributesStr}>${replaceIDs(renderData.body)}</svg>`;

Uncomment import for replaceIDs() at start of this example.

 */

// Log SVG
console.log(svg);
