/***
 * Julio Del Valle - Computer Graphics - Costa Rica - 2015
 * juulio.github.io
 */
var fractalBinaryTree = fractalBinaryTree || {};

(function (context) {

    /***
     * Init all required functions
     */
    function init () {
        var canvas = document.getElementById('canvas'),
            ctx = canvas.getContext('2d');

        var drawTree = function (ctx, startX, startY, length, angle, depth, branchWidth) {
            var rand = Math.random,
                newLength,
                newAngle,
                newDepth,
                maxBranch = 4,
                endX, endY,
                maxAngle = 2 * Math.PI / 4,
                subBranches,
                lenShrink;

            // Draw a branch, leaning either to the left or right (depending on angle).
            // First branch (the trunk) is drawn straight up (angle = 1.571 radians)
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            endX = startX + length * Math.cos(angle);
            endY = startY + length * Math.sin(angle);

            // console.log(endX + ' ' + endY);

            ctx.lineCap = 'round';
            ctx.lineWidth = branchWidth;
            ctx.lineTo(endX, endY);

            // If we are near the end branches, make them green to look like leaves.
            if (depth <= 2) {
                ctx.strokeStyle = 'rgb(0,' + (((rand() * 64) + 128) >> 0) + ',0)';
            }
            // Otherwise, choose a random brownish color.
            else {
                ctx.strokeStyle = 'rgb(' + (((rand() * 64) + 64) >> 0) + ',50,25)';
            }

            ctx.stroke();

            // Reduce the branch recursion level.
            newDepth = depth - 1;

            // If the recursion level has reached zero, then the branch grows no more.
            if (!newDepth) {
                return;
            }

            // Make current branch split into a random number of new branches.
            // Add in some random lengths, widths, and angles for a more natural look.
            subBranches = (rand() * (maxBranch - 1)) + 1;

            // Reduce the width of the new branches.
            branchWidth *= 0.7;

            // Recursively call drawTree for the new branches with new values.
            for (var i = 0; i < subBranches; i++) {
                newAngle = angle + rand() * maxAngle - maxAngle * 0.5;
                newLength = length * (0.7 + rand() * 0.3);
                drawTree(ctx, endX, endY, newLength, newAngle, newDepth, branchWidth);
            }
        }

        drawTree(ctx, 320, 470, 70, -Math.PI / 2, 8, 72);
    }

    init();

}(fractalBinaryTree));
