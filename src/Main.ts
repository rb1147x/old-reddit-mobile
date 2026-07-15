import { createApp } from 'vue'
import App from './App.vue'
import { Parser } from './reddit/Parser.ts';
import css from "./styles/global.css?inline";

export class Main {


    constructor() {
        this.init();
    }

    init() {
        this.setup_global_css();

        this.hide_reddit();

        const root = this.setup_root();

        const data = Parser.parse_reddit();

        this.mount_vue(root, data);
    }

    setup_global_css() {
        const style = document.createElement('style');
        style.textContent = css;

        document.head.appendChild(style);
    }

    setup_root():HTMLDivElement {
        const root = document.createElement('div');
        root.id = 'rms-root';

        document.body.prepend(root);

        return root;
    }

    hide_reddit() {
        const ignored = [
            "rms-root"
        ];

        const children = Array.from(document.body.children);

        for (let child of children) {
            if (!ignored.includes(child.id)) {
                child.classList.add("rms-hidden");
            }
        }
    }

    mount_vue(root: HTMLElement, data?: any) {
        
        createApp(App, {
            data
        }).mount(root);
    }
}

new Main();
