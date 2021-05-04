let sc, scratchContainerHeight;
let imagesArray = ['./img/01.jpg', './img/02.jpg', './img/03.jpg', './img/04.jpg', './img/05.jpg', './img/06.jpg', './img/07.gif',
 './img/08.gif', './img/09.jpg', './img/10.jpg', './img/11.jpg','./img/12.jpg', './img/13.gif','./img/14.gif','./img/15.jpg',
 './img/16.jpg', './img/17.jpg', './img/18.jpg', './img/19.jpg','./img/20.jpg', './img/21.gif','./img/22.gif','./img/23.jpg',
 './img/24.jpg', './img/25.jpg', './img/26.jpg', './img/27.jpg','./img/28.jpg', './img/29.gif','./img/30.gif','./img/31.jpg',
 './img/32.jpg', './img/33.jpg', './img/34.jpg'];
 
const imagesArrayLength = imagesArray.length;
let isMobileDevice = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
const scContainer = document.getElementById('js--sc--container')

if (isMobileDevice) {
    scContainer.style.height = window.innerHeight + "px";
    scratchContainerHeight = window.innerHeight;
}
else {
    scratchContainerHeight = 900
}

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
        // Remove current elements before restarting scratch
        currentCanvas.remove();
        backImage.remove();

        // setupScratchCard(frontImgSrc, blendedImage.src);
        setupScratchCard(blendedImage.src, getRandomImagePath());
    }
}
});

let getRandomImagePath = () => {
    const imagesPosition = Math.floor(Math.random() * imagesArrayLength);
    return imagesArray[imagesPosition];
}

let preloadImages = ( images ) => {
    for (let i=0; i<imagesArrayLength; i++){
        new Image().src = images[i];
    }
}

// Run the project
preloadImages(imagesArray);
setupScratchCard('./img/portada.png', getRandomImagePath());
