import { rawReplacements } from '../../replacements';

/**
 * Change links in headings
 */
export function changeHeadingLinks($html: cheerio.Root) {
	// Replace back links
	const icon = rawReplacements.icons.hash;
	$html('a.link-back').each((index, link) => {
		const $link = $html(link);
		$link.html('<iconify-icon icon="' + icon + '"></iconify-icon>');
		$link.attr('title', 'Link to this section');
	});
}
