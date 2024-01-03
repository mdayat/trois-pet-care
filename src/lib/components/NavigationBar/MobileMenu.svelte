<script lang="ts">
	import { fade } from "svelte/transition";
	import { linear } from "svelte/easing";
	import ChevronUp from "../icons/ChevronUp.svelte";

	export let isLayananMenuOpened: boolean;

	const openLayananMenu = () => {
		if (isLayananMenuOpened) {
			isLayananMenuOpened = false;
		} else {
			isLayananMenuOpened = true;
		}
	};
</script>

<ul
	class="basis-full flex flex-col justify-between mt-6 mb-4"
	transition:fade={{ easing: linear, duration: 250 }}
>
	<li>
		<a href="/" class="text-neutral-50 text-lg font-bold py-2 block">Home</a>
	</li>

	<li>
		<a
			href="/tentang-kami"
			class="text-neutral-50 text-lg font-bold py-2 block"
		>
			Tentang Kami
		</a>
	</li>

	<li>
		<button
			type="button"
			class="text-neutral-50 text-lg font-bold py-2 flex justify-between items-center gap-x-2.5"
			on:click={openLayananMenu}
		>
			Layanan
			<ChevronUp {isLayananMenuOpened} />
		</button>

		{#if isLayananMenuOpened}
			<ul
				class="flex flex-col justify-between ml-4"
				transition:fade={{ easing: linear, duration: 250 }}
			>
				<li>
					<a href="/" class="text-neutral-50 font-medium block py-2.5">
						Home
					</a>
				</li>

				<li>
					<a
						href="/tentang-kami"
						class="text-neutral-50 font-medium block py-2.5"
					>
						Tentang Kami
					</a>
				</li>

				<li>
					<a href="/blog" class="text-neutral-50 font-medium block py-2.5">
						Blog
					</a>
				</li>
			</ul>
		{/if}
	</li>

	<li>
		<a href="/blog" class="text-neutral-50 text-lg font-bold py-2 block">
			Blog
		</a>
	</li>
</ul>
