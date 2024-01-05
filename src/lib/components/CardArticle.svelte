<script lang="ts">
	import type { Article } from "../server/notion";
	import { articleCoverImageAltFallback, joinStringToHyphen } from "$lib/utils";

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

	const triggerClickOnTouch = (event: TouchEvent) => {
		const anchor = (event.currentTarget as HTMLElement).lastElementChild
			?.lastElementChild as HTMLAnchorElement;
		anchor.click();
	};
</script>

<article
	class="bg-base-200 shadow-lg rounded-xl cursor-pointer max-w-80 h-fit p-4"
	on:mouseenter={focusToAnchor}
	on:mouseleave={blurFromAnchor}
	on:touchstart={triggerClickOnTouch}
>
	{#if article.coverImageURL}
		<img
			src={article.coverImageURL}
			alt={article.title ?? articleCoverImageAltFallback(article.id)}
			class="bg-base-300 w-full h-44 object-cover object-center rounded-lg mb-4"
		/>
	{:else}
		<img
			alt={article.title ?? articleCoverImageAltFallback(article.id)}
			class="bg-base-300 w-full h-44 object-cover object-center rounded-lg mb-4"
		/>
	{/if}

	<div>
		<h2 class="text-base-content font-semibold text-lg mb-2">
			{article.title ?? `Artikel dengan ID ${article.id}`}
		</h2>

		{#if Object.hasOwn(article, "shortDescription")}
			<p class="text-base-content truncate-text mb-6">
				{article.shortDescription}
			</p>
		{/if}

		<p class="text-sm flex justify-between items-center">
			<span class="text-base-content font-semibold">
				{article.author ?? "-"}
			</span>
			<span class="text-base-content/75">{article.publishedDate ?? "-"}</span>
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

<style lang="postcss">
	.truncate-text {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
</style>
