var boxColor = {
	colorR : 0,
	colorG : 0,
	colorB : 0
};

var targetColor = {
    colorR : 1,
    colorG : 1,
    colorB : 1
};

var tween = new TWEEN.Tween(boxColor).to(targetColor, 3000);

tween.onUpdate(function(){
    console.log(boxColor.colorR);
    console.log(boxColor.colorG);
    console.log(boxColor.colorB);
});

tween.start();

var renderLoop = function(){
    requestAnimationFrame(renderLoop);
    TWEEN.update();
}

renderLoop();
