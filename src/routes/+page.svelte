<script lang="ts">
	import { onMount } from "svelte";
	import OpenGraphMetaTags from "$lib/components/OpenGraphMetaTags.svelte";
	import type { LayoutServerData } from "./$types";

	let absoluteImageURL: string;

	onMount(() => {
		absoluteImageURL = new URL("/blog-hero.jpg", document.baseURI).href;
	});

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
		imageURL={absoluteImageURL}
	/>
</svelte:head>

<header
	class="bg-image bg-no-repeat bg-cover bg-center grid place-items-center relative w-screen h-[calc(100vh-66px)] top-[66px] lg:h-[calc(100vh-86px)] lg:top-[86px]"
>
	<div
		class="absolute top-1/2 -translate-y-1/2 max-w-[680px] px-8 lg:px-0 lg:max-w-[900px]"
	>
		<p
			class="text-neutral-content font-bold text-2xl lg:text-5xl lg:leading-[64px]"
		>
			Solusi terpadu untuk perawatan kesehatan dan persediaan hewan peliharaan
		</p>

		<div
			class="flex flex-col justify-start gap-y-4 mt-8 lg:flex-row lg:gap-y-0 lg:gap-x-4"
		>
			<a href="#tentang-kami" class="btn btn-primary">Kenalan Yuk!</a>
			<a
				href="#layanan"
				class="btn btn-active btn-ghost glass text-neutral-content"
			>
				Jelajahi Layanan Kami
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					class="fill-neutral-content w-4 h-4"
				>
					<path
						d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"
					/>
				</svg>
			</a>
		</div>
	</div>
</header>

<main
	class="base-margin max-width mt-[calc(60px+64px)] mb-16 lg:mt-[calc(72px+80px)] lg:mb-20"
></main>

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
