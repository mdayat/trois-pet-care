<script lang="ts">
	export let isLayananMenuOpened: boolean;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 448 512"
	class={`fill-neutral-50 w-4 h-4  ${
		isLayananMenuOpened ? "" : "rotate-180"
	} transition-all duration-250`}
>
	<path
		d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
	/>
</svg>
