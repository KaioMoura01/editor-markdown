<script lang="ts">
	import EditorWorkspace from '$components/sections/EditorWorkspace.svelte';
	import TopBar from '$components/sections/common/TopBar.svelte';
</script>

<svelte:head>
	<title>Editor de Markdown</title>
</svelte:head>

<div class="flex flex-col gap-6">
	<TopBar />
	<EditorWorkspace />
</div>
