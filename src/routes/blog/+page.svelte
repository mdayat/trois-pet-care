<script lang="ts">
	import CardArticle from "$lib/components/CardArticle.svelte";
	import LoaderSpinner from "$lib/components/LoaderSpinner.svelte";
	import OpenGraphMetaTags from "$lib/components/OpenGraphMetaTags.svelte";
	import type { LayoutServerData } from "../$types";
	import type { GetArticlesResponse } from "../../types/article";

	export let data: GetArticlesResponse & LayoutServerData;
	let isLoading = false;
	let nextCursor = data.next_cursor ?? "";
	let articleContainerEl: HTMLElement;

	const loadMoreArticles = () => {
		isLoading = true;
		const apiURL = `/api/articles?start_cursor=${nextCursor}`;

		fetch(apiURL)
			.then((res) => {
				if (res.status === 500) {
					return;
				}

				return res.json();
			})
			.then((data: GetArticlesResponse) => {
				isLoading = false;
				if (Object.hasOwn(data, "next_cursor")) {
					nextCursor = data.next_cursor as string;
				} else {
					nextCursor = "";
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

<main
	class="base-margin max-width mt-[calc(60px+64px)] mb-16 lg:mt-[calc(72px+80px)]"
>
	<article class="w-80 mx-auto mb-8 lg:w-[512px]">
		<h1
			aria-label="Artikel Trois Pet Care"
			class="font-bold text-center text-2xl mb-4"
		>
			Artikel
		</h1>

		<p>
			Kamu punya anabul? Kalau iya, yuk tingkatkan pengetahuan kamu seputar <strong
			>
				kesehatan hewan peliharaan
			</strong>
			melalui artikel kami.
		</p>
	</article>

	<div
		class="flex flex-wrap justify-center items-center gap-6"
		bind:this={articleContainerEl}
	>
		{#each data.articles as article (article.id)}
			<CardArticle {article} />
		{/each}
	</div>

	{#if nextCursor !== ""}
		{#if isLoading}
			<LoaderSpinner />
		{:else}
			<button
				type="button"
				class="text-green-600 font-bold border-2 border-green-600 py-3 px-4 rounded-md block w-fit mx-auto mt-8 hover:bg-green-600/15 active:bg-green-600/15 transition-all duration-250"
				on:click={loadMoreArticles}
			>
				Lihat lebih banyak
			</button>
		{/if}
	{/if}
</main>
