import ImageMod from "../Utils/ImageMod.js";

export const roomId = {
    value: "room1",
};
export const playerId = {
    value: null,
}
export const SETTINGS = {
    screen: {
        size: {
            width: 400,
            height: 300,
        },
        fullscreen: false,
    },
    volume: {
        music: 0.3,
        effects: 0.3
    }
}

export const TEXTURES = {
    gamebg: "./assets/img/background.png",
    menubg: "./assets/img/mainmenubg.png",
    range: "./assets/img/range.png",
    rangeinput: "./assets/img/rangeInput.png",
    player: "./assets/img/player.png",
}

export const LOADEDTEXTURES = {
    headphone: new ImageMod({
        src: "./assets/img/headphone.png",
        width: 32,
        height: 32,
    }),
    muteheadphone: new ImageMod({
        src: "./assets/img/muteheadphone.png",
        width: 32,
        height: 32,
    }),
    cursor: new ImageMod({
        src: "./assets/img/cursor.png",
        width: 17,
        height: 23,
    }),
    redcursor: new ImageMod({
        src: "./assets/img/redcursor.png",
        width: 17,
        height: 23,
    }),
    graycursor: new ImageMod({
        src: "./assets/img/graycursor.png",
        width: 17,
        height: 23,
    }),
    greencursor: new ImageMod({
        src: "./assets/img/greencursor.png",
        width: 17,
        height: 23,
    }),
    deadplayer: new ImageMod({
        src: "./assets/img/deadplayer.png",
        width: 17,
        height: 23,
    }),
} 