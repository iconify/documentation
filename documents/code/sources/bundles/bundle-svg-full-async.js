/**
 * This is an advanced example for creating icon bundles for Iconify SVG Framework.
 *
 * It creates a bundle from:
 * - All SVG files in a directory.
 * - Custom JSON files.
 * - Iconify icon sets.
 * - Iconify.
 *
 * This example uses Iconify Tools to convert icons to Iconify JSON format.
 * For Iconify Tools documentation visit https://docs.iconify.design/tools/node/
 */
const fs = require('fs');

// Installation: npm install --save-dev @iconify/tools @iconify/json-tools @iconify/json @iconify/iconify@2
const tools = require('@iconify/tools');
const { Collection } = require('@iconify/json-tools');

// Various sources. Comment out sources you do not want in a bundle
const sources = {
	// Source file for Iconify:
	// Use '@iconify/iconify' for full version
	// Use '@iconify/iconify/dist/iconify.without-api.min' for version without API
	iconify: require.resolve('@iconify/iconify/dist/iconify.without-api.min'),

	// Import custom SVG files
	// Each entry is an object:
	// dir: directory where files are
	// monotone: true if icons do not have palette, false if they do.
	// prefix: prefix to use for icons
	svg: [
		{
			dir: __dirname + '/svg',
			monotone: true,
			prefix: 'custom',
		},
		{
			dir: __dirname + '/emojis',
			monotone: false,
			prefix: 'emoji',
		},
	],

	// List of icons to import from Iconify icon sets
	iconifyIcons: [
		'mdi:home',
		'mdi:account',
		'mdi:login',
		'mdi:logout',
		'octicon:book-24',
		'octicon:code-square-24',
	],

	// List of full JSON files to import
	// Entire files will be imported with all icons. If you want only few icons, see 'customIcons' below
	json: [
		// Custom JSON file
		__dirname + '/json/gg.json',
		// Iconify JSON file (@iconify/json is a package name, /json/ is directory where files are, then filename)
		require.resolve('@iconify/json/json/tabler.json'),
	],

	// List of icons to import from custom JSON files
	// Do not put the same files in 'customIcons' and 'json' arrays or icons will be imported twice
	customIcons: [
		{
			json: __dirname + '/json/line-md.json',
			icons: [
				'home-twotone-alt',
				'github',
				'document-list',
				'document-code',
				'image-twotone',
			],
		},
	],
};

// File to save bundle to
const target = __dirname + '/src/iconify-bundle.js';

/**
 * Do stuff!
 */
