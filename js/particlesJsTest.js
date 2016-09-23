/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '../js/canvasExperiments/particles.json', function() {
  console.log('callback - particles.js config loaded');
  var e = document.querySelector('.particles-js-canvas-el');
  e.style.background = '#000000';
});
