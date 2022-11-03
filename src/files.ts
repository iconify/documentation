import fs from 'fs';
import { dirname } from 'path';
import { cmd } from './cmd';

/**
 * Root path
 */
const rootPath = dirname(__dirname);

/**
 * Various paths
 */
export const paths = {
	// Root
	root: rootPath,

	// Documents
	pages: rootPath + '/documents/pages',
	partials: rootPath + '/documents/partials',

	// Code
	rawCode: rootPath + '/documents/code',
	cssCode: rootPath + '/assets/style/samples',

	// Wrapper, stylesheet and assets
	sourceAssets: rootPath + '/assets',

	// Target
	html: rootPath + '/docs',
};

/**
 * Check if file exists
 */
export const exists = (filename: string): boolean => {
	let stats;
	try {
		stats = fs.statSync(filename);
	} catch (e) {
		return false;
	}

	return true;
};

/**
 * Create directory recursively
 */
export const mkdir = (path: string | string[]): void => {
	let dirs = typeof path === 'string' ? path.split('/') : path;

	if (dirs.length) {
		let dir = '';
		dirs.forEach((part) => {
			dir += part;
			if (dir.length) {
				try {
					fs.mkdirSync(dir, 0o755);
				} catch (err) {}
			}
			dir += '/';
		});
	}
};

/**
 * Delete file
 */
export const unlink = (filename: string): boolean => {
	try {
		fs.unlinkSync(filename);
	} catch (err) {
		return false;
	}
	return true;
};

/**
 * Options
 */
export interface ListOptions {
	allowedExtensions?: string[];
	allowHidden?: boolean;
}

/**
 * Get list of files in directory
 *
 * Results start with '/'
 */
export const list = (dir: string, options: ListOptions = {}): string[] => {
	let results: string[] = [];

	function rec(extra: string): void {
		let files: string[];
		try {
			files = fs.readdirSync(dir + extra);
		} catch (err) {
			return;
		}

		files.forEach((file) => {
			if (options.allowHidden === false && file.slice(0, 1) === '.') {
				// Ignore hidden files / directories
				return;
			}

			const filename = extra + '/' + file;
			let stats;

			try {
				stats = fs.lstatSync(dir + filename);
			} catch (err) {
				return;
			}

			if (stats.isDirectory()) {
				if (file === '.git') {
					return;
				}
				rec(filename);
				return;
			}

			if (stats.isFile()) {
				if (options.allowedExtensions && options.allowedExtensions.length) {
					// Check if extension is allowed
					const ext = file.split('.').pop()!.toLowerCase();
					if (options.allowedExtensions.indexOf(ext) === -1) {
						return;
					}
				}
				results.push(filename);
			}
		});
	}
	rec('');

	return results;
};

/**
 * Remove files in directory
 */
type CleanupErrorType =
	| /* failed to read directory */ 'readdir'
	| /* failed to remove directory */ 'dir'
	| /* failed to remove file */ 'file'
	| /* uknown file type */ 'unknown';
interface CleanupError {
	error: unknown;
	filename: string;
	type: CleanupErrorType;
}

export const cleanup = (
	dir: string,
	includeDir = false
): number | CleanupError[] => {
	let counter = 0,
		errors: CleanupError[] = [];

	function rec(extra: string): boolean {
		let ignored = false,
			files;

		try {
			files = fs.readdirSync(dir + extra);
		} catch (err) {
			errors.push({
				error: err,
				filename: dir + extra,
				type: 'readdir',
			});
			return false;
		}

		files.forEach((file) => {
			let filename = dir + extra + '/' + file,
				stats = fs.lstatSync(filename);

			if (stats.isDirectory()) {
				if (rec(extra + '/' + file)) {
					// true returned - directory has ignored files
					ignored = true;
					return;
				}

				// Try to remove directory
				try {
					fs.rmdirSync(filename);
				} catch (err) {
					errors.push({
						error: err,
						filename: filename,
						type: 'dir',
					});
					ignored = true;
				}
				return;
			}

			if (stats.isFile() || stats.isSymbolicLink()) {
				// Try to remove file
				try {
					fs.unlinkSync(filename);
					counter++;
				} catch (err) {
					errors.push({
						error: err,
						filename: filename,
						type: 'file',
					});
					ignored = true;
				}
				return;
			}

			errors.push({
				error: null,
				filename: filename,
				type: 'unknown',
			});
		});

		return ignored;
	}

	if (!rec('') && includeDir) {
		try {
			fs.rmdirSync(dir);
			counter++;
		} catch (err) {
			errors.push({
				error: err,
				filename: dir,
				type: 'dir',
			});
		}
	}

	return errors.length ? errors : counter;
};

/**
 * Write content to file
 */
export const write = (file: string, content: string): void => {
	// Log
	const cleanFile = file.slice(paths.root.length + 1);
	if (!cmd.quiet) {
		console.log(`Writing ${cleanFile} (${content.length} bytes)`);
	}

	// Create directories
	const parts = file.split('/');
	parts.pop();
	mkdir(parts);

	// Write file
	fs.writeFileSync(file, content, 'utf8');
};
