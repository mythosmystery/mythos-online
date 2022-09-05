import { error, type Page } from '@sveltejs/kit';
import fs from 'fs/promises'

export type BlogPage = {
    title: string,
    content: string
}

export async function load({params}: Page): Promise<BlogPage> {
    try {
        return {title: params.slug, content: "Example content"}
    } catch (_) {
        throw error(404, "Blog post not found, I'll get to this one later! :)")
    }
}