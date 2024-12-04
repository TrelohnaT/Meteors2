export default class KeyboardData {
    constructor() {
        this.space = false;
    }
    getCopy() {
        let tmp = new KeyboardData();
        tmp.space = this.space;
        return tmp;
    }
}
