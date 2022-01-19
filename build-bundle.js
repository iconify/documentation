const fs = require('fs');
const { blankIconSet, IconSet, SVG } = require('@iconify/tools');
const { getIcons, minifyIconSet } = require('@iconify/utils');
const { paths, mkdir } = require('./lib/files');

const jsSourceDir = paths.sourceAssets + '/js';
const iconSourceDir = paths.sourceAssets + '/svg';
const assetsPath = paths.html + '/assets';
const outputFile = assetsPath + '/bundle.js';
mkdir(assetsPath);

// Custom icons data
const customPrefix = 'assets';

// List of icons to preload
const preloadIcons = {
	'line-md': [
		// Footer
		'home-twotone-alt',
		'github',
		'document-list',
		'document-code',
		'image-twotone',
		// Breadcrumbs
		'chevron-small-double-left',
		'chevron-small-double-right',
		// Documentation
		'hash-small', // Heading link, see replacements.json
		'clipboard-arrow', // Copy code, see copy-code.js
		'confirm', // Copy success, see copy-code.js
		'alert', // Notice, see partials/notices/*.html
		'alert-circle', // Notice
		'construction-twotone', // Notice in page.html
		// Navigation
		'menu-unfold-left',
		'menu-fold-right',
		// Navigation, see src/navigation/render.ts
		'chevron-small-down',
		'chevron-small-right',
		// Code
		'alert',
		'github-twotone',
		'image-twotone',
		// partials/process/*, partials/sources/api/namespaces/animation.html
		// 'cloud',
		'cloud-twotone',
		'cloud-down-twotone',
		'computer-twotone',
		'laptop-twotone',
		// partials/sources/api/namespaces/name.html
		'navigation-left-up',
		// partials/visual-blocks/bundle.html (re-using footer)
		'home-twotone-alt',
		// 'github', // replaced with assets:github in footer
		'document-list',
		'document-code',
		'image-twotone',
		'chevron-small-double-left',
		'alert',
		'hash-small',
		'cloud-twotone',
		'cloud-down-twotone',
		'computer-twotone',
		'laptop-twotone',
		// partials/
	],
};

[
	// Common
	'mdi:alert',
	'mdi:home',
	// Size demo
	'jam:info',
	'cil:locomotive',
	'cil:paper-plane',
	'cil:truck',
	'fa-regular:id-badge',
	'fa-regular:handshake',
	// Color demo
	'ion:umbrella-sharp',
	'noto:paintbrush',
	'bx:bx-home',
	'bx:bx-hourglass',
	'bx:bx-home',
	'entypo:attachment',
	// Rotation and flip
	'bi:check2-circle',
	// Icons page
	'mdi:material-design',
	'akar-icons:bootstrap-fill',
	'carbon:carbon',
	'tabler:brand-tabler',
	'twemoji:dizzy',
	'openmoji:face-with-tongue',
].forEach((icon) => {
	const parts = icon.split(':');
	if (parts.length !== 2) {
		throw new Error('Use full syntax!');
	}

	const prefix = parts.shift();
	const name = parts.shift();

	if (preloadIcons[prefix] === void 0) {
		preloadIcons[prefix] = [];
	} else if (preloadIcons[prefix].indexOf(name) !== -1) {
		return;
	}
	preloadIcons[prefix].push(name);
});

// Content
const preload = [];
const collections = Object.create(null);

// Get all icons and icon sets
const customCollection = blankIconSet(customPrefix);

/**
 * Bundle scripts
 */
function loadScripts() {
	let content = '';

	fs.readdirSync(jsSourceDir).forEach((file) => {
		const parts = file.split('.');
		const ext = parts.pop();
		if (ext !== 'js' || parts.length !== 1 || parts[0].slice(0, 1) === '_') {
			return;
		}

		content += fs.readFileSync(jsSourceDir + '/' + file, 'utf8') + '\n';
	});

	return content;
}

/**
 * Load assets and custom icon sets
 */
function loadIconSets() {
	fs.readdirSync(iconSourceDir).forEach((file) => {
		const parts = file.split('.');
		const ext = parts.pop();
		if (parts.length !== 1 || parts[0].slice(0, 1) === '_') {
			return;
		}

		const name = parts.shift().replace(/_/g, '-');
		switch (ext) {
			case 'svg': {
				// Custom icon
				const content = fs
					.readFileSync(iconSourceDir + '/' + file, 'utf8')
					.replace(/\s*\n\s*/g, ' ')
					.replace(/\s([<>])/g, '$1');

				// Add icon
				try {
					const svg = new SVG(content);
					if (!(svg instanceof SVG)) {
						throw new Error(`Bad icon: ${file}`);
					}
					customCollection.fromSVG(name, svg);

					if (preloadIcons[customPrefix] === void 0) {
						preloadIcons[customPrefix] = [];
					}
					preloadIcons[customPrefix].push(name);
				} catch (err) {
					reject(err);
					throw new Error(err);
				}
				break;
			}

			case 'json': {
				// Custom icon set
				const content = JSON.parse(
					fs.readFileSync(iconSourceDir + '/' + file, 'utf8')
				);
				const iconSet = new IconSet(content);
				if (iconSet.prefix !== name) {
					const err = `Bad prefix "${iconSet.prefix}" in JSON file: ${file}`;
					reject(err);
					throw new Error(err);
				}
				collections[name] = iconSet;
				break;
			}
		}
	});

	// Export custom icons
	collections[customPrefix] = customCollection;
}

/**
 * Load default icon set
 */
function loadDefaultSet(prefix) {
	const content = JSON.parse(
		fs.readFileSync(
			require.resolve('@iconify/json/json/' + prefix + '.json'),
			'utf8'
		)
	);
	return new IconSet(content);
}

// Do stuff
loadIconSets();

// Filter icons
Object.keys(preloadIcons).forEach((prefix) => {
	let collection;
	if (collections[prefix] === void 0) {
		collection = loadDefaultSet(prefix);
	} else {
		collection = collections[prefix];
	}

	const fullJSON = collection.export();
	const json = getIcons(fullJSON, preloadIcons[prefix], true);
	if (json.not_found !== void 0) {
		throw new Error(
			`Could not find icons in "${prefix}": ${json.not_found.join(', ')}`
		);
	}

	minifyIconSet(json);
	preload.push(JSON.stringify(json));
});

// Export file
const content =
	loadScripts() + 'var IconifyPreload = [\n\t' + preload.join(',\n\t') + '\n];';
fs.writeFileSync(outputFile, content, 'utf8');
console.log(`Saved bundle.js (${content.length} bytes)`);
