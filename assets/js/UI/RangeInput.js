import Sprite from "../Objects/Sprite.js";
import { TEXTURES } from "../Engine/Variables.js";
class RangeInput {
    initVariables() {
        this.hold = false;
        this.sprites = {};
        this.value = 10;
    }
    initSprites() {
        this.sprites["RANGEINPUT"] = new Sprite(
            TEXTURES.rangeinput,
            {
                x: this.pos.x,
                y: this.pos.y,
            },
            this.size
        );
        this.sprites["RANGE"] = new Sprite(
            TEXTURES.range,
            {
                x: this.pos.x + (Math.ceil(this.value * this.size.width / 100)),
                y: this.pos.y,
            },
            {
                width: 3,
                height: 12,
            }
        );
    }

    constructor(pos, value) {
        this.pos = pos;
        this.size = {
            width: 64,
            height: 13
        }
        this.initVariables();
        this.initSprites();
    }

    update(mouse) {
        if (
            mouse.x >= this.pos.x && mouse.x <= this.pos.x + this.size.width &&
            mouse.y >= this.pos.y && mouse.y <= this.pos.y + this.size.height &&
            mouse.clicked
        ) {
            this.hold = true;
        }

        if (!mouse.hold)
            this.hold = false;
        else if (this.hold) {
            this.sprites["RANGE"].pos.x = mouse.x;

            if (mouse.x < this.pos.x)
                this.sprites["RANGE"].pos.x = this.pos.x;
            else if (mouse.x > this.pos.x + this.size.width)
                this.sprites["RANGE"].pos.x = this.pos.x + this.size.width;

            this.calculate();
        }
    }
    calculate() {
        const x = this.sprites["RANGE"].pos.x - this.pos.x;
        const y = this.size.width;
        this.value = Math.floor(x * 100 / y);
    }
    render(ctx) {
        for (let i in this.sprites) {
            this.sprites[i].render(ctx);
        }
    }
}

export default RangeInput;