<script lang="ts">
	import type { ComponentType, SvelteComponent } from 'svelte';

	interface Props {
		icon: ComponentType<SvelteComponent>;
		label: string;
		onclick: () => void;
	}

	const { icon: Icon, label, onclick }: Props = $props();
</script>

<button
	type="button"
	{onclick}
	title={label}
	aria-label={label}
	class="border-border-subtle bg-surface-elevated text-content hover:bg-surface-sunken grid size-9 place-items-center rounded-lg border transition-colors"
>
	<Icon class="size-4" />
</button>
