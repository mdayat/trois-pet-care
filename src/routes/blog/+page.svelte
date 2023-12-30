<script lang="ts">
	import type { ArticleListResult } from "$lib/server/notion";

	export let data: ArticleListResult;

	const loadMoreArticles = () => {
		fetch(`/api/articles?start_cursor=${data.next_cursor}`)
			.then((res) => {
				if (res.status === 500) {
					return;
				}

				return res.json();
			})
			.then((res: ArticleListResult) => {
				for (let i = 0; i < res.articles.length; i++) {
					const liEl = document.createElement("li");
					liEl.textContent = `${res.articles[i].title ?? "-"} ${
						res.articles[i].author ?? "-"
					}`;

					document.getElementById("article-list-container")?.appendChild(liEl);
				}
			});
	};
</script>

<main>
	<ul id="article-list-container">
		{#each data.articles as article}
			<li>{article.title}</li>
		{/each}
	</ul>

	{#if Object.hasOwn(data, "next_cursor")}
		<button type="button" on:click={loadMoreArticles}>
			Lihat lebih banyak
		</button>
	{/if}
</main>
