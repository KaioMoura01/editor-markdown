<script lang="ts">
	import EditorPane from './EditorPane.svelte';
	import PreviewPane from './PreviewPane.svelte';
	import StatusBar from './StatusBar.svelte';
</script>

<div class="flex flex-col gap-4">
	<div class="grid min-h-[28rem] gap-4 lg:grid-cols-2">
		<EditorPane />
		<PreviewPane />
	</div>
	<StatusBar />
</div>
