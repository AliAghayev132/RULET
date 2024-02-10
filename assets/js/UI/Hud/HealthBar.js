import ImageMod from "../../Utils/ImageMod.js";

class HealthBar {
    initTextures() {
        this.texture = new ImageMod(
            {
                src: "./assets/img/heart.png",
                width: 16,
                height: 16
            }
        );
    }
    initHealthBar(health) {
        const offsetX = 6;
        this.hearts = [];
        for (let i = 0; i < health; ++i) {
            this.hearts.push(
                {
                    pos: {
                        x: this.pos.x + offsetX + i * 17,
                        y: this.pos.y - 20
                    }
                }
            )
        }
    }
    constructor(health, pos) {
        this.isRender = false;
        this.pos = pos;
        this.initTextures();
        this.initHealthBar(health, pos);
    }
    setHearths(health) {
        const offsetX = 6;
        this.hearts = [];
        for (let i = 0; i < health; ++i) {
            this.hearts.push(
                {
                    pos: {
                        x: this.pos.x + offsetX + i * 17,
                        y: this.pos.y - 20
                    }
                }
            )
        }
    }
    toggleRender() {
        this.isRender = true;
    }
    render(ctx) {
        if (this.isRender) {
            for (let i = 0; i < this.hearts.length; ++i) {
                ctx.drawImage(
                    this.texture,
                    this.hearts[i].pos.x,
                    this.hearts[i].pos.y,
                    this.texture.width,
                    this.texture.height,
                )
            }
        }
        this.isRender = false;
    }
}
export default HealthBar;