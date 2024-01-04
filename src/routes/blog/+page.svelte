<script lang="ts">
	import CardArticle from "$lib/components/CardArticle.svelte";
	import OpenGraphMetaTags from "$lib/components/OpenGraphMetaTags.svelte";
	import type { LayoutServerData } from "../$types";
	import type { GetArticlesResponse } from "../../types/article";

	export let data: GetArticlesResponse & LayoutServerData;
	let hasNextCursor = Object.hasOwn(data, "next_cursor");
	let articleContainerEl: HTMLElement;

	const loadMoreArticles = (event: MouseEvent) => {
		const buttonEl = event.currentTarget as HTMLButtonElement;
		const apiURL = `/api/articles?start_cursor=${buttonEl.getAttribute(
			"data-next-cursor"
		)}`;

		fetch(apiURL)
			.then((res) => {
				if (res.status === 500) {
					return;
				}

				return res.json();
			})
			.then((data: GetArticlesResponse) => {
				if (Object.hasOwn(data, "next_cursor")) {
					buttonEl.setAttribute("data-next-cursor", data.next_cursor as string);
				} else {
					hasNextCursor = false;
				}

				for (let i = 0; i < data.articles.length; i++) {
					new CardArticle({
						target: articleContainerEl,
						props: { article: data.articles[i] },
					});
				}
			});
	};
</script>

<svelte:head>
	<title>Konten Edukasi Seputar Kesehatan Hewan</title>
	<meta name="description" content="" />
	<meta name="author" content="Trois Pet Care" />

	<OpenGraphMetaTags
		title="Konten Edukasi Seputar Kesehatan Hewan"
		description=""
		pageURL={data.pageURL}
		imageURL=""
	/>
</svelte:head>

<main class="mt-[calc(60px)] lg:mt-[calc(72px)]">
	<section>
		<h1>Trois Pet Care Articles</h1>

		<div
			class="grid grid-cols-3 place-items-center gap-4"
			bind:this={articleContainerEl}
		>
			{#each data.articles as article (article.id)}
				<CardArticle {article} />
			{/each}
		</div>

		{#if hasNextCursor}
			<button
				type="button"
				data-next-cursor={data.next_cursor}
				on:click={loadMoreArticles}
			>
				Lihat lebih banyak
			</button>
		{/if}
	</section>
</main>
