<script lang="ts">
	import Bars from "../icons/Bars.svelte";
	import DesktopMenu from "./DesktopMenu.svelte";
	import MobileMenu from "./MobileMenu.svelte";

	let innerWidth: number;
	let isMenuOpened: boolean;
	let isLayananMenuOpened: boolean;

	const openMenu = () => {
		if (isMenuOpened) {
			if (isLayananMenuOpened) {
				isLayananMenuOpened = false;
			}

			isMenuOpened = false;
		} else {
			isMenuOpened = true;
		}
	};
</script>

<svelte:window bind:innerWidth />

<nav class="bg-green-600 fixed top-0 left-0 right-0">
	<div
		class="flex flex-wrap justify-between items-center mx-8 py-2 lg:py-3 lg:mx-20 xl:mx-24 2xl:mx-28"
	>
		<img src="/favicon.png" alt="Logo Trois Pet Care" class="w-10 lg:w-12" />

		{#if innerWidth < 1024}
			<button type="button" class="p-2" on:click={openMenu}>
				<Bars />
			</button>

			{#if isMenuOpened}
				<MobileMenu {isLayananMenuOpened} />
			{/if}
		{/if}

		{#if innerWidth >= 1024}
			<DesktopMenu />
		{/if}
	</div>
</nav>
