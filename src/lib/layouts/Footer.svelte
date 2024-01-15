<script lang="ts">
	import { onMount } from "svelte";

	let currentYear = 2024;
	onMount(() => {
		currentYear = new Date().getFullYear();
	});
</script>

<footer class="bg-neutral base-padding py-6 lg:py-8">
	<article class="max-width lg:flex lg:flex-wrap lg:justify-between">
		<div class="max-w-80 mx-auto mb-8 lg:mx-0 lg:mb-0">
			<img
				src="/logo.png"
				alt="Logo Trois Pet Care"
				class="w-16 mx-auto mb-4"
			/>

			<p class="text-neutral-content font-medium text-center">
				Solusi terpadu untuk layanan kesehatan dan perlengkapan hewan
				peliharaan.
			</p>
		</div>

		<section
			class="border-b-2 border-b-neutral-content pb-4 mb-4 lg:border-none lg:pb-0 lg:mb-0"
		>
			<h3 class="text-neutral-content font-semibold text-lg mb-2 lg:mb-2.5">
				Klinik Kami
			</h3>

			<ul class="flex flex-col justify-between ml-4 lg:ml-0">
				<li>
					<a href="/tentang-kami" class="text-neutral-content/90 block py-1">
						Tentang Kami
					</a>
				</li>

				<li>
					<a href="/#hubungi-kami" class="text-neutral-content/90 block py-1">
						Kontak
					</a>
				</li>

				<li>
					<a href="/blog" class="text-neutral-content/90 block py-1">Blog</a>
				</li>

				<li>
					<a
						href="https://maps.app.goo.gl/u4akSXyrcFLRYgEd7"
						target="_blank"
						rel="noopener"
						class="text-neutral-content/90 block py-1"
					>
						Alamat
					</a>
				</li>
			</ul>
		</section>

		<section
			class="border-b-2 border-b-neutral-content pb-4 mb-4 lg:border-none lg:pb-0 lg:mb-0"
		>
			<h3 class="text-neutral-content font-semibold text-lg mb-2 lg:mb-2.5">
				Layanan
			</h3>

			<ul class="flex flex-col justify-between ml-4 lg:ml-0">
				<li>
					<a href="/layanan/praktik" class="text-neutral-content/90 block py-1">
						Praktik Dokter Hewan
					</a>
				</li>

				<li>
					<a
						href="/layanan/grooming"
						class="text-neutral-content/90 block py-1"
					>
						Grooming
					</a>
				</li>

				<li>
					<a
						href="/layanan/perlengkapan-hewan"
						class="text-neutral-content/90 block py-1"
					>
						Perlengkapan Hewan
					</a>
				</li>
			</ul>
		</section>

		<section
			class="border-b-2 border-b-neutral-content pb-4 mb-8 lg:border-none lg:pb-0 lg:mb-0"
		>
			<h3 class="text-neutral-content font-semibold text-lg mb-2 lg:mb-2.5">
				Ikuti Kami
			</h3>

			<ul class="flex flex-col justify-between ml-4 lg:ml-0">
				<li>
					<a
						href="https://www.instagram.com/troispetcare"
						target="_blank"
						rel="noopener"
						class="text-neutral-content/90 block py-1"
					>
						Instagram
					</a>
				</li>

				<li>
					<a
						href="https://www.tiktok.com/@troispetcareofficial"
						target="_blank"
						rel="noopener"
						class="text-neutral-content/90 block py-1"
					>
						Tiktok
					</a>
				</li>

				<li>
					<a
						href="https://facebook.com/troispetcare"
						target="_blank"
						rel="noopener"
						class="text-neutral-content/90 block py-1"
					>
						Facebook
					</a>
				</li>
			</ul>
		</section>

		<p
			class="text-neutral-content font-medium text-center lg:basis-full lg:mt-8 lg:pt-8 lg:border-t-2 lg:border-neutral-content"
		>
			&copy; {currentYear} Trois Pet Care. All Rights Reserved
		</p>
	</article>
</footer>
