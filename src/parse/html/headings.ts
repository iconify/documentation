import cheerio from 'cheerio';
import { rawReplacements } from '../../replacements';

/**
 * Change links in headings
 */
export function changeHeadingLinks($html: CheerioStatic) {
	// Replace back links
	const icon = rawReplacements.icons.hash;
	$html('a.link-back').each((index, link) => {
		const $link = cheerio(link);
		$link.html('<span class="iconify" data-icon="' + icon + '"></span>');
		$link.attr('title', 'Link to this section');
	});
}
