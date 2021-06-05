import md from 'markdown-it';
import Token from 'markdown-it/lib/token';
import yaml from 'yaml';
import { MDContext } from '../types';
import { parsePartial } from '../partial';
import { replaceAll } from '../../str';

export interface InlineCodeReplacement {
	search: string;
	replace: string;
}

interface InlineCodeMeta {
	include: string;
	replacements?: InlineCodeReplacement;
}

/**
 * Check if token is a potential include token, return included file name on success or null on failure
 */
function checkToken(token: Token): string | null {
	if (token.type !== 'code_inline' && token.children) {
		return null;
	}

	// Get text
	const content = token.content.split(' ');
	if (content.length === 2 && content.shift() === 'include') {
		return content.shift()!;
	}

	return null;
}

/**
 * Change token type
 */
function changeTokenType(token: Token, included: string): Token {
	const newToken = Object.assign({}, token);
	newToken.type = 'include';
	newToken.tag = '';
	newToken.content = 'include: ' + included;
	return newToken;
}

/**
 * Parse included files
 */
export function parseMDIncludes(context: MDContext, md: md) {
	function expectToken(
		list: Token[],
		index: number,
		type: string,
		replace: boolean
	) {
		if (list[index].type !== type) {
			throw new Error(
				`Invalid tokens tree for include token in ${context.filename}: got "${list[index].type}", expected "${type}"`
			);
		}
		if (replace) {
			list[index].type = 'include_empty';
			list[index].tag = '';
		}
	}

	// Render empty token
	md.renderer.rules['include_empty'] = (tokens, idx, options, env, self) => {
		return '';
	};

	// Render include token
	md.renderer.rules['include'] = (tokens, idx, options, env, self) => {
		const token = tokens[idx];
		const data = yaml.parse(token.content) as InlineCodeMeta;
		const file = data.include;
		const result = parsePartial(file, context.relativeFile);

		// Replace content
		if (data.replacements && data.replacements instanceof Array) {
			const replacements: Record<string, string> = Object.create(null);
			data.replacements.forEach((item) => {
				replacements[item.search] = item.replace;
			});
			result.html = replaceAll(result.html, replacements);
		}

		// Make sure there are no conflicting ids
		result.ids.forEach((id) => {
			if (context.ids.indexOf(id) !== -1) {
				throw new Error(
					`Duplicate heading id "${id}" in ${context.filename} and one of included files.`
				);
			}
		});

		// Copy links and ids from included file to context
		context.urls = context.urls.concat(result.urls);
		context.assets = context.assets.concat(result.assets);
		context.ids = context.ids.concat(result.ids);

		// Return result
		return result.html;
	};

	// Find all inline code tokens, replace them with include
	md.core.ruler.push('include', (state) => {
		state.tokens.forEach((parentToken, parentIndex, parentList) => {
			const included = checkToken(parentToken);
			if (typeof included === 'string') {
				parentList[parentIndex] = changeTokenType(parentToken, included);
			}
			// console.log(parentList[parentIndex].type);
			if (parentToken.children) {
				parentToken.children.forEach((token, index, list) => {
					const included = checkToken(token);
					if (typeof included === 'string') {
						// Check parent tokens: paragraph_open, inline -> include, paragraph_close
						expectToken(parentList, parentIndex - 1, 'paragraph_open', true);
						expectToken(parentList, parentIndex, 'inline', false);
						expectToken(parentList, parentIndex + 1, 'paragraph_close', true);

						// Check other siblings: allow empty text tokens
						list.forEach((token2, index2) => {
							if (index2 === index) {
								return;
							}
							if (token2.type === 'text' && token2.content === '') {
								return;
							}
							throw new Error(
								`Invalid tokens tree for include token in ${context.filename}: invalid child token "${token2.type}"`
							);
						});

						// Replace parent token
						parentList[parentIndex] = changeTokenType(token, included);
					}
					// console.log('-', list[index].type);
				});
			}
		});

		return true;
	});
}
