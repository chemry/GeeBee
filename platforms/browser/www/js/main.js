let canvas = document.getElementById("board");
let ctx = canvas.getContext('2d');


let images = {
    brick0: imageFromPath("img/brick/brick0.png"),
    brick1: imageFromPath("img/brick/brick1.png"),
    brick2: imageFromPath("img/brick/brick2.png"),
    paddle: imageFromPath("img/paddle.png"),
    ball: imageFromPath("img/ball.png"),
    hex: imageFromPath("img/hexagon/hexagon.png"),
    hbig: imageFromPath("img/hbig.png"),
    tri0: imageFromPath("img/tri/tri0.png"),
    tri1: imageFromPath("img/tri/tri1.png"),
    tripart: imageFromPath("img/tri/tripart.png"),
    flip: imageFromPath("img/flip.png"),
    flip1: imageFromPath("img/flip1.png"),
    ball0: imageFromPath("img/ball/ball0.png"),
    ball1: imageFromPath("img/ball/ball1.png"),
    ball2: imageFromPath("img/ball/ball2.png"),
    ball3: imageFromPath("img/ball/ball3.png"),
};

let b = Ball(images.ball);
let walls = [];
let paddles = [];
let rPress = false;
let lPress = false;
let bricks = [];
let hexs = [];
let bigHexs = [];
let hexparts = [];
let tris = [];
let triparts = [];


paddles.push(Paddle(images.paddle, 270, 420));
paddles.push(Paddle(images.paddle, 270, 680));
hexs.push(Hexagon(images.hex, 0));
hexs.push(Hexagon(images.hex, 1));
bigHexs.push(BigHex(images.hbig, 0));
bigHexs.push(BigHex(images.hbig, 1));
tris.push(Triangle(images.tri0, 0));
tris.push(Triangle(images.tri1, 1));
triparts.push(TriPart(images.tripart, 0));
triparts.push(TriPart(images.tripart, 1));

let fix = function(){
}

let flip = {
    img: images.flip,
    x: 270,
    y: 283,
};


for (let i = 0; i < 2; i++){
    for (let j = 0; j < 3; j++){
        let path = "img/hexagon/hexpart" + j.toString() + ".png";
        let pImg = imageFromPath(path);
        let p = HexPart(pImg, i, j, 50);
        hexparts.push(p);
    }

}

for(let i = 0; i < 14; i++){
    let path = "img/wall/wall" + i.toString() + '.png';
    //log(path);
    let wImg = imageFromPath(path);
    let w = Wall(wImg, i);
    walls.push(w);
}

for(let i = 0; i < 8; i++){ //8
    for(let j = 0; j < 4; j++){
        let b = new Brick(images.brick0, x0 + i * dX0, y0 + j * dY0, 10);
        bricks.push(b);
    }
}

for (let i = 0; i < 3; i++){//3
    for (let j = 0; j < 5; j++){//5
        let b = new Brick(images.brick1, x1 + i * dX1, y1 + j * dY1, 20);
        bricks.push(b);
        b = new Brick(images.brick1, x2 + i * dX1, y1 + j * dY1, 20);
        bricks.push(b);
    }
}


for (let j = 0; j < 5; j++){//5
    let b = new Brick(images.brick2, x3, y3 + j * dY3, 100);
    bricks.push(b);
    b = new Brick(images.brick2, x4, y3 + j * dY3, 100);
    bricks.push(b);
}



b.setSpeed(5.00);
/*document.querySelector('#input-speed').addEventListener('input', function (event) {
   let input = event.target;
   let num = Number(input.value);
   num = (Math.log(num + 15) - 0.8) * 1.5;
   //log(num);
   b.setSpeed(num);
});*/

window.addEventListener('keydown', function (event) {
   //log(event.keyCode);
   let key = event.keyCode;
   if(gameStart && (key === 37 || key === 65)) {
       lPress = true;
   } else if (gameStart && (key === 39 || key === 68)){
       rPress = true;
   } else if (!gameStart && key === 83){
       //start();
   }


});

window.addEventListener('keyup', function (event) {
    //log(event.keyCode);
    let key = event.keyCode;
    if(gameStart && (key === 37 || key === 65)) {
        lPress = false;
    } else if (gameStart && (key === 39 || key === 68)){
        rPress = false;
    }
});

/*window.addEventListener('mousemove', function (event) {
    if(!gameStart || gamePause) return;
    let relativeX = event.clientX - canvas.offsetLeft;
    let p = canvasWidth / orgx;
    let pWidth = images.paddle.width * p;


    //if (relativeX > lBound && relativeX + pWidth < rBound) {
    paddles[0].setPosition(relativeX, 0);
    paddles[1].setPosition(relativeX, 0);

    //}
});*/

window.addEventListener('touchmove', function (event) {
    if(!gameStart || gamePause) return;
    let relativeX = event.clientX - canvas.offsetLeft;
    let relativeY = event.clientY - canvas.offsetTop;
    if(relativeY > canvasHeight + 30) return;
    //let p = canvasWidth / orgx;
    let pWidth = images.paddle.width * p;

    relativeX = relativeX * pixelRatio;
    //if (relativeX > lBound && relativeX + pWidth < rBound) {
    paddles[0].setPosition(relativeX, 0);
    paddles[1].setPosition(relativeX, 0);
    //log(event);
    //}
});

