<script lang="ts">
	export let title: string;
	export let description: string;
	export let pageURL: string;
	export let imageURL: string;
	export let imageAlt = title;
</script>

<!-- General Open Graph -->
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={pageURL} />
<meta property="og:image" content={imageURL} />
<meta property="og:image:alt" content={imageAlt} />

<!-- Twitter Open Graph -->
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:url" content={pageURL} />
<meta name="twitter:image:src" content={imageURL} />
<meta name="twitter:image:alt" content={imageAlt} />
