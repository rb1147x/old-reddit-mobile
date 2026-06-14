export default class Router {

    constructor() {

    }

    public get_page_type():string {
        const path = location.pathname;

        // front page
        if (path == "/" || path == "") {
            return 'home';
        }

        // subreddit page
        if (path.startsWith("/r/") && !path.includes("/comments")) {
            return "subreddit";
        }

        // post or comments page
        if (path.includes("/comments")) {
            return 'post';
        }

        // search
        if (path.includes('/search')) {
            return 'search';
        }

        return 'other';
    }
}