<script lang="ts">
	import { FileCode, FileDown, FileText, RotateCcw } from 'lucide-svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { editorModule } from '$packages/editor/module/editor.module.svelte';
</script>

<header class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
	<div class="flex items-center justify-between gap-3 sm:justify-start">
		<div class="flex items-center gap-3">
			<span class="bg-brand text-brand-contrast grid size-11 place-items-center rounded-xl">
				<FileText class="size-6" />
			</span>
			<div>
				<h1 class="title-sm text-content">Editor de Markdown</h1>
				<p class="paragraph-sm text-content-muted">Preview em tempo real e exportação</p>
			</div>
		</div>
		<div class="sm:hidden">
			<ThemeToggle />
		</div>
	</div>

	<div class="flex flex-wrap items-center gap-2">
		<button
			type="button"
			onclick={() => editorModule.restore()}
			class="label-lg border-border-subtle bg-surface-elevated text-content hover:bg-surface-sunken flex items-center gap-2 rounded-lg border px-3 py-2 transition-colors"
		>
			<RotateCcw class="size-4" /> Exemplo
		</button>
		<button
			type="button"
			onclick={() => editorModule.export('markdown')}
			class="label-lg border-border-subtle bg-surface-elevated text-content hover:bg-surface-sunken flex items-center gap-2 rounded-lg border px-3 py-2 transition-colors"
		>
			<FileDown class="size-4" /> .md
		</button>
		<button
			type="button"
			onclick={() => editorModule.export('html')}
			class="label-lg bg-brand text-brand-contrast flex items-center gap-2 rounded-lg px-3 py-2 transition-opacity hover:opacity-90"
		>
			<FileCode class="size-4" /> .html
		</button>
		<div class="hidden sm:block">
			<ThemeToggle />
		</div>
	</div>
</header>
