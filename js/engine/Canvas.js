export default class Canvas {
    constructor() {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth - 50;
        this.canvas.height = window.innerHeight - 20;
    }
}
