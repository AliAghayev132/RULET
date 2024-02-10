import { roomId } from "../../Engine/Variables.js";
import RoomButton from "../../UI/Menu/RoomButton.js";
import Page from "../Page.js";

class RoomPage extends Page {
    initVariables() {
        super.initVariables();
        this.roomButtons = [];
    }
    initSockets() {
        this.socket.on("rooms", rooms => this.addRooms(rooms))
    }
    initButtons(updatePage) {
        this.addButton(
            {
                key: "BACK",
                size: {
                    width: 80,
                    height: 20
                },
                pos: {
                    x: 10,
                    y: this.size.height - 30
                },
                text: "Geri",
                color: "white",
                font__size: "14",
                font: "Arial",
                texture: null,
                action: () => updatePage("MAIN")
            }
        )
    }
    addRooms(rooms) {
        this.roomButtons = [];
        const keys = Object.keys(rooms);
        for (let i = 0; i < keys.length; ++i) {
            this.roomButtons.push(
                new RoomButton(
                    {
                        text: keys[i],
                        font: "Arial",
                        color: "white",
                        align: "left",
                    },
                    {
                        text: rooms[keys[i]].players.length + "/2",
                        font: "Arial",
                        color: "white",
                        align: "right",
                    },
                    {
                        pos: {
                            x: 10,
                            y: 10 + this.roomButtons.length * 30,
                        },
                        size: {
                            width: this.size.width - 20,
                            height: 20,
                        },
                        action: () => {
                            if (rooms[keys[i]].players.length < 2) {
                                roomId.value = keys[i];
                                this.switchScene("GAME")
                            }
                        }
                    }
                )
            );
        }
    }
    constructor({ size, socket, switchScene, updatePage }) {
        super({ size, socket });
        this.switchScene = switchScene;
        this.initSockets();
        this.initVariables();
        this.initButtons(updatePage);
    }
    update(mouse) {
        super.update(mouse);
        for (let b of this.roomButtons) b.update(mouse);
    }
    render(ctx) {
        super.render(ctx);
        for (let b of this.roomButtons) b.render(ctx);
    }
}

export default RoomPage;