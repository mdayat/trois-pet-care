<script lang="ts">
	import OpenGraphMetaTags from "$lib/components/OpenGraphMetaTags.svelte";
	import type { LayoutServerData } from "../../$types";

	export let data: LayoutServerData;
	const metaDesc =
		"Grooming merupakan layanan yang bertujuan untuk menjaga kesehatan, kebersihan, dan kerapian hewan peliharaan melalui serangkaian proses.";
</script>

<svelte:head>
	<title>Layanan Grooming</title>
	<meta name="description" content={metaDesc} />

	<OpenGraphMetaTags
		title="Layanan Grooming"
		description={metaDesc}
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
			Grooming
		</h1>

		<div class="order-2 lg:order-1 lg:max-w-2xl">
			<p class="lg:text-lg">
				Kami menyediakan layanan <i>grooming</i> atau perawatan untuk menjaga kebersihan
				dan kerapian hewan peliharaan. Perawatan dilakukan dengan cara pemotongan
				kuku, pembersihan telinga dan kotoran mata, serta merapikan rambut disekitar
				anus dan dibawah telapak kaki.
			</p>
		</div>

		<img
			src="/grooming.jpeg"
			alt="Kucing Yang Akan Dilakukan Grooming"
			class="order-1 bg-base-300 object-cover object-bottom rounded-lg w-full aspect-video mb-6 max-w-[512px] lg:order-2 lg:mb-0 lg:ml-auto"
		/>
	</article>
</main>
