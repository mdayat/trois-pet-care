<script lang="ts">
	import { fade } from "svelte/transition";
	import { linear } from "svelte/easing";
	import { trapFocus } from "$lib/actions/trapFocus";
	import { clickOutside } from "$lib/actions/clickOutside";
	import ChevronUp from "../../components/icons/ChevronUp.svelte";

	export let isMenuOpened: boolean;
	export let isLayananMenuOpened: boolean;
	export let btnMenu: HTMLButtonElement;
	let btnLayananMenu: HTMLButtonElement;

	const toggleLayananMenu = () => {
		if (isLayananMenuOpened) {
			isLayananMenuOpened = false;
		} else {
			isLayananMenuOpened = true;
		}
	};

	const closeMenu = () => {
		isMenuOpened = false;
		if (isLayananMenuOpened) {
			isLayananMenuOpened = false;
		}
	};

	const closeLayananMenu = () => {
		isLayananMenuOpened = false;
	};
</script>

<ul
	class="basis-full flex flex-col justify-between mt-6 mb-4"
	transition:fade={{ easing: linear, duration: 250 }}
	use:trapFocus={{ trapFocusTrigger: btnMenu }}
	use:clickOutside={{ excludedEls: btnMenu }}
	on:pressESC={closeMenu}
	on:clickOutside={closeMenu}
>
	<li>
		<a
			href="/"
			class="text-neutral-50 text-lg font-bold py-2 block"
			on:click={closeMenu}
		>
			Home
		</a>
	</li>

	<li>
		<a
			href="/tentang-kami"
			class="text-neutral-50 text-lg font-bold py-2 block"
			on:click={closeMenu}
		>
			Tentang Kami
		</a>
	</li>

	<li>
		<button
			type="button"
			class="text-neutral-50 text-lg font-bold py-2 flex justify-between items-center gap-x-2.5"
			on:click={toggleLayananMenu}
			bind:this={btnLayananMenu}
		>
			Layanan
			<ChevronUp {isLayananMenuOpened} />
		</button>

		{#if isLayananMenuOpened}
			<ul
				class="flex flex-col justify-between ml-4"
				transition:fade={{ easing: linear, duration: 250 }}
				use:trapFocus={{ trapFocusTrigger: btnLayananMenu }}
				on:pressESC={closeLayananMenu}
			>
				<li>
					<a
						href="/"
						class="text-neutral-50 font-medium block py-2.5"
						on:click={closeMenu}
					>
						Home
					</a>
				</li>

				<li>
					<a
						href="/tentang-kami"
						class="text-neutral-50 font-medium block py-2.5"
						on:click={closeMenu}
					>
						Tentang Kami
					</a>
				</li>

				<li>
					<a
						href="/blog"
						class="text-neutral-50 font-medium block py-2.5"
						on:click={closeMenu}
					>
						Blog
					</a>
				</li>
			</ul>
		{/if}
	</li>

	<li>
		<a
			href="/blog"
			class="text-neutral-50 text-lg font-bold py-2 block"
			on:click={closeMenu}
		>
			Blog
		</a>
	</li>
</ul>
