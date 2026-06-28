<script lang="ts">
	import { Bold, Code, Heading, Italic, Link, List, ListOrdered, Quote } from 'lucide-svelte';
	import type { ComponentType, SvelteComponent } from 'svelte';
	import ToolbarButton from '$components/composes/ToolbarButton.svelte';
	import type { MarkdownFormat } from '$packages/editor/types/selection';

	interface Props {
		onFormat: (format: MarkdownFormat) => void;
	}

	const { onFormat }: Props = $props();

	const actions: { format: MarkdownFormat; label: string; icon: ComponentType<SvelteComponent> }[] =
		[
			{ format: 'heading', label: 'Título', icon: Heading },
			{ format: 'bold', label: 'Negrito', icon: Bold },
			{ format: 'italic', label: 'Itálico', icon: Italic },
			{ format: 'quote', label: 'Citação', icon: Quote },
			{ format: 'code', label: 'Código', icon: Code },
			{ format: 'link', label: 'Link', icon: Link },
			{ format: 'unordered-list', label: 'Lista', icon: List },
			{ format: 'ordered-list', label: 'Lista numerada', icon: ListOrdered }
		];
</script>

<div
	class="border-border-subtle bg-surface-sunken flex flex-wrap items-center gap-1.5 rounded-t-xl border-b px-3 py-2"
>
	{#each actions as action (action.format)}
		<ToolbarButton
			icon={action.icon}
			label={action.label}
			onclick={() => onFormat(action.format)}
		/>
	{/each}
</div>
