import Sound from "../Engine/Audio/Sound.js";
import { SETTINGS } from "../Engine/Variables.js";
import Sprite from "../Objects/Sprite.js";
import Button from "../UI/Button.js";
import Crosshair from "../UI/Crosshair.js";

class Scene {
    initCrosshair() {
        this.crossHair = new Crosshair({
            x: this.size.width / 2,
            y: this.size.height / 2,
        })
    }
    initVariables() {
        this.buttons = {};
        this.timer = 200;
        this.keyTimer = this.timer;
    }
    initBackground(texture) {
        const { src, size } = texture;
        this.background = new Sprite(src, { x: 0, y: 0 }, size);
    }
    initMusic(music) {
        this.music = new Sound("assets/audio/" + music, SETTINGS.volume.music);
    }
    constructor(texture, music, socket) {
        this.size = SETTINGS.screen.size;
        this.socket = socket;

        this.initVariables();
        this.initCrosshair();
        this.initMusic(music);
        this.initBackground(texture);
    }
    addButton({ key, size, pos, text, font, font__size, color, action, texture }) {
        this.buttons[key] = (new Button(
            { size, pos, text, font, font__size, color, action, texture }
        ));
    }
    toggleMusic() {
        this.music.sound.paused ? this.music.play() : this.music.pause()
    }
    updateKeyTimer(delta) {
        if (this.keyTimer >= this.timer) {
            this.keyTimer = this.timer;
        }
        else
            this.keyTimer += delta;
    }
    getKeyTime() {
        if (this.keyTimer >= this.timer) {
            this.keyTimer = 0
            return true;
        }
        return false;
    }
    update(mouse) {
        this.music.update(SETTINGS.volume.music);

        this.crossHair.update(mouse);
        for (let i in this.buttons) {
            this.buttons[i].update(mouse);
        }
    }
    render(ctx) {
        if (this.background) this.background.render(ctx);
        for (let i in this.buttons) {
            this.buttons[i].render(ctx);
        }
        this.crossHair.render(ctx);
    }
}

export default Scene;