<script lang="ts">
	import { page } from "$app/stores";
	import { fade } from "svelte/transition";
	import { linear } from "svelte/easing";
	import { trapFocus } from "$lib/actions/trapFocus";
	import { clickOutside } from "$lib/actions/clickOutside";
	import ChevronUp from "../../components/icons/ChevronUp.svelte";
	import WhatsApp from "$lib/components/icons/WhatsApp.svelte";

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
			class={`text-lg font-bold py-2 block ${
				$page.url.pathname === "/" ? "text-primary" : "menu-item"
			}`}
			on:click={closeMenu}
		>
			Beranda
		</a>
	</li>

	<li>
		<a
			href="/tentang-kami"
			class={`text-lg font-bold py-2 block ${
				$page.url.pathname === "/tentang-kami" ? "text-primary" : "menu-item"
			}`}
			on:click={closeMenu}
		>
			Tentang Kami
		</a>
	</li>

	<li>
		<button
			type="button"
			class={`text-lg font-bold py-2 group flex justify-between items-center gap-x-2.5 ${
				$page.url.pathname.includes("/layanan") ? "text-primary" : "menu-item"
			}`}
			on:click={toggleLayananMenu}
			bind:this={btnLayananMenu}
		>
			Layanan
			<ChevronUp
				{isLayananMenuOpened}
				isCurrentPage={$page.url.pathname.includes("/layanan")}
			/>
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
						href="/layanan/praktik"
						class={`font-medium block py-2.5 ${
							$page.url.pathname === "/layanan/praktik"
								? "text-primary"
								: "menu-item"
						}`}
						on:click={closeMenu}
					>
						Praktik
					</a>
				</li>

				<li>
					<a
						href="/layanan/grooming"
						class={`font-medium block py-2.5 ${
							$page.url.pathname === "/layanan/grooming"
								? "text-primary"
								: "menu-item"
						}`}
						on:click={closeMenu}
					>
						Grooming
					</a>
				</li>

				<li>
					<a
						href="/layanan/perlengkapan-hewan"
						class={`font-medium block py-2.5 ${
							$page.url.pathname === "/layanan/perlengkapan-hewan"
								? "text-primary"
								: "menu-item"
						}`}
						on:click={closeMenu}
					>
						Perlengkapan
					</a>
				</li>
			</ul>
		{/if}
	</li>

	<li>
		<a
			href="/blog"
			class={`text-lg font-bold py-2 block ${
				$page.url.pathname === "/blog" || $page.url.pathname.includes("/blog")
					? "text-primary"
					: "menu-item"
			}`}
			on:click={closeMenu}
		>
			Blog
		</a>
	</li>

	<li>
		<a
			href="https://wa.me/6281333255532"
			target="_blank"
			rel="noopener"
			class="btn btn-secondary btn-block mt-8"
		>
			Buat Janji <WhatsApp color="fill-secondary-content" />
		</a>
	</li>
</ul>
