/**
 * Index file
 */
export const indexFile = 'index.md';

/**
 * Convert URL to filename
 */
export function urlToFile(target: string): string {
	// Check for '/' at start
	if (target.slice(0, 1) !== '/') {
		throw new Error(
			`urlToFile: expected absolute URL, got relative: ${target}`
		);
	}

	if (target.slice(-1) === '/') {
		return target + indexFile;
	}
	return target.slice(0, target.length - 4) + 'md';
}

// Index with '/'
const index = '/' + indexFile;

/**
 * Convert filename to URL
 */
export function fileToURL(file: string): string {
	// Check for '/' at start
	if (file.slice(0, 1) !== '/') {
		throw new Error(`fileToURL: expected absolute filename, got: ${file}`);
	}

	// Get extension
	if (file.slice(0 - index.length) === index) {
		// Remove index.md
		return file.slice(0, file.length - index.length + 1);
	}
	if (file.slice(-3) !== '.md') {
		throw new Error(`fileToURL: expected .md file, got: ${file}`);
	}
	return file.slice(0, file.length - 2) + 'html';
}
