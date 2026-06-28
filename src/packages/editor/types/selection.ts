/** A text selection inside the editor textarea. */
export interface Selection {
	value: string;
	start: number;
	end: number;
}

/** Result of applying a format: new text plus where the caret should land. */
export interface FormatResult {
	value: string;
	start: number;
	end: number;
}

/** Markdown formats the toolbar can apply. */
export type MarkdownFormat =
	| 'bold'
	| 'italic'
	| 'heading'
	| 'quote'
	| 'code'
	| 'link'
	| 'unordered-list'
	| 'ordered-list';
