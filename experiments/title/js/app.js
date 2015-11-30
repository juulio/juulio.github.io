(function($, win, title) {

    function render() {

        title.render();

        //-- http://css-tricks.com/using-requestanimationframe/
        //-- Runs at 60 frames per second
        requestAnimationFrame(render);
    }

    $(win).ready(function() {
        

        title.init($('.title'));
        render();
    });

})(this.jQuery, window, window.Title);
