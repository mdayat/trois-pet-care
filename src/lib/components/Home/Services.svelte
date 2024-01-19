<script lang="ts">
	import ArrowLink from "../icons/ArrowLink.svelte";
	import Grooming from "../icons/Grooming.svelte";
	import Heart from "../icons/Heart.svelte";
	import PetSupplies from "../icons/PetSupplies.svelte";
</script>

<section id="layanan" class="pt-20 lg:pt-28">
	<div
		class="base-padding bg-primary text-primary-content flex flex-wrap justify-center items-center gap-6 py-12 lg:gap-8"
	>
		<h2
			class="basis-full font-bold text-center text-2xl mb-4 lg:text-[32px] lg:mb-6"
		>
			Layanan Kami
		</h2>

		<article
			class="bg-base-100 text-base-content rounded-lg flex flex-col max-w-96 h-[calc(384px-128px)] overflow-y-scroll py-4 px-6"
		>
			<Heart />
			<h3
				class="font-medium text-lg flex justify-between items-center mt-4 mb-2"
			>
				Praktik Dokter Hewan
			</h3>

			<p class="text-base-content/90">
				Pemeriksaan kesehatan hewan secara komprehensif agar dapat memberikan
				pengobatan yang tepat.
			</p>

			<a
				href="/layanan/praktik"
				class="link link-primary link-hover flex justify-start items-center gap-x-2 w-fit mt-auto"
			>
				Selengkapnya
				<ArrowLink />
			</a>
		</article>

		<article
			class="bg-base-100 text-base-content rounded-lg flex flex-col max-w-96 h-[calc(384px-128px)] overflow-y-scroll py-4 px-6"
		>
			<Grooming />
			<h3
				class="font-medium text-lg flex justify-between items-center mt-4 mb-2"
			>
				Grooming
			</h3>

			<p class="text-base-content/90">
				Perawatan untuk menjaga kebersihan hewan, seperti pemotongan kuku,
				pembersihan telinga, dan sebagainya.
			</p>

			<a
				href="/layanan/grooming"
				class="link link-primary link-hover flex justify-start items-center gap-x-2 w-fit mt-auto"
			>
				Selengkapnya
				<ArrowLink />
			</a>
		</article>

		<article
			class="bg-base-100 text-base-content rounded-lg flex flex-col max-w-96 h-[calc(384px-128px)] overflow-y-scroll py-4 px-6"
		>
			<PetSupplies />
			<h3
				class="font-medium text-lg flex justify-between items-center mt-4 mb-2"
			>
				Kebutuhan Hewan
			</h3>

			<p class="text-base-content/90">
				Perlengkapan kebutuhan hewan, mulai dari makanan, vitamin, hingga
				aksesori hewan.
			</p>

			<a
				href="/layanan/kebutuhan-hewan"
				class="link link-primary link-hover flex justify-start items-center gap-x-2 w-fit mt-auto"
			>
				Selengkapnya
				<ArrowLink />
			</a>
		</article>
	</div>
</section>
