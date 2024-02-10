import GameScene from "../Scenes/GameScene/GameScene.js";
import MenuScene from "../Scenes/MenuScene/MenuScene.js";

class Game {
    initScenes() {
        this.SCENES = {
            "GAME": GameScene,
            "MAINMENU": MenuScene,
        };
    }
    constructor(socket) {
        this.initScenes();
        this.socket = socket;
        this.currentScene = new this.SCENES["MAINMENU"](
            this.socket,
            key => this.switchScene(key),
        );
    }
    switchScene(key) {
        console.log();
        this.currentScene = new this.SCENES[key](
            this.socket,
            key => this.switchScene(key),
        );
    }
    update(mouse, keys, delta) {
        this.currentScene.update(mouse, keys, delta);
    }
    render(ctx) {
        this.currentScene.render(ctx);
    }
}

export default Game;