<script lang="ts">
	import { fly } from "svelte/transition";
	import { linear } from "svelte/easing";
	import { articleCoverImageAltFallback } from "$lib/utils";
	import Clone from "../icons/Clone.svelte";

	export let articleID: string;
	export let articleTitle: string | undefined;
	export let articleAuthor: string | undefined;
	export let articlePublishedDate: string | undefined;
	export let articleCoverImageURL: string | undefined;
	let isCopied = false;

	const parseShortDateToFullDate = (date: string) => {
		if (date === "") {
			return "-";
		}

		function getMonthByItsNumber(monthNumber: number) {
			const months = [
				"Januari",
				"Februari",
				"Maret",
				"April",
				"Mei",
				"Juni",
				"Juli",
				"Agustus",
				"September",
				"Oktober",
				"November",
				"Desember",
			];
			return months[monthNumber];
		}

		const splittedDate = date.split("-");
		const month = getMonthByItsNumber(Number(splittedDate[1]));
		const fullDate = `${splittedDate[2]} ${month} ${splittedDate[0]}`;
		return fullDate;
	};

	const copyLink = () => {
		const currentURL = window.location.href;
		navigator.clipboard.writeText(currentURL);

		isCopied = true;
		setTimeout(() => {
			isCopied = false;
		}, 1500);
	};
</script>

<header
	class="px-8 max-w-[512px] mt-[calc(60px+64px)] mx-auto lg:mt-[calc(72px+80px)] lg:px-0 lg:max-w-[680px]"
>
	<div class="breadcrumbs mb-4">
		<ul>
			<li>
				<a href="/blog">Blog</a>
			</li>
			<li><p>{articleTitle}</p></li>
		</ul>
	</div>

	<h2
		class="text-neutral font-semibold text-center leading-tight text-2xl mb-6 lg:text-[32px] lg:mb-8"
	>
		{articleTitle ?? `Artikel dengan ID ${articleID}`}
	</h2>

	<div class="flex justify-between items-center mb-4">
		<p class="text-base-content/75 text-sm lg:text-base">
			{parseShortDateToFullDate(articlePublishedDate ?? "")}
		</p>

		<button
			type="button"
			class="btn btn-secondary btn-sm lg:btn-md"
			on:click={copyLink}
		>
			Salin Tautan
			<Clone />
		</button>
	</div>

	{#if articleCoverImageURL}
		<img
			src={articleCoverImageURL}
			alt={articleTitle ?? articleCoverImageAltFallback(articleID)}
			class="bg-base-300 object-cover object-center rounded-lg w-full aspect-video mb-6 lg:min-h-80 lg:max-h-96"
		/>
	{:else}
		<img
			alt={articleTitle ?? articleCoverImageAltFallback(articleID)}
			class="bg-base-300 object-cover object-center rounded-lg w-full aspect-video mb-6 lg:min-h-80 lg:max-h-96"
		/>
	{/if}

	<p class="text-sm border-l-4 border-neutral pl-2 lg:text-base">
		Penulis:
		<span class="text-base-content font-semibold">{articleAuthor ?? "-"}</span>
	</p>
</header>

{#if isCopied}
	<div
		role="alert"
		class="alert alert-success fixed top-32 left-1/2 -translate-x-1/2 w-64"
		transition:fly={{
			duration: 300,
			y: -200,
			opacity: 0.5,
			easing: linear,
		}}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="stroke-current shrink-0 h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
		<span>Berhasil menyalin tautan</span>
	</div>
{/if}
