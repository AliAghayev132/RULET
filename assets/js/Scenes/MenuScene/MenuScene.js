import RoomPage from "../Pages/RoomPage.js";
import MainPage from "../Pages/MainPage.js";
import SettingsPage from "../Pages/SettingsPage.js";
import { TEXTURES, LOADEDTEXTURES } from "../../Engine/Variables.js";
import Scene from "../Scene.js";

class MenuScene extends Scene {
    initButtons() {
        this.addButton(
            {
                key: "HEADPHONE",
                size: {
                    width: 32,
                    height: 32
                },
                pos: {
                    x: this.size.width - 36,
                    y: this.size.height - 36,
                },
                text: "",
                font: "",
                font__size: "",
                color: "",
                action: () => {
                    this.toggleMusic();
                    this.buttons["HEADPHONE"].texture = this.music.sound.paused ?
                        LOADEDTEXTURES.muteheadphone :
                        LOADEDTEXTURES.headphone;
                },
                texture: LOADEDTEXTURES.muteheadphone,
            }
        );
    }
    initPages(switchScene) {
        this.pages = {
            "MAIN": new MainPage(
                {
                    size: this.size,
                    socket: this.socket,
                    updatePage: key => this.updatePage(key)
                },
            ),
            "ROOM": new RoomPage(
                {
                    size: this.size,
                    socket: this.socket,
                    switchScene: switchScene,
                    updatePage: key => this.updatePage(key)
                },
            ),
            "SETTINGS": new SettingsPage(
                {
                    size: this.size,
                    updatePage: key => this.updatePage(key)
                },
            ),
        }
        this.currentPage = this.pages.MAIN;
    }
    constructor(socket, switchScene) {
        super({
            src: TEXTURES.menubg,
            size: { width: 400, height: 300 }
        }, "bgmusic.mp3", socket);
        this.initPages(switchScene);
        this.initButtons();
    }
    updatePage(key) {
        this.currentPage = this.pages[key];
    }
    update(mouse) {
        super.update(mouse);
        this.currentPage.update(mouse);
    }
    render(ctx) {
        super.render(ctx);
        this.currentPage.render(ctx);
        this.crossHair.render(ctx);
    }
}
export default MenuScene;