import Magazine from "./Magazine.js";
import TextMod from "../TextMod.js";
class Hud {
    initMagazine(magazine) {
        this.magazineHud =
            new Magazine(
                {
                    FAKE: {
                        src: "./assets/img/fake.png",
                        width: 16,
                        height: 16,
                    },
                    REAL: {
                        src: "./assets/img/real.png",
                        width: 16,
                        height: 16,
                    },
                    BACKGROUND: {
                        src: "./assets/img/magazinebg.png",
                        width: 150,
                        height: 30,
                    },
                },
                {
                    width: this.size.width,
                    height: this.size.height
                },
                magazine,
            )
    };
    initTurnText(text) {
        this.turnText = new TextMod({
            text,
            pos: {
                x: Math.floor(this.size.width / 2),
                y: 20,
            },
            size: 16,
            color: "white",
            font: "Arial",
            align: "center",
        });
    }
    constructor(size) {
        this.size = size;
        this.healthBarHud = [];
        this.buttons = [];
    }
    modifyTurnText(text) {
        this.turnText.setText(text);
    }
    setMagazine(magazine) {
        this.magazineHud.setMagazine(magazine);
    }
    update(mouse) {

    }
    render(ctx) {
        if (this.magazineHud) this.magazineHud.render(ctx);
        if (this.turnText) this.turnText.render(ctx);
        if (this.crosshair) this.crosshair.render(ctx);
    };
}
export default Hud;