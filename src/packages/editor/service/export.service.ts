import { EXPORT_FILENAME } from '../constants/config';
import type { ExportFile, ExportFormat } from '../types/export';
import { markdownService } from './markdown.service';

/** Builds downloadable file payloads from the current document. */
export const exportService = {
	build(content: string, format: ExportFormat): ExportFile {
		if (format === 'markdown') {
			return {
				filename: `${EXPORT_FILENAME}.md`,
				mime: 'text/markdown;charset=utf-8',
				content
			};
		}

		return {
			filename: `${EXPORT_FILENAME}.html`,
			mime: 'text/html;charset=utf-8',
			content: htmlDocument(markdownService.render(content))
		};
	}
};

function htmlDocument(body: string): string {
	return `<!doctype html>
<html lang="pt-BR">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>${EXPORT_FILENAME}</title>
	</head>
	<body>
${body}
	</body>
</html>
`;
}
