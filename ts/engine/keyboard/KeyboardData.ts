

export default class KeyboardData {

    space :boolean = false;

    constructor() {
    }

    getCopy() :KeyboardData {
        let tmp = new KeyboardData();
        tmp.space = this.space;
        return tmp;
    }

}
