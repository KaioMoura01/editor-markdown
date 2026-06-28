import DOMPurify from 'dompurify';
import { marked } from 'marked';

marked.setOptions({ breaks: true, gfm: true });

/** Renders Markdown to sanitized HTML. */
export const markdownService = {
	render(content: string): string {
		const rawHtml = marked.parse(content, { async: false });
		if (typeof window === 'undefined') {
			return rawHtml;
		}

		return DOMPurify.sanitize(rawHtml);
	}
};
