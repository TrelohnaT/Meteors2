
import Canvas from "./engine/Canvas.js";
import BasicPoint from "./geometry/BasicPoint.js";


let stillRun: boolean = true;
let frames: number = 0;
function starter():void {
    console.log("start");
    const canvas: Canvas = new Canvas();

    let a = new BasicPoint("test", 20, 200, "#ff0000");

    canvas.drawPoint(a);

    mainLoop();

}

window.onload = (e: Event) => {

    starter();
};


function mainLoop():void {

    //stillRun = engine.update(ctx, canvas.width, canvas.height, mousePoint, events);

    //events = getEmptyEvents();

    if (stillRun) {
        requestAnimationFrame(mainLoop);
        frames++;
    } else {
    //    document.getElementById("playAgainBtn").style.display = "inline";
        return;
    }
}

// we want to see FPS
setInterval(() => {
    let fpsCounter = document.getElementById("fps_counter");//.innerHTML = frames + " FPS";
    if(fpsCounter !== null) {
        fpsCounter.innerHTML = frames + " FPS";
    }
    frames = 0;
}, 1000)



