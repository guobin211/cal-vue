export class Tools {
    static isNumber(str){
        const regPos = /^\d+(\.\d+)?$/;
        const regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
        return regPos.test(str) || regNeg.test(str);
    }
}
