import { FontLoader, Group, Mesh, MeshPhongMaterial, TextBufferGeometry, Vector3 } from 'three';
import gotham_black_regular from '../../public/fonts/gotham_black_regular.json';

export default class theText {
    /**
     * Loads the JSON font for the text geometry
     */
    constructor(x, y, z) {
        this.origin = new Vector3(x, y, z);
        this.letterMesh = new Mesh();
        this.groupTextMesh = new Group();
        this.letterPosition = 0;
        this.loader = new FontLoader;
        this.font = this.loader.parse(gotham_black_regular);
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
            letterMesh = new Mesh( textGeometry, new MeshPhongMaterial( { color: 0xffffff, flatShading: true } ));
            letterMesh.position.x = i;

            this.groupTextMesh.add( letterMesh)
        }

        // this.groupTextMesh.position.x = -2.4;
        // this.groupTextMesh.position.z = -5;
        // this.groupTextMesh.position.z = 2;

        return this.groupTextMesh;
    }
}