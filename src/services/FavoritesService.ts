export interface Favorite {
    subreddit: string;
    title: string;
}

export class FavoritesService {

    static load(): Favorite[] {

        let storage = localStorage.getItem("rms-favorites");

        if (storage == null) {
            return [];
        }

        // convert storage string to array
        return JSON.parse(storage);

    }

    static save(favorites: Favorite[]) {

        // reorder alpha
        favorites = favorites.sort((a, b) => {
            if (a.subreddit.toLowerCase() > b.subreddit.toLowerCase()) return 1;
            if (a.subreddit.toLowerCase() < b.subreddit.toLowerCase()) return -1;
            return 0;
        });
        
        let favorites_str = JSON.stringify(favorites);

        localStorage.setItem("rms-favorites", favorites_str);

        console.log(favorites_str);
    }

    static add(favorite: Favorite) {
        
        const favorites = this.load();

        // check duplicates
        if (favorites.some(f => f.subreddit.toLowerCase() == favorite.subreddit.toLowerCase())) {
            return;
        }

        favorites.push(favorite);

        this.save(favorites);

        console.log(`added: ${favorite}`);
    }

    static remove(subreddit: string) {
        
        const favorites = this.load().filter(
            favorite => favorite.subreddit != subreddit
        );

        this.save(favorites);
    }

    static is_favorite(subreddit:string):boolean {
        return this.load().some(
            favorite => favorite.subreddit.toLowerCase() == subreddit.toLowerCase()
        );
    }

    static toggle(favorite:Favorite) {
        if (this.is_favorite(favorite.subreddit)) {
            this.remove(favorite.subreddit);
        }
        else {
            this.add(favorite);
        }
    }
}