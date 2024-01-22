<script lang="ts">
	import OpenGraphMetaTags from "$lib/components/OpenGraphMetaTags.svelte";
	import type { LayoutServerData } from "../../$types";

	export let data: LayoutServerData;
</script>

<svelte:head>
	<title>Layanan Kebutuhan Hewan</title>
	<meta
		name="description"
		content="Penuhi kebutuhan hewan peliharaan kamu melalui toko hewan kami, seperti makanan, vitamin, kandang, mainan, dan sebagainya"
	/>

	<OpenGraphMetaTags
		title="Layanan Kebutuhan Hewan"
		description="Penuhi kebutuhan hewan peliharaan kamu melalui toko hewan kami, seperti makanan, vitamin, kandang, mainan, dan sebagainya"
		pageURL={data.pageURL}
		imageURL={data.baseURL + "/logo.png"}
	/>
</svelte:head>

<main
	class="base-margin mt-[calc(66px+80px)] mb-20 lg:mt-[calc(86px+112px)] lg:mb-28 2xl:max-width"
>
	<article
		class="grid place-items-center max-w-lg mx-auto lg:grid-cols-2 lg:gap-x-4 lg:max-w-max"
	>
		<h1 class="font-bold text-2xl mb-8 lg:col-span-2 lg:text-[32px] lg:mb-12">
			Kebutuhan Hewan
		</h1>

		<div class="order-2 lg:order-1 lg:max-w-2xl">
			<p class="mb-4 lg:text-lg">
				Kami menyediakan layanan kebutuhan hewan yang lengkap dan beragam,
				seperti makanan hewan yang berkualitas, koleksi mainan yang
				menyenangkan, hingga kebutuhan mendasar seperti, vitamin, obat-obatan,
				kandang, dan sebagainya.
			</p>

			<p class="lg:text-lg">
				Toko hewan kami tersedia baik secara <i>online</i> maupun
				<i>offline</i>. Kunjungi toko <i>offline</i> kami dengan mengeklik
				<a
					href="https://maps.app.goo.gl/u4akSXyrcFLRYgEd7"
					target="_blank"
					rel="noopener"
					class="link link-primary"
				>
					tautan ini
				</a>
				atau kunjungi toko <i>online</i> kami melalui
				<a
					href="https://www.tokopedia.com/trois-3?utm_campaign=Shop-126756939-10789193-170124&utm_source=salinlink&utm_medium=share"
					target="_blank"
					rel="noopener"
					class="link link-primary"
				>
					Tokopedia
				</a>
				dan
				<a
					href="https://shopee.co.id/troispetshop"
					target="_blank"
					rel="noopener"
					class="link link-primary"
				>
					Shopee</a
				>.
			</p>
		</div>

		<img
			src="/blog-hero.jpg"
			alt="Trois Pet Care"
			class="order-1 bg-base-300 object-cover object-center rounded-lg w-full aspect-video mb-6 max-w-[512px] lg:order-2 lg:mb-0 lg:ml-auto"
		/>
	</article>
</main>
