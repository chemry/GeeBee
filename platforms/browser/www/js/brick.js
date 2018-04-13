let x0 = 103;
let y0 = 86;
let x1 = 39;
let x2 = 509;
let y1 = 182;
let dX0 = 50;
let dY0 = 15;
let dX1 = 19;
let dY1 = 35;

let x3 = 39;
let x4 = 524;
let y3 = 392;
let dY3 = 22;

let Brick = function (img, x, y, score) {
    let o = {
        img: img,
        x: x,
        y: y,
        score: score,
        alive: true,
        w: img.width,
        h: img.height
    };


    o.setDie = function () {
        o.alive = false;
    };
    o.setAlive = function () {
        o.alive = true;
    }

    o.isAlive = function () {
        return o.alive;
    }

    return o;
};