import { PageType, type RedditComment, type RedditPost, type Subreddit } from "@/DataTypes";

export class RedditData {
    page_type = PageType.Other;

    subreddit: Subreddit | null = null;
    posts: RedditPost[] = [];
    post: RedditPost | null = null;
    comments: RedditComment[] = [];
}