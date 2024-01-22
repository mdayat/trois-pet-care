<script lang="ts">
	import OpenGraphMetaTags from "$lib/components/OpenGraphMetaTags.svelte";
	import type { LayoutServerData } from "../../$types";

	export let data: LayoutServerData;
</script>

<svelte:head>
	<title>Layanan Praktik Dokter Hewan</title>
	<meta
		name="description"
		content="Mulailah perjalanan kesehatan hewan peliharaan kamu melalui pelayanan kesehatan kami yang didampingi oleh tenaga ahli berpengalaman"
	/>

	<OpenGraphMetaTags
		title="Layanan Praktik Dokter Hewan"
		description="Mulailah perjalanan kesehatan hewan peliharaan kamu melalui pelayanan kesehatan kami yang didampingi oleh tenaga ahli berpengalaman"
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
			Praktik Dokter Hewan
		</h1>

		<div class="order-2 lg:order-1 lg:max-w-2xl">
			<p class="mb-4 lg:text-lg">
				Kami menyediakan pelayanan kesehatan hewan yang dilakukan oleh tenaga
				ahli berpengalaman dengan tujuan untuk mendapatkan diagnosis yang akurat
				melalui serangkaian pemeriksaan-pemeriksaan tertentu sehingga pasien
				mendapatkan pengobatan yang tepat.
			</p>

			<p class="lg:text-lg">
				Pelayanan kesehatan hewan meliputi konsultasi hingga tindakan medis,
				seperti sterilisasi, vaksinasi, dan operasi.
			</p>
		</div>

		<img
			src="/blog-hero.jpg"
			alt="Trois Pet Care"
			class="order-1 bg-base-300 object-cover object-center rounded-lg w-full aspect-video mb-6 max-w-[512px] lg:order-2 lg:mb-0 lg:ml-auto"
		/>
	</article>
</main>
