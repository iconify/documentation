import md from 'markdown-it';
import Token from 'markdown-it/lib/token';
import hljs from 'highlight.js';
import hljs_svelte from 'highlightjs-svelte';
import { hljsDefineVue } from './highlight_vue';
import yaml from 'yaml';
import { MDContext } from '../types';
import { paths, exists } from '../../files';
import { readFileSync } from 'fs';
import { replaceAll } from '../../str';
import { InlineCodeReplacement } from './includes';
import { isDevMode } from '../../replacements';

// Import additional syntax highlight modules
hljs_svelte(hljs);
hljs.registerLanguage('vue', hljsDefineVue);

/**
 * Code parameters
 */

interface CodeSampleChunk {
	src: string;
	title: string;
	hint: string;
}

interface CodeSample {
	// Main fie
	src: string; // Source file
	title?: string; // Tab text
	hint?: string; // Hint

	// Extra code
	extra: CodeSampleChunk[];

	// Stylesheet
	css?: string; // Stylesheet file, could be without extension
	cssTitle?: string; // Stylesheet tab title
	cssHint?: string;

	// Demo
	demo?: boolean | string; // True if demo should be shown below code, optional filename for demo
	demoFirst?: boolean; // True if demo should be rendered before code samples
	demoTitle?: string; // Demo tab title
	demoHint?: string;
	class?: string; // Class name to wrap demo

	// Replacements
	replacements?: InlineCodeReplacement[];
}

const defaultCodeSampleChunk: Required<CodeSampleChunk> = {
	src: '',
	title: '',
	hint: '',
};

const defaultCodeSample: Required<CodeSample> = {
	src: '',
	title: '',
	hint: '',
	extra: [],
	css: '',
	cssTitle: '',
	cssHint: '',
	class: '',
	demo: false,
	demoFirst: true,
	demoTitle: '',
	demoHint: '',
	replacements: [],
};

// Keys to check for valid filenames
const validateSources: (keyof CodeSample)[] = ['src', 'css'];

/**
 * Dummy callback for replacing content
 */
function returnContent(str: string): string {
	return str;
}

/**
 * Code tabs
 */
type TabTypes = 'src' | 'css' | 'demo';

interface CodeTab {
	type: TabTypes;
	src: string;
	title: string;
	lang: string;
	raw: string;
	html: string;
	hint: string;
	replace: typeof returnContent;
}

/**
 * Validate filename
 */
function validateSource(src: string): boolean {
	const parts = src.split('/');
	for (let i = 0; i < parts.length; i++) {
		const part = parts[i];
		if (part.slice(0, 1) === '.') {
			return false;
		}
	}
	return true;
}

/**
 * Locate file
 */
function locateCode(file: string, type: TabTypes): string | null {
	let filename: string;

	// Check for demo: force .html extension
	if (type === 'demo') {
		// Remove extension
		const parts = file.split('.');
		const ext = parts.pop()!;

		// Test .demo.html
		filename =
			paths.rawCode + '/' + parts.slice(0).concat(['demo', 'html']).join('.');
		if (exists(filename)) {
			return filename;
		}

		// Test .html
		filename = paths.rawCode + '/' + parts.slice(0).concat(['html']).join('.');
		if (exists(filename)) {
			return filename;
		}

		return null;
	}

	// Check for raw code
	filename = paths.rawCode + '/' + file;
	if (exists(filename)) {
		return filename;
	}

	// Check for stylesheet
	if (type === 'src' || type === 'css') {
		filename = paths.cssCode + '/' + file;
		if (exists(filename)) {
			return filename;
		}

		// Add '_' to filename
		const parts = file.split('/');
		const lastPart = parts.pop()!;
		parts.push('_' + lastPart);
		filename = paths.cssCode + '/' + parts.join('/');
		if (exists(filename)) {
			return filename;
		}
	}

	return null;
}

/**
 * Change all tokens
 */
function changeTokens(tokens: Token[]) {
	tokens.forEach((token) => {
		if (token.type === 'fence' && !token.children) {
			token.tag = '';
			token.type = 'code_block';

			// Check for include
			if (token.info === 'yaml') {
				try {
					const data = yaml.parse(token.content);
					if (
						typeof data === 'object' &&
						data.src === void 0 &&
						typeof data.include === 'string'
					) {
						token.type = 'include';
					}
				} catch (err) {
					//
				}
			}
		}
		if (token.children) {
			changeTokens(token.children);
		}
	});
}

