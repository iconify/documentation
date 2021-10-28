import { importDirectory } from '@iconify/tools/lib/import/directory';
import { cleanupSVG } from '@iconify/tools/lib/svg/cleanup';
import { runSVGO } from '@iconify/tools/lib/optimise/svgo';
import { parseColors, isEmptyColor } from '@iconify/tools/lib/colors/parse';

(async () => {
	// Import icons
	const iconSet = await importDirectory('files/svg', {
		prefix: 'test',
	});

	// Validate, clean up, fix palette and optimise
	await iconSet.forEach(async (name, type) => {
		if (type !== 'icon') {
			return;
		}

		const svg = iconSet.toSVG(name);
		if (!svg) {
			// Invalid icon
			iconSet.remove(name);
			return;
		}

		// Clean up and optimise icons
		try {
			await cleanupSVG(svg);
			await parseColors(svg, {
				defaultColor: 'currentColor',
				callback: (attr, colorStr, color) => {
					return !color || isEmptyColor(color) ? colorStr : 'currentColor';
				},
			});
			await runSVGO(svg);
		} catch (err) {
			// Invalid icon
			console.error(`Error parsing ${name}:`, err);
			iconSet.remove(name);
			return;
		}

		// Update icon
		iconSet.fromSVG(name, svg);
	});

	// Export
	console.log(iconSet.export());
})();
