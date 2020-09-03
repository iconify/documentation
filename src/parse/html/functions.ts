import { MDContext } from '../types';
import { checkLinkables } from './linkable';

export function linkFunctions(
	$html: CheerioStatic,
	context: MDContext,
	functions: Record<string, string>
): void {
	return checkLinkables($html, context, functions, {
		selector: '.hljs-function',
		title: '{item}() documentation',
	});
}
