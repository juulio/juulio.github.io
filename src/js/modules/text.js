import { FontLoader, Group, Mesh, MeshBasicMaterial, TextBufferGeometry, Vector3 } from 'three';
import gotham_black_regular from '../../public/fonts/gotham_black_regular.json';

export default class theText {
    /**
     * Loads the JSON font for the text geometry
     */
    constructor(theText, x, y, z) {
        this.origin = new Vector3(x, y, z);
        this.letterMesh = new Mesh();
        this.groupTextMesh = new Group();
        this.letterPosition = 0;
        this.loader = new FontLoader;
        this.font = this.loader.parse(gotham_black_regular);

        return this.render3dText(theText);
    }

    render3dText(theText) {
        let letterMesh,
            textGeometry;

        for(let i=0;i<theText.length;i++){
            textGeometry = new TextBufferGeometry( theText[i], {
                font: this.font,
                size: 1,
                height: 0.25,
                curveSegments: 20
            });

            textGeometry.center();

            // letterMesh = new THREE.Mesh( textGeometry, new THREE.MeshBasicMaterial({wireframe: true, color : 0xFF0000}) );
            // letterMesh = new THREE.Mesh( textGeometry, new THREE.MeshNormalMaterial());
            // letterMesh = new THREE.Mesh( textGeometry, shaderMaterial);
            letterMesh = new Mesh( textGeometry, new MeshBasicMaterial( { color: 0xffffff, flatShading: true } ));
            letterMesh.position.x = i;

            this.groupTextMesh.add( letterMesh)
        }

        this.groupTextMesh.position.x = this.origin.x;
        this.groupTextMesh.position.y = this.origin.y;
        this.groupTextMesh.position.z = this.origin.z;
        return this.groupTextMesh;
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