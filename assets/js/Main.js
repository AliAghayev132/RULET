import Game from "./Engine/Game.js";
import { playerId, SETTINGS } from "./Engine/Variables.js";
import { io } from "https://cdn.socket.io/4.7.4/socket.io.esm.min.js";
const socket = await io("http://localhost:3000/");

//CANVAS
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = SETTINGS.screen.size.width;
canvas.height = SETTINGS.screen.size.height;


//Socket Connection
socket.on("connect", () => {
    playerId.value = socket.id;
});

const keys = {
    "Escape": false,
}
//Game 
const game = new Game(socket);
//Variables
let loaded = false;
let mouse = {
    x: -1,
    y: -1,
    clicked: false,
}
//Events
window.addEventListener("load", () => {
    loaded = true;
})
document.addEventListener("mousemove", e => {
    mouse.x = e.clientX - canvas.getBoundingClientRect().x;
    mouse.y = e.clientY - canvas.getBoundingClientRect().y;

})
document.addEventListener("mousedown", e => {
    mouse.clicked = true;
    mouse.hold = true;
})
document.addEventListener("mouseup", e => {
    mouse.hold = false;
})
document.addEventListener('keydown', e => {
    keys[e.key] = true;
})
document.addEventListener('keyup', e => {
    keys[e.key] = false;
})

let lastTime = performance.now();
//Loop
function animate(currentTime) {
    const delta = currentTime - lastTime;
    lastTime = currentTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update(mouse, keys, delta);
    game.render(ctx);
    window.requestAnimationFrame(animate);
    mouse.clicked = false;
}
window.requestAnimationFrame(animate);


// Socket Disconnection
socket.on("disconnect");