<script lang="ts">
	import { onMount } from "svelte";
	import CardArticle from "$lib/components/CardArticle.svelte";
	import LoaderSpinner from "$lib/components/LoaderSpinner.svelte";
	import OpenGraphMetaTags from "$lib/components/OpenGraphMetaTags.svelte";
	import type { GetArticlesResponse } from "../../types/article";

	export let data: GetArticlesResponse;
	let isLoading = false;
	let nextCursor = data.next_cursor ?? "";
	let articleContainerEl: HTMLElement;

	let pageURL = "";
	let baseURL = "";

	onMount(() => {
		pageURL = window.location.href;
		baseURL = window.location.origin;
	});

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
		{pageURL}
		imageURL={baseURL + "/logo.png"}
	/>
</svelte:head>

<header
	class="bg-image bg-no-repeat bg-cover bg-center relative w-screen h-64 top-[66px] lg:h-96 lg:top-[86px]"
>
	<p
		class="text-neutral-content font-medium text-center text-lg absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-80 lg:w-auto lg:text-2xl lg:left-1/2 lg:-translate-x-1/2"
	>
		Yuk tingkatkan pengetahuan kamu seputar
		<strong class="text-primary">kesehatan hewan</strong>
		melalui artikel kami.
	</p>
</header>

<main
	class="base-margin mt-[calc(66px+64px)] mb-16 lg:mt-[calc(86px+80px)] lg:mb-20 2xl:max-width"
>
	<h1
		class="text-neutral font-bold text-center text-2xl mb-6 lg:text-[32px] lg:mb-8"
	>
		Artikel Terkini
	</h1>

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
				class="btn btn-outline btn-primary block mx-auto mt-8"
				on:click={loadMoreArticles}
			>
				Lihat lebih banyak
			</button>
		{/if}
	{/if}
</main>

<style>
	.bg-image {
		background-image: linear-gradient(
				to right,
				rgba(51, 60, 77, 0.75),
				rgba(51, 60, 77, 0.75)
			),
			url("/blog-hero.jpg");
	}
</style>
