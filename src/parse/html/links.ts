import cheerio from 'cheerio';
import { ParseResult } from '../types';
import { relativeToAbsolute, absoluteToRelative } from '../../urls';
import { fileToURL } from '../../navigation/helpers';

export function parseHTMLLinks(
	$html: cheerio.Root,
	context: ParseResult,
	relativeFile: string
) {
	$html('a').each((index, node) => {
		const $node = cheerio(node);
		const href = $node.attr('href');
		if (href === void 0) {
			return;
		}

		// Remote link
		if (href.indexOf('//') !== -1) {
			$node.attr('target', '_blank');
			return;
		}

		// Check for local link
		const firstChar = href.slice(0, 1);
		switch (firstChar) {
			case '#':
				// Local hash
				return;

			case '.':
			case '/':
				break;

			default:
				throw new Error(
					`Invalid link "${href}" in partial ${context.filename}`
				);
		}

		// Local link
		// console.log('Link:', href, 'in', context.filename);

		const parts = href.split('#');
		let link = parts.shift()!;

		if (link.indexOf('?') !== -1 || link.slice(-3) !== '.md') {
			// Must end with '.md' and not have parameters
			throw new Error(`Invalid link "${href}" in partial ${context.filename}`);
		}

		// Get absolute URL and log it
		const absoluteFile = relativeToAbsolute(context.filename, link, true);
		const absoluteURL = fileToURL(absoluteFile);
		context.urls.push(absoluteURL);

		// Get URL relative to current page
		link = absoluteToRelative(relativeFile, absoluteURL);

		// Append hash stuff
		parts.unshift(link);
		const newLink = parts.join('#');

		// Replace link
		// console.log('Replaced with:', newLink);
		$node.attr('href', newLink);
	});
}
