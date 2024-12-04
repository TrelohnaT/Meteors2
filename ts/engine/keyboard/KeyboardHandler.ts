import KeyboardData from "./KeyboardData.js";



export default class KeyboardHandler {

    private state: KeyboardData = new KeyboardData();

    public static up: string = "up";
    public static down: string = "down";
    constructor() {

    }

    handleEvent(key: string, type:string) {
        if(key == " ") {
            
            if(type == KeyboardHandler.up) {
                this.state.space = false;
            }
            if(type == KeyboardHandler.down) {
                this.state.space = true;
            }

        }


    }

    getData() :KeyboardData {
        return this.state.getCopy();
    }



}


