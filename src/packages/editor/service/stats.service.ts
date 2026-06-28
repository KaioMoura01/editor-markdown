import { WORDS_PER_MINUTE } from '../constants/config';
import type { DocumentStats } from '../types/document';

/** Computes word/character/line counts and reading time for a document. */
export const statsService = {
	measure(content: string): DocumentStats {
		const words = countWords(content);

		return {
			words,
			characters: content.length,
			lines: content.length === 0 ? 0 : content.split('\n').length,
			readingMinutes: Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))
		};
	}
};

function countWords(content: string): number {
	const trimmed = content.trim();
	if (trimmed.length === 0) {
		return 0;
	}

	return trimmed.split(/\s+/).length;
}
