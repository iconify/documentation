import { readFileSync, link } from 'fs';
import { ParseResult } from './types';
import { paths } from '../files';
import { replaceAll } from '../str';
import { defaultTheme } from '../themes';
import { NavigationItem } from '../navigation/loader';
import { replaceText, rawReplacements } from '../replacements';
import { prepareNavigation } from '../navigation/prepare';
import { minifiedNavigation } from '../navigation/minify';
import { fileToURL } from '../navigation/helpers';
import { renderNavigation } from '../navigation/render';
import { absoluteToRelative } from '../urls';
import { parsePartial } from './partial';
import { hashes } from '../hashes';
import {
	PrevNextLinks,
	getPrevNextLinks,
	generateShortNavigation,
} from '../navigation/short';

// Hash to use to break browser cache
const hash = '' + Math.round(Date.now() / 1000);

// Wrapper
const wrappers: Record<string, string> = {};

/**
 * Build HTML
 */
export function buildHTML(
	item: ParseResult,
	navigationRef?: NavigationItem
): string {
	const hasRedirect = typeof item.metadata.redirect === 'string';
	const pageType = hasRedirect ? 'redirect' : 'page';

	let title = item.metadata.title;
	if (typeof title !== 'string' || title === '') {
		if (hasRedirect) {
			title = 'Redirect';
		} else {
			throw new Error(`Missing page title in "${item.filename}"`);
		}
	}

	// URL
	const currentURL = fileToURL(item.filename);

	// Theme
	if (
		navigationRef &&
		item.metadata.theme &&
		navigationRef.theme !== item.metadata.theme
	) {
		console.error(
			`Mismatched themes in navigation and header in ${item.filename}`
		);
	}
	const theme = item.metadata.theme
		? item.metadata.theme
		: navigationRef
		? navigationRef.theme
		: defaultTheme(item.filename);

	// Get navigation
	const preparedNavigation = prepareNavigation(
		minifiedNavigation,
		navigationRef ? navigationRef.url : currentURL
	);
	const navigation = renderNavigation(preparedNavigation);

	// Prev/next links
	let shortNavigation: PrevNextLinks = {};
	if (navigationRef && !item.metadata.standalone && !item.metadata.navigation) {
		shortNavigation = getPrevNextLinks(item, navigationRef);
	}

	// Check for bad MarkDown links
	if (
		item.html.indexOf('.md]') !== -1 ||
		item.html.indexOf('[https://') !== -1
	) {
		console.error(`Possible invalid link syntax in ${item.filename}`);
	}

	// Generate HTML
	let html = item.html;
	if (item.metadata.wip) {
		const wip = parsePartial('notices/wip', item.filename);
		html = wip.html + html;
	}

	// Add prev/next links
	if (shortNavigation.prev || shortNavigation.next) {
		html = generateShortNavigation(currentURL, shortNavigation) + html;
	}

	// Generate replacements
	const replacements: Record<string, string> = {
		'${hash}': hash,
		'${root}': absoluteToRelative(item.filename, '/'),
		'${assets}': absoluteToRelative(item.filename, '/assets'),
		'${title}': title,
		'${content}': html,
		'${redirect}': hasRedirect ? item.metadata.redirect! : '',
		'${theme-class}': theme ? ' theme-' + theme : '',
		'${navigation}': navigation,
	};

	// Add hashes for parameters
	Object.keys(hashes).forEach((key) => {
		const attr = key as keyof typeof hashes;
		const value = hashes[attr];
		replacements['?${hash-' + key + '}'] = value === '' ? '' : '?' + value;
	});

	// Get wrapper
	if (wrappers[pageType] === void 0) {
		wrappers[pageType] = getWrapper(pageType);
	}
	const wrapper = wrappers[pageType];

	// Replace content
	return replaceAll(wrapper, replacements);
}

/**
 * Get wrapper
 */
function getWrapper(pageType: string): string {
	let html = readFileSync(`${paths.sourceAssets}/${pageType}.html`, 'utf8');

	// Apply replacements
	html = replaceText(html);

	return html;
}
