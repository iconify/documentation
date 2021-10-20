(async () => {
	await iconSet.forEach(async (name, type) => {
		if (type !== 'icon') {
			// Ignore aliases and variations: they inherit content from parent icon, so there is nothing to change
			return;
		}

		const svg = iconSet.toSVG(name);
		if (svg) {
			// Change colors to red
			await parseColors(svg, {
				defaultColor: 'red',
				callback: (attr, color) => {
					return typeof color === 'string' || !isKeywordColor(color)
						? color
						: 'red';
				},
			});

			// Update icon from SVG instance
			iconSet.fromSVG(name, svg);
		}
	});

	// The rest of code here
})();
