import cheerio from 'cheerio';

/**
 * Wrap custom code blocks
 */
export function wrapCustomCode($html: cheerio.Root): void {
	$html('code').each((index, node) => {
		const $node = cheerio(node);
		const wrap = $node.attr('data-wrap');
		if (wrap === void 0) {
			return;
		}

		$node.removeAttr('data-wrap');
		let $wrapper: cheerio.Cheerio;
		switch (wrap) {
			case 'block':
				// Wrap in block
				$wrapper = cheerio(
					'<div class="code-blocks"><div class="code-block"><div class="code-block-content code-block-content--without-title code-block-content--without-hint"></div></div></div>'
				);
				break;

			case 'inline':
				// Wrap in inline
				$wrapper = cheerio('<span class="inline-code" />');
				break;

			default:
				throw new Error(`Invalid data-wrap value: ${wrap}`);
		}

		$node.wrap($wrapper);
	});
}
