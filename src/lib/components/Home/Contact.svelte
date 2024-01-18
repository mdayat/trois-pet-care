<script lang="ts">
	import WhatsApp from "$lib/components/icons/WhatsApp.svelte";
	import Email from "$lib/components/icons/Email.svelte";
	import Instagram from "$lib/components/icons/Instagram.svelte";
	import Tiktok from "$lib/components/icons/Tiktok.svelte";
	import Facebook from "$lib/components/icons/Facebook.svelte";
</script>

<section class="max-w-[512px] mx-auto">
	<h2 class="text-base-content font-bold text-center text-2xl mb-4">
		Hubungi Kami
	</h2>

	<p class="text-base-content mb-8">
		Kamu punya pertanyaan? Hubungi kami melalui email, nomor telepon, atau
		sosial media kami.
	</p>

	<article
		class="bg-base-100 border border-base-200 rounded-lg shadow-lg max-w-sm mx-auto p-6"
	>
		<img
			src="/logo.png"
			alt="Logo Trois Pet Care"
			class="object-cover object-center w-16 h-12 mx-auto mb-2"
		/>

		<h3 class="text-base-content font-bold text-center text-lg mb-3">
			Trois Pet Care
		</h3>

		<p class="text-base-content text-sm max-w-64 mx-auto mb-6">
			Jl. Mastrip No. 100, Kel. Sukomulyo, Kec. Lamongan, Kabupaten Lamongan,
			Jawa Timur, 62216
		</p>

		<ul class="max-w-64 mx-auto">
			<li>
				<a
					href="mailto:example@gmail.com"
					target="_blank"
					rel="noopener"
					class="text-base-content link link-hover flex justify-start items-center gap-x-4 py-2.5"
				>
					<Email />
					example@gmail.com
				</a>
			</li>

			<li>
				<a
					href="https://wa.me/6281333255532"
					target="_blank"
					rel="noopener"
					class="text-base-content link link-hover flex justify-start items-center gap-x-4 py-2.5"
				>
					<WhatsApp color="fill-primary" />
					0813-3325-5532
				</a>
			</li>

			<li>
				<a
					href="https://www.instagram.com/troispetcare"
					target="_blank"
					rel="noopener"
					class="text-base-content link link-hover flex justify-start items-center gap-x-4 py-2.5"
				>
					<Instagram />
					@troispetcare
				</a>
			</li>

			<li>
				<a
					href="https://www.tiktok.com/@troispetcareofficial"
					target="_blank"
					rel="noopener"
					class="text-base-content link link-hover flex justify-start items-center gap-x-4 py-2.5"
				>
					<Tiktok />
					@troispetcareofficial
				</a>
			</li>

			<li>
				<a
					href="https://facebook.com/troispetcare"
					target="_blank"
					rel="noopener"
					class="text-base-content link link-hover flex justify-start items-center gap-x-4 py-2.5"
				>
					<Facebook />
					troispetcare
				</a>
			</li>
		</ul>
	</article>
</section>
