import Page from "../Page.js";

class MainMenu extends Page {
    initButtons(updatePage) {
        this.addButton({
            key: "PLAY",
            size: {
                width: 120,
                height: 30
            },
            pos: {
                x: Math.floor(this.size.width / 2) - 60,
                y: 20,
            },
            color: "black",
            font: "Arial",
            font__size: "20",
            text: "Oyna",
            texture: null,
            action: () => updatePage("ROOM")
        })
        this.addButton({
            key: "SETTINGS",
            size: {
                width: 120,
                height: 30
            },
            pos: {
                x: Math.floor(this.size.width / 2) - 60,
                y: 60,
            },
            color: "black",
            font: "Arial",
            font__size: "20",
            text: "Parametrlər",
            texture: null,
            action: () => updatePage("SETTINGS")
        })
    }
    constructor({ size, socket, updatePage }) {
        super({ size, socket });
        this.initButtons(updatePage);
    }
    update(mouse) {
        super.update(mouse);
    }
    render(ctx) {
        super.render(ctx);
    }
}
export default MainMenu;