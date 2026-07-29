export class RedditUtils {

     static get_current_subreddit():string | null {
    
        const parsed = new URL(window.location.href);

        const match = parsed.pathname.match(/^\/r\/([^\/]+)/);

        if (!match) {
            return null;
        }

        if (!match[1]) return null;

        return match[1];
    }

    static watch_url_changes(callback: () => void) {

        /* const original_push_state = history.pushState;
        const original_replace_state = history.replaceState;

        history.pushState = function (...args) {
            original_push_state.apply(this, args);
            callback();
        };

        history.replaceState = function (...args) {
            original_replace_state.apply(this, args);
            callback();
        };

        window.addEventListener("popstate", callback); */

        let current_url = window.location.href;

        const interval = setInterval(() => {
            if (window.location.href !== current_url) {
                current_url = window.location.href;
                callback();
            }
        }, 250);

        return () => {
            clearInterval(interval);
        };
    }

    static fix_reddit_search_location() {
        const container = document.querySelector('reddit-search-small');
        const el = container?.shadowRoot?.children[1] as HTMLElement;

        el.style.marginTop = '44px';
    }
}