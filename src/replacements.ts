import { readFileSync } from 'fs';
import { argv } from 'process';
import { paths } from './files';
import { replaceAll } from './str';
import { TextReplacement } from './meta-data';

const replacements: Record<string, string> = {};

// Read and parse replacements
export const rawReplacements = JSON.parse(
	readFileSync(paths.root + '/replacements.json', 'utf8')
);
if (typeof rawReplacements !== 'object' || !rawReplacements) {
	throw new Error('Invalid replacements');
}

// Try extra config
let extraConfig = '';
argv.slice(2).forEach((arg) => {
	if (extraConfig === '' && arg.slice(0, 2) === '--') {
		extraConfig = arg.slice(2);
		if (extraConfig.match(/^[a-z0-9]+$/)) {
			return;
		}
	}

	throw new Error(`Invalid parameter: ${arg}`);
});

if (extraConfig !== '') {
	const extraReplacementsFile = 'replacements.' + extraConfig + '.json';
	console.log('Loading custom replacements from', extraReplacementsFile);
	const rawReplacements2 = JSON.parse(
		readFileSync(paths.root + '/' + extraReplacementsFile, 'utf8')
	);
	if (typeof rawReplacements2 !== 'object' || !rawReplacements2) {
		throw new Error('Invalid custom replacements');
	}

	mergeReplacements(rawReplacements, rawReplacements2, '');
}

// Merge custom replacements
function mergeReplacements(
	item1: Record<string, unknown>,
	item2: Record<string, unknown>,
	prefix: string
) {
	Object.keys(item2).forEach((key) => {
		if (typeof item1[key] !== typeof item2[key]) {
			throw new Error(`Invalid replacement "${prefix + key}" in custom file.`);
		}
		if (typeof item2[key] === 'object') {
			mergeReplacements(
				item1[key] as Record<string, unknown>,
				item2[key] as Record<string, unknown>,
				prefix + key + ':'
			);
		} else {
			item1[key] = item2[key];
		}
	});
}

/**
 * Parse replacements
 */
function addMetaData(item: Record<string, unknown>, prefix: string): void {
	Object.keys(item).forEach((key) => {
		const value = item[key];
		const varname = prefix + key;

		switch (typeof value) {
			case 'object':
				if (value === null) {
					throw new Error(`Unexpected null in replacement ${varname}`);
				}
				addMetaData(value as Record<string, unknown>, varname + '.');
				break;

			case 'string':
				replacements['${' + varname + '}'] = value;
				break;

			default:
				throw new Error(
					`Unexpected replacement type ${typeof value} for ${varname}`
				);
		}
	});
}
addMetaData(rawReplacements, '');

/**
 * Replace all entries
 */
export function replaceText(text: string): string {
	return replaceAll(text, replacements);
}

/**
 * Convert replacement pairs to object
 */
export function replacementsToPairs(
	items: TextReplacement[],
	file: string
): Record<string, string> {
	// Convert metadata replacements
	const replacements: Record<string, string> = {};
	items.forEach((item) => {
		const search = item.code;
		// Replace variables in replacement
		const replace = replaceText(item.value);
		if (replace.indexOf('${') !== -1) {
			throw new Error(`Invalid replacement "${item.value}" in ${file}`);
		}
		if (search !== replace) {
			replacements[search] = replace;
		}
	});
	return replacements;
}
