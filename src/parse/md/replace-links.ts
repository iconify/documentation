import md from 'markdown-it';
import { MDContext } from '../types';
import { relativeToAbsolute, absoluteToRelative } from '../../urls';
import { fileToURL } from '../../navigation/helpers';

/**
 * Update links
 */
export function replaceMDLinks(context: MDContext, md: md) {
	const allowAbsolute = context.filename !== context.relativeFile;

	// Store old parser
	const oldParser =
		md.renderer.rules.link_open ||
		function (tokens, idx, options, env, self) {
			return self.renderToken(tokens, idx, options);
		};

	// Create new parser
	md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
		const token = tokens[idx];

		let aIndex = token.attrIndex('href');
		if (aIndex === -1) {
			throw new Error(`Missing link target in ${context.filename}`);
		}

		// Get link
		const href = token.attrs![aIndex][1];
		if (href.indexOf('//') !== -1) {
			// Remote link - change target
			token.attrPush(['target', '_blank']);
			return oldParser(tokens, idx, options, env, self);
		}

		// Split link to test extension and make relative link
		const parts = href.split('#');
		let link = parts.shift()!;
		if (link.indexOf('?') === -1 && link.slice(-3) === '.md') {
			const originalTarget = link;

			// Get absolute URL and log it
			const absoluteFile = relativeToAbsolute(
				context.filename,
				link,
				allowAbsolute
			);
			const absoluteURL = fileToURL(absoluteFile);
			context.urls.push(absoluteURL);

			// Get URL relative to current page
			link = absoluteToRelative(context.relativeFile, absoluteURL);

			// Append hash stuff
			parts.unshift(link);
			const newLink = parts.join('#');
			token.attrs![aIndex][1] = newLink;

			// console.log(`Changed link ${href} to ${newLink}`);
		} else if (href.slice(0, 1) === '#') {
			// Local link
		} else {
			throw new Error(`Invalid link "${href}" in ${context.filename}`);
		}

		return oldParser(tokens, idx, options, env, self);
	};
}
