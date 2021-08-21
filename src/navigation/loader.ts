import yaml from 'yaml';
import { readFileSync } from 'fs';
import { paths } from '../files';
import { Theme, defaultTheme } from '../themes';
import { urlToFile } from './helpers';
import { relativeToAbsolute } from '../urls';

// Maximum nesting level
const maxLevel = 5;

/**
 * Yaml item format
 */
export interface YamlNavigationItemValue {
	title: string; // Item title
	headline?: string; // Headline for page
	wip?: boolean; // True if work in progress
	hidden?: boolean; // True if item is hidden
	separator?: boolean; // True if line should be placed above navigation item
	clickable?: boolean; // False if navigation item is sub-section title, should be with separator = true
	children?: Record<string, string | YamlNavigationItemValue>; // Value is item title (for items that do not contain child items and do not need additional properties) or object
}

// Key is url, value is section
export type YamlNavigation = Record<string, string | YamlNavigationItemValue>;

// Default values
export const defaultYamlNavigationItem: Required<YamlNavigationItemValue> = {
	title: '',
	headline: '',
	wip: false,
	hidden: false,
	separator: false,
	clickable: true,
	children: {},
};

/**
 * List of extra styles for navigation item
 */
export type NavigationItemStyles = 'separator' | 'section';

/**
 * Navigation item
 */
export interface NavigationItem {
	title: string;
	url: string;
	wip: boolean;
	hidden: boolean;
	theme: Theme;
	level: number;
	headline?: string;
	styles: NavigationItemStyles[];
	unclickable: boolean;
	children: NavigationItem[];
	parent?: NavigationItem;
}

// Read and parse data
export const rawData = yaml.parse(
	readFileSync(paths.root + '/navigation.yml', 'utf8')
) as YamlNavigation;
if (typeof rawData !== 'object' || !rawData) {
	throw new Error('Invalid navigation');
}

/**
 * Parse string value
 */
function parseString(
	title: string,
	url: string,
	level: number,
	parent: NavigationItem
): NavigationItem {
	let wip = false;

	// Check for work in progress
	if (title.slice(0, 1) === '?') {
		wip = true;
		title = title.slice(1).trim();
	}

	const filename = urlToFile(url);

	const theme = defaultTheme(filename);
	if (!theme) {
		throw new Error(`'Missing theme for: ${filename}`);
	}

	return {
		title,
		url,
		wip,
		hidden: false,
		theme,
		level,
		styles: [],
		unclickable: false,
		children: [],
		headline: parent.headline,
		parent,
	};
}

/**
 * Parse object value
 */
function parseObject(
	item: YamlNavigationItemValue,
	url: string,
	level: number,
	parent?: NavigationItem
): NavigationItem {
	// Validate item
	for (let key in item) {
		const attr = key as keyof YamlNavigationItemValue;
		if (typeof defaultYamlNavigationItem[attr] !== typeof item[attr]) {
			throw new Error(`Invalid attribute "${attr}" in navigation item`);
		}
	}

	// Check for required items
	if (typeof item.title !== 'string') {
		throw new Error('Missing title for navigation item');
	}

	const filename = urlToFile(url);

	const theme = defaultTheme(filename);
	if (!theme) {
		throw new Error(`Missing theme for: ${filename}`);
	}

	// Styles
	const styles: NavigationItemStyles[] = [];
	if (item.separator) {
		styles.push('separator');
	}

	let unclickable = false;
	if (item.clickable === false) {
		styles.push('section');
		unclickable = true;
	}

	// Headline
	const headline = item.headline ? item.headline : parent?.headline;

	// Create item
	const result: NavigationItem = {
		url,
		title: item.title,
		wip: item.wip === true,
		hidden: item.hidden === true,
		theme,
		level,
		styles,
		unclickable,
		headline,
		children: [],
		parent,
	};

	// Add child nodes
	if (item.children) {
		if (unclickable) {
			throw new Error(`Unclickable item cannot have children`);
		}
		result.children = parseRawData(item.children, level + 1, result);
	}

	// Return
	return result;
}

/**
 * Parse raw data
 */
function parseRawData(
	data: YamlNavigation,
	level: number,
	parent?: NavigationItem
): NavigationItem[] {
	if (typeof data !== 'object') {
		throw new Error('Invalid navigation');
	}
	if (level >= maxLevel) {
		throw new Error('Navigation is too deep');
	}

	const result: NavigationItem[] = [];

	Object.keys(data).forEach((key) => {
		const value = data[key];

		// Check URL
		if (
			key.slice(0, 1) !== '/' &&
			key.slice(0, 2) !== './' &&
			key.slice(0, 3) !== '../'
		) {
			throw new Error(`Invalid URL in navigation: ${key}`);
		}

		const url = parent ? relativeToAbsolute(parent.url, key, true) : key;

		switch (typeof value) {
			case 'string':
				if (!parent) {
					throw new Error(`Cannot have string navigation in root`);
				}
				result.push(parseString(value, url, level, parent));
				break;

			case 'object':
				if (value instanceof Array || value === null) {
					throw new Error(`Invalid navigation value object`);
				}
				result.push(parseObject(value, url, level, parent));
				break;

			default:
				throw new Error(`Invalid navigation value type: ${typeof value}`);
		}
	});

	return result;
}

/**
 * Navigation tree
 */
export const navigationTree: NavigationItem[] = parseRawData(rawData, 0);

/**
 * Storage for navigation by URL for quick access and validation
 */
export const navigationURLs: Record<string, NavigationItem> =
	Object.create(null);

/**
 * Create list and URLs from tree
 */
function flatten(tree: NavigationItem[]): void {
	tree.forEach((treeItem) => {
		const url = treeItem.url;
		if (navigationURLs[url] !== void 0) {
			throw new Error(
				`Duplicate navigation for "${url}" in "${navigationURLs[url].url}" and "${treeItem.url}"`
			);
		}

		navigationURLs[url] = treeItem;

		flatten(treeItem.children);
	});
}

flatten(navigationTree);
