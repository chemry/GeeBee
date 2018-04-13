let log = console.log.bind(console);
let cntInt = 0;
let p = pixelRatio * canvasWidth / orgx;
let gameStart = false;
let gamePause = false;
let score = 0;

let imageFromPath = function(path) {
    let img = new Image();
    img.src = path;
    return img
};

let isIntersect = function (ball, o, change) {
    //log(ball.w, o.w);
    let x = ball.x - (o.x - ball.w);
    let y = ball.y - (o.y - ball.h);
    let mX = o.w + ball.w;
    let mY = o.h + ball.h;

    if(x > 0 && x < mX && y > 0 && y < mY){
        if(change)
            return true;
        let dx, dy, px, py;
        if(x < ball.w){
            dx = -1; px = x;
        } else if (x > o.w){
            dx = 1; px = mX - dx;
        } else {
            dx = 0;
        }
        if(y < ball.h){
            dy = -1; py = y;
        } else if (y > o.h){
            dy = 1; py = mY - dy;
        } else {
            dy = 0;
        }

        ball.setABSBounce(dx, dy);

        if(dx !== 0 && dy !== 0){
            let s = ball.getSpeed();
            ball.setBounce(px / 2, py / 2);
            ball.setSpeed(s);
        }

        cntInt = 1;
        if(o.score){
            score += o.score;
            log(score);
        }
        if(o.fast){
            let s = ball.getSpeed();
            if(s > 8){
                return;
            }
            ball.setSpeed(s * 1.05);
        }
        return true;

    }
    return false;
};