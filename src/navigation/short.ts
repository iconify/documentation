import { NavigationItem, navigationTree } from './loader';
import { ParseResult } from '../parse/types';
import { absoluteToRelative } from '../urls';
import { rawReplacements } from '../replacements';

export interface PrevNextLinks {
	prev?: NavigationItem;
	next?: NavigationItem;
}

/**
 * Get previous and next items for page
 */
export function getPrevNextLinks(
	item: ParseResult,
	navigationRef: NavigationItem
): PrevNextLinks {
	const links: PrevNextLinks = {};

	// Check sections
	if (!navigationRef.parent) {
		if (navigationTree.length > 1) {
			navigationTree.forEach((navItem, index, list) => {
				if (navItem === navigationRef) {
					// Set previous / next items
					let prevIndex = index - 1;

					while (true) {
						if (prevIndex === index) {
							// loop
							break;
						}
						if (list[prevIndex] === void 0) {
							// previous = last
							prevIndex = navigationTree.length - 1;
							continue;
						}
						if (list[prevIndex].hidden) {
							// Item is hidden
							prevIndex--;
							continue;
						}
						links.prev = list[prevIndex];
						break;
					}

					let nextIndex = index + 1;
					while (true) {
						if (nextIndex === index) {
							// loop
							break;
						}
						if (list[nextIndex] === void 0) {
							// next = first
							nextIndex = 0;
							continue;
						}
						if (list[nextIndex].hidden) {
							// Item is hidden
							nextIndex++;
							continue;
						}
						links.next = list[nextIndex];
						break;
					}

					if (links.prev === links.next) {
						delete links.next;
						delete links.prev;
					}
				}
			});
		}

		return links;
	}

	// Not sections
	// Check same level
	const parent = navigationRef.parent;
	if (parent.children.length > 1) {
		parent.children.forEach((child, index, list) => {
			if (child === navigationRef) {
				// Found item: check prev/next
				let prevIndex = index - 1;
				while (true) {
					if (prevIndex < 0) {
						break;
					}
					if (list[prevIndex].hidden) {
						prevIndex--;
						continue;
					}
					links.prev = list[prevIndex];
					break;
				}

				let nextIndex = index + 1;
				while (true) {
					if (list[nextIndex] === void 0) {
						break;
					}
					if (list[nextIndex].hidden) {
						nextIndex++;
						continue;
					}
					links.next = list[nextIndex];
					break;
				}
			}
		});
	}

	// Use parent
	if (links.next && !links.prev) {
		links.prev = parent;
		return links;
	}

	// TODO: test other methods

	return links;
}

/**
 * Build HTML for prev/next links
 */
export function generateShortNavigation(
	currentURL: string,
	links: PrevNextLinks
): string {
	if (!links.prev && !links.next) {
		return '';
	}

	function addLink(item: NavigationItem, next: boolean): string {
		const url = absoluteToRelative(currentURL, item.url);
		const className =
			'docs-short-navigation-link docs-short-navigation-link--' +
			(next ? 'next' : 'prev');
		const icon = rawReplacements.icons[next ? 'chevron-right' : 'chevron-left'];

		return `<a href="${url}" class="${className}"><span class="iconify" data-icon="${icon}"></span> ${item.title}</a>\n`;
	}

	let html = '<div class="docs-short-navigation">\n';
	if (links.prev) {
		html += addLink(links.prev, false);
	}
	if (links.next) {
		html += addLink(links.next, true);
	}
	html += '</div>\n';

	return html;
}
