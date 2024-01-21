<script lang="ts">
	import { onMount } from "svelte";
	import OpenGraphMetaTags from "$lib/components/OpenGraphMetaTags.svelte";
	import Collaboration from "$lib/components/icons/Collaboration.svelte";
	import Compassion from "$lib/components/icons/Compassion.svelte";
	import Education from "$lib/components/icons/Education.svelte";
	import Integrity from "$lib/components/icons/Integrity.svelte";

	let pageURL = "";
	let baseURL = "";

	onMount(() => {
		pageURL = window.location.href;
		baseURL = window.location.origin;
	});
</script>

<svelte:head>
	<title>Tentang Trois Pet Care</title>
	<meta
		name="description"
		content="Trois Pet Care adalah tempat pelayanan kesehatan dan kebutuhan hewan
	peliharaan."
	/>

	<OpenGraphMetaTags
		title="Tentang Kami"
		description="Trois Pet Care adalah tempat pelayanan kesehatan dan kebutuhan hewan
		peliharaan."
		{pageURL}
		imageURL={baseURL + "/logo.png"}
	/>
</svelte:head>

<main
	class="base-margin mt-[calc(66px+80px)] mb-20 lg:mt-[calc(86px+112px)] lg:mb-28 2xl:max-width"
>
	<article
		id="tentang-kami"
		class="grid place-items-center max-w-lg mx-auto lg:grid-cols-2 lg:gap-x-4 lg:max-w-max"
	>
		<h1 class="font-bold text-2xl mb-8 lg:col-span-2 lg:text-[32px] lg:mb-12">
			Tentang Trois Pet Care
		</h1>

		<div class="order-2 lg:order-1 lg:max-w-2xl">
			<p class="mb-4 lg:text-lg">
				Trois Pet Care adalah tempat pelayanan kesehatan dan kebutuhan hewan
				peliharaan. Pelayanan kesehatan hewan ditunjang dengan dokter hewan yang
				berpengalaman dan fasilitas pendukungnya.
			</p>

			<p class="lg:text-lg">
				Selain itu, Trois Pet Care juga menyediakan berbagai kebutuhan mulai
				dari pakan, aksesori, kandang, dan kebutuhan hewan peliharaan lainnya.
			</p>
		</div>

		<img
			src="/blog-hero.jpg"
			alt="Trois Pet Care"
			class="order-1 bg-base-300 object-cover object-center rounded-lg w-full aspect-video mb-6 max-w-[512px] lg:order-2 lg:mb-0 lg:ml-auto"
		/>
	</article>

	<section
		class="grid gap-y-8 place-items-center mt-20 lg:mt-28 lg:grid-cols-2 lg:place-items-center xl:grid-cols-3"
	>
		<h2
			class="font-bold text-center text-2xl lg:col-span-2 lg:text-[32px] lg:mb-8 xl:col-span-3"
		>
			Nilai-Nilai Kami
		</h2>

		<article
			class="bg-primary/25 text-primary-content rounded-lg w-full max-w-80 h-96 mx-auto p-6"
		>
			<Integrity />
			<h3 class="font-bold text-2xl mt-6 mb-3">Integritas</h3>
			<p>
				Kami menjunjung tinggi kejujuran dan transparansi dalam semua tindakan
				kami, serta menjaga standar etika tertinggi dalam perawatan hewan.
			</p>
		</article>

		<article
			class="bg-primary/25 text-primary-content rounded-lg w-full max-w-80 h-96 mx-auto p-6"
		>
			<Compassion />
			<h3 class="font-bold text-2xl mt-6 mb-3">Bela Rasa</h3>
			<p>
				Kami memperlakukan setiap pasien dengan empati, memberikan perawatan
				yang lembut dan penuh kasih sayang untuk memastikan kesejahteraan hewan
				dan dukungan bagi pemiliknya.
			</p>
		</article>

		<article
			class="bg-primary/25 text-primary-content rounded-lg w-full max-w-80 h-96 mx-auto p-6"
		>
			<Collaboration />
			<h3 class="font-bold text-2xl mt-6 mb-3">Kolaborasi</h3>
			<p>
				Kami menumbuhkan semangat kerja tim dan bekerja sama dengan pemilik
				hewan peliharaan untuk mencapai hasil terbaik bagi kesehatan hewan.
			</p>
		</article>

		<article
			class="bg-primary/25 text-primary-content rounded-lg w-full max-w-80 h-96 mx-auto p-6"
		>
			<Education />
			<h3 class="font-bold text-2xl mt-6 mb-3">Edukasi</h3>
			<p>
				Kami berkomitmen untuk terus belajar dan berbagi pengetahuan,
				memberdayakan tim kami dan mengedukasi pemilik hewan peliharaan untuk
				membuat keputusan yang tepat demi kesehatan dan kebahagiaan hewan
				mereka.
			</p>
		</article>
	</section>
</main>
