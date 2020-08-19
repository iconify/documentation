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
	currentPage: ParseResult,
	navigationRef: NavigationItem
): PrevNextLinks {
	const links: PrevNextLinks = {};

	// Check child node for next link
	if (navigationRef.children) {
		for (let i = 0; i < navigationRef.children.length; i++) {
			const item = navigationRef.children[i];
			if (!item.hidden) {
				links.next = item;
				break;
			}
		}
	}

	// Check sections
	if (!navigationRef.parent) {
		// Set prev link to document
		links.prev = {
			title: 'Documentation',
			url: '/',
			wip: false,
			hidden: false,
			unclickable: false,
			theme: navigationRef.theme,
			level: 0,
			styles: [],
			children: [],
		};

		/*
		// Use next and previous sections with rotation
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
		*/

		return links;
	}

	// Not a root item, use parent to find prev/next link
	const parent = navigationRef.parent;

	// Check same level
	if ((!links.prev || !links.next) && parent.children.length > 1) {
		parent.children.forEach((child, index, list) => {
			if (child === navigationRef) {
				// Found item: check prev/next
				if (!links.prev) {
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
				}

				if (!links.next) {
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
			}
		});
	}

	// Use parent for previous link
	if (!links.prev) {
		links.prev = parent;
	}

	// Use parent's next child for next link
	let nextParent = parent;
	while (!links.next && nextParent.parent) {
		const lastParent = nextParent;

		nextParent = nextParent.parent;
		nextParent.children.forEach((child, index, list) => {
			if (child === lastParent) {
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

	// Use next section for next link
	if (!links.next && !nextParent.parent) {
		navigationTree.forEach((child, index, list) => {
			if (child === nextParent) {
				let nextIndex = index + 1;
				while (true) {
					if (list[nextIndex] === void 0) {
						nextIndex = 0;
					}
					if (nextIndex === index) {
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
