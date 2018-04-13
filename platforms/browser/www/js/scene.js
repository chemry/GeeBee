let int;
let dint;
let ballInitX = canvasWidth / 2 * pixelRatio;
let ballInitY = canvasHeight * 0.8 * pixelRatio;
let paddleInitX = (canvasWidth / 2) * pixelRatio;
let curBall;


const gameTime = 120;
let time = gameTime;
let ErrMessage = "";
let lives = 3;
let start = function () {
    log("start?");
    score = 0;
    for(let i = 0; i < bricks.length; i++){
        bricks[i].setAlive();
    }
    b.reloadImage(curBall);
    b.setPosition(ballInitX, ballInitY);
    b.set(2, -4);
    
    paddles[0].x = paddles[1].x = paddleInitX;

    gameStart = true;
    gamePause = false;
    lives = 3;
    int = window.setInterval(function(){endTimer();}, 1000);
};

let endTimer = function () {
    time -= 1;
    if(time === 0){
        end();
    }
    ErrMessage = "TIME OUT!"
};

let end = function () {
    document.getElementById("end-button").style.display = 'none';
    document.getElementById("start-button").style.display = 'block';
    gameStart = false;
    rPress = false;
    lPress = false;
    int = window.clearInterval(int);
    time = gameTime;
    ErrMessage = "Game Over";
};
let cd = 3;

let die = function () {
    if(lives === 0){
        end();
    }
    lives -= 1;
    cd = 3;
    dint = window.setInterval(function(){dieTimer();} , 1000);
    b.setPosition(ballInitX, ballInitY);
    b.set(2, -4);
    b.setSpeed(b.getSpeed() * 0.85);
    paddles[0].x = paddles[1].x = paddleInitX;
    gamePause = true;
};

let dieTimer = function () {
    cd -= 1;
    if(cd === 0){
        dint = window.clearInterval(dint);
        gamePause = false;
    }
};