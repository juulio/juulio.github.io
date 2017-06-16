/* Julio Del Valle
 * 2017
 * Namespace : progress_indicator
 */
let progress_indicator = window.progress_indicator || {};

(function (context) {

    'use strict';

    /**
     * Global Variables
     */
     let tween;

    /**
     * Set all click event handlers
     */
    function setClickEvents(){
        let progressLinkButton = document.getElementById('progressLink'),
            overlayContainer = document.getElementById('overlayContainer');

        // Set click events to show/hide the overlay and start the animation
        progressLinkButton.addEventListener('click', () => {
            overlayContainer.style.display = 'block';
            createTween();
            tween.start();
        }, false);

        overlayContainer.addEventListener('click', () => {
            overlayContainer.style.display = 'none';
        }, false);
    }

    /**
     * Create tween object to animate progress bar width
     * Each time the tween value is updated, the progress bar's width is increased.
     */
    function createTween(){
        let startValue = { value : 0 };
        let endValue = { value : 56 };
        let progressBarElement = document.getElementById('progressBar');
        let progressValue = document.getElementById('progressValue');

        tween = new TWEEN.Tween(startValue)
            .to(endValue, 1500)
            .onUpdate( function () {
                progressBarElement.style.width = this.value + 'px';
                progressValue.innerHTML = Math.round(this.value);
            });
    }

    /**
     * Init all functions and variables
     */
    function init() {

        setClickEvents();

        animate();
    }

    /**
     * Animation loop for progress bar
     */
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }

    init();

}(progress_indicator));
