// https://www.codehim.com/others/create-scratch-card-using-javascript-html5-canvas/
// otro ejemplo https://masth0.github.io/ScratchCard/
// Ejemplo con pixiJS https://pixijs.io/examples/#/demos-advanced/scratchcard.js

// Global Variables
const scContainer = document.getElementById('js--sc--container')
const scInfos = document.querySelector('.sc__infos');
let sc;
let images = ['madc_01.jpg', 'madc_02.jpg', 'madc_03.jpg', 'madc_04.jpg', 'madc_05.jpg', 'madc_06.jpg', 'madc_07.gif', 'madc_08.gif', 'madc_09.gif'];
let imagesPosition = 0;
let scratchContainerHeight = window.innerHeight;

// Setup and init all ScratchCard functionality
let setupScratchCard = (frontImgSrc, BackgroundImgSrc) => {
  sc = new ScratchCard('#js--sc--container', {
    scratchType: SCRATCH_TYPE.LINE,
    containerWidth: scContainer.offsetWidth,
    containerHeight: scratchContainerHeight,
    imageForwardSrc: frontImgSrc,
    imageBackgroundSrc: BackgroundImgSrc,
    htmlBackground: '',
    clearZoneRadius: 220,
    nPoints: 0,
    pointSize: 0,
    callback: function () {
      alert('Now the window will reload !')
      // window.location.reload()
    }
  })
  
  // Init
  sc.init().then(() => {
    // sc.canvas.style.backgroundImage = 'url(./img/snakeSkin.jpg)';
    // sc.canvas.style.backgroundImage = canvasBG;
    sc.canvas.addEventListener('scratch.move', () => {
      let percent = sc.getPercent().toFixed(0);
      scInfos.innerHTML = percent + '%';
      // console.log(percent)
    })
  }).catch((error) => {
    // image not loaded
    alert(error.message);
  });
}

// Screenshot Button
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

  // // blendedCanvasCtx.globalAlpha = 0.5
  blendedCanvas.width = viewportWidth;
  blendedCanvas.height = scratchContainerHeight;
  blendedCanvasCtx.drawImage(backImage, 0, 0);
  // blendedCanvasCtx.globalAlpha = 0.5
  screenshotImage.onload = function(){
    blendedCanvasCtx.drawImage(screenshotImage, 0, 0);
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
// Animated gif image only works on the BackgroundImgSrc parameter
// setupScratchCard = (frontImgSrc, BackgroundImgSrc)
setupScratchCard('./img/madc_01.jpg', './img/madc_02.jpg');