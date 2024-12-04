import KeyboardData from "../keyboard/KeyboardData";
import MouseData from "../mouse/MouseData";

export default class UpdateInputContainer {

    maxX: number;
    maxY: number;

    mouseData: MouseData;
    keyboardData: KeyboardData;

    constructor(
        maxX: number,
        maxY: number,
        mouseData: MouseData,
        keyboardData: KeyboardData
    ) {
        this.maxX = maxX;
        this.maxY = maxY;
        this.mouseData = mouseData;
        this.keyboardData = keyboardData;
    }

}

