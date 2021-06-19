import { indexFile } from './navigation/helpers';

/**
 * Sections
 *
 * Also see: _themes.scss
 */
export type Theme =
	| 'develop'
	| 'design'
	// | 'integration'
	| 'publish'
	| 'code'
	| 'tips'
	| 'legacy';

/**
 * Get default theme for file
 */
export function defaultTheme(file: string): Theme | null {
	if (file.slice(0, 1) !== '/') {
		throw new Error(`defaultTheme: expected absolute name, got: ${file}`);
	}
	if (file === '/' + indexFile) {
		// Index page
		return null;
	}

	const parts = file.split('/');
	parts.shift(); // Empty

	const dir = parts.shift();
	if (!parts.length) {
		// Root file
		return null;
	}

	const dir2 = parts.shift();
	switch (dir) {
		case 'develop':
		case 'sources':
		case 'implementations':
		case 'icon-components':
			if (dir2 === 'iconify1') {
				return 'legacy';
			}
			return 'develop';

		case 'design':
			return 'design';

		case 'integrate':
		case 'icon-finder':
			return 'develop';
		// return 'integration';

		case 'publish':
			return 'publish';

		case 'tools':
		case 'code':
		case 'types':
		case 'tests':
			return 'code';

		case 'tips':
			return 'tips';

		default:
			throw new Error(`No theme for directory "${dir}"`);
	}
}
