export class RedditComment {
    id: string = '';

    author: string = '';
    body: string = '';

    score: number = 0;

    depth: number = 0;

    replies: RedditComment[] = [];

    element: HTMLElement | null = null;

    constructor(element:HTMLElement) {
        this.element = element;
        this.id = element.id;
        this.body = element.querySelector('')?.textContent ?? '';
        this.score = Number(element.querySelector('.score')?.textContent);
    }
}