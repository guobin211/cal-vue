export class Circle {
    id;
    c;
    constructor(id){
        this.id = id;
        const el  =document.getElementById(id);
        console.log(el.getContext('2d'));
    }
    init() {

    }
}
