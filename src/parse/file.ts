import fs from 'fs';
import { SourceMetaData, getMetaData } from '../meta-data';
import { replaceText, replacementsToPairs } from '../replacements';
import { replaceAll } from '../str';
import { ParseResult, ReadResult } from './types';
import { parseMD } from './markdown';

/**
 * Parser
 */
export function parseFile(
	dir: string,
	file: string,
	relativeFile = file
): ParseResult {
	/**
	 * Read file
	 */
	function readFile(): ReadResult {
		let text = fs.readFileSync(dir + file, 'utf8').trim();

		// Get heading
		const separator = '\n';
		const lines = text.split(separator);
		const heading = [];
		let firstLine = lines.shift()!.trim();
		if (firstLine === '```yaml') {
			while (true) {
				const line = lines.shift();
				if (line === void 0) {
					throw new Error(`Incomplete heading in ${file}`);
				}
				const trimmedLine = line.trim();
				if (trimmedLine === '```') {
					// End of heading
					break;
				}
				if (trimmedLine.slice(0, 1) === '`') {
					// Code ???
					throw new Error(`Invalid heading in ${file}`);
				}
				// YAML line
				heading.push(line);
			}

			// Restore remaining text
			text = lines.join(separator).trim();
		} else if (firstLine.slice(0, 3) === '```') {
			throw new Error(`Invalid heading format in ${file}`);
		}

		// Parse meta data
		const metadata: SourceMetaData = heading.length
			? getMetaData(heading.join(separator), file)
			: {
					replacements: [],
			  };

		// Redirect
		let hasRedirect = false;
		if (typeof metadata.redirect === 'string' && metadata.redirect) {
			if (file !== relativeFile) {
				// Cannot have redirect in included file
				throw new Error(`Unexpected redirect in ${file}`);
			}
			hasRedirect = true;

			if (metadata.redirect.slice(-3) === '.md') {
				// Redirects must redirect to .html file
				throw new Error(
					`Redirects should be to HTML files. Found MD redirect in ${file}`
				);
			}
		}

		// Attempt to get title from first heading
		firstLine = text.split(separator).shift()!;
		if (typeof firstLine === 'string' && firstLine.slice(0, 2) === '# ') {
			if (typeof metadata.title !== 'string') {
				metadata.title = firstLine.slice(2).trim();
			}
		} else {
			// No H1 ???
			if (!hasRedirect && file === relativeFile) {
				throw new Error(`Missing H1 in ${file}`);
			}
		}

		// Return result
		return {
			filename: file,
			metadata,
			text,
		};
	}

	const data = readFile();

	// Replace stuff in text
	let text = data.text;
	if (data.metadata.replacements) {
		// Convert metadata replacements
		const replacements = replacementsToPairs(data.metadata.replacements, file);

		// Replace text
		text = replaceAll(text, replacements);
	}

	// Replace variables
	text = replaceText(text);

	// Parse MarkDown
	return parseMD(
		{
			...data,
			text,
		},
		relativeFile
	);
}
