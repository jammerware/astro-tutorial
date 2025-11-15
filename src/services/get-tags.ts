import { GetPosts } from "./get-posts";

export function GetTags(): any[] {
    const posts = GetPosts();
    const allTagsFlat = posts.map((p: any) => p.frontmatter.tags).flat();
    return [...new Set(allTagsFlat)].sort();
}