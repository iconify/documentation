import { promises as fs } from 'fs';
import { SVG } from '@iconify/tools/lib/svg';
import { blankIconSet } from '@iconify/tools/lib/icon-set';
import { cleanupSVG } from '@iconify/tools/lib/svg/cleanup';
import { runSVGO } from '@iconify/tools/lib/optimise/svgo';
import { parseColors, isEmptyColor } from '@iconify/tools/lib/colors/parse';

(async () => {
	// Create empty icon set
	const iconSet = blankIconSet('test');

	// Read icon, create SVG instance
	const content = await fs.readFile('files/home.svg', 'utf8');
	const svg = new SVG(content);

	// Clean up, fix colors and optimise
	await cleanupSVG(svg);
	await parseColors(svg, {
		defaultColor: 'currentColor',
		callback: (attr, colorStr, color) => {
			return !color || isEmptyColor(color) ? colorStr : 'currentColor';
		},
	});
	await runSVGO(svg);

	// Add icon to icon set
	iconSet.fromSVG('home', svg);
})();
