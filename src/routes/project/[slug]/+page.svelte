<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div class="container">
	<div class="markdown">{@html data.content}</div>
	<iframe src={data.url} title={data.projectName} class="project-frame" />
</div>

<style>
	.project-frame {
		margin-top: 3rem;
		height: 80vh;
		width: 80vw;
		border: 3px dashed var(--text-color);
	}

	.container {
		margin: 5rem 10vw;
	}

	.markdown {
		list-style-position: inside;
	}
</style>
