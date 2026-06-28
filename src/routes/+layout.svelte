<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';
	import '../app.css';
	import ToastViewport from '$components/sections/common/ToastViewport.svelte';
	import { editorModule } from '$packages/editor/module/editor.module.svelte';
	import { themeModule } from '$packages/theme/module/theme.module.svelte';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();

	onMount(() => {
		themeModule.hydrate();
		editorModule.hydrate();
	});
</script>

<ToastViewport />

<div class="mx-auto flex min-h-dvh w-full max-w-7xl flex-col gap-6 px-4 py-6">
	<main class="flex-1">
		{@render children()}
	</main>
	<footer class="paragraph-sm text-content-muted text-center">
		Escreva em Markdown — o documento é salvo automaticamente no seu navegador.
	</footer>
</div>
