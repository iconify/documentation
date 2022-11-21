// Import full icon set
import { icons } from '@iconify-json/mdi-light';

// Various functions from Iconify Utils
import { getIconData, iconToSVG, replaceIDs } from '@iconify/utils';

// Get ful data for 'mdi-light:home'
const iconData = getIconData(icons, 'home');
if (!iconData) {
	throw new Error('Home icon does not exist');
}

// Generate data for rendering SVG
// Second optional parameter is customisations
const renderData = iconToSVG(iconData);

/*

Result of iconToSVG() can be used to either generate HTML code or to use in various components

renderData = {
  attributes: {
    width: '1em',
    height: '1em',
    viewBox: '0 0 24 24'
  },
  body: '<path d="M16 8.414l-4.5-4.5L4.414 11H6v8h3v-6h5v6h3v-8h1.586L17 9.414V6h-1v2.414zM2 12l9.5-9.5L15 6V5h3v4l3 3h-3v7.998h-5v-6h-3v6H5V12H2z" fill="currentColor"/>'
}

 */

// Generate attributes for SVG element
const svgAttributes = {
	xmlns: 'http://www.w3.org/2000/svg',
	...renderData.attributes,
} as Record<string, string>;
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
