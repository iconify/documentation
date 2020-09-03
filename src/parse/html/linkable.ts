import cheerio from 'cheerio';
import { MDContext } from '../types';
import { relativeToAbsolute, absoluteToRelative } from '../../urls';
import { fileToURL } from '../../navigation/helpers';

export interface LinkableConfig {
	selector: string;
	title: string; // '{item}' is replaced with item
}

export function checkLinkables(
	$html: CheerioStatic,
	context: MDContext,
	items: Record<string, string>,
	config: LinkableConfig
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

	function checkItem($child: Cheerio, content: string): boolean {
		const item = content.split('(').shift()!;
		if (items[item] !== void 0) {
			const target = buildLink(items[item]);
			$child.wrap(
				'<a href="' +
					target +
					'" title="' +
					config.title.replace('{item}', item) +
					'" />'
			);
			$child.addClass('hljs-linkable');
			return true;
		}
		return false;
	}

	$html(config.selector).each((index, child) => {
		const $child = cheerio(child);

		// Make sure item is not inside link
		if ($child.parents('a').length) {
			return;
		}

		checkItem($child, $child.text());
	});
}
