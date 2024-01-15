<script lang="ts">
	import { page } from "$app/stores";
	import { linear } from "svelte/easing";
	import { scale } from "svelte/transition";
	import { trapFocus } from "$lib/actions/trapFocus";
	import { clickOutside } from "$lib/actions/clickOutside";
	import ChevronUp from "../../components/icons/ChevronUp.svelte";

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
		<a
			href="/"
			class={`font-bold py-2.5 block ${
				$page.url.pathname === "/" ? "text-primary" : "menu-item"
			}`}
		>
			Beranda
		</a>
	</li>

	<li>
		<a
			href="/tentang-kami"
			class={`font-bold py-2.5 block ${
				$page.url.pathname === "/tentang-kami" ? "text-primary" : "menu-item"
			}`}
		>
			Tentang Kami
		</a>
	</li>

	<li class="relative">
		<button
			type="button"
			class={`font-bold py-2.5 group flex justify-between items-center gap-x-2.5 ${
				$page.url.pathname.includes("/layanan") ? "text-primary" : "menu-item"
			}`}
			on:click={openLayananMenu}
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
				class="bg-base-100 border border-base-200 shadow-lg absolute flex flex-col justify-between rounded-lg py-3 px-5 top-20 w-48 -left-10"
				transition:scale={{
					easing: linear,
					duration: 250,
					start: 0.85,
				}}
				use:trapFocus={{
					trapFocusTrigger: btnLayananMenu,
				}}
				use:clickOutside={{ excludedEls: btnLayananMenu }}
				on:pressESC={closeLayananMenu}
				on:clickOutside={closeLayananMenu}
			>
				<li>
					<a
						href="/layanan/praktik"
						class={`font-medium py-2.5 block ${
							$page.url.pathname === "/layanan/praktik"
								? "text-primary"
								: "menu-item"
						}`}
						on:click={closeLayananMenu}
					>
						Praktik
					</a>
				</li>

				<li>
					<a
						href="/layanan/grooming"
						class={`font-medium py-2.5 block ${
							$page.url.pathname === "/layanan/grooming"
								? "text-primary"
								: "menu-item"
						}`}
						on:click={closeLayananMenu}
					>
						Grooming
					</a>
				</li>

				<li>
					<a
						href="/layanan/perlengkapan-hewan"
						class={`font-medium py-2.5 block ${
							$page.url.pathname === "/layanan/perlengkapan-hewan"
								? "text-primary"
								: "menu-item"
						}`}
						on:click={closeLayananMenu}
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
			class={`font-bold py-2.5 block min-w-11 ${
				$page.url.pathname === "/blog" || $page.url.pathname.includes("/blog")
					? "text-primary"
					: "menu-item"
			}`}
		>
			Blog
		</a>
	</li>
</ul>
