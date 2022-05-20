import { PrepareNavigationResult, ExtendedNavigationItem } from './prepare';
import { absoluteToRelative } from '../urls';

export function renderNavigation(data: PrepareNavigationResult): string {
	const sectionClass = 'docs-navigation-section';
	const linkClass = 'docs-navigation-link';
	const expandedIcon = 'line-md:chevron-small-down';
	// const expandIcon = 'line-md:chevron-small-right';

	const navigation = data.navigation;
	const selectedItem = data.selected;
	const currentURL = data.url;

	function getURL(target: string): string {
		return absoluteToRelative(currentURL, target);
		// Old code to keep this function self contained, making it possible to easily put in bundle for website.
		/*
		let newParts: string[] = [];

		// Current URL
		const currentParts = currentURL.split('/');
		currentParts.pop(); // Remove filename, if it has any

		// Target URL
		const urlParts = target.split('/');

		// Remove common directories
		while (urlParts.length > 0 && urlParts[0] === currentParts[0]) {
			urlParts.shift();
			currentParts.shift();
		}

		// Move few levels up
		currentParts.forEach((part) => {
			newParts.push('..');
		});
		if (!newParts.length) {
			newParts.push('.');
		}

		// Add new parts
		newParts = newParts.concat(urlParts);

		return newParts.join('/');
		*/
	}

	/**
	 * Render link
	 */
	function renderLink(item: ExtendedNavigationItem): string {
		let className = linkClass + ' ' + linkClass + '--' + item.level;
		if (item === selectedItem && !item.unclickable) {
			className += ' ' + linkClass + '--selected';
		}
		if (item.selectedWithin) {
			className += ' ' + linkClass + '--active';
		}

		// Styles
		item.styles.forEach((style) => {
			className += ' ' + linkClass + '--' + style;
		});

		// Render children
		let children = '';
		if (item.children.length) {
			// className += ' ' + linkClass + '--toggle';
			if (item.expanded) {
				className += ' ' + linkClass + '--toggle';
				// className += ' ' + linkClass + '--expanded';
				item.children.forEach((child) => {
					children += renderItem(child);
				});
			}
		}

		// Add icon
		let icon = '';
		if (item.children.length && item.expanded) {
			// icon = item.expanded ? expandedIcon : expandIcon;
			icon = '<iconify-icon icon="' + expandedIcon + '"></iconify-icon>';
		}

		// Generate HTML
		let html = '\t<li class="' + className + '">';
		if (item.unclickable) {
			html += item.title + ':';
		} else {
			html +=
				'<a href="' + getURL(item.url) + '">' + item.title + icon + '</a>';
		}
		html += '</li>\n';

		return html + children;
	}

	/**
	 * Render section
	 */
	function renderSection(item: ExtendedNavigationItem): string {
		let className = sectionClass;
		if (item.theme) {
			className += ' ' + sectionClass + '--' + item.theme;
		}
		let html = '<ul class="' + className + '">\n';
		html += renderLink(item);
		html += '</ul>\n';
		return html;
	}

	/**
	 * Render item
	 */
	function renderItem(item: ExtendedNavigationItem): string {
		if (item.level === 0) {
			return renderSection(item);
		}

		let html = renderLink(item);

		return html;
	}

	// Render sections
	let html = '';

	navigation.forEach((item) => {
		if (item.showing) {
			html += renderItem(item);
		}
	});

	return html;
}
