import RangeInput from "../../UI/RangeInput.js";
import TextMod from "../../UI/TextMod.js";
import { SETTINGS } from "../../Engine/Variables.js";
import Page from "../Page.js";


class SettingsPage extends Page {
    initVariables() {
        super.initVariables();
        this.rangeInputs = {};
    }
    initRangeInputs() {
        this.rangeInputs["music"] =
            new RangeInput(
                {
                    x: 200,
                    y: 30,
                }
            );

        this.rangeInputs["effects"] =
            new RangeInput(
                {
                    x: 200,
                    y: 60,
                }
            );
    }
    initButtons(updatePage) {
        this.addButton({
            key: "BACK",
            size: {
                width: 80,
                height: 20
            },
            pos: {
                x: 10,
                y: this.size.height - 30,
            },
            color: "white",
            font: "Arial",
            font__size: "14",
            text: "Geri",
            texture: null,
            action: () => updatePage("MAIN")
        })
    }
    initTexts() {
        this.addText({
            key: "music",
            text: "Musiqi səs səviyyəsi",
            pos: {
                x: 50,
                y: 30
            },
            size: 14,
            color: "black",
            baseline: "top",
            align: "left"
        })
        this.addText({
            key: "musicvolume",
            text: this.rangeInputs["music"].value,
            pos: {
                x: 274,
                y: 30
            },
            size: {
                width: 100,
                height: 30
            },
            color: "black",
            baseline: "top",
            align: "left"
        })
        this.addText({
            key: "effects",
            text: "Effekt səs səviyyəsi",
            pos: {
                x: 50,
                y: 60
            },
            size: {
                width: 100,
                height: 30
            },
            color: "black",
            baseline: "top",
            align: "left"
        })
        this.addText({
            key: "effectsvolume",
            text: this.rangeInputs["effects"].value,
            pos: {
                x: 274,
                y: 60
            },
            size: {
                width: 100,
                height: 30
            },
            color: "black",
            baseline: "top",
            align: "left"
        })
    }
    constructor({ size, socket, updatePage }) {
        super({ size, socket })
        this.initVariables();
        this.initButtons(updatePage);
        this.initRangeInputs();
        this.initTexts();
    }
    updateVolume() {
        const music = this.rangeInputs["music"].value;
        const effects = this.rangeInputs["effects"].value;

        this.texts["musicvolume"].setText(music);
        this.texts["effectsvolume"].setText(this.rangeInputs["effects"].value);

        SETTINGS.volume.music = music / 100;
        SETTINGS.volume.effects = effects / 100;
    }
    update(mouse) {
        super.update(mouse);
        for (let i in this.rangeInputs) this.rangeInputs[i].update(mouse);
        this.updateVolume()
    }
    render(ctx) {
        super.render(ctx);
        for (let i in this.rangeInputs) this.rangeInputs[i].render(ctx);
    }
}

export default SettingsPage;