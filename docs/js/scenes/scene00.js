/**
 *  Loads the JSON font and call
 */
function renderTextGeometry(font){
  let theText = "3D text",
  letterMesh;

  letterPosition = 0;

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

  if(isMobile){
      textMesh.position.y = 3.5;
  }

  return textMesh;
}

const scene01 = new THREE.Scene();
const geometry = new THREE.SphereGeometry( 2, 32, 16 );
const material = new THREE.MeshLambertMaterial( { color: 0xff0000 } );
const sphere = new THREE.Mesh( geometry, material );
scene01.add( sphere );

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene01.add( light );

export default scene01;