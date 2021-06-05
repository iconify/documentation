import cheerio from 'cheerio';

/**
 * Wrap content into sections
 */
export function wrapSections($html: cheerio.Root): void {
	// Wrap all headings
	for (let level = 6; level > 1; level--) {
		$html('h' + level).each((index, node: cheerio.TagElement) => {
			const $node = $html(node);
			const $wrapper = cheerio(
				'<section class="content-section content-section--' + level + '" />'
			);

			node.tagName = 'H1';
			$node.addClass('heading--' + level);
			$node.wrap($wrapper);

			// Find next nodes
			let stop = false;
			$wrapper.nextAll().each((index, next: cheerio.TagElement) => {
				if (stop) {
					return;
				}

				// Check tag
				const tag = next.tagName.toLowerCase();
				if (tag.slice(0, 1) === 'h') {
					const nextLevel = parseInt(tag.slice(1));
					if (nextLevel && nextLevel <= level) {
						// Found heading that should be outside of this section
						stop = true;
						return;
					}
				}

				if (tag === 'section' && !index) {
					// Heading followed by another heading
					$node.addClass('heading--empty');
				}

				// Wrap
				$html(next).appendTo($wrapper);
			});
		});
	}
}
