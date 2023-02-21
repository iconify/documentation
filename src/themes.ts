import { indexFile } from './navigation/helpers';

/**
 * Sections
 *
 * Also see: _themes.scss
 */
export type Theme =
	| 'develop'
	| 'design'
	| 'code'
	| 'icons'
	| 'api'
	| 'legacy'
	| 'articles';

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
		// Using icons
		case 'usage':
		case 'develop': // unused
		case 'implementations':
		case 'iconify-icon':
		case 'icon-components':
		case 'icon-finder': // unused
		case 'integrate': // unused
		case 'design':
			if (dir2 === 'iconify1') {
				return 'legacy';
			}
			return 'develop';

		// Plugins
		// case 'design':
		// 	return 'design';

		// Icons
		case 'icon-sets':
		case 'icons':
		case 'sources':
			return 'icons';

		// API
		case 'api':
			return 'api';

		// Libraries
		case 'tools':
			if (dir2 === 'node' || dir2 === 'json') {
				return 'legacy';
			}
		case 'code': // unused
		case 'types':
			return 'code';

		// Articles
		case 'articles':
			return 'articles';

		default:
			throw new Error(`No theme for directory "${dir}"`);
	}
}
