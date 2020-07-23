import md from 'markdown-it';
import { MDContext } from '../types';
import { replaceAll } from '../../str';
import { replaceText } from '../../replacements';

const idMatch = /^[a-z][a-z0-9-]*[a-z0-9]$/;

/**
 * Get id from string
 */
function getIdFromString(text: string, filename: string): string {
	let id = text
		.toLowerCase()
		.replace(/[\?\!]/g, '')
		.split(/[\s\/]+/)
		.join('-');

	if (!id.match(idMatch)) {
		throw new Error(
			`Cannot convert text to id: "${text}", "${id}" in ${filename}`
		);
	}
	return id;
}

interface GetIDResult {
	text: string;
	id: string;
}

/**
 * Extract id from heading or generate id
 */
function getIdForHeading(text: string, filename: string): GetIDResult {
	// {#custom-id}
	const pos = text.indexOf('{#');
	if (pos === -1) {
		return {
			text,
			id: getIdFromString(text, filename),
		};
	}

	if (text.slice(-1) !== '}') {
		throw new Error(`Cannot extract heading id "${text}" in ${filename}`);
	}
	const id = text.slice(pos + 2, text.length - 1);
	if (!id.match(idMatch)) {
		throw new Error(
			`Cannot extract id from heading "${text}", "${id}" in ${filename}`
		);
	}

	text = text.slice(0, pos).trim();

	return {
		id,
		text,
	};
}

/**
 * Validate and parse headings
 */
export function parseMDHeadings(context: MDContext, md: md) {
	md.core.ruler.after('block', 'check-headings', (state) => {
		const tokens = state.tokens;
		const ids = Object.create(null);
		let first = true;
		let lastLevel = 0;

		const newTokens = [];
		for (let i = 0; i < tokens.length; i++) {
			const token = tokens[i];
			if (token.type !== 'heading_open') {
				newTokens.push(token);
				continue;
			}

			// Do not allow headings in partials
			if (context.filename !== context.relativeFile) {
				throw new Error(
					`Partial file cannot include headings: ${context.filename}`
				);
			}

			// Make sure there is no sudden jump in levels
			if (token.nesting > lastLevel + 1) {
				throw new Error(`Bad heading token nesting in ${context.filename}`);
			}
			lastLevel = token.nesting;

			// Heading token
			const textToken = tokens[i + 1];
			const closingToken = tokens[i + 2];
			if (
				!textToken ||
				!closingToken ||
				textToken.type !== 'inline' ||
				closingToken.type !== 'heading_close'
			) {
				throw new Error(`Bad heading token in ${context.filename}`);
			}

			// Do not get id for first token
			if (token.markup === '#') {
				if (!first) {
					throw new Error(`Two h1 headings in ${context.filename}`);
				}
				first = false;
				if (textToken.content.indexOf('{#') !== -1) {
					throw new Error(`H1 heading has id ${context.filename}`);
				}
				// Simple <h1>
				newTokens.push(token);
				continue;
			} else if (first) {
				throw new Error(`Missing h1 heading in ${context.filename}`);
			}

			const { id, text } = getIdForHeading(textToken.content, context.filename);
			if (ids[id] !== void 0) {
				throw new Error(
					`Duplicate headings "${textToken.content}" in ${context.filename}`
				);
			}
			ids[id] = newTokens.length;
			textToken.content = text + ' ';

			// Save in context
			context.ids.push(id);

			// Add heading_open token
			token.attrPush(['id', id]);
			newTokens.push(token);

			// Add text token
			newTokens.push(textToken);
			i++;

			const linkText = '[#](#' + id + ')';
			const linkTokens = md.parseInline(linkText, md);
			linkTokens[0].children!.forEach((token) => {
				if (token.type === 'link_open') {
					token.attrPush(['class', 'link-back']);
				}
				newTokens.push(token);
			});

			// Add heading_close token
			newTokens.push(closingToken);
			i++;
		}
		state.tokens = newTokens;
		return true;
	});
}
