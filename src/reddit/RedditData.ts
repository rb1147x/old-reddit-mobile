import { PageType, type Subreddit } from "@/DataTypes";
import type { RedditPost } from "./RedditPost";
import type { RedditComment } from "./RedditComment";

export class RedditData {
    page_type = PageType.Other;

    subreddit: Subreddit | null = null;
    posts: RedditPost[] = [];
    post: RedditPost | null = null;
    comments: RedditComment[] = [];
}