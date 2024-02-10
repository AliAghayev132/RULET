class Button {
    // Box
    // Size,Pos,Color
    // Text
    // Text, Color, Font Size, Font Family, 
    constructor({ size, pos, font = "", font__size, text, color, texture, action }) {
        this.size = size;
        this.pos = pos;
        this.color = color;
        this.font = font;
        this.font__size = font__size;
        this.text = text;
        this.texture = texture
        this.action = action;
    }
    clicked(mouse) {
        if (
            mouse.x >= this.pos.x &&
            mouse.x <= this.pos.x + this.size.width &&
            mouse.y >= this.pos.y &&
            mouse.y <= this.pos.y + this.size.height &&
            mouse.clicked
        ) {
            if (this.action) {
                this.action();
            }
        }
    }
    update(mouse) {
        this.clicked(mouse);
    }
    render(ctx) {
        ctx.strokeStyle = this.texture ? "transparent" : "white";
        ctx.strokeRect(
            this.pos.x,
            this.pos.y,
            this.size.width,
            this.size.height
        );

        if (this.texture) {
            ctx.drawImage(
                this.texture,
                this.pos.x,
                this.pos.y,
                this.texture.width,
                this.texture.height
            );
        }
        ctx.fillStyle = this.color;
        ctx.font = `${this.font__size}px ${this.font}`;
        ctx.textAlign = "center";
        ctx.textBaseline = 'middle';
        ctx.fillText(
            this.text,
            this.pos.x + Math.floor(this.size.width / 2),
            this.pos.y + Math.floor(this.size.height / 2),
        )
    }
}
export default Button;