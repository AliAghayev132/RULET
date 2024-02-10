import ImageMod from "../Utils/ImageMod.js";
class Sprite {
    constructor(texture, pos, size) {
        this.pos = pos;
        this.size = size;
        this.sprite = new ImageMod({
            src: texture,
            width: size.width,
            height: size.height
        })
    }
    setTexture(texture) {
        this.sprite = texture;
    }
    render(ctx) {
        ctx.drawImage(
            this.sprite,
            this.pos.x,
            this.pos.y,
            this.size.width,
            this.size.height,
        )
    }
}

export default Sprite;