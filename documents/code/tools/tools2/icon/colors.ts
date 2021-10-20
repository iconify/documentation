import { IconSet } from '@iconify/tools/lib/icon-set';
import { parseColors, isEmptyColor } from '@iconify/tools/lib/colors/parse';

const iconSet = new IconSet({
	prefix: 'codicon',
	icons: {
		'add': {
			body: '<path d="M14 7v1H8v6H7V8H1V7h6V1h1v6h6z"/>',
		},
		'debug-pause': {
			body: '<path d="M4.5 3H6v10H4.5V3zm7 0v10H10V3h1.5z" fill="#000"/>',
			hidden: true,
		},
		'triangle-left': {
			body: '<path d="M10.44 2l.56.413v11.194l-.54.393L5 8.373v-.827L10.44 2z" fill="#000"/>',
		},
	},
	aliases: {
		'plus': {
			parent: 'add',
		},
		'triangle-right': {
			parent: 'triangle-left',
			hFlip: true,
		},
	},
});

(async () => {
	await iconSet.forEach(async (name, type) => {
		if (type !== 'icon') {
			// Ignore aliases and variations: they inherit content from parent icon, so there is nothing to change
			return;
		}

		const svg = iconSet.toSVG(name);
		if (svg) {
			await parseColors(svg, {
				// Change default color to 'currentColor'
				defaultColor: 'currentColor',

				// Callback to parse each color
				callback: (attr, color) => {
					// string -> color cannot be parsed -> return without changes
					// isEmptyColor() -> checks if color is empty: 'none' or 'transparent' -> return without changes
					// for everything else return 'currentColor'
					return typeof color === 'string' || isEmptyColor(color)
						? color
						: 'currentColor';
				},
			});

			// Update icon in icon set
			iconSet.fromSVG(name, svg);
		}
	});

	// Export icon set
	console.log(iconSet.export());
})();
