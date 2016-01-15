/***
 * Julio Del Valle - Computer Graphics - Costa Rica - 2015
 * juulio.github.io
 */
var homePage = homePage || {};

(function (context) {

    /***
     * Global Variables
     */
    vars = {


    };

    /***
     * Init all required functions
     */
    function init () {
        var isHome = document.getElementsByClassName('home');
        if(isHome.length>0) {
            /********************************************************
             Initial code to create and set up the Canvas Element. */
            canvasElements.createCanvasElement('home');
            var canvas = canvasElements.canvas;
        }
    }

    init();

}(homePage));
