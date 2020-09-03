import md from 'markdown-it';
import cheerio from 'cheerio';
import { ReadResult, ParseResult, MDContext } from './types';
import { replaceMDLinks } from './md/replace-links';
import { parseMDIncludes } from './md/includes';
import { parseMDHeadings } from './md/headings';
import { renderCode } from './md/code';
import { renderInlineCode } from './md/inline-code';
import { changeHeadingLinks } from './html/headings';
import { wrapSections } from './html/sections';
import { replacementsToPairs } from '../replacements';
import { linkTypes } from './html/types';
import { linkFunctions } from './html/functions';
import { wrapCustomCode } from './html/code';
import { importHTMLPartials } from './html/includes';
import { parseHTMLImages } from './html/images';
import { linkClasses } from './html/classes';

/**
 * Parse MD
 */
export function parseMD(source: ReadResult, relativeFile: string): ParseResult {
	const filename = source.filename;
	const text = source.text;
	const { replacements, ...metadata } = source.metadata;
	const context: MDContext = {
		filename,
		relativeFile,
		urls: [],
		assets: [],
		ids: [],
		replacements: replacementsToPairs(replacements, relativeFile),
	};

	// Parse MarkDown
	const markdown = md({
		xhtmlOut: true,
	})
		.use(replaceMDLinks.bind(null, context))
		.use(parseMDIncludes.bind(null, context))
		.use(renderCode.bind(null, context))
		.use(renderInlineCode.bind(null, context))
		.use(parseMDHeadings.bind(null, context));

	let html = markdown.render(text);

	// Generate result
	const result: ParseResult = {
		filename,
		metadata,
		text,
		html,
		urls: context.urls,
		assets: context.assets,
		ids: context.ids,
	};

	// Parse HTML
	const $html = cheerio.load(html, {
		lowerCaseAttributeNames: false,
		_useHtmlParser2: true,
	});

	importHTMLPartials($html, context);
	changeHeadingLinks($html);
	wrapSections($html);
	wrapCustomCode($html);
	parseHTMLImages($html, result, context.filename);
	if (metadata.types) {
		linkTypes($html, context, metadata.types);
	}
	if (metadata.functions) {
		linkFunctions($html, context, metadata.functions);
	}
	if (metadata.classes) {
		linkClasses($html, context, metadata.classes);
	}

	// Convert back to HTML, replacing Cheerio bugs
	result.html = $html
		.html()!
		.replace('<html><head></head><body>', '')
		.replace('</body></html>', '');

	// Return result
	return result;
}
