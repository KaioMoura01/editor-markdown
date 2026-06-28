<script lang="ts">
	interface Props {
		label: string;
		value: string | number;
	}

	const { label, value }: Props = $props();
</script>

<span class="text-content-muted flex items-center gap-1.5">
	<span class="label-md text-content tabular-nums">{value}</span>
	<span class="paragraph-sm">{label}</span>
</span>
