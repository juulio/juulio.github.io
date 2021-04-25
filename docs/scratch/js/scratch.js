const scContainer = document.getElementById('js--sc--container')
scContainer.style.height = window.innerHeight + "px";

let sc;
let images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.gif','12.gif', '13.jpg','14.jpg','15.jpg'];

let imagesPosition = 0;
let scratchContainerHeight = window.innerHeight;

let setupScratchCard = (frontImgSrc, BackgroundImgSrc) => {
sc = new ScratchCard('#js--sc--container', {
    scratchType: SCRATCH_TYPE.LINE,
    containerWidth: scContainer.offsetWidth,
    containerHeight: scratchContainerHeight,
    imageForwardSrc: frontImgSrc,
    imageBackgroundSrc: BackgroundImgSrc,
    htmlBackground: '',
    clearZoneRadius: 20,
    nPoints: 0,
    pointSize: 0,
    callback: function () {
    }
})

// Init
sc.init().then(() => {

}).catch((error) => {
    // image not loaded
    // alert(error.message);
});
}

document.getElementById('next').addEventListener('click', () => {
// Take the Canvas' Screenshot and show it on img#screenshotImage
let ctx = sc.canvas.getContext("2d"),
    viewportWidth = window.innerWidth,
    screenshotImage = new Image(),
    blendedImage = new Image(),
    base64img = sc.canvas.toDataURL();
screenshotImage.src = base64img;

// let blendedImage = document.getElementById('blendedImage');
let scContainer = document.getElementById('js--sc--container');
let backImage = scContainer.getElementsByTagName('img')[0];
let blendedCanvas = document.getElementById('blendedCanvas');
let blendedCanvasCtx = blendedCanvas.getContext('2d');
let currentCanvas = scContainer.getElementsByTagName('canvas')[0];

blendedCanvas.width = viewportWidth;
blendedCanvas.height = scratchContainerHeight;
blendedCanvasCtx.drawImage(backImage, 0, 0, viewportWidth, scratchContainerHeight);

screenshotImage.onload = function(){
    blendedCanvasCtx.drawImage(screenshotImage, 0, 0, viewportWidth, scratchContainerHeight);
    blendedImage.src = blendedCanvas.toDataURL();

    blendedImage.onload = function() {
        imagesPosition++;
        if (imagesPosition == images.length) {
            imagesPosition = 0;
        } 
        frontImgSrc = './img/' + images[imagesPosition];
        
        // Remove current elements before restarting scratch
        currentCanvas.remove();
        backImage.remove();

        // setupScratchCard(frontImgSrc, blendedImage.src);
        setupScratchCard(blendedImage.src, frontImgSrc);
    }
}
});

// Run the project
setupScratchCard('./img/portada.jpg', './img/01.jpg');
