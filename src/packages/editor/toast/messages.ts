import type { ExportFormat } from '../types/export';

const EXPORT_LABEL: Record<ExportFormat, string> = {
	markdown: 'Markdown (.md)',
	html: 'HTML (.html)'
};

export const editorMessages = {
	exported(format: ExportFormat): string {
		return `Documento exportado como ${EXPORT_LABEL[format]}.`;
	},
	cleared: 'Documento limpo.',
	restored: 'Modelo de exemplo restaurado.'
};
