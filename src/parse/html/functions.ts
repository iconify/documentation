import cheerio from 'cheerio';
import { MDContext } from '../types';
import { relativeToAbsolute, absoluteToRelative } from '../../urls';
import { fileToURL } from '../../navigation/helpers';

export function linkFunctions(
	$html: CheerioStatic,
	context: MDContext,
	functions: Record<string, string>
): void {
	const targets: Record<string, string> = {};

	function buildLink(href: string): string {
		if (targets[href] !== void 0) {
			return targets[href];
		}

		// Split link to test extension and make relative link
		const parts = href.split('#');
		let link = parts.shift()!;
		if (link.indexOf('?') === -1 && link.slice(-3) === '.md') {
			const originalTarget = link;

			// Get absolute URL and log it
			const absoluteFile = relativeToAbsolute(context.filename, link);
			const absoluteURL = fileToURL(absoluteFile);
			context.urls.push(absoluteURL);

			// Get URL relative to current page
			link = absoluteToRelative(context.relativeFile, absoluteURL);

			// Append hash stuff
			parts.unshift(link);
			link = parts.join('#');

			// console.log(`Changed link ${href} to ${newLink}`);
		} else if (href.slice(0, 1) === '#') {
			// Local link
		} else {
			throw new Error(`Invalid link "${href}" in ${context.filename}`);
		}

		targets[href] = link;
		return link;
	}

	function checkFunction($child: Cheerio, content: string): boolean {
		const func = content.split('(').shift()!;
		if (functions[func] !== void 0) {
			const target = buildLink(functions[func]);
			$child.wrap(
				'<a href="' + target + '" title="' + func + '() documentation" />'
			);
			$child.addClass('hljs-linkable');
			return true;
		}
		return false;
	}

	$html('.hljs-function').each((index, child) => {
		const $child = cheerio(child);

		// Make sure function is not inside link
		if ($child.parents('a').length) {
			return;
		}

		checkFunction($child, $child.text());
	});
}
