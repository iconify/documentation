import cheerio from 'cheerio';
import { ParseResult } from '../types';
import { relativeToAbsolute, absoluteToRelative, assetURL } from '../../urls';
import { fileToURL } from '../../navigation/helpers';

export function parseHTMLImages(
	$html: CheerioStatic,
	context: ParseResult,
	relativeFile: string
) {
	$html('img').each((index, node) => {
		const $node = cheerio(node);
		const href = $node.attr('src');
		if (href === void 0) {
			return;
		}

		// Remote URL
		if (href.indexOf('//') !== -1) {
			return;
		}

		// Check for relative/absolute URL
		const firstChar = href.slice(0, 1);
		switch (firstChar) {
			case '.':
			case '/':
				throw new Error(
					`Invalid image "${href}" in partial ${context.filename}`
				);
		}

		// Change to absolute URL
		let link = '/images/' + href;
		if (link.indexOf('?') !== -1) {
			throw new Error(`Invalid image "${href}" in partial ${context.filename}`);
		}

		const ext = link.split('.').pop();
		switch (ext) {
			case 'png':
				break;

			default:
				throw new Error(
					`Invalid image "${href}" in partial ${context.filename}`
				);
		}

		// Get absolute URL and log it
		context.assets.push(link);

		// Get URL relative to current page
		link = assetURL(relativeFile, link);

		// Replace link
		$node.attr('src', link);
	});
}
