export function GetPosts() {
    return Object.values(import.meta.glob('../pages/posts/*.md', { eager: true }));
}