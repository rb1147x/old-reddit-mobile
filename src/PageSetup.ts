import Router from "./Router";
import { styles } from "./styles";

export default class PageSetup {

    constructor() {

        // get page type
        const router = new Router;
        const page_type = router.get_page_type();
        document.body.dataset.page = page_type;

        this.set_css();

        if (page_type == 'home') {
            this.set_sidepanel();
            this.set_viewport_tag();
        }
        
    }

    // set viewport tag
    set_viewport_tag() {
        // set 
        let viewport = document.querySelector(
        'meta[name="viewport"]'
        ) as HTMLMetaElement | null;

        if (!viewport) {
        viewport = document.createElement("meta");
        viewport.name = "viewport";
        document.head.appendChild(viewport);
        }

        viewport.content = "width=device-width, initial-scale=1";
    }

    // set side panel
    set_sidepanel() {
        let side_panel_el = document.querySelector('.side') as HTMLDivElement;

        if (!side_panel_el) return;

        // keep search, but remove the other elements

        let children = Array.from(side_panel_el.children);

        children.slice(1).forEach(child => child.remove());

        //side_panel_el.remove();
    }

    // add css modifiers
    set_css() {
        const style = document.createElement('style');
        style.textContent = styles;
        document.head.append(style);
    }

}
