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
	class="base-padding bg-base-100 border-b-2 border-base-200 fixed top-0 left-0 right-0 z-10 min-h-[66px] max-h-max grid place-items-center lg:min-h-[86px]"
>
	<div
		class="max-width w-full flex flex-wrap justify-between items-center py-2 lg:py-3"
	>
		<img
			src="/logo.png"
			alt="Logo Trois Pet Care"
			class="object-cover object-center w-16 lg:w-20"
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
