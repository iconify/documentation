import yaml from 'yaml';
import { Theme } from './themes';

function assertNever(value: never) {}

/**
 * Replacement
 */
export interface TextReplacement {
	code: string;
	value: string;
}

/**
 * Parsed file metadata
 */
export interface MetaData {
	title?: string; // Page title
	hint?: string; // Hint for types
	wip?: boolean; // True if document is work in progress
	standalone?: boolean; // True if document is not present in navigation
	redirect?: string; // Redirection, full link
	navigation?: string; // File to use for navigation
	theme?: Theme; // Theme, string
	types?: Record<string, string>; // Types
}

/**
 * Source metadata
 */
export interface SourceMetaData extends MetaData {
	replacements: TextReplacement[]; // Replacements
}

/**
 * Default metadata
 */
const defaultMetaData: Required<SourceMetaData> = {
	title: '',
	hint: '',
	wip: false,
	standalone: false,
	replacements: [],
	redirect: '',
	navigation: '',
	theme: 'develop',
	types: {},
};

/**
 * Get MetaData from code
 */
export function getMetaData(code: object | string): SourceMetaData {
	const result: SourceMetaData = {
		replacements: [],
	};

	// Convert to object and validate it
	if (typeof code === 'string') {
		code = yaml.parse(code);
	}
	if (typeof code !== 'object' && !code) {
		return result;
	}

	// Check all keys
	const codeRecord = code as Record<string, unknown>;
	for (const key in defaultMetaData) {
		const attr = key as keyof SourceMetaData;
		const value = codeRecord[attr];
		if (value === void 0) {
			continue;
		}

		if (attr === 'theme') {
			// Validate theme
			const theme = value as Theme;
			switch (theme) {
				case 'develop':
				case 'design':
				case 'integration':
				case 'publish':
				case 'code':
				case 'tips':
				case 'legacy':
					result.theme = theme;
					break;

				default:
					assertNever(theme);
					throw new Error(`Invalid theme "${theme}"`);
			}
			continue;
		}

		if (typeof value !== typeof defaultMetaData[attr]) {
			throw new Error(`Invalid type for ${attr}`);
		}
		if (value === defaultMetaData[attr]) {
			// Default value
			continue;
		}

		switch (attr) {
			case 'replacements':
				// Copy array and validate entries
				if (!(value instanceof Array)) {
					throw new Error('Invalid code/value pairs');
				}
				value.forEach((item) => {
					const entry = item as TextReplacement;
					if (
						typeof entry !== 'object' ||
						typeof entry.code !== 'string' ||
						typeof entry.value !== 'string'
					) {
						throw new Error('Invalid code/value pair');
					}
					(result[attr] as TextReplacement[]).push(entry);
				});
				break;

			default:
				// Copy value
				((result as unknown) as Record<string, unknown>)[attr] = value;
		}
	}

	return result;
}