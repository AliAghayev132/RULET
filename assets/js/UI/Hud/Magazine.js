import ImageMod from "../../Utils/ImageMod.js";
class Magazine {
    initTextures(textures) {
        this.textures = {
            FAKE: new ImageMod({ ...textures["FAKE"] }),
            REAL: new ImageMod({ ...textures["REAL"] }),
            BACKGROUND: new ImageMod({ ...textures["BACKGROUND"] }),
        }
    }
    initMagazine(magazine) {
        const pos = {
            x: Math.floor(this.screenSizes.width / 2) - 75,
            y: 50,
        }

        this.magazine = [];
        this.magazine.push({
            texture: this.textures.BACKGROUND, pos
        });
        for (let i = 0; i < magazine.length; ++i) {
            this.magazine.push(
                {
                    texture: this.textures[magazine[i]],
                    pos:
                    {
                        x: pos.x + 14 + i * 12,
                        y: pos.y + 7
                    }
                }
            );
        }
    }
    constructor(textures, screen__sizes, magazine) {
        this.initTextures(textures);
        this.screenSizes = screen__sizes;
        this.initMagazine(magazine);
    }
    setMagazine(magazine) {
        const pos = {
            x: Math.floor(this.screenSizes.width / 2) - 75,
            y: 50,
        }

        this.magazine = [];
        this.magazine.push({
            texture: this.textures.BACKGROUND, pos
        });
        for (let i = 0; i < magazine.length; ++i) {
            this.magazine.push(
                {
                    texture: this.textures[magazine[i]],
                    pos:
                    {
                        x: pos.x + 14 + i * 12,
                        y: pos.y + 7
                    }
                }
            );
        }
    }
    render(ctx) {
        for (let i = 0; i < this.magazine.length; ++i) {
            ctx.drawImage(
                this.magazine[i].texture,
                this.magazine[i].pos.x,
                this.magazine[i].pos.y,
                this.magazine[i].texture.width,
                this.magazine[i].texture.height
            );
        }
    }
}
export default Magazine;