export class MyCanvas {
    id;
    c;
    h;
    constructor(id) {
        this.id = id;
        const el = document.getElementById(id);
        this.h = el.scrollHeight;
        this.c = el.getContext('2d');
    }

    init() {
        this.c.beginPath();
        const g = this.c.createLinearGradient(0,110,250,110);
        g.addColorStop(0 , '#00a6f5');
        g.addColorStop(1 , '#00d0f5');
        this.c.fillStyle = g;
        this.c.fillRect(0, 0, window.innerWidth, this.h);
        this.c.closePath();
    }

}
