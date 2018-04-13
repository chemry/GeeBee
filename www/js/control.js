/*let leftArrow = document.getElementById('img1');
leftArrow.addEventListener("click", function(){
	log("left clicked");
}, false)

let rightArrow = document.getElementById('img2');
rightArrow.addEventListener("click", function(){
	log("right clicked");
}, false)*/



let selectBall0 = document.getElementById('ball0');
selectBall0.addEventListener("click", function(){
	if(gameStart) return;
	curBall = images.ball0;
	select(selectBall0, 0);
	log("ball0");
}, false);

let selectBall1 = document.getElementById('ball1');
selectBall1.addEventListener("click", function(){
	if(gameStart) return;
	curBall = images.ball1;
	select(selectBall1, 1);
	log("ball1");
}, false);

let selectBall2 = document.getElementById('ball2');
selectBall2.addEventListener("click", function(){
	if(gameStart) return;
	curBall = images.ball2;
	select(selectBall2, 2);
	log("ball2");
}, false);

let selectBall3 = document.getElementById('ball3');
selectBall3.addEventListener("click", function(){
	if(gameStart) return;
	curBall = images.ball3;
	select(selectBall3, 3);
	log("ball3");
}, false);

let select = function(ball, i){
	selectBall0.src = "img/select/ball0.png";
	selectBall1.src = "img/select/ball1.png";
	selectBall2.src = "img/select/ball2.png";
	selectBall3.src = "img/select/ball3.png";
	ball.src = "img/select/ball" + i + "-select.png";
}

startButton.addEventListener("click", function(){
	document.getElementById("end-button").style.display = 'block';
	document.getElementById("start-button").style.display = 'none';
})

endButton.addEventListener("click", function(){
	document.getElementById("end-button").style.display = 'none';
	document.getElementById("start-button").style.display = 'block';
})