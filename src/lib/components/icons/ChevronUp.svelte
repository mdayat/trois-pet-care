<script lang="ts">
	export let isLayananMenuOpened: boolean;
	export let isCurrentPage: boolean;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 448 512"
	class={`transition-all duration-250 w-4 h-4 ${
		isCurrentPage
			? "fill-primary"
			: "fill-base-content group-hover:fill-primary"
	} ${isLayananMenuOpened ? "" : "rotate-180"}`}
>
	<path
		d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
	/>
</svg>
