import { MinifiedNavigationItem } from './minify';
import { Theme } from '../themes';
import { NavigationItemStyles } from './loader';

/**
 * Navigation item
 */
export interface ExtendedNavigationItem {
	title: string;
	url: string;
	hidden: boolean;
	theme: Theme;
	level: number; // Depth, 0 for sections
	showing: boolean; // Item is shown in navigation
	expanded: boolean; // Item is expanded: has visible child items
	selectedWithin: boolean; // Item or child item is selected
	styles: NavigationItemStyles[]; // Extra styles
	unclickable: boolean;
	parent?: ExtendedNavigationItem;
	children: ExtendedNavigationItem[];
}

/**
 * Result of prepared navigation
 */
export interface PrepareNavigationResult {
	navigation: ExtendedNavigationItem[]; // Navigation, normalized
	selected: ExtendedNavigationItem | null; // Selected item
	url: string; // Current URL
}

/**
 * This function must be self contained to allow easy export
 */
export function prepareNavigation(
	minified: MinifiedNavigationItem[],
	currentURL: string
): PrepareNavigationResult {
	let currentItem: ExtendedNavigationItem | null = null;

	/**
	 * Expand tree
	 */
	function expand(
		item: MinifiedNavigationItem,
		level: number,
		parent?: ExtendedNavigationItem
	): ExtendedNavigationItem {
		// Expand item
		const newItem: ExtendedNavigationItem = {
			title: item.title,
			url: item.url,
			hidden: !!item.hidden,
			theme: item.theme === void 0 ? parent!.theme : item.theme,
			level: level,
			showing: level < 2,
			expanded: false,
			selectedWithin: false,
			styles: item.styles ? item.styles : [],
			unclickable: !!item.unclickable,
			children: [],
		};

		if (parent) {
			newItem.parent = parent;
		}

		// Check if it is selected item
		if (item.url === currentURL) {
			currentItem = newItem;
		}

		// Child items
		if (item.children) {
			item.children.forEach((child) => {
				newItem.children.push(expand(child, level + 1, newItem));
			});
		}

		// Expand item if child items are visible
		if (newItem.children.length && level < 1) {
			newItem.expanded = true;
		}

		return newItem;
	}

	/**
	 * Remove hidden items
	 */
	function filterHiddenItems(
		items: ExtendedNavigationItem[]
	): ExtendedNavigationItem[] {
		return items.filter((item) => {
			if (item.hidden) {
				return false;
			}
			if (item.children) {
				item.children = filterHiddenItems(item.children);
			}
			return true;
		});
	}

	// Expand navigation
	let navigation: ExtendedNavigationItem[] = [];
	minified.forEach((item) => {
		navigation.push(expand(item, 0));
	});

	// Mark item and its parent items as visible
	if (currentItem !== null) {
		let item = currentItem as ExtendedNavigationItem;
		item.hidden = false;
		item.showing = true;
		item.selectedWithin = true;

		// Show siblings
		if (item.parent) {
			item.parent.children.forEach((child) => {
				child.showing = true;
			});
		}

		// Show child items, expand current item
		if (item.children.length) {
			item.expanded = true;
			item.children.forEach((child) => {
				child.showing = true;
			});
		}

		// Show and expand parent items
		while (item.parent) {
			item = item.parent;
			item.hidden = false;
			item.showing = true;
			item.expanded = true;
			item.selectedWithin = true;
		}
	}

	// Remove hidden items
	navigation = filterHiddenItems(navigation);

	// Return
	return {
		navigation: navigation,
		selected: currentItem,
		url: currentURL,
	};
}
