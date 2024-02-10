import { SETTINGS, playerId, roomId } from "../../Engine/Variables.js";
import Page from "../Page.js";
class PausePage extends Page {
    initButtons(togglePause, switchScene, socket) {
        this.addButton(
            {
                key: "EXIT",
                size: {
                    width: 120,
                    height: 30,
                },
                pos: {
                    x: this.pos.x + 15,
                    y: this.pos.y + 20,
                },
                text: "Çıx",
                font: "Arial",
                color: "white",
                font__size: 16,
                action: () => {
                    socket.emit("exitgame", {
                        room: roomId.value,
                        playerId: playerId.value,
                    })
                    switchScene("MAINMENU")
                }
            }
        );
        this.addButton(
            {
                key: "BACK",
                size: {
                    width: 120,
                    height: 30,
                },
                pos: {
                    x: this.pos.x + 15,
                    y: this.pos.y + 70,
                },
                text: "Geri",
                font: "Arial",
                color: "white",
                font__size: 16,
                action: () => togglePause()
            }
        );
    }
    initBackground() { }
    constructor(togglePause, switchScene, socket) {
        super({ size: null, socket: null });
        const window = SETTINGS.screen.size;
        this.size = {
            width: 150,
            height: 120,
        }
        this.pos = {
            x: Math.floor(window.width / 2) - Math.floor(this.size.width / 2),
            y: Math.floor(window.height / 2) - Math.floor(this.size.height / 2),
        }
        this.initButtons(togglePause, switchScene, socket);
    }
    render(ctx) {
        ctx.strokeStyle = "green";
        ctx.fillStyle = "orange";
        ctx.fillRect(
            this.pos.x,
            this.pos.y,
            this.size.width,
            this.size.height,
        )
        super.render(ctx);
    }
}

export default PausePage;