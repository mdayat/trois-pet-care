<script lang="ts">
	import { onMount } from "svelte";

	let currentYear = 2024;
	onMount(() => {
		currentYear = new Date().getFullYear();
	});
</script>

<footer
	class="bg-base-100 border-t-2 border-base-200 shadow-inner shadow-base-200 text-base-content py-8 lg:pt-12"
>
	<article
		class="base-margin lg:flex lg:flex-wrap lg:justify-between 2xl:max-width"
	>
		<div class="max-w-80 mx-auto mb-8 lg:mx-0 lg:mb-0">
			<img
				src="/logo.png"
				alt="Logo Trois Pet Care"
				class="w-16 mx-auto mb-4"
			/>

			<p class="font-medium text-center">
				Solusi terpadu untuk layanan kesehatan dan perlengkapan hewan
				peliharaan.
			</p>
		</div>

		<section
			class="border-b-2 border-b-base-200 pb-4 mb-4 lg:border-none lg:pb-0 lg:mb-0"
		>
			<h3 class="font-semibold text-lg mb-2 lg:mb-2.5">Klinik Kami</h3>

			<ul class="flex flex-col justify-between ml-4 lg:ml-0">
				<li>
					<a href="/tentang-kami" class="text-base-content/90 block py-1">
						Tentang Kami
					</a>
				</li>

				<li>
					<a href="/#hubungi-kami" class="text-base-content/90 block py-1">
						Kontak
					</a>
				</li>

				<li>
					<a href="/blog" class="text-base-content/90 block py-1">Blog</a>
				</li>
			</ul>
		</section>

		<section
			class="border-b-2 border-b-base-200 pb-4 mb-4 lg:border-none lg:pb-0 lg:mb-0"
		>
			<h3 class="font-semibold text-lg mb-2 lg:mb-2.5">Layanan</h3>

			<ul class="flex flex-col justify-between ml-4 lg:ml-0">
				<li>
					<a href="/layanan/praktik" class="text-base-content/90 block py-1">
						Praktik Dokter Hewan
					</a>
				</li>

				<li>
					<a href="/layanan/grooming" class="text-base-content/90 block py-1">
						Grooming
					</a>
				</li>

				<li>
					<a
						href="/layanan/kebutuhan-hewan"
						class="text-base-content/90 block py-1"
					>
						Kebutuhan Hewan
					</a>
				</li>
			</ul>
		</section>

		<section class="border-b-2 border-b-base-200 pb-4 lg:border-none lg:pb-0">
			<h3 class="font-semibold text-lg mb-2 lg:mb-2.5">Toko Kami</h3>

			<ul class="flex flex-col justify-between ml-4 lg:ml-0">
				<li>
					<a
						href="https://maps.app.goo.gl/u4akSXyrcFLRYgEd7"
						target="_blank"
						rel="noopener"
						class="text-base-content/90 block py-1"
					>
						Alamat
					</a>
				</li>

				<li>
					<a
						href="https://www.tokopedia.com/trois-3?utm_campaign=Shop-126756939-10789193-170124&utm_source=salinlink&utm_medium=share"
						target="_blank"
						rel="noopener"
						class="text-base-content/90 block py-1"
					>
						Tokopedia
					</a>
				</li>

				<li>
					<a
						href="https://shopee.co.id/troispetshop"
						target="_blank"
						rel="noopener"
						class="text-base-content/90 block py-1"
					>
						Shopee
					</a>
				</li>
			</ul>
		</section>

		<hr
			class="basis-full border border-transparent my-4 lg:border-base-200 lg:my-8"
		/>

		<p class="font-medium text-center lg:basis-full">
			&copy; {currentYear} Trois Pet Care. All Rights Reserved
		</p>
	</article>
</footer>
