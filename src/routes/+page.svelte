<script lang="ts">
	import OpenGraphMetaTags from "$lib/components/OpenGraphMetaTags.svelte";
	import type { LayoutServerData } from "./$types";

	export let data: LayoutServerData;
</script>

<svelte:head>
	<title>Trois Pet Care</title>
	<meta name="description" content="" />
	<meta name="author" content="Trois Pet Care" />

	<OpenGraphMetaTags
		title="Trois Pet Care"
		description=""
		pageURL={data.pageURL}
		imageURL=""
	/>
</svelte:head>

<main>
	<h1>Hello From Home Page</h1>
</main>
