let sc;
let imagesArray = ['./img/01.jpg', './img/02.jpg', './img/03.jpg', './img/04.jpg', './img/05.jpg', './img/06.jpg', './img/07.gif',
 './img/08.gif', './img/09.jpg', './img/10.jpg', './img/11.jpg','./img/12.jpg', './img/13.gif','./img/14.gif','./img/15.jpg',
 './img/16.jpg', './img/17.jpg', './img/18.jpg', './img/19.jpg','./img/20.jpg', './img/21.gif','./img/22.gif','./img/23.jpg',
 './img/24.jpg', './img/25.jpg', './img/26.jpg', './img/27.jpg','./img/28.jpg', './img/29.gif','./img/30.gif','./img/31.jpg',
 './img/32.jpg', './img/33.jpg', './img/34.jpg'];
 
const imagesArrayLength = imagesArray.length;
let isMobileDevice = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
const scContainer = document.getElementById('js--sc--container')
const mainElement = document.getElementsByTagName('main')[0];
let scratchContainerHeight = window.innerHeight;
let scratchContainerWidth = 0;
// const scCanvasElement = document.getElementsByClassName('sc__canvas')[0];

let onWindowResize =  () => {
    newWidth = mainElement.offsetWidth;
    newHeight = mainElement.offsetHeight;
    scContainer.style.width = newWidth + "px";
    scContainer.style.height = newHeight + "px";

    let ctx = sc.canvas.getContext('2d');
    let tempCanvas = document.createElement('canvas');
    let tempContext = tempCanvas.getContext('2d');
    tempCanvas.width = newWidth;
    tempCanvas.height = newHeight;
    tempContext.drawImage(sc.canvas, 0, 0, newWidth, newHeight);

    sc.canvas.width = newWidth;
    sc.canvas.height = newHeight;

    ctx.drawImage(tempCanvas, 0, 0, newWidth, newHeight);
}

window.addEventListener( 'resize', onWindowResize, false );

// pageLoad Dimensions Setup for Desktop Only
if (!isMobileDevice) {
    scratchContainerWidth = mainElement.offsetWidth;
    scContainer.style.width = scratchContainerWidth + "px";
    
    scratchContainerHeight = mainElement.offsetHeight;
    document.getElementsByTagName('body')[0].classList.add('desktop');
}
else {
    scratchContainerWidth = scContainer.offsetWidth;
}
// pageLoad Height for both Desktop and mobile
scContainer.style.height = scratchContainerHeight + "px";

let setupScratchCard = (frontImgSrc, BackgroundImgSrc) => {
    sc = new ScratchCard('#js--sc--container', {
        scratchType: SCRATCH_TYPE.LINE,
        //containerWidth: scContainer.offsetWidth,
        containerWidth: scratchContainerWidth,
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
    let viewportWidth = window.innerWidth,
        screenshotImage = new Image(),
        blendedImage = new Image(),
        base64img = sc.canvas.toDataURL();
    screenshotImage.src = base64img;

    // let blendedImage = document.getElementById('blendedImage');
    let scContainer = document.getElementById('js--sc--container');
    let backImage = scContainer.getElementsByTagName('img')[0];
    let blendedCanvas = document.getElementById('blendedCanvas');
    let blendedCanvasCtx = blendedCanvas.getContext('2d');
    let blendedCanvasWidth;
    // let currentCanvas = scContainer.getElementsByTagName('canvas')[0];

    if (isMobileDevice) {
        blendedCanvasWidth = viewportWidth;
    }
    else {
        blendedCanvasWidth = sc.canvas.width;
    }

    blendedCanvas.width = blendedCanvasWidth;
    blendedCanvas.height = scratchContainerHeight;
    blendedCanvasCtx.drawImage(backImage, 0, 0, blendedCanvasWidth, scratchContainerHeight);

    screenshotImage.onload = function(){
        blendedCanvasCtx.drawImage(screenshotImage, 0, 0, blendedCanvasWidth, scratchContainerHeight);
        blendedImage.src = blendedCanvas.toDataURL();

        blendedImage.onload = function() {
            // Remove current elements before restarting scratch
            sc.canvas.remove();
            backImage.remove();

            // Set Canvas element dimensions
            scratchContainerWidth = Math.floor(mainElement.offsetWidth);
            scratchContainerHeight = mainElement.offsetHeight;

            setupScratchCard(blendedImage.src, getRandomImagePath());
        }
    }
});

let getRandomImagePath = () => {
    const imagesPosition = Math.floor(Math.random() * imagesArrayLength);
    return imagesArray[imagesPosition];
}

// Run the project on pageLoad
setupScratchCard('./img/portada.png', getRandomImagePath(), scratchContainerWidth, scratchContainerHeight);