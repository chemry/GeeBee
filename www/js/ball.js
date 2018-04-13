let cntTrap = 0;

let Ball = function (img) {
    let o = {
        img: img,
        speedX: 2,
        speedY: -4,
        x: 200,
        y: 200,
        w: img.width,
        h: img.height
    };

    o.setBounce = function (x, y) { // bouncing with different angle
        o.speedX = o.speedX * x;
        o.speedY = o.speedY * y;
    };

    o.setSpeed = function (x) {
        let curSpeed = o.getSpeed();
        //curSpeed = Math.sqrt(curSpeed);
        let ratio = x / curSpeed;
        o.setBounce(ratio, ratio);
    };

    o.set = function (x, y) {
        o.speedX = x;
        o.speedY = y;
    };

    o.getSpeed = function () {
        return Math.sqrt(o.speedY * o.speedY + o.speedX * o.speedX);
    };

    o.setABSBounce = function (x, y) {
        let absX = Math.abs(o.speedX);
        let absY = Math.abs(o.speedY);
        if(x !== 0){o.speedX = x * absX;}
        if(y !== 0){o.speedY = y * absY;}
    };
    o.move = function () {
        o.x += o.speedX;
        o.y += o.speedY;
    };
    o.fix = function () {
        let d = Math.abs(o.speedX) - Math.abs(o.speedY);
        if(Math.abs(d) > 1){
            let s = o.getSpeed();
            if(o.speedX > 0) {
                o.speedX -= d / 7;
            } else {
                o.speedX += d / 7;
            }
            //log(d);
            o.setSpeed(s);
        }
        let r = Math.abs(o.speedX / o.speedY);
        if(r > 10 || r < 0.1){
            cntTrap++;
            if(cntTrap < 2) return;
            cntTrap = 0;
            let s = o.getSpeed();
            if(o.speedX > 0) {
                o.speedX -= d / 4;
                o.speedY += d / 4;
            } else {
                o.speedX += d / 4;
                o.speedY -= d / 4;
            }
            //log(d);
            o.setSpeed(s);
        }
    };

    o.setPosition = function (x, y) {
        log("set postion!", x, y);
        o.x = x;
        o.y = y;
    };

    o.reloadImage = function(img){
        if(!img) return;
        o.img = img;
        log("image reloaded!");
    };

    return o;
};