import { Engine } from "./engine/Engine.js";
import KeyboardHandler from "./engine/keyboard/KeyboardHandler.js";
import MouseHandler from "./engine/mouse/MouseHandler.js";


let stillRun: boolean = true;
let frames: number = 0;

let engine: Engine = new Engine();

let mouseHandler: MouseHandler = new MouseHandler("mouseHandler");
let keyboardHandler: KeyboardHandler = new KeyboardHandler();
let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;

function starter(): void {
    console.log("start");

    engine.setUp();


    mainLoop();

}

window.onload = (e: Event) => {

    starter();
};

function mainLoop(): void {

    //stillRun = engine.update(ctx, canvas.width, canvas.height, mousePoint, events);

    //events = getEmptyEvents();
    engine.update(mouseHandler.getData(), keyboardHandler.getData());

    if (stillRun) {
        if (frames % 1 == 0) {
            requestAnimationFrame(mainLoop);
        }
        frames++;
    } else {
        //    document.getElementById("playAgainBtn").style.display = "inline";
        return;
    }
}


canvas.onmousemove = function (evt: MouseEvent) {
    let rect = canvas.getBoundingClientRect();
    let scaleX = canvas.width / rect.width;
    let scaleY = canvas.height / rect.height;
    mouseHandler.setX((evt.clientX - rect.left) * scaleX);
    mouseHandler.setY((evt.clientY - rect.top) * scaleY);
}

canvas.onmousedown = function (evt: MouseEvent) {
    mouseHandler.handleEvent(evt.button, MouseHandler.down);
}

canvas.onmouseup = function(evt: MouseEvent) {
    mouseHandler.handleEvent(evt.button, MouseHandler.up);
}

document.onkeydown = function(evt: KeyboardEvent) {
    keyboardHandler.handleEvent(evt.key, KeyboardHandler.down);
}

document.onkeyup = function(evt: KeyboardEvent) {
    keyboardHandler.handleEvent(evt.key, KeyboardHandler.up);
}

// we want to see FPS
setInterval(() => {
    let fpsCounter = document.getElementById("fps_counter");//.innerHTML = frames + " FPS";
    if (fpsCounter !== null) {
        fpsCounter.innerHTML = frames + " FPS";
    }
    frames = 0;
}, 1000)



