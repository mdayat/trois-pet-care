<script lang="ts">
	import type { Article } from "../server/notion";
	import {
		articleCoverImageAltFallback,
		joinStringToHyphen,
	} from "$lib/server/utils";

	export let article: Article;

	const focusToAnchor = (event: MouseEvent) => {
		const articleEl = event.currentTarget as HTMLElement;
		const anchor = articleEl.lastElementChild
			?.lastElementChild as HTMLAnchorElement;

		anchor.focus();
		articleEl.addEventListener(
			"click",
			function simulateClickOnAnchor() {
				anchor.click();
			},
			{ once: true }
		);
	};

	const blurFromAnchor = (event: MouseEvent) => {
		const anchor = (event.currentTarget as HTMLElement).lastElementChild
			?.lastElementChild as HTMLAnchorElement;
		anchor.blur();
	};
</script>

<article
	class="border-2 border-blue-600 cursor-pointer"
	on:mouseenter={focusToAnchor}
	on:mouseleave={blurFromAnchor}
>
	{#if article.coverImageURL}
		<img
			src={article.coverImageURL}
			alt={article.title ?? articleCoverImageAltFallback(article.id)}
			class="bg-zinc-300 w-[200px] h-[200px] object-cover object-center grid place-items-center"
		/>
	{:else}
		<img
			alt={article.title ?? articleCoverImageAltFallback(article.id)}
			class="bg-zinc-300 w-[200px] h-[200px] object-cover object-center grid place-items-center"
		/>
	{/if}

	<div>
		<h2>{article.title ?? `Artikel dengan ID ${article.id}`}</h2>

		{#if Object.hasOwn(article, "shortDescription")}
			<p>{article.shortDescription}</p>
		{/if}

		<p>
			<span>{article.author ?? "-"}</span>
			<span>{article.publishedDate ?? "-"}</span>
		</p>

		{#if article.title}
			<a
				aria-label={`Baca artikel dengan judul ${article.title}`}
				href={`/blog/${joinStringToHyphen(article.title, " ")}-${article.id}`}
				class="opacity-0"
			>
			</a>
		{:else}
			<a
				aria-label={`Baca artikel dengan ID ${article.id}`}
				href={`/blog/${article.id}`}
				class="opacity-0"
			>
			</a>
		{/if}
	</div>
</article>
