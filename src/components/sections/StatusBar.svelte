<script lang="ts">
	import StatBadge from '$components/composes/StatBadge.svelte';
	import { editorModule } from '$packages/editor/module/editor.module.svelte';
</script>

<div
	class="border-border-subtle bg-surface-elevated flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border px-4 py-3"
>
	<StatBadge label="palavras" value={editorModule.stats.words} />
	<StatBadge label="caracteres" value={editorModule.stats.characters} />
	<StatBadge label="linhas" value={editorModule.stats.lines} />
	<StatBadge label="min de leitura" value={editorModule.stats.readingMinutes} />
</div>
