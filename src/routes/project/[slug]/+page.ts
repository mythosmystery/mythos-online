import type { Load } from '@sveltejs/kit'

export const load: Load = async ({ params }) => {
	const data = await import(`../../../assets/projects/${params.slug}.md`)
	return {
		projectName: params.slug,
		content: data.html,
		url: data.attributes.url as string,
		title: data.attributes.title as string
	}
}
