import fs from 'fs';
import { paths, list, write } from './files';
import { parsePage } from './parse';
import { buildHTML } from './parse/html';
import { navigationURLs, NavigationItem } from './navigation/loader';
import { urlToFile, indexFile, fileToURL } from './navigation/helpers';
import { rawReplacements } from './replacements';
import { relativeToAbsolute } from './urls';
import { createLegacyRedirect, legacyFiles } from './legacy-redirects';

// Overwrite console.error with function that changes color, making it easy to see errors
const oldLogError = console.error;
const logError: typeof oldLogError = (...data: any[]) => {
	const colors = {
		reset: '\x1b[0m',
		error: '\x1b[31m', // red
		info: '\x1b[34m', // blue
		notice: '\x1b[35m', // magenta
		success: '\x1b[32m', // green
	};

	return oldLogError(
		colors.error +
			data
				.map((item) => {
					switch (typeof item) {
						case 'string':
						case 'number':
							return item;

						default:
							return JSON.stringify(item);
					}
				})
				.join(' ') +
			colors.reset
	);
};
console.error = logError;

/**
 * Get page filename
 */
function getPageForFile(file: string): string | null {
	if (file.slice(-3) !== '.md') {
		return null;
	}
	return file.slice(0, file.length - 3) + '.html';
}

/**
 * Build stuff
 */
export function build() {
	console.log('Build mode:', rawReplacements.mode);

	const files = list(paths.pages, {
		allowedExtensions: ['md'],
	});

	// Error status
	let hasInvalidLinks = false;
	let hasInvalidFiles = false;

	// Check for missing files
	Object.keys(navigationURLs).forEach((url) => {
		const item = navigationURLs[url];
		const filename = urlToFile(item.url);
		if (files.indexOf(filename) === -1) {
			if (item.wip) {
				console.error('Page is not complete:', filename);
			} else if (!item.unclickable) {
				console.error(
					'Missing page (mark it as "wip" in navigation.yml to ignore this error):',
					filename
				);
				hasInvalidFiles = true;
			}
		}
	});

	// Check for index
	if (files.indexOf('/' + indexFile) === -1) {
		console.error('Missing page:', indexFile);
		hasInvalidFiles = true;
	}

	// List of standalone files
	const standaloneFiles: string[] = [];

	// List of standalone files that must exist after all files have been parsed
	// Key is file, value is file that links to it
	const testStandaloneFiles: Record<string, string> = {};

	// Parse search file
	files.forEach((file) => {
		const page = getPageForFile(file);
		if (page === null || page.slice(0, 1) !== '/') {
			throw new Error(`Invalid file: ${file}`);
		}

		// Parse
		const result = parsePage(file);

		// Check if file is standalone
		if (result.metadata.standalone) {
			standaloneFiles.push(file);
			delete testStandaloneFiles[file];
		}

		// Validate links
		result.urls.forEach((url) => {
			const target = urlToFile(url);
			if (files.indexOf(target) === -1) {
				hasInvalidLinks = true;
				console.error('Invalid link:', url, 'in', file);
			} else {
				const navigationListItem = navigationURLs[url];
				if (navigationListItem === void 0) {
					// Check for standalone file
					if (standaloneFiles.indexOf(target) === -1) {
						testStandaloneFiles[target] = file;
					}
				}
			}
		});

		// Check if file is present in navigation
		const url = fileToURL(file);
		const navigationListItem = navigationURLs[url];
		if (navigationListItem === void 0) {
			if (
				// Index should not be in navigation
				file !== '/' + indexFile &&
				// Standalone files and redirects should not be in navigation
				!result.metadata.standalone &&
				!result.metadata.redirect &&
				// Ignore WIP files
				!result.metadata.wip
			) {
				console.error(
					'Page is missing in navigation (mark it as "standalone" or "wip" in header to ignore this error):',
					file
				);
				hasInvalidFiles = true;
			}
		} else {
			if (file === '/' + indexFile) {
				throw new Error(
					'Index file is present in navigation. It should not be there.'
				);
			}

			// WIP mismatch
			if (!!result.metadata.wip !== navigationListItem.wip) {
				console.error(
					'WIP page is in navigation (mark it as "wip" in navigation or remove "wip" from header to fix this error):',
					file
				);
				hasInvalidFiles = true;
			}

			// Standalone files and redirects should not be in navigation
			if (result.metadata.standalone || result.metadata.redirect) {
				console.error(
					'Standlone pages and redirects should not be in navigation:',
					file
				);
				hasInvalidFiles = true;
			}

			// Navigation can be present only in standalone files
			if (
				result.metadata.navigation !== void 0 &&
				!result.metadata.standalone
			) {
				console.error(
					'Only standalone files can have selected navigation item:',
					file
				);
				hasInvalidFiles = true;
			}
		}

		// Get navigation reference
		let nav: NavigationItem | undefined;
		if (navigationListItem) {
			nav = navigationURLs[navigationListItem.url];
		} else if (result.metadata.navigation !== void 0) {
			// Get reference URL
			const absoluteTargetFile = relativeToAbsolute(
				result.filename,
				result.metadata.navigation,
				false
			);
			const absoluteTargetURL = fileToURL(absoluteTargetFile);
			if (navigationURLs[absoluteTargetURL] === void 0) {
				throw new Error(`Invalid navigation value in file "${file}"`);
			}
			nav = navigationURLs[absoluteTargetURL];
		}

		// Store file
		write(paths.html + page, buildHTML(result, nav));
		createLegacyRedirect(page, result.metadata.redirect);
	});

	// Test for missing standalone files
	Object.keys(testStandaloneFiles).forEach((target) => {
		if (standaloneFiles.indexOf(target) !== -1) {
			return;
		}
		const source = testStandaloneFiles[target];
		hasInvalidLinks = true;
		console.error(
			'Linked document is not in navigation and not standalone:',
			fileToURL(target),
			'linked from:',
			fileToURL(source)
		);
	});

	// Find all files that no longer exist and remove them
	const builtFiles = list(paths.html, {
		allowedExtensions: ['html'],
	});
	builtFiles.forEach((file) => {
		const source = file.slice(0, file.length - 4) + 'md';
		if (files.indexOf(source) === -1 && legacyFiles.indexOf(file) === -1) {
			console.log(`Removed unused old file: ${file}`);
			try {
				fs.unlinkSync(paths.html + file);
			} catch (err) {}
		}
	});

	// Check mode
	if (rawReplacements.mode !== 'development') {
		// Exit with error if there are errors
		if (hasInvalidLinks || hasInvalidFiles) {
			process.exit(1);
		}
	}
}
