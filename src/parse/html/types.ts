import cheerio from 'cheerio';
import { MDContext } from '../types';
import { relativeToAbsolute, absoluteToRelative } from '../../urls';
import { fileToURL } from '../../navigation/helpers';

export function linkTypes(
	$html: cheerio.Root,
	context: MDContext,
	types: Record<string, string>
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

	function checkType($child: cheerio.Cheerio, type: string): boolean {
		if (types[type] !== void 0) {
			const target = buildLink(types[type]);
			$child.wrap(
				'<a href="' + target + '" title="' + type + ' documentation" />'
			);
			return true;
		}
		return false;
	}

	$html('.hljs-inline-type > span').each((index, child) => {
		const $child = cheerio(child);

		// Make sure type is not inside link
		if ($child.parents('a').length) {
			return;
		}

		checkType($child, $child.text());

		/*
		// Get type, remove array
		let type = $child.text().replace('[]', '').trim();
		if (checkType($child, type)) {
			return;
		}

		// Record<string, type>
		if (type.indexOf('Record<string,') === 0 && type.slice(-1) === '>') {
			checkType(
				$child,
				type.replace('Record<string,', '').replace('>', '').trim()
			);
		}
		*/
	});
}
