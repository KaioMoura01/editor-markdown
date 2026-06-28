import { z } from 'zod';

/** Persisted document is a single Markdown string. */
export const documentSchema = z.string();

export type PersistedDocument = z.infer<typeof documentSchema>;
