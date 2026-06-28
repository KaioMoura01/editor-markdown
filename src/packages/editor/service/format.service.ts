import type { FormatResult, MarkdownFormat, Selection } from '../types/selection';

const WRAPPERS: Partial<Record<MarkdownFormat, string>> = {
	bold: '**',
	italic: '*',
	code: '`'
};

const LINE_PREFIXES: Partial<Record<MarkdownFormat, (index: number) => string>> = {
	heading: () => '# ',
	quote: () => '> ',
	'unordered-list': () => '- ',
	'ordered-list': (index) => `${index + 1}. `
};

/** Pure rules for applying a Markdown format to a text selection. */
export const formatService = {
	apply(selection: Selection, format: MarkdownFormat): FormatResult {
		const wrapper = WRAPPERS[format];
		if (wrapper) {
			return wrapSelection(selection, wrapper);
		}

		const prefix = LINE_PREFIXES[format];
		if (prefix) {
			return prefixLines(selection, prefix);
		}

		return makeLink(selection);
	}
};

function wrapSelection(selection: Selection, wrapper: string): FormatResult {
	const { value, start, end } = selection;
	const selected = value.slice(start, end) || 'texto';
	const replacement = `${wrapper}${selected}${wrapper}`;

	return {
		value: value.slice(0, start) + replacement + value.slice(end),
		start: start + wrapper.length,
		end: start + wrapper.length + selected.length
	};
}

function prefixLines(selection: Selection, prefix: (index: number) => string): FormatResult {
	const { value, start, end } = selection;
	const blockStart = lineStart(value, start);
	const block = value.slice(blockStart, end);
	const prefixed = block
		.split('\n')
		.map((line, index) => `${prefix(index)}${line}`)
		.join('\n');

	return {
		value: value.slice(0, blockStart) + prefixed + value.slice(end),
		start: blockStart,
		end: blockStart + prefixed.length
	};
}

function makeLink(selection: Selection): FormatResult {
	const { value, start, end } = selection;
	const label = value.slice(start, end) || 'texto do link';
	const replacement = `[${label}](https://)`;
	const urlStart = start + label.length + 3;

	return {
		value: value.slice(0, start) + replacement + value.slice(end),
		start: urlStart,
		end: urlStart + 'https://'.length
	};
}

function lineStart(value: string, index: number): number {
	const newline = value.lastIndexOf('\n', index - 1);
	return newline + 1;
}
