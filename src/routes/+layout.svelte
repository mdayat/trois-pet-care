<script lang="ts">
	import Footer from "$lib/layouts/Footer.svelte";
	import NavigationBar from "$lib/layouts/NavigationBar/index.svelte";
	import "../app.css";
</script>

<NavigationBar />
<slot />
<Footer />
