<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";
	import { articleCoverImageAltFallback } from "$lib/utils";
	import type { GetArticleResponse } from "../../../types/article";

	export let data: GetArticleResponse;
</script>

<main>
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