window.addEventListener('touchstart', function(event){
    //log(event);
})

window.addEventListener('touchdown', function(event){
    //log(event);
})

window.addEventListener('touchend', function(event){
    //log(event);
})

let drawImage = function (o) {
    let orgx = 600;
    //let p = canvasWidth / orgx;
    //console.log(canvasWidth, orgx, p)
    if(!o.hasSet){
        o.x = o.x * p;
        o.y = o.y * p;
        if(o.speedX){
            //log("ball:", o.x, o.y);
        }
        //log("draw Image:", o.x, o.y);
        o.hasSet = 1;
    }

    if(!o.hasSetImg){
        o.w = o.img.width * p;
        o.h = o.img.height * p;
        //console.log("set image:",o.w, p, o.img.width, o.img.height, o.img);
        if(o.img.width !== 0 && o.img.height !== 0){
            o.hasSetImg = 1;
        }
    }

    ctx.drawImage(o.img, o.x, o.y, o.img.width * p, o.img.height * p);
};
window.setInterval(function(){
    //console.log(img1);
}, 1000)

let showBig = [0, 0];

let draw = function () {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //let p = canvasWidth / orgx;
    if(!gameStart){
        let fontsize = 23 * p;
        ctx.font= fontsize + "px Verdana";
        //log("drawing");
        ctx.fillStyle = "#FFFFFF";

        ctx.fillText(ErrMessage, 220 * p, 482 * p);
        ctx.fillText("Press the Start Button to Start a New Game!", 44 * p, 552 * p);
    } else {
        let fontsize = 20 * p;
        let fontsize1 = 25 * p;
        ctx.font = fontsize1 + "px Verdana";
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("Time Left: " + time.toString(), 40 * p, 25 * p);
        ctx.fillText("Lives: " + lives.toString(), 260 * p, 25 * p);
        ctx.fillText("Score: " + score.toString(), 400 * p, 25 * p);
        if(gamePause){
            ctx.font=fontsize + "px Verdana";
            //log("drawing");
            ctx.fillStyle = "#FFFFFF";
            ctx.fillText("You Died, wait " + cd.toString() + " seconds to respawn", 120 * p, 482 * p);
        }
    }

    drawImage(b);
    for(let i = 0; i < 14; i++){
        drawImage(walls[i]);
    }
    //drawImage(paddles[0]);
    drawImage(paddles[1]);
    drawImage(hexs[0]);
    drawImage(hexs[1]);
    drawImage(tris[0]);
    drawImage(tris[1]);
    drawImage(triparts[1]);
    drawImage(flip);

    for(let i = 0; i < hexparts.length; i++){
        drawImage(hexparts[i]);
    }

    for(let i = 0; i < 2; i++){
        drawImage(triparts[i]);
    }
    //ctx.drawImage(images.flip, 270, 283);

    for(let i = 0; i < 2; i++){
        if(showBig[i] > 0){
            drawImage(bigHexs[i]);
            showBig[i]--;
        }
    }

    for(let i = 0; i < bricks.length; i++){
        if(bricks[i].isAlive()) {
            drawImage(bricks[i]);
        }
    }


};

let update = function () {
    if(!gameStart || gamePause){
        return;
    }


    b.move();
    if(b.x < 0 || b.x > canvas.width){
        b.setBounce(-1, 1);
    }
    if(b.y < 0) {
        b.setBounce(1, -1);
    }
    if(b.y >= canvas.height){
        die();
    }

    if(rPress){
        paddles[0].moveRight();
        paddles[1].moveRight();
    }
    if(lPress){
        paddles[0].moveLeft();
        paddles[1].moveLeft();
    }
    if(cntInt) {
        b.fix();
        cntInt = 0;
    }

    for(let i = 0; i < 14; i++){
        if(isIntersect(b, walls[i])){
            return;
        }
    }

    for(let i = 0; i < hexparts.length; i++){
        if(isIntersect(b, hexparts[i])){
            let t = hexparts[i].getPart();
            //log(t);
            showBig[t] = 5;
            return;
        }
    }

    for(let i = 0; i < 2; i++){
        if(isIntersect(b, triparts[i])){
            return;
        }

    }
    for(let i = 1; i < 2; i++){
        let p = paddles[i];
        if (isIntersect(b, p)) {
            let l = p.img.width / 2;
            let dx = b.x - p.x;
            dx = dx - l;
            dx /= 15;
            //log(dx);

            let s = b.getSpeed();
            b.speedX += dx;

            b.setSpeed(s);
            return;
        }
    }

    for(let i = 0; i < bricks.length; i++){
        if(!bricks[i].isAlive()){
            continue;
        }
        if(isIntersect(b, bricks[i])){
            bricks[i].setDie();
            return;
        }

    }


};

let isWin = function () {

    for(let i = 0; i < bricks.length; i++){
        if(bricks[i].isAlive()){
            return false;
        }
    }
    return true;
};



game();