export enum  PageType {
    Home = 'Home',
    Subreddit = 'Subreddit',
    Search = 'Search',
    Post = 'Post',
    Other = 'Other'
}

export interface Subreddit {

}

export interface RedditPost {

    id: string;

    title: string;
    author: string;
    subreddit: string;

    score: number;
    commentCount: number;

    permalink: string;

    thumbnail?: string;

    element: HTMLElement;

}

export interface RedditComment {

    id: string;

    author: string;
    body: string;

    score: number;

    depth: number;

    replies: RedditComment[];

    element: HTMLElement;
    
}