/**
 * Block code
 */
export function renderCode(context: MDContext, md: md) {
	const codeHeader = '<code class="highlight hljs">';
	const codeFooter = '</code>';

	/**
	 * Get file contents
	 */
	function getFile(filename: string): string {
		let data = readFileSync(filename, 'utf8');
		return replaceAll(data, context.replacements);
	}

	/**
	 * Convert replacements to object
	 */
	function convertReplacements(
		data: InlineCodeReplacement[]
	): Record<string, string> {
		const replacements: Record<string, string> = Object.create(null);
		data.forEach((item) => {
			const search = item.search;
			const replace = item.replace;
			if (
				typeof search !== 'string' ||
				typeof replace !== 'string' ||
				!search.length
			) {
				throw new Error(
					`Invalid value type for "replacement" in code block in ${context.filename}.`
				);
			}
			replacements[search] = replace;
		});
		return replacements;
	}

	/**
	 * Clean code
	 */
	function cleanupCode(lang: string, str: string): string {
		switch (lang) {
			case 'php':
				if (
					str.trim().slice(0, 5) === '<?php' &&
					str.trim().slice(-2) === '?>'
				) {
					// Remove <?php and ?>
					str = str.trim();
					str = str.slice(5, str.length - 2).trim();
				}
				break;
		}

		return str;
	}

	/**
	 * Highlight syntax in code
	 */
	function highlightCode(lang: string, str: string) {
		let code: string;

		function highlight(lang: string, str: string): string {
			// Check for language
			if (!hljs.getLanguage(lang)) {
				throw new Error(
					`Bad language for code block in ${context.filename}: ${lang}`
				);
			}

			// Prepare code
			let modified = false;
			switch (lang) {
				case 'jsx':
					if (str.slice(0, 1) === '<' && str.trim().slice(-1) === '>') {
						// Wrap tag in () to allow syntax highlight
						modified = true;
						str = '(' + str + ')';
					}
					break;
			}

			// Parse code
			try {
				code = hljs.highlight(str, {
					language: lang,
				}).value;
			} catch (err) {
				console.error(err);
				throw new Error(`Error parsing code block in ${context.filename}.`);
			}

			// Fix errors
			switch (lang) {
				case 'php':
				case 'js':
					code = replaceAll(code, {
						'<span class="hljs-doctag">@iconify</span>': '@iconify',
					});
					break;

				case 'jsx':
					if (modified) {
						// Remove ()
						code = code.slice(1, code.length - 2);
					}
					break;
			}
			return code;
		}

		switch (lang) {
			case 'raw':
				// Raw code
				code = str;
				break;

			case 'astro': {
				// Highlight chunks separately
				const chunks = str.split('---');
				if (chunks.length !== 3 || chunks.shift().trim() !== '') {
					throw new Error(`Bad Astro code in ${context.filename}`);
				}
				const separator = '<span class="hljs-comment">---</span>';
				code = `${separator}\n${highlight(
					'js',
					chunks[0].trim()
				)}\n${separator}\n\n${highlight('vue', chunks[1].trim())}`;
				break;
			}

			default:
				// Run default function
				code = highlight(lang, str);
		}

		// Replace tabs, spaces and new lines
		code = code.replace(/\t/g, ' &nbsp; &nbsp;');
		code = code.replace(/  /g, ' &nbsp;');
		code = code.replace(/\n/g, '<br />\n');

		return codeHeader + code + codeFooter;
	}

	/**
	 * Add code
	 */
	interface RenderTabProps {
		tabs: CodeTab[];
		type: TabTypes;
		src: string;
		title: string;
		lang: string;
		code: string;
		hint: string;
		replace: typeof returnContent;
	}
	function renderTab({
		tabs,
		type,
		src,
		title,
		lang,
		code,
		hint,
		replace,
	}: RenderTabProps) {
		// Change content
		code = cleanupCode(lang, code);

		// Add tab
		tabs.push({
			type,
			src,
			title,
			lang,
			raw: code,
			html: highlightCode(lang, replace(code)),
			hint,
			replace,
		});
	}

	/**
	 * Render demo
	 */
	interface RenderDemoProps {
		tabs: CodeTab[];
		src: string;
		css: string;
		title: string;
		html: string;
		hint: string;
		replace: typeof returnContent;
	}
	function renderDemo({
		tabs,
		src,
		css,
		title,
		html,
		hint,
		replace,
	}: RenderDemoProps) {
		if (css !== '') {
			// Remove extensions
			const parts = css.split('.');
			css = parts.shift()!;
		}

		const debugAttr =
			src && isDevMode()
				? ' data-debug-src="' + encodeURIComponent(src) + '"'
				: '';

		tabs.push({
			type: 'demo',
			src,
			title,
			lang: 'html',
			raw: '',
			html:
				'<div class="code-demo' +
				(css === '' ? '' : ' ' + css) +
				'"' +
				debugAttr +
				'>' +
				replace(html) +
				'</div>',
			hint,
			replace,
		});
	}

	/**
	 * Parse YAML
	 */
	function parseYaml(tabs: CodeTab[], code: string) {
		const data = yaml.parse(code) as Required<CodeSample>;
		const replacements: Record<string, string> = Object.create(null);

		if (typeof data !== 'object' || typeof data.src !== 'string') {
			// Do not treat it as custom code
			renderTab({
				tabs,
				type: 'src',
				src: '',
				title: '',
				lang: 'yaml',
				code,
				hint: '',
				replace: returnContent,
			});
			return;
		}

		const replaceContent = (str: string): string =>
			replaceAll(str, replacements);

		// Clean up data
		for (const key in defaultCodeSample) {
			const attr = key as keyof CodeSample;

			if (attr === 'extra') {
				// Handle extra array
				if (data.extra === void 0) {
					data.extra = [];
					continue;
				}
				if (!(data.extra instanceof Array)) {
					// Wrong type?
					throw new Error(
						`Invalid value type for "${attr}" in code block in ${context.filename}.`
					);
				}

				// Validate all entries in extra sources
				data.extra.forEach((item) => {
					const source = item as CodeSampleChunk;
					if (typeof source !== 'object' || typeof source.src !== 'string') {
						throw new Error(
							`Invalid value type for "${attr}" in code block in ${context.filename}.`
						);
					}

					// Check other attributes
					for (const key2 in defaultCodeSampleChunk) {
						const attr2 = key2 as keyof CodeSampleChunk;
						if (source[attr2] === void 0) {
							source[attr2] = defaultCodeSampleChunk[attr2];
							continue;
						}
						if (typeof source[attr2] !== typeof defaultCodeSampleChunk[attr2]) {
							throw new Error(
								`Invalid value for "${attr}" in code block in ${context.filename}.`
							);
						}
					}

					// Validate source
					if (!validateSource(source.src)) {
						throw new Error(
							`Invalid value for "${attr}" in code block in ${context.filename}.`
						);
					}
				});
				continue;
			}

			if (data[attr] === void 0) {
				// Copy default value
				const defaultValue = defaultCodeSample[attr];
				(data as unknown as Record<string, unknown>)[attr] =
					defaultValue instanceof Array ? [] : defaultValue;
				continue;
			}

			switch (attr) {
				case 'demo':
					if (
						typeof data[attr] !== 'boolean' &&
						typeof data[attr] !== 'string'
					) {
						// Wrong type?
						throw new Error(
							`Invalid value type for "${attr}" in code block in ${context.filename}.`
						);
					}
					break;

				case 'replacements':
					// Validate replacements
					if (!(data.replacements instanceof Array)) {
						throw new Error(
							`Invalid value type for "${attr}" in code block in ${context.filename}.`
						);
					}
					data.replacements.forEach((item) => {
						const search = item.search;
						const replace = item.replace;
						if (
							typeof search !== 'string' ||
							typeof replace !== 'string' ||
							!search.length
						) {
							throw new Error(
								`Invalid value type for "${attr}" in code block in ${context.filename}.`
							);
						}
						replacements[search] = replace;
					});
					break;

				default:
					if (typeof data[attr] !== typeof defaultCodeSample[attr]) {
						// Wrong type?
						throw new Error(
							`Invalid value type for "${attr}" in code block in ${context.filename}.`
						);
					}
			}

			if (
				validateSources.indexOf(attr) !== -1 &&
				(attr === 'src' || data[attr] !== '')
			) {
				// Validate source
				if (!validateSource(data[attr] as string)) {
					throw new Error(
						`Invalid value for "${attr}" in code block in ${context.filename}.`
					);
				}
			}
		}

		// Check for invalid attributes
		for (const key in data) {
			const attr = key as keyof CodeSample;
			if (defaultCodeSample[attr] === void 0) {
				throw new Error(
					`Invalid attribute "${attr}" in code block in ${context.filename}.`
				);
			}
		}

		// Reusable function to render demo
		const renderDemoSample = (showTitle: boolean) => {
			const demoSource = typeof data.demo === 'string' ? data.demo : data.src;
			const demoFile = locateCode(demoSource, 'demo');
			if (demoFile === null) {
				throw new Error(
					`Unable to locate demo file "${demoSource}" in code block in ${context.filename}. Demo file must match source file, but end with ".demo.html" or ".html"`
				);
			}
			renderDemo({
				tabs,
				src: demoSource,
				css: data.class,
				title: showTitle ? data.demoTitle : '',
				html: getFile(demoFile),
				hint: data.demoHint,
				replace: replaceContent,
			});
		};

		// Demo, before code
		if (data.demo && data.demoFirst) {
			renderDemoSample(false);
		}

		// Get code
		const sources: CodeSampleChunk[] = [
			{
				src: data.src,
				title: data.title,
				hint: data.hint,
			},
		].concat(data.extra);

		sources.forEach((source) => {
			const src = source.src;
			const sourceFile = locateCode(src, 'src');
			if (sourceFile === null) {
				throw new Error(
					`Unable to locate file "${src}" in code block in ${context.filename}.`
				);
			}
			renderTab({
				tabs,
				type: 'src',
				src,
				title: source.title,
				lang: source.src.split('.').pop()!,
				code: getFile(sourceFile),
				hint: source.hint,
				replace: replaceContent,
			});
		});

		// Get stylesheet
		if (data.css !== '') {
			const cssSource = data.css;
			const stylesheetFile = locateCode(cssSource, 'css');
			if (stylesheetFile === null) {
				throw new Error(
					`Unable to locate file "${cssSource}" in code block in ${context.filename}.`
				);
			}
			renderTab({
				tabs,
				type: 'css',
				src: cssSource,
				title: data.cssTitle,
				lang: 'scss',
				code: getFile(stylesheetFile),
				hint: data.cssHint,
				replace: replaceContent,
			});
		}

		// Demo
		if (data.demo && !data.demoFirst) {
			renderDemoSample(true);
		}
	}

	/**
	 * Render tabs
	 */
	function renderTabs(tabs: CodeTab[]): string {
		let code = '<div class="code-blocks">';
		tabs.forEach((tab) => {
			let raw = '';
			if (tab.raw !== '') {
				const buff = Buffer.from(tab.raw, 'utf8');
				raw = tab.replace(buff.toString('base64'));
			}

			// Add debug attribute
			const debugAttr =
				tab.src && isDevMode()
					? ' data-debug-src="' + encodeURIComponent(tab.src) + '"'
					: '';

			// Container
			code +=
				'<div class="code-block code-block--' +
				tab.type +
				(tab.title === '' ? '' : ' code-block--with-title') +
				'"' +
				debugAttr +
				'>';

			// Title
			if (tab.title !== '') {
				code +=
					'<div class="code-block-title">' + tab.replace(tab.title) + '</div>';
			}

			// Content
			code +=
				'<div class="code-block-content code-block-content--with' +
				(tab.title === '' ? 'out' : '') +
				'-title code-block-content--with' +
				(tab.hint === '' ? 'out' : '') +
				'-hint"' +
				(raw === '' ? '' : ' data-raw-code="' + raw + '"') +
				'>' +
				tab.html +
				'</div>';

			// Hint
			if (tab.hint !== '') {
				code +=
					'<div class="code-block-hint">' + tab.replace(tab.hint) + '</div>';
			}

			// Close container

			code += '</div>';
		});

		code += '</div>';
		return code;
		// return tabs.map((tab) => tab.html).join('');
	}

	// Render code_block token
	md.renderer.rules['code_block'] = (tokens, idx, options, env, self) => {
		const token = tokens[idx];
		let lang = token.info;
		let code = token.content;
		const tabs: CodeTab[] = [];

		if (!lang) {
			throw new Error(
				`Missing language for code block in ${context.filename}.`
			);
		}

		if (lang === 'yaml') {
			parseYaml(tabs, code);
		} else {
			renderTab({
				tabs,
				type: 'src',
				src: '',
				title: '',
				lang,
				code,
				hint: '',
				replace: returnContent,
			});
		}

		return renderTabs(tabs);
	};

	// Find all fence tokens, replace them with code_block
	md.core.ruler.push('code_block', (state) => {
		changeTokens(state.tokens);
		return true;
	});
}
