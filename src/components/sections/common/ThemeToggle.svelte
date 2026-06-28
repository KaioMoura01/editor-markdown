<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { themeModule } from '$packages/theme/module/theme.module.svelte';
</script>

<button
	type="button"
	onclick={() => themeModule.toggle()}
	aria-label={themeModule.isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
	class="border-border-subtle bg-surface-elevated text-content hover:bg-surface grid size-10 place-items-center rounded-full border transition-colors"
>
	{#if themeModule.isDark}
		<Sun class="size-5" />
	{:else}
		<Moon class="size-5" />
	{/if}
</button>
