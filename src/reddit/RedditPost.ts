export class RedditPost {

    id: string = '';

    title: string = '';
    author: string = '';
    subreddit: string = '';

    score: number = 0;
    commentCount: number = 0;

    permalink: string = '';

    thumbnail: string = '';

    element: HTMLElement | null = null;

    constructor(element:HTMLElement) {
        this.id = element.id;
        this.title = element.querySelector('.title')?.textContent ?? '';
        this.author = element.querySelector('.author')?.textContent ?? '';
        this.subreddit = element.dataset.subreddit ?? '';
        this.score = Number(element.querySelector('.score.unvoted')?.textContent ?? 0);
        this.element = element;
    }
}