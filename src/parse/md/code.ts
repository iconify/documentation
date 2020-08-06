import md from 'markdown-it';
import Token from 'markdown-it/lib/token';
import hljs from 'highlight.js';
import yaml from 'yaml';
import { MDContext } from '../types';
import { paths, exists } from '../../files';
import { readFileSync } from 'fs';
import { replaceAll } from '../../str';

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
	demo?: boolean; // True if demo should be shown below code
	demoTitle?: string; // Demo tab title
	demoHint?: string;
	class?: string; // Class name to wrap demo
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
	demoTitle: '',
	demoHint: '',
};

// Keys to check for valid filenames
const validateSources: (keyof CodeSample)[] = ['src', 'css'];

/**
 * Code tabs
 */
type TabTypes = 'src' | 'css' | 'demo';

interface CodeTab {
	type: TabTypes;
	title: string;
	lang: string;
	raw: string;
	html: string;
	hint: string;
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

	// Check for demo
	if (type === 'demo') {
		// Remove extension
		const parts = file.split('.');
		const ext = parts.pop()!;

		// Test .demo.html
		filename =
			paths.rawCode + '/' + parts.slice(0).concat(['demo', ext]).join('.');
		if (exists(filename)) {
			return filename;
		}

		// Test .html
		filename = paths.rawCode + '/' + parts.slice(0).concat([ext]).join('.');
		if (exists(filename)) {
			return filename;
		}
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
		if (lang === 'raw') {
			// Raw code
			code = str;
		} else {
			// Check for language
			if (!hljs.getLanguage(lang)) {
				throw new Error(
					`Bad language for code block in ${context.filename}: ${lang}`
				);
			}

			// Parse code
			try {
				code = hljs.highlight(lang, str).value;
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
			}
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
	function renderTab(
		tabs: CodeTab[],
		type: TabTypes,
		title: string,
		lang: string,
		code: string,
		hint: string
	) {
		// Change content
		code = cleanupCode(lang, code);

		// Add tab
		tabs.push({
			type,
			title,
			lang,
			raw: code,
			html: highlightCode(lang, code),
			hint,
		});
	}

	/**
	 * Render demo
	 */
	function renderDemo(
		tabs: CodeTab[],
		css: string,
		title: string,
		html: string,
		hint: string
	) {
		if (css !== '') {
			// Remove extensions
			const parts = css.split('.');
			css = parts.shift()!;
		}

		tabs.push({
			type: 'demo',
			title,
			lang: 'html',
			raw: '',
			html:
				'<div class="code-demo' +
				(css === '' ? '' : ' ' + css) +
				'">' +
				html +
				'</div>',
			hint,
		});
	}

	/**
	 * Parse YAML
	 */
	function parseYaml(tabs: CodeTab[], code: string) {
		const data = yaml.parse(code) as Required<CodeSample>;
		if (typeof data !== 'object' || typeof data.src !== 'string') {
			// Do not treat it as custom code
			renderTab(tabs, 'src', '', 'yaml', code, '');
			return;
		}

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
				((data as unknown) as Record<string, unknown>)[attr] =
					defaultCodeSample[attr];
				continue;
			}

			if (typeof data[attr] !== typeof defaultCodeSample[attr]) {
				// Wrong type?
				throw new Error(
					`Invalid value type for "${attr}" in code block in ${context.filename}.`
				);
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

		// Get code
		const sources: CodeSampleChunk[] = [
			{
				src: data.src,
				title: data.title,
				hint: data.hint,
			},
		].concat(data.extra);

		sources.forEach((source) => {
			const sourceFile = locateCode(source.src, 'src');
			if (sourceFile === null) {
				throw new Error(
					`Unable to locate file "${source.src}" in code block in ${context.filename}.`
				);
			}
			renderTab(
				tabs,
				'src',
				source.title,
				source.src.split('.').pop()!,
				getFile(sourceFile),
				source.hint
			);
		});

		// Get stylesheet
		if (data.css !== '') {
			const stylesheetFile = locateCode(data.css, 'css');
			if (stylesheetFile === null) {
				throw new Error(
					`Unable to locate file "${data.css}" in code block in ${context.filename}.`
				);
			}
			renderTab(
				tabs,
				'css',
				data.cssTitle,
				'scss',
				getFile(stylesheetFile),
				data.cssHint
			);
		}

		// Demo
		if (data.demo) {
			const demoFile = locateCode(data.src, 'demo');
			if (demoFile === null) {
				throw new Error(
					`Unable to locate demo file "${data.src}" in code block in ${context.filename}. Demo file must match source file, but end with ".demo.html" or ".html"`
				);
			}
			renderDemo(
				tabs,
				data.class,
				data.demoTitle,
				getFile(demoFile),
				data.demoHint
			);
		}
	}

	/**
	 * Render tabs
	 */
	function renderTabs(tabs: CodeTab[]): string {
		let code = '<div class="code-blocks">';
		tabs.forEach((tab, index) => {
			let raw = '';
			if (tab.raw !== '') {
				const buff = Buffer.from(tab.raw, 'utf8');
				raw = buff.toString('base64');
			}

			// Container
			code +=
				'<div class="code-block code-block--' +
				tab.type +
				(tab.title === '' ? '' : ' code-block--with-title') +
				'">';

			// Title
			if (tab.title !== '') {
				code += '<div class="code-block-title">' + tab.title + '</div>';
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
				code += '<div class="code-block-hint">' + tab.hint + '</div>';
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
			renderTab(tabs, 'src', '', lang, code, '');
		}

		return renderTabs(tabs);
	};

	// Find all fence tokens, replace them with code_block
	md.core.ruler.push('code_block', (state) => {
		changeTokens(state.tokens);
		return true;
	});
}
