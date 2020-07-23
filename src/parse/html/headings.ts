import cheerio from 'cheerio';
import { rawReplacements } from '../../replacements';

/**
 * Change links in headings
 */
export function changeHeadingLinks($html: CheerioStatic) {
	const icon = rawReplacements.icons.hash;
	$html('a.link-back').each((index, link) => {
		const $link = cheerio(link);
		$link.html('<span class="iconify" data-icon="' + icon + '"></span>');
	});
}
