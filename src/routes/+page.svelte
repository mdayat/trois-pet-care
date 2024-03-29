<script lang="ts">
	import OpenGraphMetaTags from "$lib/components/OpenGraphMetaTags.svelte";
	import Services from "$lib/components/Home/Services.svelte";
	import Contact from "$lib/components/Home/Contact.svelte";
	import OperatingHours from "$lib/components/Home/OperatingHours.svelte";
	import Doctor from "$lib/components/Home/Doctor.svelte";
	import CircleChevronDown from "$lib/components/icons/CircleChevronDown.svelte";
	import type { LayoutServerData } from "./$types";

	export let data: LayoutServerData;
	const metaDesc =
		"Trois Pet Care adalah klinik hewan sekaligus toko hewan yang menyediakan berbagai layanan, seperti praktik dokter hewan, grooming, dan kebutuhan hewan peliharaan.";
</script>

<svelte:head>
	<title>Trois Pet Care</title>
	<meta name="description" content={metaDesc} />

	<OpenGraphMetaTags
		title="Trois Pet Care"
		description={metaDesc}
		pageURL={data.pageURL}
		imageURL={data.baseURL + "/logo.png"}
	/>
</svelte:head>

<header
	class="bg-image bg-no-repeat bg-cover bg-center grid place-items-center relative top-[66px] w-screen h-[calc(100vh-66px)] lg:h-[calc(100vh-86px)] lg:top-[86px]"
>
	<div
		class="absolute top-1/2 -translate-y-1/2 max-w-[680px] px-8 lg:px-0 lg:max-w-[900px]"
	>
		<p
			class="text-neutral-content font-bold text-2xl lg:text-5xl lg:leading-[64px]"
		>
			Solusi terpadu untuk layanan kesehatan dan kebutuhan hewan peliharaan
		</p>

		<div
			class="flex flex-col justify-start gap-y-4 mt-8 lg:flex-row lg:gap-y-0 lg:gap-x-4"
		>
			<a href="#tentang-kami" class="btn btn-primary">Kenalan Yuk!</a>
			<a href="#layanan" class="btn btn-ghost glass text-neutral-content">
				Jelajahi Layanan Kami
				<CircleChevronDown />
			</a>
		</div>
	</div>
</header>

<main class="mt-[66px] mb-20 lg:mb-28 lg:mt-[86px]">
	<article
		id="tentang-kami"
		class="grid place-items-center max-w-[calc(512px+64px)] mx-auto px-8 pt-20 lg:px-0 lg:grid-cols-2 lg:gap-x-4 lg:max-w-max lg:mx-20 lg:pt-28 xl:mx-24 2xl:max-width"
	>
		<h1
			class="text-base-content font-bold text-2xl mb-8 lg:col-span-2 lg:text-[32px] lg:mb-12"
		>
			Tentang Trois Pet Care
		</h1>

		<div class="order-2 lg:order-1 lg:max-w-2xl">
			<p class="text-base-content mb-4 lg:text-lg">
				Trois Pet Care adalah klinik hewan sekaligus toko hewan yang menyediakan
				berbagai layanan, seperti praktik dokter hewan dan grooming. Pelayanan
				kesehatan hewan ditunjang dengan dokter hewan yang berpengalaman dan
				fasilitas pendukungnya.
			</p>

			<p class="text-base-content lg:text-lg">
				Selain itu, Trois Pet Care juga menyediakan berbagai kebutuhan hewan
				mulai dari makanan, aksesori, kandang, dan kebutuhan hewan peliharaan
				lainnya.
			</p>

			<a href="/tentang-kami" class="btn btn-primary mt-6">
				Lihat Selengkapnya
			</a>
		</div>

		<img
			src="/trois-pet-care-hero.jpg"
			alt="Keluarga Trois Pet Care"
			class="order-1 bg-base-300 object-cover object-center rounded-lg w-full aspect-video mb-6 max-w-lg lg:order-2 lg:mb-0 lg:ml-auto"
		/>
	</article>

	<Services />
	<Doctor />

	<div
		id="hubungi-kami"
		class="base-margin pt-20 lg:grid lg:grid-cols-2 lg:pt-28 2xl:max-width"
	>
		<Contact />
		<OperatingHours />
	</div>
</main>

<style>
	.bg-image {
		background-image: linear-gradient(
				to right,
				rgba(51, 60, 77, 0.75),
				rgba(51, 60, 77, 0.75)
			),
			url("/trois-pet-care-hero.jpg");
	}
</style>
