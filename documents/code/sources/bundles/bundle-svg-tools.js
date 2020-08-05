/**
 * This is an advanced example for creating icon bundles for Iconify SVG Framework.
 * It creates a bundle from all SVG files in a directory.
 *
 * This example uses Iconify Tools to convert icons to Iconify JSON format.
 * For Iconify Tools documentation visit https://docs.iconify.design/tools/node/
 */
const fs = require('fs');

// Installation: npm install --save-dev @iconify/tools
const tools = require('@iconify/tools');

// True if bundle should use IconifyPreload.
// False if bundle should use Iconify.addCollection.
// See bundles for SVG framework for details.
const preload = true;

// File to save bundle to
const target = __dirname + '/assets/icons-bundle.js';

// SVG files location
const source = __dirname + '/svg';

// Prefix to use for custom icons
const prefix = 'custom';

// Import icons
let collection;
tools
	.ImportDir(source)
	.then((result) => {
		collection = result;

		// Set prefix
		collection.prefix = prefix;

		// Options for SVGO optimization
		let SVGOOptions = {
			convertShapeToPath: true,
			mergePaths: true,
		};

		// Optimize SVG files
		//
		// collection.promiseEach() iterates all icons in collection and runs
		// promise for each icon, one at a time.
		return collection.promiseEach(
			(svg, key) =>
				new Promise((fulfill, reject) => {
					tools
						.SVGO(svg, SVGOOptions)
						.then((res) => {
							fulfill(res);
						})
						.catch((err) => {
							reject('Error optimizing icon ' + key + '\n' + util.format(err));
						});
				}),
			true
		);
	})
	.then(() => {
		// Clean up tags
		return collection.promiseEach(
			(svg, key) =>
				new Promise((fulfill, reject) => {
					tools
						.Tags(svg)
						.then((res) => {
							fulfill(res);
						})
						.catch((err) => {
							reject(
								'Error checking tags in icon ' + key + '\n' + util.format(err)
							);
						});
				}),
			true
		);
	})
	.then(() => {
		// Change color to "currentColor" to all icons
		// Use this only for monotone collections
		let options = {
			default: 'currentColor', // change all colors to "currentColor"
			add: 'currentColor', // add "currentColor" to shapes that are missing color value
		};

		/*
		// For icons that have palette use this instead:
		let options = {
			add: 'currentColor',
        };
        */

		return collection.promiseEach(
			(svg) => tools.ChangePalette(svg, options),
			true
		);
	})
	.then((res) => {
		// Export to JSON
		return tools.ExportJSON(collection, null, {
			optimize: true,
		});
	})
	.then((json) => {
		// Export to bundle
		const text = JSON.stringify(json);
		const output = preload
			? 'IconifyPreload = [' + text + '];\n'
			: 'Iconify.addCollection(' + text + ');\n';

		// Save to file
		fs.writeFileSync(target, output, 'utf8');

		console.log(`Saved ${target} (${output.length} bytes)`);
	})
	.catch((err) => {
		console.error(err);
	});
