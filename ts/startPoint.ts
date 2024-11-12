
import Canvas from "./engine/Canvas.js";

const body: HTMLElement = document.getElementById("mainBody") as HTMLElement;


const starter = function () {
    console.log("startsseraa");
    const canvas: Canvas = new Canvas();
}

window.onload = (e: Event) => {

    starter();
};


