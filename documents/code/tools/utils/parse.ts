import { promises as fs } from 'fs';
import { icons } from '@iconify-json/codicon';
import { parseIconSet } from '@iconify/utils/lib/icon-set/parse';
import { iconToSVG } from '@iconify/utils/lib/svg/build';
import { defaults } from '@iconify/utils/lib/customisations';

// Storage for all icons
const exportedSVG: Record<string, string> = Object.create(null);

// Parse all icons
parseIconSet(icons, (iconName, iconData) => {
	if (!iconData) {
		// Invalid icon
		console.error(`Error parsing icon ${iconName}`);
		return;
	}

	// Render icon
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

	// Save SVG
	exportedSVG[iconName] = svg;
});

// Save all icons
(async () => {
	for (const name in exportedSVG) {
		const svg = exportedSVG[name];
		await fs.writeFile(`svg/${name}.svg`, svg, 'utf8');
	}
	console.log(`Saved ${Object.keys(exportedSVG).length} icons`);
})();
