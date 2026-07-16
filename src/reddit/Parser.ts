import { PageType, type RedditPost } from "@/DataTypes";
import { Page } from "./Page";
import { RedditData } from "./RedditData";

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

    static parse_home() {

        const data = new RedditData();
        data.page_type = PageType.Home;

        // grab all things
        const things = Array.from(document.querySelectorAll<HTMLElement>('.thing'));

        // things are posts
        const posts:RedditPost[] = [];

        for (let thing of things) {
            /* const title = thing.querySelector('a.title');
            console.log(title?.textContent); */

            const post: RedditPost = {
                id: thing.id,
                title: thing.querySelector('a.title')?.textContent?.trim() ?? '',
                author: thing.querySelector('.author')?.textContent?.trim() ?? '',
                subreddit: thing.dataset.subreddit ?? '',
                score:Number(thing.querySelector('.score.unvoted')?.textContent ?? 0),
                commentCount: 0,
                permalink: '',
                element: thing as HTMLElement
            };

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