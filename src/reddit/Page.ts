import { PageType } from "../DataTypes";

export class Page {

    static instance: Page = new Page();

    static page_type: PageType;

    set_page_type() {

        const pathname = window.location.pathname;

        if (pathname == '/' || pathname == '') {
            // home
            Page.page_type = PageType.Home;
        }
        else if (pathname.startsWith('/r/')) {
            // subreddit
            Page.page_type = PageType.Subreddit;
        }
        else if (pathname.includes('/comments/')) {
            Page.page_type = PageType.Post;
        }
        else if (pathname.includes('/search')) {
            Page.page_type = PageType.Search;
        }
        else {
            Page.page_type = PageType.Other;
        }
    }
}