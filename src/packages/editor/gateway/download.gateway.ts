import type { ExportFile } from '../types/export';

/** Boundary for the browser download side effect. */
export const downloadGateway = {
	save(file: ExportFile): void {
		if (typeof document === 'undefined') {
			return;
		}

		const blob = new Blob([file.content], { type: file.mime });
		const url = URL.createObjectURL(blob);
		const anchor = document.createElement('a');
		anchor.href = url;
		anchor.download = file.filename;
		anchor.click();
		URL.revokeObjectURL(url);
	}
};
