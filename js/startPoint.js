import { Engine } from "./engine/Engine.js";
import MouseHandler from "./engine/MouseHandler.js";
let stillRun = true;
let frames = 0;
let engine = new Engine();
let mouseHandler = new MouseHandler("mouseHandler");
let canvas = document.getElementById("myCanvas");
function starter() {
    console.log("start");
    engine.setUp();
    mainLoop();
}
window.onload = (e) => {
    starter();
};
function mainLoop() {
    //stillRun = engine.update(ctx, canvas.width, canvas.height, mousePoint, events);
    //events = getEmptyEvents();
    engine.update();
    if (stillRun) {
        requestAnimationFrame(mainLoop);
        frames++;
    }
    else {
        //    document.getElementById("playAgainBtn").style.display = "inline";
        return;
    }
}
canvas.onmousemove = function (evt) {
    let rect = canvas.getBoundingClientRect();
    let scaleX = canvas.width / rect.width;
    let scaleY = canvas.height / rect.height;
    mouseHandler.setX((evt.clientX - rect.left) * scaleX);
    mouseHandler.setY((evt.clientY - rect.top) * scaleY);
};
canvas.onmousedown = function (evt) {
    console.log("clcik doune");
    mouseHandler.handleEvent(evt.button, "onmousedown");
};
// we want to see FPS
setInterval(() => {
    let fpsCounter = document.getElementById("fps_counter"); //.innerHTML = frames + " FPS";
    if (fpsCounter !== null) {
        fpsCounter.innerHTML = frames + " FPS";
    }
    frames = 0;
}, 1000);
