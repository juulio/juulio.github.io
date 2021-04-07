// https://www.codehim.com/others/create-scratch-card-using-javascript-html5-canvas/
// otro ejemplo https://masth0.github.io/ScratchCard/
// Ejemplo con pixiJS https://pixijs.io/examples/#/demos-advanced/scratchcard.js

const scContainer = document.getElementById('js--sc--container')
const scInfos = document.querySelector('.sc__infos');
const sc = new ScratchCard('#js--sc--container', {
  scratchType: SCRATCH_TYPE.LINE,
  containerWidth: scContainer.offsetWidth,
  containerHeight: 300,
  imageForwardSrc: '/img/snakeSkin.jpg',
  imageBackgroundSrc: '/img/result.png',
  htmlBackground: '',
  clearZoneRadius: 20,
  nPoints: 0,
  pointSize: 0,
  callback: function () {
    alert('Now the window will reload !')
    window.location.reload()
  }
})

// Init
sc.init().then(() => {
  sc.canvas.addEventListener('scratch.move', () => {
    let percent = sc.getPercent().toFixed(0);
    scInfos.innerHTML = percent + '%';
    console.log(percent)
  })
}).catch((error) => {
  // image not loaded
  alert(error.message);
});