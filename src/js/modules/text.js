import { Clock, DoubleSide, FontLoader, Group, Mesh, MeshBasicMaterial, MeshPhongMaterial, NearestFilter, ShaderMaterial, TextBufferGeometry, TextureLoader, Vector3 } from 'three';
import gotham_black_regular from '../../public/fonts/gotham_black_regular.json';

import cloudTileAsset from '../../public/images/textures/snow-512.jpg';
import textVertexShader from '../../public/shaders/textVertexShader.glsl';
import textFragmentShader from '../../public/shaders/textFragmentShader.glsl';

export default class theText {
    /**
     * Loads the JSON font for the text geometry
     */
    constructor(theText, x, y, z) {
        this.origin = new Vector3(x, y, z);
        this.theText = theText;
        this.letterMesh = new Mesh();
        this.groupTextMesh = new Group();
        this.letterPosition = 0;
        this.loader = new FontLoader;
        this.font = this.loader.parse(gotham_black_regular);
        this.shaderMaterial;
    }

    init(scene) {
        let letterMesh,
            textGeometry;

        this.clock = new Clock();

        const texture = new TextureLoader().load(cloudTileAsset, (texture) => {
            texture.minFilter = NearestFilter;
        });
        
        this.shaderMaterial = new ShaderMaterial({
            vertexShader: textVertexShader,
            fragmentShader: textFragmentShader,
            uniforms: {
                uTime: { value: 0},
                uTexture: { value: texture}
            },
            transparent: true,
            side: DoubleSide
        });

        for(let i=0;i<this.theText.length;i++){
            textGeometry = new TextBufferGeometry( this.theText[i], {
                font: this.font,
                size: 1,
                height: 0.25,
                curveSegments: 20
            });

            textGeometry.center();

            // letterMesh = new THREE.Mesh( textGeometry, new THREE.MeshNormalMaterial());
            // letterMesh = new THREE.Mesh( textGeometry, shaderMaterial);
            // letterMesh = new Mesh( textGeometry, new MeshBasicMaterial( { color: 0xffffff, flatShading: true } ));


            
            // letterMesh = new Mesh( textGeometry, this.shaderMaterial);
            letterMesh = new Mesh( textGeometry, 
                new MeshPhongMaterial( { 
                    color: 0x996633,
                    specular: 0x050505,
                    shininess: 100
                } ) 
                );
            letterMesh.position.x = i;

            this.groupTextMesh.add( letterMesh)
        }

        this.groupTextMesh.position.x = this.origin.x;
        this.groupTextMesh.position.y = this.origin.y;
        this.groupTextMesh.position.z = this.origin.z;
        scene.add(this.groupTextMesh);
    }

    updateTimeUniform() {
        this.shaderMaterial.uniforms.uTime.value = this.clock.getElapsedTime();
    }

    /**
     * Rotates each letter on the Y Axis
     */
    rotateLetters() {
        let rotationSpeed = 0.3,
        currentLetterRotationY = textMesh.children[letterPosition].rotation.y;

        // Rotate Current Letter on the Y Axis
        textMesh.children[letterPosition].rotation.y += rotationSpeed;

        if(textMesh.children[letterPosition].rotation.y >= 6.28) {
            letterPosition++;
        }

        if(letterPosition < textMesh.children.length-1) {
            if(currentLetterRotationY >= 2) {
                textMesh.children[letterPosition + 1].rotation.y += rotationSpeed;
            }
        }
    }
}