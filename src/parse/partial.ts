import { readFileSync } from 'fs';
import { ParseResult } from './types';
import { parseFile } from './file';
import { paths, exists } from '../files';
import { parseHTMLFile } from './file-html';

/**
 * Locate partial file
 */
function loacatePartial(dir: string, file: string, ext: string): string | null {
	if (exists(dir + file + ext)) {
		return file + ext;
	}

	// Add '_'
	const parts = file.split('/');
	const lastPart = parts.pop()!;
	if (lastPart.slice(0, 1) === '_') {
		return null;
	}

	parts.push('_' + lastPart);
	file = parts.join('/');
	if (exists(dir + file + ext)) {
		return file + ext;
	}

	// Not found
	return null;
}

/**
 * Parse partial file
 */
export function parsePartial(file: string, relativeFile: string): ParseResult {
	type LocateExtensions = 'md' | 'html';
	interface LocateResult {
		filename: string;
		dir: string;
		ext: LocateExtensions;
	}

	function locate(): LocateResult | null {
		// Check for .md partial
		let ext: LocateExtensions = 'md';
		let dir = paths.partials;
		let filename = loacatePartial(dir, file, '.' + ext);
		if (filename) {
			return {
				filename,
				dir,
				ext,
			};
		}

		// Check for .html partial
		ext = 'html';
		filename = loacatePartial(dir, file, '.' + ext);
		if (filename) {
			return {
				filename,
				dir,
				ext,
			};
		}

		return null;
	}

	// Included files should not start with '/' or '.'
	const firstChar = file.slice(0, 1);
	if (firstChar === '/' || firstChar === '.') {
		throw new Error(`Invalid partial file "${file}"`);
	}

	// Convert to absolute
	file = '/' + file;

	// Attempt to locate MarkDown partial
	let item = locate();

	// Failed
	if (!item) {
		throw new Error(`Unable to locate partial file "${file}"`);
	}

	let content: string;
	switch (item.ext) {
		case 'md':
			return parseFile(item.dir, item.filename, relativeFile);

		case 'html':
			return parseHTMLFile(item.dir, item.filename, relativeFile);
	}
}
