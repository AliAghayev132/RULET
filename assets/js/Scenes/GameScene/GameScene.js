import Map from "../../Engine/Map.js";
import Player from "../../Objects/Player.js";
import { roomId, playerId, LOADEDTEXTURES, TEXTURES } from "../../Engine/Variables.js";
import Hud from "../../UI/Hud/Hud.js";
import Scene from "../Scene.js";
import PausePage from "../Pages/PausePage.js";
class GameScene extends Scene {
    initPauseMenu(switchScene,socket) {
        this.pausePage = new PausePage(
            () => this.togglePause(),
            key => switchScene(key),
            socket,
        );
    }
    initVariables() {
        super.initVariables();
        this.players = {};
        this.map = new Map;
        this.pause = false;
    }
    initMap() {
        this.map.addObject("CHAIRANDTABLE", "./assets/img/furniture.png",
            {
                x: Math.floor(this.size.width / 2) - 118,
                y: this.size.height - 68
            },
            {
                width: 236,
                height: 68
            }
        )
    }
    initSokcet() {
        this.socket.off("playerJoined");
        this.socket.on("playerJoined", data => {
            if (data.id !== playerId.value)
                this.initPlayer(data);
        });

        this.socket.off("shooted");
        this.socket.on("shooted", data => {
            this.updatePlayers(data.players);
            this.turn = data.turn;
            if (data.dead) {
                this.players[data.dead].setTexture(LOADEDTEXTURES.deadplayer);
            }
        });

        this.socket.off("reload");
        this.socket.on("reload", data => {
            this.hud.setMagazine(data.magazine);
        });

        this.socket.off("gameOver");
        this.socket.on("gameOver", data => {
            console.log(data);
        });

        this.socket.off("playerDisconnected");
        this.socket.on("playerDisconnected", id => {
            delete this.players[id];
        })
    }
    initPlayer(data) {
        const temp = Object.keys(this.players).length;
        this.players[data.id] = new Player(
            `./assets/img/player${temp}.png`,
            {
                x: 72 + temp * 190,
                y: this.size.height - 108,
            },
            {
                width: 64,
                height: 64
            },
            data.id,
            data.id,
        )
    }
    initHud(magazine) {
        this.hud.initMagazine(magazine);
    }
    constructor(socket,switchScene) {
        super({
            src: TEXTURES.gamebg,
            size: {
                width: 400,
                height: 300,
            }
        }, "music", socket);
        this.initVariables();
        this.initMap();
        this.hud = new Hud(this.size);
        this.turn = null;
        this.hud.initTurnText("Oyuncu Gözlənilir");

        this.initSokcet();

        // "joinRoom" olayını gönder
        this.socket.emit("joinRoom", { room: roomId.value, player: this.socket.id });
        this.socket.on("players", players => {
            for (let player of players) {
                this.initPlayer(player);
            }
        })
        this.socket.on("gameStart", data => this.startGame(data));
        this.initCrosshair({});
        this.initPauseMenu(switchScene,socket);
    }
    shoot(id) {
        this.socket.emit("shoot", {
            room: roomId.value,
            shooter: playerId.value,
            shotted: id,
        });
    }
    updatePlayers(data) {
        console.log(data);
        for (let key of data) {
            this.players[key.id].setHealth(key.health);
        }
    }
    updateSocket() {

    }
    update(mouse, keys, delta) {
        this.updateKeyTimer(delta);
        super.update(mouse);
        this.updateSocket();
        if (
            keys["Escape"] &&
            this.getKeyTime()
        ) {
            this.togglePause();
        }

        if (!this.pause) {
            this.crossHair.setColor("GRAY");
            for (let player in this.players) {
                this.players[player].update(mouse);
                const pos = this.players[player].pos;
                const size = this.players[player].size;
                const id = this.players[player].getData().id;
                if (
                    mouse.x >= pos.x && mouse.x <= pos.x + size.width &&
                    mouse.y >= pos.y && mouse.y <= pos.y + size.height &&
                    playerId.value === this.turn
                ) {
                    this.crossHair.setColor("GREEN");
                    if (id !== playerId.value) this.crossHair.setColor("RED");
                    if (mouse.clicked) this.shoot(id);
                }
            }
        } else {
            this.pausePage.update(mouse);
        }
    }
    startGame(data) {
        const { health, turn, magazine } = data;
        for (let i in this.players) this.players[i].addHealth(health);
        this.turn = turn;
        this.initHud(magazine);
        this.hud.modifyTurnText(turn);
    }
    render(ctx) {
        super.render(ctx);
        this.map.render(ctx);
        for (let key in this.players) this.players[key].render(ctx);
        this.hud.render(ctx);
        if (this.pause) {
            this.pausePage.render(ctx);
        }
        this.crossHair.render(ctx);
    }
    gameOver() {

    }
    togglePause() {
        console.log(this.pause);
        this.pause = !this.pause;
    }
}

export default GameScene;