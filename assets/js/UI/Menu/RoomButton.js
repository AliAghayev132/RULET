import TextMod from "../TextMod.js";

class RoomButton {
    initText(textDetailLeft, textDetailRight, pos, size) {
        this.textLeft = new TextMod(
            {
                text: textDetailLeft.text,
                pos: {
                    x: pos.x + 10,
                    y: pos.y + 10,
                },
                size: textDetailLeft.size,
                font: textDetailLeft.font,
                color: textDetailLeft.color,
                align: textDetailLeft.align,
            }
        )
        this.textRight = new TextMod(
            {
                text: textDetailRight.text,
                pos: {
                    x: size.width,
                    y: pos.y + 10,
                },
                size: textDetailRight.size,
                font: textDetailRight.font,
                color: textDetailRight.color,
                align: textDetailRight.align,
            }
        )
    }
    constructor(textDetailLeft, textDetailRight, { pos, size, action, color }) {
        this.initText(textDetailLeft, textDetailRight, pos, size, action);
        this.color = color;
        this.pos = pos;
        this.size = size;
        this.action = action;
    }
    update(mouse) {
        if (
            mouse.x >= this.pos.x &&
            mouse.x <= this.pos.x + this.size.width &&
            mouse.y >= this.pos.y &&
            mouse.y <= this.pos.y + this.size.height &&
            mouse.clicked
        ) {
            if (this.action)
                this.action();
        }
    };
    render(ctx) {
        ctx.strokeStyle = this.color;
        ctx.strokeRect(
            this.pos.x,
            this.pos.y,
            this.size.width,
            this.size.height
        );

        this.textLeft.render(ctx);
        this.textRight.render(ctx);
    }
}

export default RoomButton;