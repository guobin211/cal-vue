export class Calculator {

    formulaArray;
    constructor() {
        this.formulaArray = [];
    }

    push(val) {

        if (this.formulaArray.length === 0 && ['*', '/'].includes(val)) {
        } else if (['+', '-', '*', '/', '.'].includes(val) && ['+', '-', '*', '/', '.'].includes(this.formulaArray[this.formulaArray.length - 1])) {
        } else {
            this.formulaArray.push(val);
        }
    }

    delete() {
        this.formulaArray.pop();
    }

    reset() {
        this.formulaArray = [];
    }

    getCurrent() {
        let str = '';
        for (let i = 0; i <this.formulaArray.length ; i++) {
            str += this.formulaArray[i];
        }
        return str;
    }

    getShowStr() {
        let str = '';
        for (let i = 0; i < this.formulaArray.length; i++) {
            if (this.formulaArray[i] === '*') {
                str += '&times';
            } else if (this.formulaArray[i] === '/') {
                str += '&divide';
            } else {
                str += this.formulaArray[i];
            }
        }
        return str;
    }

}
