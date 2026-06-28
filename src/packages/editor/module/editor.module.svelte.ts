import { notificationsModule } from '$packages/notifications/module/notifications.module';
import { DEFAULT_CONTENT } from '../constants/config';
import { downloadGateway } from '../gateway/download.gateway';
import { storageGateway } from '../gateway/storage.gateway';
import { exportService } from '../service/export.service';
import { formatService } from '../service/format.service';
import { markdownService } from '../service/markdown.service';
import { statsService } from '../service/stats.service';
import { editorMessages } from '../toast/messages';
import type { DocumentStats } from '../types/document';
import type { ExportFormat } from '../types/export';
import type { FormatResult, MarkdownFormat, Selection } from '../types/selection';

/** Reactive facade: the only interface between the UI and the editor domain. */
class EditorModule {
	private text = $state(DEFAULT_CONTENT);
	private derivedHtml = $derived(markdownService.render(this.text));
	private derivedStats = $derived(statsService.measure(this.text));

	get content(): string {
		return this.text;
	}

	get html(): string {
		return this.derivedHtml;
	}

	get stats(): DocumentStats {
		return this.derivedStats;
	}

	hydrate(): void {
		const stored = storageGateway.read();
		if (stored !== null) {
			this.text = stored;
		}
	}

	setContent(content: string): void {
		this.text = content;
		storageGateway.write(content);
	}

	applyFormat(selection: Selection, format: MarkdownFormat): FormatResult {
		const result = formatService.apply(selection, format);
		this.setContent(result.value);
		return result;
	}

	export(format: ExportFormat): void {
		downloadGateway.save(exportService.build(this.text, format));
		notificationsModule.notifySuccess(editorMessages.exported(format));
	}

	clear(): void {
		this.setContent('');
		notificationsModule.notifyInfo(editorMessages.cleared);
	}

	restore(): void {
		this.setContent(DEFAULT_CONTENT);
		notificationsModule.notifySuccess(editorMessages.restored);
	}
}

export const editorModule = new EditorModule();
