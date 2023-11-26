declare module "@/shared/api/articles" {
    export function fetchArticles(): Promise<any[]>;
    export function getArticles(): Promise<any[]>;
}
