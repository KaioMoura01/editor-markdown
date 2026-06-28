import { EDITOR_STORAGE_KEY } from '../constants/config';
import { documentSchema } from '../validators/schemas';

/** Persistence boundary: reads/writes the document to LocalStorage. */
export const storageGateway = {
	read(): string | null {
		if (typeof localStorage === 'undefined') {
			return null;
		}

		const raw = localStorage.getItem(EDITOR_STORAGE_KEY);
		if (raw === null) {
			return null;
		}

		const parsed = documentSchema.safeParse(raw);
		return parsed.success ? parsed.data : null;
	},

	write(content: string): void {
		if (typeof localStorage === 'undefined') {
			return;
		}

		localStorage.setItem(EDITOR_STORAGE_KEY, content);
	}
};
