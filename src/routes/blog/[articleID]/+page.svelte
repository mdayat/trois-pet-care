<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";
	import OpenGraphMetaTags from "$lib/components/OpenGraphMetaTags.svelte";
	import Header from "$lib/components/Article/Header.svelte";
	import { articleCoverImageAltFallback } from "$lib/utils";
	import type { Article, GetArticleResponse } from "../../../types/article";
	import type { LayoutServerData } from "../../$types";

	export let data: GetArticleResponse & Article & LayoutServerData;
</script>

<svelte:head>
	<title>{data.title ?? `Artikel - ${data.id}`}</title>
	<meta name="description" content={data.shortDescription ?? ""} />

	<OpenGraphMetaTags
		title={data.title ?? `Artikel - ${data.id}`}
		description={data.shortDescription ?? ""}
		pageURL={data.pageURL}
		imageURL={data.coverImageURL ?? ""}
		imageAlt={data.title ?? articleCoverImageAltFallback(data.id)}
	/>
</svelte:head>

<Header
	articleID={data.id}
	articleTitle={data.title}
	articleAuthor={data.author}
	articlePublishedDate={data.publishedDate}
	articleCoverImageURL={data.coverImageURL}
/>

<main class="mx-8 mt-8 mb-16 lg:mb-20">
	<article id="article-content">
		<SvelteMarkdown source={data.contents} />
	</article>
</main>

<style lang="postcss">
	#article-content {
		@apply max-w-lg mx-auto lg:max-w-2xl;
	}

	#article-content :global(h2) {
		@apply text-neutral font-bold text-justify text-2xl mb-4;
	}

	#article-content :global(p) {
		@apply text-neutral text-justify mb-4;
	}

	#article-content :global(img) {
		@apply bg-base-300 object-cover object-center rounded-lg w-full aspect-video my-8;
	}

	#article-content :global(ol) {
		@apply list-decimal flex flex-col gap-y-2 pl-8 mb-4;
	}
	#article-content :global(ul) {
		@apply list-disc flex flex-col gap-y-2 pl-8 mb-4;
	}
</style>
