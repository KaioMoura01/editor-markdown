export type ExportFormat = 'markdown' | 'html';

/** A ready-to-download file payload built by the export service. */
export interface ExportFile {
	filename: string;
	mime: string;
	content: string;
}
