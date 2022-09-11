import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ params }) => {
    const {html} = await import(`../../../assets/projects/${params.slug}.md`)
    return { projectName: params.slug, content: html }
  }