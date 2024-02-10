class TextMod {
    constructor({ text, pos, size, color = "white", font = "Arial", align = "center", baseline = "middle" }) {
        this.text = text;
        this.size = size;
        this.font = font;
        this.pos = pos;
        this.color = color;
        this.align = align;
        this.baseline = baseline;
    }
    updatePos(pos) {
        this.pos = pos;
    }
    setText(text) {
        this.text = text;
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.font = `${this.size + "px " + this.font}`
        ctx.textAlign = this.align;
        ctx.textBaseline = this.baseline;
        ctx.fillText(
            this.text,
            this.pos.x,
            this.pos.y,
        )
    }
}

export default TextMod;