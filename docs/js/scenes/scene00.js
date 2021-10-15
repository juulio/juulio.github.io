import shaderMaterials from "../main.js";

const scene00 = new THREE.Scene();
const loader = new THREE.FontLoader();

/**
 * Load the JSON font and call init
 */
loader.load('./fonts/gotham_black_regular.json', function(font){
    scene00.add(renderTextMesh(font));
    scene00.add(renderSphereMesh());
});

/**
 *  Loads the JSON font and call
 */
const renderTextMesh = (font) => {
    let theText = "3D text",
        geometry,
        textMesh,
        letterMesh;

//   letterPosition = 0;

    textMesh = new THREE.Group();

    for(let i=0;i<theText.length;i++){
        geometry = new THREE.TextGeometry( theText[i], {
            font: font,
            size: 1.15,
            height: 0.25,
            curveSegments: 20
        });

        geometry.center();

        letterMesh = new THREE.Mesh( geometry, shaderMaterials[i] );

        letterMesh.position.x = i;

        textMesh.add( letterMesh)
    }

    textMesh.position.x = -4;
    textMesh.position.y = 2;

    // if(isMobile){
    //  textMesh.position.y = 3.5;
    // }

  return textMesh;
}


/**
 * 
 */
const renderSphereMesh = () => {
    const geometry = new THREE.SphereGeometry( 1, 32, 16 );
    return new THREE.Mesh( geometry, shaderMaterials[0] );
}

export default scene00;