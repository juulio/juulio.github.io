(function($, win, title) {

    function render() {

        title.render();

        requestAnimationFrame(render);
    }

    $(win).ready(function() {

        title.init($('.title'));
        render();
    });

})(this.jQuery, window, window.Title);
