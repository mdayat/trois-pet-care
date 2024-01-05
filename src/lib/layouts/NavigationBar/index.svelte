<script lang="ts">
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

<nav class="base-padding bg-neutral fixed top-0 left-0 right-0 z-10">
	<div
		class="max-width flex flex-wrap justify-between items-center py-2 lg:py-3"
	>
		<img
			src="/favicon.png"
			alt="Logo Trois Pet Care"
			class="w-11 h-11 lg:w-12 lg:h-12"
		/>

		{#if innerWidth < 1024}
			<button
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
		{/if}
	</div>
</nav>
