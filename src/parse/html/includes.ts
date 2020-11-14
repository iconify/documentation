import cheerio from 'cheerio';
import { MDContext } from '../types';
import { parsePartial } from '../partial';

const attr = 'data-partial';

/**
 * Include partials
 */
export function importHTMLPartials(
	$html: cheerio.Root,
	context: MDContext
): void {
	$html('[' + attr + ']').each((index, node) => {
		const $node = cheerio(node);
		const file = $node.attr(attr);
		if (file === void 0) {
			return;
		}

		$node.removeAttr(attr);

		// Parse partial
		const result = parsePartial(file, context.relativeFile);

		// Make sure there are no conflicting ids
		result.ids.forEach((id) => {
			if (context.ids.indexOf(id) !== -1) {
				throw new Error(
					`Duplicate heading id "${id}" in ${context.filename} and one of included files.`
				);
			}
		});

		// Copy links and ids from included file to context
		context.urls = context.urls.concat(result.urls);
		context.assets = context.urls.concat(result.assets);
		context.ids = context.ids.concat(result.ids);

		// Set HTML content
		$node.html(result.html);
	});
}
