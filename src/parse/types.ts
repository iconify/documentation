import { MetaData, SourceMetaData } from '../meta-data';

/**
 * Parse result
 */
export interface ParseResult {
	filename: string;
	metadata: MetaData;
	text: string;
	html: string;
	urls: string[];
	assets: string[];
	ids: string[];
}

/**
 * Read file result
 */
export interface ReadResult {
	filename: string;
	metadata: SourceMetaData;
	text: string;
}

/**
 * Context for MD modules
 */
export interface MDContext {
	relativeFile: string;
	filename: string;
	urls: string[];
	assets: string[];
	ids: string[];
	replacements: Record<string, string>;
}
