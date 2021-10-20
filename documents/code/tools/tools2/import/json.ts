import { promises as fs } from 'fs';
import { IconSet } from '@iconify/tools/lib/icon-set';
import { cleanupSVG } from '@iconify/tools/lib/svg/cleanup';
import { runSVGO } from '@iconify/tools/lib/optimise/svgo';
import { parseColors, isEmptyColor } from '@iconify/tools/lib/colors/parse';
import { validateIconSet } from '@iconify/utils/lib/icon-set/validate';

(async () => {
	// Read data, parse JSON
	const rawData = JSON.parse(
		await fs.readFile('files/arty-animated.svg', 'utf8')
	);

	// Validate icon set
	const validatedData = validateIconSet(rawData);

	// Create new IconSet instance
	const iconSet = new IconSet(validatedData);

	// Clean up, fix colors and optimise
	await iconSet.forEach(
		async (name) => {
			const svg = iconSet.toSVG(name);
			if (!svg) {
				// Bad icon
				iconSet.remove(name);
				return;
			}

			// Wrap in try...catch to catch errors
			try {
				// Clean up and validate
				await cleanupSVG(svg);

				// Fix colors
				await parseColors(svg, {
					defaultColor: 'currentColor',
					callback: (attr, color) => {
						return typeof color === 'string' || isEmptyColor(color)
							? color
							: 'currentColor';
					},
				});

				// Optimise
				await runSVGO(svg);

				// Update icon data in icon set
				iconSet.fromSVG(name, svg);
			} catch (err) {
				console.error(`Error parsing ${name}:`, err);
				iconSet.remove(name);
			}
		},
		['icon']
	);

	// Done. Do other stuff...
})();
