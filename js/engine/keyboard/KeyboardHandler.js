import KeyboardData from "./KeyboardData.js";
class KeyboardHandler {
    constructor() {
        this.state = new KeyboardData();
    }
    handleEvent(key, type) {
        if (key == " ") {
            if (type == KeyboardHandler.up) {
                this.state.space = false;
            }
            if (type == KeyboardHandler.down) {
                this.state.space = true;
            }
        }
    }
    getData() {
        return this.state.getCopy();
    }
}
KeyboardHandler.up = "up";
KeyboardHandler.down = "down";
export default KeyboardHandler;
