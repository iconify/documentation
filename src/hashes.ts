import { paths, exists } from './files';
import { rawReplacements } from './replacements';
import { createHash } from 'crypto';
import { readFileSync, lstatSync } from 'fs';

/**
 * Simple hash function
 */
function hash(file: string, length = 4): string {
	if (!exists(file)) {
		if (rawReplacements.mode !== 'development') {
			throw new Error(`Cannot hash missing file: ${file}`);
		}
		return Math.floor(Date.now() / 10000) + '';
	}

	if (rawReplacements.mode === 'development') {
		// Use time as hash
		try {
			const stat = lstatSync(file);
			return Math.floor(stat.mtimeMs / 10000) + '';
		} catch (err) {}
	}

	// Simple md5 hash
	const hash = createHash('md5').update(readFileSync(file)).digest('hex');
	return hash.slice(0 - length);
}

/**
 * List of hashes
 */
export const hashes = {
	css: hash(paths.html + '/assets/style.css'),
	bundle: hash(paths.html + '/assets/bundle.js'),
};
