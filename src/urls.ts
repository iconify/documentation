/**
 * Convert relative URL (or filename) to absolute
 */
export function relativeToAbsolute(
	currentURL: string,
	relativeURL: string,
	allowAbsolute = false
): string {
	if (relativeURL.slice(0, 1) === '/') {
		// Already absolute
		if (!allowAbsolute) {
			throw new Error(`Unexpected absolute URL: ${relativeURL}`);
		}
		return relativeURL;
	}

	// Check current URL
	if (currentURL.slice(0, 1) !== '/') {
		throw new Error(`Unexpected relative URL: ${currentURL}`);
	}

	// Split URLs
	const current = currentURL.split('/');
	const relative = relativeURL.split('/');

	// Remove last part from current URL
	const currentFilename = current.pop();

	// Apply all steps
	relative.forEach((item, index) => {
		switch (item) {
			case '.':
				// Do nothing
				return;

			case '..':
				// Remove last directory
				current.pop();
				return;

			case '':
				// Double '/' or URL ends with '/'
				if (index !== relative.length - 1) {
					throw new Error(`Invalid URL: ${relativeURL}`);
				}
				current.push(item);
				return;

			default:
				if (item.slice(0, 1) === '.') {
					// Do not allow hidden files
					throw new Error(`Invalid URL: ${relativeURL}`);
				}
				current.push(item);
		}
	});

	return current.join('/');
}

/**
 * Convert absolute URL (or filename) to relative
 */
export function absoluteToRelative(
	currentURL: string,
	absoluteURL: string
): string {
	// Check current URL
	if (currentURL.slice(0, 1) !== '/') {
		throw new Error(`Unexpected relative URL: ${currentURL}`);
	}

	// Split URLs
	const current = currentURL.split('/');
	const absolute = absoluteURL.split('/');

	// Remove last part from current URL
	const currentFilename = current.pop();

	// Remove common parts
	while (current.length > 0 && current[0] === absolute[0]) {
		current.shift();
		absolute.shift();
	}

	// Create new URL
	let newURL: string[] = [];

	// Move few levels up
	current.forEach((item) => {
		newURL.push('..');
	});
	if (!newURL.length) {
		newURL.push('.');
	}

	// Add absolute items
	newURL = newURL.concat(absolute);

	// Return
	return newURL.join('/');
}

/**
 * Asset URL
 */
export function assetURL(currentURL: string, assetURL: string): string {
	return absoluteToRelative(currentURL, '/assets' + assetURL);
}
