import { promises as fs } from 'fs';
import {
	SVG,
	blankIconSet,
	cleanupSVG,
	runSVGO,
	parseColors,
	isEmptyColor,
} from '@iconify/tools';

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
