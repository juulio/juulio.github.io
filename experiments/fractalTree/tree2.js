window.onload = function(){
    var canvas = document.getElementById("treeCanvas"),
        ctx = canvas.getContext("2d"),
        windowWidth = window.innerWidth,
        windowHeight = window.innerHeight;

    canvas.width = windowWidth;
    canvas.height = windowHeight;

    var length, divergence, reduction, line_width, start_points = [];

    init();

    function init(){
        // Fill the canvas white
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, windowWidth, windowHeight);

        // Randomize the Trunk's length 100 - 150
        length = 100 + Math.round(Math.random()*50);

        // Randomize the angle at which branches will diverge 10 - 60
        divergence = 10 + Math.round(Math.random()*50);

        // Every branch will be 0.5 - 0.75 times shorter than the previous one, with two decimal points.
        reduction = Math.round(50 + Math.random()*20)/100;

        // Width of the branch/trunk
        line_width = 10;

        // This is the trunk's endpoint, from where branches will diverge
        var trunk = {
            x : windowWidth/2,
            y : length+50,
            angle : 90
        }

        // The trunk becomes the starting point for branches
        start_points = []; // empty the start_points array on every init();
        start_points.push(trunk);

        ctx.beginPath();
        ctx.moveTo(trunk.x, windowHeight-50);
        ctx.lineTo(trunk.x, windowHeight-trunk.y);
        ctx.strokeStyle = 'brown';
        ctx.lineWidth = line_width;
        ctx.stroke();

        branches();
    }

    function branches(){
        // Reduce line_width and length
        length *= reduction;
        line_width *= reduction;
        ctx.lineWidth = line_width;

        var new_start_points = [];
        ctx.beginPath();

        for(var i=0;i<start_points.length;i++){
            var sp = start_points[i];
            // 2 branches will come out of every start point, hence there will be 2 endpoints.
            // There is a difference in the divergence.
            var ep1 = get_endpoint(sp.x, sp.y, sp.angle+divergence, length);
            var ep2 = get_endpoint(sp.x, sp.y, sp.angle-divergence, length);

            // Draw the branches
            ctx.moveTo(sp.x, windowHeight-sp.y);
            ctx.lineTo(ep1.x, windowHeight-ep1.y);
            ctx.moveTo(sp.x, windowHeight-sp.y);
            ctx.lineTo(ep2.x, windowHeight-ep2.y);

            ep1.angle = sp.angle+divergence;
            ep2.angle = sp.angle-divergence;

            new_start_points.push(ep1);
            new_start_points.push(ep2);
        }

        if(length<10){
            ctx.strokeStyle = 'green';
        }
        else{
            ctx.strokeStyle = 'brown';
        }

        ctx.stroke();

        start_points = new_start_points;

        // if length > 2, do the recursive call
        if(length>2){
            setTimeout(branches, 50);
        }
        else{
            setTimeout(init, 500);
        }
    }

    // This funciont calculates the end points based on vectors.
    function get_endpoint(x, y, a, length) {
        var epx = x + length * Math.cos(a*Math.PI/180);
        var epy = y + length * Math.cos(a*Math.PI/180);

        return {
            x: epx,
            y: epy
        }
    }

}
