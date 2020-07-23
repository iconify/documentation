import { ParseResult } from './parse/types';
import { parseFile } from './parse/file';
import { paths } from './files';

/**
 * Parse page
 */
export function parsePage(file: string): ParseResult {
	return parseFile(paths.pages, file);
}
