import { readFileSync } from 'fs';
import { paths, write } from './files';
import { replaceText } from './replacements';
import { replaceAll } from './str';
import { absoluteToRelative } from './urls';

// Redirects for implementations
const implementationsSource = '/implementations/';
const implementationsTarget = '/icon-components/';

/**
 * Legacy files list
 */
export const legacyFiles: string[] = [];

/**
 * Generate redirect
 */
let blankFile: string;
const title = 'Redirect';
function generateRedirect(filename: string, target: string): string {
	if (blankFile === void 0) {
		blankFile = readFileSync(`${paths.sourceAssets}/redirect.html`, 'utf8');
		blankFile = replaceText(blankFile);
	}

	const replacements: Record<string, string> = {
		'${root}': absoluteToRelative(filename, '/'),
		'${assets}': absoluteToRelative(filename, '/assets'),
		'${title}': title,
		'${content}': blankFile,
		'${redirect}': target,
	};

	return replaceAll(blankFile, replacements);
}

/**
 * Create redirect for old page
 */
export function createLegacyRedirect(
	currentFile: string,
	redirect?: string
): void {
	// Redirect /implementations/ to /icon-components/
	if (currentFile.indexOf(implementationsTarget) === 0) {
		// Create alias
		const legacyFile = currentFile.replace(
			implementationsTarget,
			implementationsSource
		);
		let relativePath = absoluteToRelative(legacyFile, currentFile);

		// Check for redirect
		if (redirect !== void 0) {
			if (redirect.indexOf('../') === 0) {
				// Relative path is the same: redirect to redirect
				relativePath = redirect;
			} else {
				throw new Error(
					`Cannot handle complex redirects for redirects yet. Update src/legacy-redirects.ts code. Attempted to redirect from "${currentFile}" to "${implementationsTarget}, which redirects to "${redirect}"`
				);
			}
		}

		const html = generateRedirect(legacyFile, relativePath);
		write(paths.html + legacyFile, html);
		legacyFiles.push(legacyFile);
	}
}
