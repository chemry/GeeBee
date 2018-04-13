let game = function () {
    if(isWin()){
        end();
        ErrMessage = "You Win!";
    }

    update();
    draw();
    requestAnimationFrame(game);
};
