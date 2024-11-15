import Canvas from "./engine/Canvas.js";
import MeteorBuilder from "./entity/meteor/MeteorBuilder.js";
import BasicPoint from "./geometry/point/BasicPoint.js";
let stillRun = true;
let frames = 0;
function starter() {
    console.log("start");
    const canvas = new Canvas();
    let a = new BasicPoint("test", 20, 200);
    let m = new MeteorBuilder("test", new BasicPoint("center", 100, 100))
        .build();
    m.setUp();
    canvas.drawEntity(m);
    canvas.drawPoint(a);
    mainLoop();
}
window.onload = (e) => {
    starter();
};
function mainLoop() {
    //stillRun = engine.update(ctx, canvas.width, canvas.height, mousePoint, events);
    //events = getEmptyEvents();
    if (stillRun) {
        requestAnimationFrame(mainLoop);
        frames++;
    }
    else {
        //    document.getElementById("playAgainBtn").style.display = "inline";
        return;
    }
}
// we want to see FPS
setInterval(() => {
    let fpsCounter = document.getElementById("fps_counter"); //.innerHTML = frames + " FPS";
    if (fpsCounter !== null) {
        fpsCounter.innerHTML = frames + " FPS";
    }
    frames = 0;
}, 1000);
