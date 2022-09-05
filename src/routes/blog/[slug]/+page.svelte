<script lang="ts">
  import type { BlogPage } from './+page.server'
  export let data: BlogPage
</script>

<h1>{data.title}</h1>
<p>{data.content}</p>
