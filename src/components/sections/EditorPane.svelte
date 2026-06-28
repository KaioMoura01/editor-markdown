<script lang="ts">
	import { tick } from 'svelte';
	import EditorToolbar from './EditorToolbar.svelte';
	import { editorModule } from '$packages/editor/module/editor.module.svelte';
	import type { MarkdownFormat } from '$packages/editor/types/selection';

	let textarea = $state<HTMLTextAreaElement | null>(null);

	function handleInput(event: Event): void {
		editorModule.setContent((event.currentTarget as HTMLTextAreaElement).value);
	}

	async function applyFormat(format: MarkdownFormat): Promise<void> {
		const field = textarea;
		if (!field) {
			return;
		}

		const result = editorModule.applyFormat(
			{ value: field.value, start: field.selectionStart, end: field.selectionEnd },
			format
		);

		await tick();
		field.focus();
		field.setSelectionRange(result.start, result.end);
	}
</script>

<section
	class="border-border-subtle bg-surface-elevated flex min-h-0 flex-col overflow-hidden rounded-xl border"
>
	<EditorToolbar onFormat={applyFormat} />
	<textarea
		bind:this={textarea}
		value={editorModule.content}
		oninput={handleInput}
		spellcheck="false"
		aria-label="Editor de Markdown"
		placeholder="Escreva em Markdown..."
		class="text-content placeholder:text-content-muted h-full min-h-[24rem] w-full flex-1 resize-none bg-transparent p-4 font-mono text-sm leading-relaxed outline-none"
	></textarea>
</section>
