import { PageType } from "@/DataTypes";
import { Page } from "./Page";
import { RedditData } from "./RedditData";
import { RedditPost } from "./RedditPost";

export class Parser {

    constructor() {

    }

    static parse():RedditData {

        switch (Page.page_type) {
            case PageType.Home:
                return Parser.parse_home();
                break;

            case PageType.Subreddit:
                Parser.parse_subreddit();
                break;

            case PageType.Post:
                Parser.parse_post();
                break;

            case PageType.Search:
                Parser.parse_search();
                break;

            default:
                throw new Error('Unsupported pager type');
        }

        return new RedditData();

    }

    static parse_home():RedditData {

        const data = new RedditData();
        data.page_type = PageType.Home;

        // grab all things
        const things = Array.from(document.querySelectorAll<HTMLElement>('.thing'));

        // things are posts
        const posts:RedditPost[] = [];

        for (let thing of things) {
            /* const title = thing.querySelector('a.title');
            console.log(title?.textContent); */

            const post:RedditPost = new RedditPost(thing);

            posts.push(post);

        }

        data.posts = posts;

        return data;

    }

    static parse_subreddit() {

    }

    static parse_post() {

    }

    static parse_search() {

    }
}