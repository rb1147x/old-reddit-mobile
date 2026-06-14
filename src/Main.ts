import PageSetup from "./PageSetup";
import ThingElementSetup from "./ThingElementSetup";

export default class Main {

    constructor() {

        new PageSetup();
        new ThingElementSetup();
    }
}

new Main();
