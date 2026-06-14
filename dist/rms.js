// ==UserScript==
// @name         Reddit Mobile Test
// @namespace    https://github.com/yourname
// @version      0.0.1
// @description  Modifies old.reddit.com mobile UI
// @match        https://old.reddit.com/*
// @grant        none
// ==/UserScript==
//#region src/styles.ts
var styles = `
    .side {
        float: none;
    }

    .thing .tagline {
        font-size: 16px;
        margin-bottom: 12px;
    }

    .thing li.first {
        font-size: 16px;
    }
`;
//#endregion
//#region src/PageSetup.ts
var PageSetup = class {
	constructor() {
		this.set_viewport_tag();
		this.set_sidepanel();
		this.set_css();
	}
	set_viewport_tag() {
		let viewport = document.querySelector("meta[name=\"viewport\"]");
		if (!viewport) {
			viewport = document.createElement("meta");
			viewport.name = "viewport";
			document.head.appendChild(viewport);
		}
		viewport.content = "width=device-width, initial-scale=1";
	}
	set_sidepanel() {
		let side_panel_el = document.querySelector(".side");
		if (!side_panel_el) return;
		Array.from(side_panel_el.children).slice(1).forEach((child) => child.remove());
	}
	set_css() {
		const style = document.createElement("style");
		style.textContent = styles;
		document.head.append(style);
	}
};
//#endregion
//#region src/ThingElementSetup.ts
var ThingElementSetup = class {
	constructor() {}
};
//#endregion
//#region src/Main.ts
var Main = class {
	constructor() {
		new PageSetup();
		new ThingElementSetup();
	}
};
new Main();
//#endregion
