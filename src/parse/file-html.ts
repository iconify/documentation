import cheerio from 'cheerio';
import { readFileSync } from 'fs';
import { ParseResult } from './types';
import { parseHTMLLinks } from './html/links';
import { parseHTMLImages } from './html/images';

/**
 * Parse HTML file
 */
export function parseHTMLFile(
	dir: string,
	filename: string,
	relativeFile: string
): ParseResult {
	let content = readFileSync(dir + filename, 'utf8').trim();
	const result: ParseResult = {
		filename: filename,
		metadata: {},
		text: content,
		html: content,
		urls: [],
		assets: [],
		ids: [],
	};

	// Parse HTML
	const $html = cheerio.load(content, {
		lowerCaseAttributeNames: false,
		_useHtmlParser2: true,
	});

	// Find links and images
	parseHTMLLinks($html, result, relativeFile);
	parseHTMLImages($html, result, relativeFile);

	// Convert back to HTML, replacing Cheerio bugs
	const html = $html
		.html()!
		.replace('<html><head></head><body>', '')
		.replace('</body></html>', '');

	result.html = html;
	return result;
}
