<script lang="ts">
	import { linear } from "svelte/easing";
	import { scale } from "svelte/transition";
	import { trapFocus } from "$lib/actions/trapFocus";
	import ChevronUp from "../icons/ChevronUp.svelte";

	let isLayananMenuOpened: boolean;
	let btnLayananMenu: HTMLButtonElement;

	const openLayananMenu = () => {
		if (isLayananMenuOpened) {
			isLayananMenuOpened = false;
		} else {
			isLayananMenuOpened = true;
		}
	};

	const closeLayananMenu = () => {
		isLayananMenuOpened = false;
	};
</script>

<ul class="flex justify-between gap-x-6 xl:gap-x-8">
	<li>
		<a href="/" class="text-neutral-50 font-bold py-2.5 block">Home</a>
	</li>

	<li>
		<a href="/tentang-kami" class="text-neutral-50 font-bold py-2.5 block">
			Tentang Kami
		</a>
	</li>

	<li class="relative">
		<button
			type="button"
			class="text-neutral-50 font-bold py-2.5 flex justify-between items-center gap-x-2.5"
			on:click={openLayananMenu}
			bind:this={btnLayananMenu}
		>
			Layanan
			<ChevronUp {isLayananMenuOpened} />
		</button>

		{#if isLayananMenuOpened}
			<ul
				class="bg-green-600 shadow-xl absolute flex flex-col justify-between rounded-lg py-3 px-5 top-20 w-48 -left-10"
				transition:scale={{
					easing: linear,
					duration: 250,
					start: 0.85,
				}}
				use:trapFocus={{
					trapFocusTrigger: btnLayananMenu,
				}}
				on:pressESC={closeLayananMenu}
			>
				<li>
					<a href="/" class="text-neutral-50 font-medium py-2.5 block">Home</a>
				</li>

				<li>
					<a
						href="/tentang-kami"
						class="text-neutral-50 font-medium py-2.5 block"
					>
						Tentang Kami
					</a>
				</li>

				<li>
					<a href="/blog" class="text-neutral-50 font-medium py-2.5 block">
						Blog
					</a>
				</li>
			</ul>
		{/if}
	</li>

	<li>
		<a href="/blog" class="text-neutral-50 font-bold py-2.5 block">Blog</a>
	</li>
</ul>
