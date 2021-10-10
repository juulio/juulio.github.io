const scene00 = new THREE.Scene();
const loader = new THREE.FontLoader();
const shaderMaterials = [];
let uniforms = {
    u_time: { type: "f", value: 1.0 },
    u_resolution: { type: "v2", value: new THREE.Vector2() },
    u_mouse: { type: "v2", value: new THREE.Vector2() }
};

/**
 * Load the JSON font and call init
 */
loader.load('./fonts/gotham_black_regular.json', function(font){
    setupShaderMaterials();
    scene00.add(renderTextGeometry(font));
});

/**
 * Init Uniforms for shaderMaerial
 * TODO: create a shaderMaterial array to use several shaders on several materials
 */
const setupShaderMaterials = () => {
    // uniforms = {
    //     u_time: { type: "f", value: 1.0 },
    //     u_resolution: { type: "v2", value: new THREE.Vector2() },
    //     u_mouse: { type: "v2", value: new THREE.Vector2() }
    // };

    uniforms.u_resolution.value.x = window.innerWidth;
    uniforms.u_resolution.value.y = window.innerHeight;

    shaderMaterials.push(
        new THREE.ShaderMaterial( {
            name: "Voronoi",
            uniforms: uniforms,
            vertexShader: document.getElementById( 'vertexShader' ).textContent,
            fragmentShader: document.getElementById( 'voronoiFragmentShader' ).textContent
        })
    );

    shaderMaterials.push(
        new THREE.ShaderMaterial( {
            name: "Jaguar Texture",
            uniforms: uniforms,
            vertexShader: document.getElementById( 'vertexShader' ).textContent,
            fragmentShader: document.getElementById( 'jaguarFragmentShader' ).textContent
        })
    );

    shaderMaterials.push(
        new THREE.ShaderMaterial( {
            name: "Red Pulse",
            uniforms: uniforms,
            vertexShader: document.getElementById( 'vertexShader' ).textContent,
            fragmentShader: document.getElementById( 'redPulseFragmentShader' ).textContent
        })
    );

    shaderMaterials.push(
        new THREE.ShaderMaterial( {
            name: "Black & White Matrix",
            uniforms: uniforms,
            vertexShader: document.getElementById( 'vertexShader' ).textContent,
            fragmentShader: document.getElementById( 'bwMatrixFragmentShader' ).textContent
        })
    );

    shaderMaterials.push(
        new THREE.ShaderMaterial( {
            name: "Rotated Tiles",
            uniforms: uniforms,
            vertexShader: document.getElementById( 'vertexShader' ).textContent,
            fragmentShader: document.getElementById( 'rotatedTilesFragmentShader' ).textContent
        })
    );

    shaderMaterials.push(
        new THREE.ShaderMaterial( {
            name: "Noise",
            uniforms: uniforms,
            vertexShader: document.getElementById( 'vertexShader' ).textContent,
            fragmentShader: document.getElementById( 'noiseFragmentShader' ).textContent
        })
    );

    shaderMaterials.push(
        new THREE.ShaderMaterial( {
            name: "Simplex Grid",
            uniforms: uniforms,
            vertexShader: document.getElementById( 'vertexShader' ).textContent,
            fragmentShader: document.getElementById( 'simplexGridFragmentShader' ).textContent
        })
    );

    shaderMaterials.push(
        new THREE.ShaderMaterial( {
            name: "Displacement",
            uniforms: uniforms,
            vertexShader: document.getElementById( 'vertexShader' ).textContent,
            fragmentShader: document.getElementById( 'displacementFragmentShader' ).textContent
        })
    );
}

/**
 *  Loads the JSON font and call
 */
const renderTextGeometry = (font) => {
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

// const light = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene01.add( light );

const sceneObject = {
    scene00, uniforms
}
export default sceneObject;