(async function () {
	let bundle = '';
	const isIconifyBundled = !!sources.iconify;
	const wrapperFunction = isIconifyBundled ? 'Iconify.addCollection' : 'add';

	/**
	 * Bundle Iconify
	 */
	if (isIconifyBundled) {
		bundle += fs.readFileSync(sources.iconify, 'utf8');

		// Try to copy .d.ts
		const tsSource = sources.iconify.replace('.js', '.d.ts');
		try {
			const tsContent = fs.readFileSync(tsSource);
			fs.writeFileSync(target.replace('.js', '.d.ts'), tsContent);
		} catch (err) {
			//
		}
	}

	/**
	 * Bundle full JSON files
	 */
	if (sources.json) {
		sources.json.forEach((file) => {
			// Parse and stringify to minify file
			const data = JSON.parse(fs.readFileSync(file, 'utf8'));
			bundle += wrapperFunction + '(' + JSON.stringify(data) + ');\n';
		});
	}

	/**
	 * Bundle Iconify icons
	 */
	if (sources.iconifyIcons && sources.iconifyIcons.length) {
		const iconifyIcons = organizeIconsList(sources.iconifyIcons);
		Object.keys(iconifyIcons).forEach((prefix) => {
			const iconsList = iconifyIcons[prefix];

			// Load icon set
			const collection = new Collection(prefix);
			if (!collection.loadIconifyCollection(prefix)) {
				throw new Error(
					`Icons with prefix "${prefix}" do not exist in Iconify. Update @iconify/json?`
				);
			}

			// Import icons
			importIconSet(collection, iconsList);
		});
	}

	/**
	 * Bundle icons from custom JSON files
	 */
	if (sources.customIcons) {
		sources.customIcons.forEach((item) => {
			const source = item.json;
			const icons = item.icons;

			if (!icons.length) {
				return;
			}

			// Load icon set
			const collection = new Collection();
			if (!collection.loadFromFile(source)) {
				throw new Error(`Cannot find file "${source}.json"`);
			}

			// Overwrite prefix if it is set
			if (item.prefix) {
				collection.prefix = item.prefix;
			}

			// Import icons
			importIconSet(collection, icons);
		});
	}

	/**
	 * Parse custom SVG
	 */
	await parseSVG();

	/**
	 * Save bundle
	 */
	if (!isIconifyBundled) {
		// Wrap in custom code that checks for Iconify.addCollection and IconifyPreload
		bundle = `(function() { 
		function add(data) {
			try {
				if (typeof self.Iconify === 'object' && self.Iconify.addCollection) {
					self.Iconify.addCollection(data);
					return;
				}
				if (typeof self.IconifyPreload === 'undefined') {
					self.IconifyPreload = [];
				}
				self.IconifyPreload.push(data);
			} catch (err) {
			}
		}
		${bundle}
	})();\n`;
	}

	fs.writeFileSync(target, bundle, 'utf8');
	console.log(`Saved ${target} (${bundle.length} bytes)`);

	/**
	 * Parse custom SVG
	 */
	async function parseSVG() {
		if (!sources.svg || !sources.svg.length) {
			return;
		}

		// Parse all icons
		const svgSources = sources.svg;
		for (let i = 0; i < svgSources.length; i++) {
			await nextSVGSource(svgSources[i]);
		}

		/**
		 * Parse next set of SVG
		 */
		async function nextSVGSource(source) {
			const { dir, prefix, monotone } = source;

			// Import directory
			const collection = await tools.ImportDir(dir, {
				prefix,
			});

			// Set prefix
			collection.prefix = prefix;

			// Options for SVGO optimization
			const SVGOOptions = source.options
				? source.options
				: {
						convertShapeToPath: true,
						mergePaths: true,
				  };

			// Optimize SVG files
			//
			// collection.promiseEach() iterates all icons in collection and runs
			// promise for each icon, one at a time.
			await collection.promiseEach(
				async (svg, key) => await tools.SVGO(svg, SVGOOptions),
				true
			);

			// Clean up tags
			await collection.promiseEach(
				async (svg, key) => await tools.Tags(svg),
				true
			);

			// Change palette
			const options = monotone
				? {
						default: 'currentColor', // change all colors to "currentColor"
						add: 'currentColor', // add "currentColor" to shapes that are missing color value
				  }
				: {
						add: 'currentColor', // add "currentColor" to shapes that are missing color value
				  };

			await collection.promiseEach(
				async (svg) => await tools.ChangePalette(svg, options),
				true
			);

			// Export to JSON
			const json = await tools.ExportJSON(collection, null, {
				optimize: true,
			});

			// Export to bundle
			const text = JSON.stringify(json);
			bundle += wrapperFunction + '(' + text + ');\n';
		}
	}

	/**
	 * Import icons from Collection instance
	 */
	function importIconSet(collection, icons) {
		// Make sure all icons exist
		icons.forEach((name) => {
			if (!collection.iconExists(name)) {
				// Uncomment next line to throw error if an icon does not exist
				// throw new Error(`Could not find icon: "${prefix}:${name}"`);
				console.error(`Could not find icon: "${collection.prefix}:${name}"`);
			}
		});

		// Get data for all icons as string
		bundle += collection.scriptify({
			icons,
			callback: wrapperFunction,
			optimize: true,
		});
	}
})().catch((err) => {
	console.error(err);
});

/**
 * Organize icons list by prefix
 *
 * Result is an object, where key is prefix, value is array of icon names
 */
function organizeIconsList(icons) {
	const results = Object.create(null);

	icons.forEach((str) => {
		// Split icon to prefix and name
		const icon = stringToIcon(str);
		if (icon === null || icon.provider !== '') {
			// Invalid name or icon name has provider.
			// All icons in this example are from Iconify, so providers are not supported.
			throw new Error(`Invalid icon name: ${str}`);
		}

		const prefix = icon.prefix;
		const name = icon.name;

		// Add icon to results
		if (results[prefix] === void 0) {
			results[prefix] = [name];
			return;
		}
		if (results[prefix].indexOf(name) === -1) {
			results[prefix].push(name);
		}
	});

	return results;
}

/**
 * Convert icon name from string to object.
 *
 * Object properties:
 * - provider (ignored in this example)
 * - prefix
 * - name
 *
 * This function was copied from @iconify/utils/src/icon/name.ts
 * See https://github.com/iconify/iconify/blob/master/packages/core/src/icon/name.ts
 */
function stringToIcon(value) {
	let provider = '';
	const colonSeparated = value.split(':');

	// Check for provider with correct '@' at start
	if (value.slice(0, 1) === '@') {
		// First part is provider
		if (colonSeparated.length < 2 || colonSeparated.length > 3) {
			// "@provider:prefix:name" or "@provider:prefix-name"
			return null;
		}
		provider = colonSeparated.shift().slice(1);
	}

	// Check split by colon: "prefix:name", "provider:prefix:name"
	if (colonSeparated.length > 3 || !colonSeparated.length) {
		return null;
	}
	if (colonSeparated.length > 1) {
		// "prefix:name"
		const name = colonSeparated.pop();
		const prefix = colonSeparated.pop();
		return {
			// Allow provider without '@': "provider:prefix:name"
			provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
			prefix,
			name,
		};
	}

	// Attempt to split by dash: "prefix-name"
	const dashSeparated = colonSeparated[0].split('-');
	if (dashSeparated.length > 1) {
		return {
			provider: provider,
			prefix: dashSeparated.shift(),
			name: dashSeparated.join('-'),
		};
	}

	return null;
}
