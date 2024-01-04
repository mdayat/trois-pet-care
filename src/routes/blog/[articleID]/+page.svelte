<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";
	import OpenGraphMetaTags from "$lib/components/OpenGraphMetaTags.svelte";
	import { articleCoverImageAltFallback } from "$lib/utils";
	import type { Article, GetArticleResponse } from "../../../types/article";
	import type { LayoutServerData } from "../../$types";

	export let data: GetArticleResponse & Article & LayoutServerData;
</script>

<svelte:head>
	<title>{data.title ?? `Artikel - ${data.id}`}</title>
	<meta name="description" content={data.shortDescription ?? ""} />
	<meta name="author" content={data.author ?? "Trois Pet Care"} />

	<OpenGraphMetaTags
		title={data.title ?? `Artikel - ${data.id}`}
		description={data.shortDescription ?? ""}
		pageURL={data.pageURL}
		imageURL={data.coverImageURL ?? ""}
		imageAlt={data.title ?? articleCoverImageAltFallback(data.id)}
	/>
</svelte:head>

<main class="mt-[calc(60px)] lg:mt-[calc(72px)]">
	<article id="article-content">
		{#if data.coverImageURL}
			<img
				src={data.coverImageURL}
				alt={data.title ?? articleCoverImageAltFallback(data.id)}
				class="bg-zinc-300 w-[200px] h-[200px] object-cover object-center grid place-items-center"
			/>
		{:else}
			<img
				alt={data.title ?? articleCoverImageAltFallback(data.id)}
				class="bg-zinc-300 w-[200px] h-[200px] object-cover object-center grid place-items-center"
			/>
		{/if}

		<SvelteMarkdown source={data.contents} />
	</article>
</main>

<style>
	#article-content :global(h2) {
		color: salmon;
		font-weight: bold;
		font-size: 24px;
		margin-bottom: 24px;
	}

	#article-content :global(p) {
		margin-bottom: 16px;
	}
</style>
