<script lang="ts">
	import WhatsApp from "$lib/components/icons/WhatsApp.svelte";
	import Bars from "../../components/icons/Bars.svelte";
	import DesktopMenu from "./DesktopMenu.svelte";
	import MobileMenu from "./MobileMenu.svelte";

	let innerWidth: number;
	let isMenuOpened: boolean;
	let isLayananMenuOpened: boolean;
	let btnMenu: HTMLButtonElement;

	const toggleMenu = () => {
		if (isMenuOpened) {
			isMenuOpened = false;
			return;
		}

		if (isMenuOpened && isLayananMenuOpened) {
			isMenuOpened = false;
			isLayananMenuOpened = false;
			return;
		}

		isMenuOpened = true;
	};

	$: if (innerWidth >= 1024) {
		if (isMenuOpened) {
			isMenuOpened = false;
		}
	}
</script>

<svelte:window bind:innerWidth />

<nav
	class="bg-base-100 border-b-2 border-base-200 fixed top-0 left-0 right-0 z-10"
>
	<div
		class="base-margin flex flex-wrap justify-between items-center py-2 lg:py-3 2xl:max-width"
	>
		<img
			src="/logo.png"
			alt="Logo Trois Pet Care"
			class="object-cover object-center w-16 h-12 lg:w-20 lg:h-[60px]"
		/>

		{#if innerWidth < 1024}
			<button
				aria-label="Menu Opener"
				type="button"
				class="p-2"
				bind:this={btnMenu}
				on:click={toggleMenu}
			>
				<Bars />
			</button>

			{#if isMenuOpened}
				<MobileMenu {btnMenu} bind:isMenuOpened bind:isLayananMenuOpened />
			{/if}
		{/if}

		{#if innerWidth >= 1024}
			<DesktopMenu />

			<a
				href="https://wa.me/6281333255532"
				target="_blank"
				rel="noopener"
				class="btn btn-secondary"
			>
				Buat Janji <WhatsApp color="fill-secondary-content" />
			</a>
		{/if}
	</div>
</nav>
