import Button from "../UI/Button.js";
import TextMod from "../UI/TextMod.js";

class Page {
    initVariables() {
        this.buttons = {};
        this.texts = {};
    }
    constructor({ size, socket }) {
        this.size = size;
        this.socket = socket;
        this.initVariables();
    }
    addButton({
        key,
        size,
        pos,
        color,
        font,
        font__size,
        text,
        texture,
        action
    }) {
        this.buttons[key] = new Button({
            size,
            pos,
            font,
            font__size,
            text,
            color,
            texture,
            action
        })
    }
    addText({ key, text, pos, size, color, baseline, align }) {
        this.texts[key] = new TextMod(
            {
                text,
                pos,
                size,
                color,
                baseline,
                align
            }
        )
    }
    update(mouse) {
        for (let i in this.buttons)
            this.buttons[i].update(mouse);
    }
    render(ctx) {
        for (let i in this.buttons)
            this.buttons[i].render(ctx);

        for (let i in this.texts)
            this.texts[i].render(ctx);
    }
}

export default Page;