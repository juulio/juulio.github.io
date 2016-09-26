/*
    Author: Sebastian Sanabria Diaz
    Year: 2015
    Twitter: @absulit

*/

var scene,
    camera,
    renderer,
    light,
    cube;

var _originPoint,
    PHI = 1.618,
    _numberOfIterations = 3,
    _fractalLength = 250,
    _fractalDimension = 1 / PHI,
    _depth = 3,
    _deg_to_rad = Math.PI / 180.0;

var container = new THREE.Object3D();

var lineBasicMaterial = new THREE.LineBasicMaterial({color: 0xff0000});

var sphereMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} ),
    sphereGeometry = new THREE.SphereGeometry( 2, 32, 32 );


var resizeViewport = function(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function drawLine(origin, destiny){
    var lineGeometry = new THREE.Geometry();
    var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );

    sphere.position.set(origin.x, origin.y, 0);
    container.add( sphere );

    lineGeometry.vertices.push(new THREE.Vector3(origin.x, origin.y, 0));
    lineGeometry.vertices.push(new THREE.Vector3(destiny.x, destiny.y, 0));
    var line = new THREE.Line(lineGeometry, lineBasicMaterial);

    container.add(line);
}

/*rotate x radians*/
 function polar(len, angle){
    return {x:len * Math.cos(angle), y:len * Math.sin(angle)};
};

function degToRad(angle){
    return Math.PI / 180 * angle;
}

//TODO replace these two functions with fractal Tree code
function recursive(origins, step){
    var currentStep = step || 0,
        origin, tempOrigin,
        newOrigins = [],
        tempOrigins,
        originIndex, tempOriginIndex;

    if (currentStep < _numberOfIterations) {
        for (originIndex in origins) {
            origin = origins[originIndex];

            tempOrigins = drawBranch(origin, origin.angle, _fractalLength / PHI, 30 );
            for (tempOriginIndex in tempOrigins) {
                tempOrigin = tempOrigins[tempOriginIndex];
                newOrigins.push(tempOrigin);
            }
        }
        _fractalLength *= _fractalDimension;
        recursive(newOrigins, ++currentStep);
    }
}

function drawBranch(origin, originAngle, length, angleBranch){
    var endPoints = [],
        rotatedPoint,
        endPoint = {x:0,y:0};


    // right
    var newOrigin = origin;
    rotatedPoint = polar(length, degToRad(angleBranch + originAngle) );
    //endPoint = newOrigin.add(rotatedPoint);
    endPoint.x = newOrigin.x + rotatedPoint.x;
    endPoint.y = newOrigin.y + rotatedPoint.y;
    drawLine(newOrigin, endPoint);
    endPoints.push({x:endPoint.x, y:endPoint.y, angle:angleBranch + originAngle});

    // left
    rotatedPoint = polar(length, degToRad((-1 * angleBranch) + originAngle) );
    //endPoint = newOrigin.add(rotatedPoint);
    endPoint.x = newOrigin.x + rotatedPoint.x;
    endPoint.y = newOrigin.y + rotatedPoint.y;
    drawLine(newOrigin, endPoint);
    endPoints.push({x:endPoint.x, y:endPoint.y, angle:(-1 * angleBranch) + originAngle});

    return endPoints;
}
//------------------------------------------------------------


/******************************
 Set the Tree's variables up */

function drawTree(x1, y1, angle, depth){

    if (depth !== 0){
        depth--;

        var x2 = x1 + (Math.cos(angle * _deg_to_rad) * depth * 5.0);
        var y2 = y1 + (Math.sin(angle * _deg_to_rad) * depth * 6.0);
        drawLine({x1,y1, angle}, {x2, y2, angle});

        drawTree(x2, y2, angle - 10, depth);
        drawTree(x2, y2, angle + 10, depth);
    }
}



//------------------------------------------------------------




function init() {
    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1);
    camera.position.set(0, 0, 560);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    boxGeometry = new THREE.BoxGeometry(1,1,1);
    cube = new THREE.Mesh(boxGeometry, new THREE.MeshLambertMaterial( {color: 0x00ff00} ));
    scene.add(cube);


    // var origins = [{x:0, y:0, angle:0}];
    // // origins.push({x:0, y:0, angle:0});
    // recursive(origins);

    drawTree(0, 0, 0, _depth);

    light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );

    scene.add( light );
    scene.add( container );
    container.rotation.z = Math.PI/2;
    console.log('a');
    window.addEventListener( 'resize', resizeViewport, false );
    document.body.appendChild( renderer.domElement );
}

function update() {
    requestAnimationFrame(update);

    container.rotation.x += .01;
    // container.rotation.y += .01;

    renderer.render(scene, camera);
}

init();
update();
