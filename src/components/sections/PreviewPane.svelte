<script lang="ts">
	import { editorModule } from '$packages/editor/module/editor.module.svelte';
</script>

<section
	class="border-border-subtle bg-surface-elevated flex min-h-0 flex-col overflow-hidden rounded-xl border"
>
	<div
		class="border-border-subtle bg-surface-sunken text-content-muted label-md flex items-center rounded-t-xl border-b px-4 py-3"
	>
		Pré-visualização
	</div>
	<!-- HTML sanitizado pelo markdownService (DOMPurify) antes de renderizar. -->
	<div class="markdown-preview text-content h-full min-h-[24rem] flex-1 overflow-auto p-4">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html editorModule.html}
	</div>
</section>
