import { LOADEDTEXTURES } from "../Engine/Variables.js";
class Crosshair {
    initColors() {
        this.COLORS = {
            "IDLE": LOADEDTEXTURES.cursor,
            "GREEN": LOADEDTEXTURES.greencursor,
            "RED": LOADEDTEXTURES.redcursor,
            "GRAY": LOADEDTEXTURES.graycursor,
        }
    }
    constructor(pos) {
        this.initColors();
        this.width = 9.5;
        this.height = 11.5;
        this.currentCursor = this.COLORS["IDLE"];
        this.pos = pos;
    }
    setColor(color) {
        this.currentCursor = this.COLORS[color];
    }
    update(pos) {
        this.pos.x = pos.x
        this.pos.y = pos.y;
    }
    render(ctx) {
        ctx.drawImage(
            this.currentCursor,
            this.pos.x,
            this.pos.y,
            this.width,
            this.height
        )
    }
}

export default Crosshair;