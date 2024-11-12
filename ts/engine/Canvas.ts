export default class Canvas{
    
    private canvas: HTMLCanvasElement;
    private ctx :CanvasRenderingContext2D;
    
    constructor() {
        this.canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.canvas.width = window.innerWidth - 50;
        this.canvas.height = window.innerHeight - 20;
        

    }


    
}