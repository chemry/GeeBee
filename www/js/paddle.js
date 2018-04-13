//let p = canvasWidth / 600;
let lBound = 98 * p;
let rBound = 504 * p;

let Paddle = function (img, x, y) {
    let o = {
        img: img,
        speed: 9,
        x: x,
        y: y,
        w: img.width,
        h: img.height
    };


    o.move = function (x) {
        if(x <= lBound){
            x = lBound;
        }
        if(x >= rBound - o.w){
            x = rBound - o.w;
        }
        o.x = x;
    };
    o.moveLeft = function () {
        o.move(o.x - o.speed);

    };
    o.moveRight = function () {
        o.move(o.x + o.speed);

    };
    o.setPosition = function (x, y) {
        //o.x = x;
        o.move(x);
        if(y !== 0) {
            o.y = y;
        }
    };

    return o;
};