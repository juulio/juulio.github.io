import shaderMaterials from "../main.js";

const scene00 = new THREE.Scene();
const loader = new THREE.FontLoader();

let noiseTexture = new THREE.TextureLoader().load('./js/textures/cloud.png');
noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping; 

/**
 * Load the JSON font and call init
 */
loader.load('./fonts/gotham_black_regular.json', function(font){
    scene00.add(renderTextMesh(font));
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
            size: 0.65,
            height: 0.2,
            curveSegments: 20
        });

        geometry.center();

        letterMesh = new THREE.Mesh( geometry, shaderMaterials[i] );
        letterMesh.position.x = i;
        textMesh.add( letterMesh)
    }

    textMesh.position.x = -1;
    textMesh.position.y = 3;

    // if(isMobile){
    //  textMesh.position.y = 3.5;
    // }

  return textMesh;
}

export default scene00;